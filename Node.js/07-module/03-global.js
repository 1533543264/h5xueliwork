#!/usr/bin/node
global.pi = Math.PI;
global.Circle = (radius) => {
  return {
    circumference:function(){return 2*Math.PI*radius;},
          area:function(){return Math.PI*radius*radius;}
  }
}
global.CircleObj = {
   circumference:function(radius){return 2*Math.PI.radius},
     area:function(radius){return Math.PI*radius*radius}
}
