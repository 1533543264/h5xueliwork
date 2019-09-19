#!/usr/bin/node
process.stdin.resume();
process.on('SIGNAL',()=>{
  console.log('Ctrl+C');
  process.exit();
})
process.on('SIGTSTP',()=>{
  console.log('Ctrl+z');
})

