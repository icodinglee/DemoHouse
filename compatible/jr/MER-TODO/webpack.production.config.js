'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var StatsPlugin = require('stats-webpack-plugin');

module.exports = {
  // 入口文件
  entry: [
    path.join(__dirname, 'app/index.js')
  ],
  // 输出
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name]-[hash].min.js',
    publicPath: '/'
  },
  plugins: [
    // webpack提供了modules 和 chunks ids 来区分他们俩。
    // 利用下面的配置项，webpack就能够比对id的使用频率和分布
    // 来得出最短的id分配给使用频率高的模块
    new webpack.optimize.OccurenceOrderPlugin(),

    // 这个插件可以帮助生成 HTML 文件
    // 在 body 元素中，使用 script 来包含所有你的 webpack bundles
    new HtmlWebpackPlugin({
      template: 'app/index.tpl.html',
      inject: 'body', // 所有的 javascript 资源将被放置到 body 元素的底部
      filename: 'index.html'
    }),
    // 从 js 文件里面将 .css 文件提取出来，并且将他们放在一个单独的文件里面
    // 因为在生产环境下，这样做的性能更好
    // style 加载更快，因为不需要等待 js 加载
    // 如果你希望 css 注入 js 里面就可以不使用这个插件
    new ExtractTextPlugin('[name]-[hash].min.css'),
    // 压缩 js 文件
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        screw_ie8: true
      }
    }),
    // 创建一个 stats.json
    new StatsPlugin('webpack.stats.json', {
      source: false,
      modules: false
    }),
    // 定义一个全局变量，我们在这个项目里都可以访问到，然后利用这个变量我们可以做一些事情
    // 比如：可以根据这个变量判断当前是 生产环境 还是 开发环境
    // 举个栗子：
    // if (process.env.NODE_ENV === 'production') {
    //   module.exports = require('./configureStore.prod');
    // } else {
    //   module.exports = require('./configureStore.dev');
    // }
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],

  // ESLint 配置
  eslint: {
    configFile: '.eslintrc',
    failOnWarning: false,
    failOnError: true
  },
  resolve: {
      extensions: ['', '.js', '.jsx']
  },
  module: {
    // 在 loders 运行之前运行
    preLoaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'eslint'
    }],
    // 处理文件的 loaders ，例如把 sass 转换成 css 以及把 jsx 转换成 js
    loaders: [{
      test: /\.js|jsx?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }, {
      test: /\.json?$/,
      loader: 'json'
    }, {
      test: /\.scss$/,
      // 你看，在开发环境下，css 文件就是注入到 js 文件里面的
      loaders: ['style', 'css', 'sass']
    }, {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: "url-loader?limit=10000&minetype=application/font-woff"
    }, {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: "file-loader"
    }]
  },
  postcss: [
    require('autoprefixer')
  ]
};