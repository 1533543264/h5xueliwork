#!/usr/bin/node
const log = console.log;
var buf1 = new Buffer(256);//256字节容量
buf1[0] = 0x11;
log('buf1.length:',buf1.length);


for( var i = 0; i < buf1.length ; i++ ){
  buf1[i] = i;
}
log(buf1);
buf1.fill(0,0,256);
log(buf1);
var buf2 = buf1.slice(230,256);
log(buf2);
log('buf2',buf2.toJSON());
log(buf2.JSON.stringify(buf2));
var arr = ['a',0xba,0xdf,0x00,256,200];
var buf3 = new Buffer(arr);
log(buf3);
var buf4 = new Buffer("hello world!");
log(buf4);
buf4.copy(buf3,0,0,buf3.length);
log(buf3);
var str = "你好";
var buf5 = new Buffer(str);
log(buf5.length);
