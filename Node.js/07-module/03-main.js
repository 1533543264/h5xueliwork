#!/usr/bin/node
require('./03-global.js');
console.log(global.pi);
console.log(global.Circle(20).circumference());
console.log(global.Circleobj.area(20));
