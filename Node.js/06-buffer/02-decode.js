#!/usr/bin/node

var buffer = new Buffer(process.argv[2],'base64'),
    info = buffer.toString('utf8').split(':');
console.log('usr:%s pwd:%s',info[0],info[1]);


