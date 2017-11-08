
module.exports.saveUser = function(user, req, res, next){
    user.save(function(err) {
        if (err) {
            res.send(err.message);
        } else { 
            req.user = user;
            next();
        }
    });
}

module.exports.findById = function(Model, req, res, next){
    Model.findById(req.params.id, function(err, model){
        if (err) {
            console.log(err);
        }
        req.model = model;
        // res.json(model);
        next();
    });
}