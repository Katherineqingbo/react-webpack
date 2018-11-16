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