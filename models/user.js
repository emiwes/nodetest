var mongoose = require('mongoose');

const User = mongoose.model('User', { 
    name: {type: String, required: true } ,
    age: {type: Number, default: 18 }
});

module.exports = User;