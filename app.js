const path = require('path');
const webpack = require('webpack');
const express = require('express');
const config = require('./webpack.config');
const openapi = require('express-openapi');
const v1WorldsService = require('./api-v1/service/test-service');
const v1ApiDoc = require('./api-v1/api-doc');

const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

 console.log(v1ApiDoc);
console.log(v1WorldsService);

openapi.initialize({
  app,
  apiDoc: v1ApiDoc,
  exposeApiDocs: true,
  dependencies: {
    worldsService: v1WorldsService
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
app.use('/swagger-ui', express.static('swagger-ui'));


app.listen(3000, function(err) {
  if (err) {
    return console.error(err);
  }

  console.log('Listening at http://localhost:3000/');
});