#!/usr/bin/node
var circle = require('./02-export-function.js');
const log =console.log;
log(circle(20).diameter());
log(circle(20).circumference());
log(circle(20).area());
