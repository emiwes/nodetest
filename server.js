var express = require('express');
var app = express();
//var cors = require('cors');
var userRoute = require('./routes/userRoute');
var workRoute = require('./routes/workRoute');



var port = 3000 || proccess.env.PORT;
var host = 'localhost';

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
