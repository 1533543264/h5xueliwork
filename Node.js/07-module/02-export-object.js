#!/usr/bin/node
module.exports = {
  diameter: function(radius){return 2*radius;},
    circumference:function(radius){return 2*Math.PI*radius;},
      area:function(radius){return Math.PI*radius*radius;}
}
var Circle = module.exports;
console.log(Circle);
console.dir(module)
