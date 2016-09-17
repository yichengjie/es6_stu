var webpack = require('webpack');
//var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var path = require('path') ;
var rootPath = path.resolve('./src') ;
module.exports = {
    //插件项
    //plugins: [commonsPlugin],
    //页面入口文件配置
    entry: {
        index : './src/demo02.js',
        demo1 : './src/demo01.js',
        arrowfn:'./src/arrowfunciton.js',
        async:'./src/async.js',
        async2:'./src/async2.js',
        g1:'./src/g1.js',
        g2:'./src/g2.js',
        decorator1:'./src/decorator1.js'
    },
    //入口文件输出配置
    output: {
        path: 'dist',
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
            {
                test: /\.json$/,
                loaders: [ 'json' ],
            },
        ]
    },
    //其它解决方案配置
    resolve: {
        root: rootPath, //绝对路径
        extensions: ['', '.js', '.json', '.scss'],
    }
};