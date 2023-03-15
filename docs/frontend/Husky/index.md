# Husky 使用

## 安装
```
    yarn add husky -D
```
## 设置预安装
```dotnetcli
npm pkg set scripts.prepare="husky install"
npm run prepare
```

## 创建脚本
```dotnetcli
npx husky add .husky/pre-commit "npm test"
git add .husky/pre-commit
```
> 脚本需要设置成可执行文件,例如：
```
  chmod +x .husky/pre-push
```
