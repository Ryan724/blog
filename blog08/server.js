'use strict';

process.env.NODE_ENV = 'development';//'production';//

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var port = process.env.PORT || 3000;
var host = "127.0.0.1"

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  stats: {
    chunkModules: false,
    colors: true,
  }
}).listen(port, host, function (err) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at '+host+":" + port);
});
