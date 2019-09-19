#!/usr/bin/node
const w = ['name','email','qq','mobile'];
var i = 0;
ad = {};
console.log(w[i]+':');
process.stdin.on('data',(data)=>{
  ad[w[i]] = data.slice(0,data.length - 1).toString('utf-8');
  i++;
  if(i == w.length){
    console.log(ad);
    process.exit();
  }
  console.log(w[i]+':');

});
process.stdin.on('end',()=>{
  console.log(ad);
});
