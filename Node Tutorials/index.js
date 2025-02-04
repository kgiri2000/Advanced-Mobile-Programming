//Including the module called 'http'
// require('module_name')
//Can access the HTML module and create a server
//We can also create our own module and include them using require
// var dt = require('./myfirstmodule);
/*
myfirstmoduke.js
exports.myDateTime = function (){
return Date();
}
*/
// var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   //res.write('Hello World');
//   res.end('Hello World!');
// }).listen(8080);

// Response with requested URL

// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write(req.url);
//   res.end();
// }).listen(8080);

//Reading File code

// var http = require('http');
// var fs = require('fs');
// http.createServer(function(req, res){
//   fs.readFile('home.html', function(err, data){
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// }).listen(8080);


//File Server

var http = require('http');
var url =  require('url');
var fs = require('fs');

http.createServer(function(req,res){
  var q =  url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data){
    if(err){
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }
    res.write(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080)