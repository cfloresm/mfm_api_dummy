var express = require('express');
var app = express();

app.use(express.methodOverride());
 
// ## CORS middleware
//
// see: http://stackoverflow.com/questions/7067966/how-to-allow-cors-in-express-nodejs
var allowCrossDomain = function(req, res, next) {
res.header('Access-Control-Allow-Origin', '*');
res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization,X-BANK-TOKEN');
// intercept OPTIONS method
if ('OPTIONS' == req.method) {
res.send(200);
}
else {
next();
}
};
app.use(allowCrossDomain);



app.get('/hello.txt', function(req, res){
var body = 'Hello World';
res.setHeader('Content-Type', 'text/plain');
res.setHeader('Content-Length', Buffer.byteLength(body));
res.end(body);
console.log('execute GET method hello.txt');
});

app.post('/login', function(req, res){
console.log('execute POST method login');

  for(var item in req.headers) {
    console.log(item + ": " + req.headers[item]);
  }
res.send(200);
});



app.listen(3000);
console.log('Listening on port 3000');
