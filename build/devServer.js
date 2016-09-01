const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.dev');
const PORT = parseInt((4000), 10) + 1;
const compiler = webpack(config);
const app = express();

app.use(require('webpack-dev-middleware')(compiler, {
  hot: true,
  silent: true,
  noInfo: true,
  stats: {
    colors: true
  },
  historyApiFallback: true,
  publicPath: config.output.publicPath,
}));

app.use(require('webpack-hot-middleware')(compiler));
app.use(express.static('public'));
app.listen(PORT, 'localhost', function onStart(err) {
  if (err) {
    process.exit(0);
  }
  console.log('Listening at http://localhost:%s', PORT);
});