#!/usr/bin/env node

"use strict"
var util = require("util")
var path =  require("path")
var fs = require("fs")
var getStdin = require("get-stdin")
var args = require("minimist")( process.argv.slice(2), {
    boolean: ["help", "in"],
    string: ["file"]
})

var BASE_PATH = path.resolve(
    process.env.BASE_PATH || __dirname
)
if (args.help) {
    printHelp()
}
else if(
    args.in ||
    args._.includes('-')
    ){
    getStdin().then(processFile).catch(error)
}
else if(args.file){
    fs.readFile(path.join(BASE_PATH,args.file), (err,contents) => {
        if(err){
            error(err.toString())
        }
        else {
            processFile(contents.toString())
        }
    })
    
}
else {
    error("Incorrect usage", true)
}
//************************ */

function processFile(contents) {
    process.stdout.write(contents.toUpperCase())
        
}
function error(err, show = false) {
    console.log(err)
}
function printHelp() {
    console.log("script1 usage")
    console.log("script1.js --file={filename}")
    console.log("")
    console.log("--help      print this help")
    console.log("--file={filename}      process the file")
    console.log("--in, -                process stdin")

}