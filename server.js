var express = require('express');
var app = express();
var mongoose = require('mongoose');

var bodyParser = require('body-parser')


var userRoute = require('./routes/userRoute');
var workRoute = require('./routes/workRoute');

const mongoConnection = 'mongodb://fancypantz:viking1337@ds151355.mlab.com:51355/fancypantz';
mongoose.connect(mongoConnection, { useMongoClient: true });
mongoose.Promise = global.Promise;

var port = 3000 || proccess.env.PORT;
var host = 'localhost';

var myLogger = function (req, res, next) {
    let d = new Date();
    console.log(`${d.getHours()}:${d.getMinutes()} ${req.method} request to ${req.path}`)
    next()
}

/* 
    MIDDLEWARES 
*/
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.use(myLogger);

app.get('/', function(req, res){
    res.json({hello: 'world'});
    // res.send('hello world');
});
  
app.listen(port, host, function(){
    console.log(`Server is listening on port ${port}`)
});

// app.use(cors({  
//     origin: [`http://${host}:${port}`],
//     methods: ["GET", "POST"],
//     allowedHeaders: ["Content-Type", "Authorization"]
// }));

app.use('/api', userRoute);
app.use('/api', workRoute);
