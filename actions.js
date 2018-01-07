const os = require('os');
const fs = require('fs-extra');
const git =  require("nodegit");

const inquirer = require('inquirer');

const questions = {
    type: 'confirm',
    name: 'Init: ',
    message: 'Are you sure you want to initalize the LambdaSchool Directory here?',

}

const configPath = prefix => os.homedir() + `/${prefix}-config.json`;


async function init(name = "LambdaSchool", path = process.env.PWD, repos = []) {
    const correctPath = await inquirer.prompt(questions);
    if (correctPath) {
        const config = {
            name,
            path
        }
        const error = fs.writeJson(`${configPath('ls')}`, config);
        if(!error) {
            throw new Error('Failed to write config file');
        }
    }
}

async function pull(name, repo) {
    const url = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
    const type = url.test(repo) ? 'url' : 'name';
    const config = await fs.readJson(configPath('ls'));

    switch(type) {
        case 'url':
            const repository = await git.Clone(repo, config.path+`/${name}/`);
        break;
        default:
            break;
    }
    console.log('pull repo', repo);
}

module.exports = {
    init,
    pull
};