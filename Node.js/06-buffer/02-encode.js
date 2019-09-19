#!usr/bin/node
const log = console.log,
      usr = process.argv[2],
      pwd = process.argv[3];
log('usr:',usr);
log('pwd',pwd);
var buffer  =new Buffer( usr +''+ pwd);
log('base64:%s',buffer.toString('base64'));
