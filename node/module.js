/**
 * Created by Lannister on 2014/5/14.
 */
var name;
exports.setName=function(thy){
    name=thy
};
exports.say=function(){
    console.log('hello'+name)
};
//var http = require('http');
//http.createServer(function(req, res) {
//    res.writeHead(200, {'Content-Type': 'text/html'});
//    res.write('<h1>Node.js</h1>');
//    res.end('<p>Hello World</p>');
//}).listen(3000);
//console.log("HTTP server is listening at port 3000.");