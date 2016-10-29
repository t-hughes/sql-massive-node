var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');

var connectionString = "postgres://postgres:testmini@localhost/sandbox";

var app = module.exports = express();
var productsCtrl = require('./productsCtrl.js');

app.use(bodyParser.json());
app.use(cors());

var massiveInstance = massive.connectSync({connectionString : connectionString});

app.set('db', massiveInstance);

app.get('/api/product/:productId', productsCtrl.getOne);
app.get('/api/products', productsCtrl.getAll);
app.post('/api/product', productsCtrl.create);
app.put('/api/product/:productId?description', productsCtrl.update);
app.delete('/api/product/:productId', productsCtrl.delete);

app.listen('3000', function(){
  console.log("Successfully listening on : 3000");
});
