# https://www.bootcdn.cn/

## react特点
```
1.虚拟DOM: React也是以数据驱动的，每次数据变化React都会扫码整个虚拟DOM树，自动计算与上次虚拟DOM的差异变化，然后针对需要变化的部分进行实际的浏览器DOM更新。
2.组件化： React可以从功能角度横向划分，将UI分解成不同组件，各组件都独立封装，整个UI是由一个个小组件构成的一个大组件，每个组件只关系自身的逻辑，彼此独立。
3.单项数据流：React设计者认为数据双向绑定虽然便捷，但在复杂场景下副作用也是很明显，所以React更倾向于单向的数据流动-从父节点传递到子节点。（使用ReactLink也可以实现双向绑定，但不建议使用）
```
### 一、创建一个新的APP
```
$sudo npm install -g create-react-app
$sudo create-react-app my-app
$cd my-app
$npm start
```
npm 5.2.0以以上版本的话
```
$npx create-react-app my-app
$cd my-app
$npm start
```
### 二、第二种创建APP的方法【generator-react-webpack】
##### 需要yeoman
```
$ sudo npm install -g yo
$ sudo npm install -g generator-react-webpack
$ cd dir
$ yo react-webpack
$ npm start
```
### 三、webpack一步一步构建【01】

```
$mkdir react-webpack
$cd react-webpack
$npm init -y
$npm install webpack --save-dev
```
##### 新建 webpack.config.js

```
const path = require('path')
module.exports={
    // 入口文件
    entry: './app/index.js',
    // 出口文件
    output:{
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist')
    }
}
```
##### 修改package.json文件

```
{
  "name": "webpack-react",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "webpack"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "webpack": "^4.25.1",
    "webpack-cli": "^3.1.2"
  }
}
```
##### 新建 app/index.js

```
function component(){
    var element = document.createElement('div')
    element.innerHTML = ('hello jspang')
    return element

}
document.body.appendChild(component())
```
#### 打包

```
$npm run build
```
#### 配置服务
```
$npm install webpack-dev-server --save-dev

```
##### 修改webpack.config.js

```
const path = require('path')
module.exports={
    // 入口文件
    entry: './app/index.js',
    // 出口文件
    output:{
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist')
    },
    // 配置服务
    devServer:{
        contentBase: './',
        host: 'localhost',
        compress: true, // 压缩
        port: 8083
    }
}
```
##### 修改package.json文件

```
"scripts": {
    "build": "webpack",
    "server": "webpack-dev-server --open"
  }
```
#### 启动服务

```
#### $npm run server
```
#### 配置自动更新 
##### 修改webpack.config.js

```
output:{
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'temp/'   // 配置公共路径直接指向内存文件temp
}
```
##### 修改index.html

```
<script src="./temp/index.js"></script>
```
#### 重启服务 【调试 app/index.js 查看结果】 

```
$npm run server
```
#### 安装babel

```
$npm install babel-core babel-loader@7 babel-preset-es2015 babel-preset-react --save-dev
```
##### 配置babel 【修改webpack.config.js】

```
const path = require('path')
module.exports={
    // 入口文件
    entry: './app/index.js',
    // 出口文件
    output:{
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'temp/'   // 配置公共路径直接指向内存文件temp
    },
    // 配置服务
    devServer:{
        contentBase: './',
        host: 'localhost',
        compress: true, // 压缩
        port: 6789
    },
    // 配置babel
    module:{
        rules:[{
            test:/\.js$/,
            exclude:/node_modules/,
            loader:"babel-loader",
            query:{
                presets:['es2015','react']
            }
        }]
    }
}
```
#### 重启服务 【调试 app/index.js 查看结果】 

```
$npm run server
```
#### 安装react

```
$npm install react react-dom --save
```
##### 修改index.html

```
<body>
    <div id="app"></div>
</body>
```