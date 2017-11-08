
module.exports.saveModel = function(model, req, res, next){
    model.save(function(err) {
        if (err) {
            res.send(err.message);
        } else {
            res.locals.response = "nice one";
            next();
        }
    });
}

module.exports.findById = function(Model, req, res, next){
    Model.findById(req.params.id, function(err, model){
        if (err) {
            console.log(err);
        }
        res.locals.model = model;
        // res.json(model);
        next();
    });
}

module.exports.findAll = function(Model, req, res, next){
    Model.find(function(err, allModels){
        if (err) {
            res.send(err.message)
        }

        res.locals.allModels = allModels; // http://expressjs.com/en/api.html#res.locals
        next();
    })
}