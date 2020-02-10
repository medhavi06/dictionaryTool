#! /usr/bin/env node

const Command = require('./command.js');
const Definition = require('./commands/defn.js');
const Antonym = require('./commands/ant.js');
const Synonym = require('./commands/syn.js');
const Example = require('./commands/ex.js');
const ShowAll = require('./commands/showAll.js');
const PlayGame = require('./commands/play.js');
const Random = require('./commands/random.js');



myArgs = process.argv;
newArr = [myArgs[2], myArgs[3]];
let cmd = new Command(newArr);
switch (myArgs[2]) {
    case 'defn':
        cmd.RunCommand(new Definition());
        break;
    case 'syn':
        cmd.RunCommand(new Synonym());
        break;
    case 'ant':
        cmd.RunCommand(new Antonym());
        break;
    case 'ex':
        cmd.RunCommand(new Example());
        break;
     case 'play':
         console.log("in development !");
        break;
    default :
        if (!myArgs[2]) {
            cmd.RunCommand(new Random());
            break;
        }
        cmd.RunCommand(new ShowAll());
        break;

}
