#!/usr/bin/env node
const path=require('path')
const yargs = require('yargs')
const chalk=require('chalk')
const argv =yargs
  .command('start',"只是对命令的简短描述",(yargs)=>{
    console.log(chalk.red("start"));
  })
  .argv;
console.log(argv);