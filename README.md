# tsheep-cli
## 前记
为了打造高集成的脚手架，目前已经集成 t-tsheep init、t-tsheep lint、t-tsheep install、t-tsheep commit，下面会依次说明这些命令的功能。
## 如何使用
### 克隆项目
```
git clone https://github.com/luo29/tsheep-cli.git
```
### 进入项目
```
cd tsheep-cli
```
### 下载依赖
```
npm i
```
### 本地命令链接
```
cd packages/cli
npm link
```
## 命令说明
- **t-tsheep init**，可下载 `Vue`、`React18`、`vue-element-admin`三种模板。（注：三个模板被我放到了后端服务里面，后端使用egg.js+mongoDB搭建，后端代码还没上传）
- **t-tsheep install**，可选择github\gitee仓库，根据搜索关键字查看到搜索到的项目仓库，选择拉取仓库并下载依赖。（注：需要去git平台上拿到自己的token）.
- **t-tsheep lint**，进行eslint语法检查，jest+macha自动化测试. 
- **t-tsheep commit**，自定创建git平台上的远程仓库，本地仓库和远程仓库建立链接.