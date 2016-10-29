var app = require('./index');
var db = app.get('db');

module.exports = {
  create: function(req, res){
    var name = req.query.name;
    var description = req.query.description;
    var price = req.query.price;
    var imageurl = req.query.imageurl;
    db.create_products([name, description, price, imageurl], function(err, products){
      res.status(200).send('Product was created!');
    });
  },

  getAll: function(req, res){
    db.read_products(function(err, products){
      res.status(200).send(products);
    });
  },

  getOne: function(req, res){
    var id = req.query.id;
    db.read_product([id], function(err, product){
      res.status(200).send(product);
    });
  },

  update: function(req, res){
    var description = req.query.description;
    var id = req.query.id;
    db.update_product([description, id], function(err, products){
      res.status(200).send('Product was updated!');
    });
  },

  delete: function(req, res){
    var id = req.query.id;
    db.delete_product([id], function(err, product){
      res.status(200).send('Product was deleted');
    });
  }

};
