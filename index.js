#!/usr/bin/env node

import { makeFile } from './maker.js';
import colors from 'colors'
import GenModel from './maker/model.gen.js';
import GenCntlr from './maker/cntlr.gen.js';
import program from 'commander'
import pkg from 'inquirer';
const { prompt } = pkg;

const questions =[
    {
        type: 'list',
        name:'nothing',
        message: `please select to get started with`,
        choices: [`minimal -${colors.gray('as clean as nothing')}`, `auth-templete -${ colors.gray('ships with pre-build Authentication')}`],
        default:'WithAuth'
        
        
    }]

program.version('1.0.0')

program
    .command('init <name>')
    .alias('-s')
    .description('')
    .action((name) => {
    prompt(questions).then(ans=>makeFile(name,ans));
    })

program
    .command('make:model <name>')
    .alias('-m')
    .description('')
    .action((name) => {
        GenModel(name)
    }) 

program
    .command('make:controller <name>')
    .alias('-c')
    .description('')
    .action((name) => {
        GenCntlr(name)
    })     


program.parse(process.argv)