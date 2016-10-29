var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    app = express(),
    productsCtrl = require('./productsCtrl.js');

//Middleware
app.use(bodyParser.json());
app.use(cors());


//Endpoints
app.get('/api/product/:productId', productsCtrl.getOne);
app.get('/api/products', productsCtrl.getAll);
app.post('/api/product', productsCtrl.create);
app.put('/api/product/:productId?description', productsCtrl.update);
app.delete('/api/product/:productId', productsCtrl.delete);


//Port
app.listen('3000', function(){
  console.log("Successfully listening on : 3000");
});
