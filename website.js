var express = require('express');
var app = express();

//To help handle routing pages
var router = express.Router();

//Helps serve static files
app.use(express.static(__dirname + '/public'));

app.get('/', function(res, req) {
  res.sendFile('index.html');
});

app.get('/lesson1', function(res, req) {
  res.SendFile('lesson1.html');
});


//start the Server
app.listen(31337, function() {
  console.log("Let the hacking begin...");
});
