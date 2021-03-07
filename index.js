#!/usr/bin/env node

import { makeFile } from './maker.js';
import colors from 'colors'
import GenModel from './maker/model.gen.js';
import GenCntlr from './maker/cntlr.gen.js';
import {data as controllerData} from './data/cntlr.data.js'
import {data as modelData} from './data/model.data.js'
import {data as routeData} from './data/route.data.js'
import program from 'commander'
import pkg from 'inquirer';
import { auth } from './maker/auth.gen.js';
import GenRoute from './maker/route.gen.js';
const { prompt } = pkg;

const questions =[
    {
        type: 'list',
        name:'nothing',
        message: `please select to get started with`,
        choices: [`minimal -${colors.gray('as clean as nothing')}`, `auth-templete -${ colors.gray('ships with pre-build Authentication')}`],
        default:'auth-templete'
        
        
    }]

program.version('1.0.0')

program
    .command('init <name>')
    .alias('-s')
    .description('')
    .action((name) => {
    prompt(questions).then(ans=>ans.nothing === 'minimal' && makeFile(name,ans));
    })

program
    .command('make:model <name>')
    .alias('-m')
    .description('Creates a model')
    .action((name) => {
        GenModel(name,modelData)
    }) 

program
    .command('make:controller <name>')
    .alias('-c')
    .description('Creates a controller')
    .action((name) => {
        GenCntlr(name,controllerData)
    }) 

program
    .command('make:route <name>')
    .alias('-r')
    .description('Creates a router')
    .action((name) => {
        GenRoute(name,routeData)
    }) 

program
    .command('make:auth')
    .alias('-a')
    .description('Integretes authentication')
    .action(() => {
        auth()
    })      


program.parse(process.argv)