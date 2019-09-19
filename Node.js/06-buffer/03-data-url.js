#!/usr/bin/node
const fs= require('fs'),
      log = console.log,
      http = require('http');

var path = require('path');
var data = fs.readFileSync('./qr-code.jpg').toString('base64');
log(data);
var ext = path.extname('./qr-code.jpg');
var datauri = 'data:img/ '+ ext.slice(1,ext.length) + ';base64' + data; 
html  = '<!DOCTYPE html><html><head><title>img</title></head><body><img src="' + datauri + '"/></body></html>';
http.createSever((req,res)=>{
res.end(html);
}).listen(8080);
