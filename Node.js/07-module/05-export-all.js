#!/usr/bin/node

var circle1 = require('./02-export-var.js');
var circle2 = require('./02-export-function.js');
var circle3 = require('./02-export-object.js');
module.exports = {
  PI:circle1,
  diameter: circle2().diameter,
  obj:circle3
}
