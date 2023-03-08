const Client = require('ssh2').Client;
const fs = require('fs');
const path = require('path');

// SSH connection settings
const connSettings = {
    host: 'your-server-hostname',
    port: 22,
    username: 'your-username',
    password: 'your-password'
};

// Local and remote file paths
const localBuildPath = path.join(__dirname, 'build');
const remoteProjectPath = '/path/to/remote/project';

const conn = new Client();
conn.on('ready', function() {
    console.log('Client :: ready');

    // Create a new directory for the project
    conn.exec(`mkdir -p ${remoteProjectPath}`, function(err, stream) {
        if (err) throw err;

        // Upload build folder to remote server
        conn.sftp(function(err, sftp) {
            if (err) throw err;
            const files = fs.readdirSync(localBuildPath);
            files.forEach(function(file) {
                const readStream = fs.createReadStream(path.join(localBuildPath, file));
                const writeStream = sftp.createWriteStream(path.join(remoteProjectPath, file));
                writeStream.on('close', function () {
                    console.log(`File ${file} transferred to remote server`);
                });
                readStream.pipe(writeStream);
            });

            // Restart the application using pm2
            conn.exec(`cd ${remoteProjectPath} && pm2 restart app`, function(err, stream) {
                if (err) throw err;
                stream.on('close', function(code, signal) {
                    console.log('Stream :: close :: code: ' + code + ', signal: ' + signal);
                    conn.end();
                }).on('data', function(data) {
                    console.log('STDOUT: ' + data);
                }).stderr.on('data', function(data) {
                    console.log('STDERR: ' + data);
                });
            });
        });
    });
}).connect(connSettings);