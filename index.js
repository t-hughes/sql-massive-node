var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    app = express(),
    productsCtrl = require('./productsCtrl.js');

//Middleware
app.use(bodyParser.json());
app.use(cors());


//Endpoints
app.get('/product/:id', productsCtrl.getOne);
app.get('/products', productsCtrl.getAll);
app.post('/product', productsCtrl.create);
app.put('/product/:id', productsCtrl.update);
app.delete('/product/:id', productsCtrl.delete);


//Port
app.listen('3000', function(){
  console.log("Successfully listening on : 3000");
});
