#!/usr/bin/env node

import { makeFile, serve , openServer} from './maker.js';
import colors from 'colors'
import GenModel from './maker/model.gen.js';
import GenCntlr from './maker/cntlr.gen.js';
import modelData from './data/model.data.js'
import controllerData from './data/cntlr.data.js'
import routeData from './data/route.data.js'


import program from 'commander'
import pkg from 'inquirer';
import { auth, MRC } from './maker/auth.gen.js';
import GenRoute from './maker/route.gen.js';
const { prompt } = pkg;

const questions =[
    {
        type: 'list',
        name:'nothing',
        message: `please select to get started with`,
        choices: [`minimal`, `auth-templete`],
        default:'auth-templete'
        
        
    }]

program.version('1.0.0')

program
    .command('init <name>')
    .alias('s')
    .description('Initiates the applicaiton')
    .action((name) => {
        makeFile(name)  
    })

program
    .command('make:model <name>')
    .alias('m')
    .description('Creates a model')
    .action((name) => {
        GenModel(name,modelData)
    }) 

program
    .command('make:controller <name>')
    .alias('c')
    .description('Creates a controller')
    .action((name) => {
        GenCntlr(name,controllerData)
    }) 

program
    .command('make:route <name>')
    .alias('r')
    .description('Creates a router')
    .action((name) => {
        GenRoute(name,routeData)
    }) 

program
    .command('make:MRC <name>')
    .alias('r')
    .description('Creates a MRC model')
    .action((name) => {
        MRC(name)
    }) 

program
    .command('make:auth')
    .alias('a')
    .description('Integretes authentication')
    .action(() => {
        auth()
    })      

program
.command('serve')
.alias('s')
.description('Run server and open in browser')
    .action(async () => {
    
   console.log(await serve())
    
})   

program.parse(process.argv)


