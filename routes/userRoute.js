var express = require('express');
var router = express.Router();
var User = require('../models/user');
const mongoService = require('../services/mongoService');

router.route('/user')    
    .get(function(req, res){
        res.send('getting user');
    })

    .post(function(req, res, next){
        let user = new User({ 
            "name": req.body.name,
            "age": req.body.age
        });
        mongoService.saveUser(user, req, res, next);

    }, function(req, res){
        console.log(req.user);
        res.json(req.user);
    })

    .put(function(req, res){
        res.send('updating user');
    })

    .delete(function(req, res){
        res.send('deleting user');
    });

    router.route('/user/:id')
        .get(function(req, res, next){
            mongoService.findById(User, req, res, next);
        }, function(req, res, next){
            let found = req.model;
            res.json(found);
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