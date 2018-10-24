// var express = require("express");
// babel -> es6

import express from "express";
import path from "path";
import open from "open";
import webpack from 'webpack';
import config from '../webpack.config.dev.js';

// babel -> es6
// var port = 3000;
// var app = express();

/* eslint-disable no-console */
const port = 3000;
const app = express();
const compiler = webpack(config)

app.use(require ('webpack-dev-middleware')(compiler, {
  noInfo:true,
  publicPath: config.output.publicPath
}));

// any ref to the root will be handled by this function
app.get('/', function(req, res) {
  // current + path to src
  res.sendFile(path.join(__dirname, '../src/index.html'))
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port)
  }
})

