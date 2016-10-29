var db = require('./db');

console.log(db);
module.exports = {
  create: function(req, res){
    var name = req.body.name;
    var description = req.body.description;
    var price = req.body.price;
    var imageurl = req.body.imageurl;
    db.create_product([name, description, price, imageurl], function(err, products){
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
