#!/usr/bin/node

function Bomb(){
  this.message = 'Bomb';
}
Bomb.prototype.explode = function(){
  console.log(this.message);
}
var B = new Bomb();r
var time = global.setTimeout(b.explode.bind(b),2000);

