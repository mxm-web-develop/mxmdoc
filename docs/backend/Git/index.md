# Git 常用命令

- 初始化 Git 仓库：
    ```
    git init
    ```

- 克隆现有仓库:
    ```
    git clone <url>
    ```

- 添加文件到暂存区：
    ```
   git add <file> // . 代表全部
    ```

- 添加文件到暂存区：
    ```
    git commit -m "commit message"
    ```

- 查看当前仓库状态：
    ```
    git status
    ```

- 查看文件差异：
    ```
    git diff
    ```

- 查看提交历史：
    ```
    git log
    git log <branchname>
    git log <file>
    ```

- 推送本地仓库到远程仓库：
    ```
    git push <remote> <branch>
    ```

- 拉取远程仓库更新到本地仓库：
    ```
    git pull <remote> <branch>
    ```

- 创建新分支：
    ```
    git branch <branchname>

- 查看分支：
    ```
    git branch
    git branch -r //远程
    git branch -a //全部
    ```    

- 切换分支：
    ```
    git checkout <branchname>
    ```

- 在当前分支合并其他分支
    ```
    git merge <branchname>
    ```

- 查看远程仓库信息：
    ```
    git remote -v
    ```

- 从当前分支删除指定分支：
    ```
    git branch -d <branchname> // -D 为强制删除
    ```

- 创建一个轻量级标签：
    ```
    git tag <tagname>
    git tag -a <tagname> -m "tag message"
    ```

- 删除本地标签：
    ```
    git tag <tagname>
    git tag -a <tagname> -m "tag message"
    ```

- 将所有标签推送到远程仓库：
    ```
    git push --tags
    ```

- 删除远程分支：
    ```
    git push <remote> --delete <branchname>
    
    git push <remote> --delete tag <tagname>
    ```