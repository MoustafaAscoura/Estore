var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var passport = require('passport');

var Product = require('../models/product');

var csrfProtection = csrf();
router.use(csrfProtection);

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

router.get('/user/signup', function(req,res,next){
    var messages = req.flash('error');
    res.render('user/signup',{csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0});
});

router.get('/user/profile', function(req,res,next){
    res.render('user/profile');
});

router.post('/user/signup', passport.authenticate('local.signup', {
    successRedirect: '/user/profile',
    failureRedirect: '/user/signup',
    failureFlash: true
}));

router.get('/user/signin', function(req,res,next){
    var messages = req.flash('error');
    res.render('user/signin',{csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0});
});

router.post('/user/signin', passport.authenticate('local.signin', {
    successRedirect: '/user/profile',
    failureRedirect: '/user/signin',
    failureFlash: true
}));

module.exports = router;
