var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

const userService = require('../services/userService');

const User = mongoose.model('User', { 
    name: String 
});


router.route('/user')    
    .get(function(req, res){
        res.send('getting user');
    })

    .post(function(req, res){
        
        let user = new User({ 
            "name": req.body.name 
        });

        user.save(function (err) {
          if (err) {
            console.log(err);
          } else {
            console.log('meow');
          }
        });

        res.send('posting user');
    })

    .put(function(req, res){
        res.send('updating user');
    })

    .delete(function(req, res){
        res.send('deleting user');
    });

    router.route('/user/:id')
        .get(function(req, res){
            // res.json({'result' : userService.multiplyUserId(req.params.id, 2)});

            User.findById(req.params.id, function(err, user){
                if (err) {
                    console.log(err);
                }

                res.json(user);
            });
        })

        .put(function(req, res){

            let newName = {
                "name": req.body.name
            }

            User.findByIdAndUpdate(req.params.id, newName, function(err, user){
                if (err) {
                    console.log(err);
                }

                res.json(user);

            });
        });

 module.exports = router;