var webpack = require('webpack');
//var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var path = require('path') ;
var rootPath = path.resolve('./src') ;
module.exports = {
    //插件项
    //plugins: [commonsPlugin],
    //页面入口文件配置
    entry: {
        index : './src/js/demo02.js',
        demo1 : './src/js/demo01.js',
        arrowfn:'./src/js/arrowfunciton.js',
        async:'./src/js/async.js',
        async2:'./src/js/async2.js',
        g:'./src/js/g.js',
        g2:'./src/js/g2.js',
        g3:'./src/js/g3.js',
        co:'./src/js/co.js'
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