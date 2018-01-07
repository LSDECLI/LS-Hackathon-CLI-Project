#!/usr/bin/env node
const cli = require('commander');

const { init, pull } = require('./actions');

cli.version('0.0.0');
cli.command('init [name] [path] [repos]')
    .description('Initialize a LambadSchool environment')
    .action(init);

cli.command('pull <name> <repo>')
    .description('Pull a repo into your lambdaschool environment and prepare it for development')
    .action(pull);

cli.parse(process.argv);


