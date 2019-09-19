#!/usr/bin/node

var filename = process.argv[2],
    f = require('f');
    buf = f.readFileSync(filename),
    log = console.log;
log('BMP width:',buf.readUInt32LE(18));
log('BMP Height:',buf.readUInt32LE(22));
log('color deapth:',buf.readUInt16LE(28));
