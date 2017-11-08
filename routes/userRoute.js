var express = require('express');
var router = express.Router();
var User = require('../models/user');
const mongoService = require('../services/mongoService');

router.route('/user')    
    .get(function(req, res, next){
        mongoService.findAll(User, req, res, next);
    }, sendResponseAsJson)

    .post(function(req, res, next){
        console.log("saving model")
        let user = new User({ 
            "name": req.body.name,
            "age": req.body.age
        });
        mongoService.saveModel(user, req, res, next);
    }, sendResponseAsJson)

    .put(function(req, res){
        res.send('updating user');
    })

    .delete(function(req, res){
        res.send('deleting user');
    });

    router.route('/user/:id')
        .get(function(req, res, next){
            mongoService.findById(User, req, res, next);
        }, sendResponseAsJson)
        

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

function sendResponseAsJson(req, res){
    res.json(res.locals);
}

module.exports = router;