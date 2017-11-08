var express = require('express');
var router = express.Router();

router.route('/work')    
    .get(function(req, res){
        res.send('getting work')
    })
    .post(function(req, res){
        res.send('posting work')
    })
    .put(function(req, res){
        res.send('putting work')
    })
    .delete(function(req, res){
        res.send('deleting work')
    });

router.route('/work/:id')
    .get(function(req, res){
        res.send(`getting work with ID ${req.params.id}`);
    })
    .post(function(req, res){
        res.send('posting work with ID')
    })


 module.exports = router;