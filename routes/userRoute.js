var express = require('express');
var router = express.Router();

var userService = require('../services/userService');

router.route('/user')    
    .get(function(req, res){
        res.send('getting user');
    })
    .post(function(req, res){
        res.send('posting user');
    })
    .put(function(req, res){
        res.send('putting user');
    })
    .delete(function(req, res){
        res.send('deleting user');
    });

    router.route('/user/:id')
    .get(function(req, res){
        res.json({'result' : userService.multiplyUserId(req.params.id, 2)});
    });

 module.exports = router;