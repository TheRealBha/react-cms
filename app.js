const bodyParser = require('body-parser');
const config = require('./webpack.config');
const express = require('express');
const openapi = require('express-openapi');
const path = require('path');
const webpack = require('webpack');
const v1SqlService = require('./api-v1/service/sqlService');
const v1ApiDoc = require('./api-v1/api-doc');


const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use('/swagger-ui', express.static('swagger-ui'));

app.use(bodyParser.json());

openapi.initialize({
  app,
  apiDoc: v1ApiDoc,
  exposeApiDocs: true,
  dependencies: {
    sqlService: v1SqlService
  },
  paths: './api-v1/paths',
  errorMiddleware (err, req, res, next) {
    console.log(err);
    res.status(400).json(err);
  }
})

app.get('/swagger-ui', (req, res, next)=>{
  if(!req.query.url){
    res.redirect('/swagger-ui?url=/v1/api-docs');
    return;
  }
  next();
})

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, function(err) {
  if (err) {
    return console.error(err);
  }

  console.log('Listening at http://localhost:3000/');
});