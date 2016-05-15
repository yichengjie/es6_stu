var webpack = require('webpack');
//var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var path = require('path') ;
var rootPath = path.resolve('./src') ;
module.exports = {
    //插件项
    //plugins: [commonsPlugin],
    //页面入口文件配置
    entry: {
        index : './src/js/demo02.js'
    },
    //入口文件输出配置
    output: {
        path: 'dist/js',
        filename: '[name].js'
    },
    module: {
        //加载器配置
        loaders: [
            {
                test: /\.js$/,
                loaders: [ 'babel' ],
                exclude: /node_modules/,
                include: __dirname
            },
        ]
    },
    //其它解决方案配置
    resolve: {
        root: rootPath, //绝对路径
        extensions: ['', '.js', '.json', '.scss'],
    }
};