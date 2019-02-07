var express = require('express');
var router = express.Router();
var Product = require('../models/product');

router.get('/', function(req, res, next) {
    Product.find(function(err, docs){
        var productChunks = [];
        var Chunksize = 3;
        for (var i =0; i < docs.length; i+= Chunksize){
            productChunks.push(docs.slice(i,i+Chunksize));
        }
        res.render('shop/index', { title: 'Shopping Cart' , products: productChunks});
    });

});

module.exports = router;
