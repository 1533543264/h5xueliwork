#!/usr/bin/node
if(process.argv.length ===2||process.argv[2] =="--help" || process.argv[2]=="-h" ){
   console.log("usage: cmd-name [OPTION] [expression]\nevaluate the expression.\n\nMandatory arguments to long options are mandatory for short options too.\n-h, --help output help information and exit"
             )
} else{
    console.log(process.argv[2] + "=" + eval(process.argv[2]));        

}
