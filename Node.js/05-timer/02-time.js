#!/usr/bin/node

console.log("start");

const time = global.setInterval(loop,500);

function loop(){
    // count ++;
       console.log('I will loop forever');
         if(count === 6){
                 clearInterval(time);
                     }
                     }
                     // method1
                     global.setTimeout(function(){
                       global.clearInterval(time);
                         console.log('end');
                         },3000);
                         // method2
                         var count = 0;
                     
