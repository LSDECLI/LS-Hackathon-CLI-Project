#!/usr/bin/env node
const cli = require('commander');
const inquirer = require('inquirer');
const { init } = require('./actions');

cli.version('0.0.0');
cli.command('init [path]')
    .description('Initialize a LambadSchool environment')
    .action(init);

cli.parse(process.argv);
