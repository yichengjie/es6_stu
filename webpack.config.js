var webpack = require('webpack');
//var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var path = require('path') ;
var rootPath = path.resolve('./src') ;
module.exports = {
    //插件项
    //plugins: [commonsPlugin],
    //页面入口文件配置
    entry: {
        // index : './src/demo02.js',
        // demo1 : './src/demo01.js',
        // arrowfn:'./src/arrowfunciton.js',
        // async:'./src/async.js',
        // async2:'./src/async2.js',
        // g1:'./src/g1.js',
        // g2:'./src/g2.js',
        // decorator01:'./src/decorator01.js',
        // decorator02:'./src/decorator02.js',
        // decorator03:'./src/decorator03.js',
        // decorator04:'./src/decorator04.js',
        // //decorator5:'./src/decorator5.js',
        // decorator06:'./src/decorator06.js',
        // decorator07:'./src/decorator07.js',
        // decorator08:'./src/decorator08.js',
        // decorator09:'./src/decorator09.js',
        // decorator10:'./src/decorator10.js',
        // decorator11:'./src/decorator11.js',
        // decorator12:'./src/decorator12.js',
        // traits1:'./src/traits1.js',
        // traits2:'./src/traits2.js'
        proxy01:'./other/proxy01.js',
        index:'./other/index.js'
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