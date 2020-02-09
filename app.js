const express = require('express');
const indexRouter = require('./routes/index');
const app = express();
const Command = require('./command.js');
const Definition = require('./commands/defn.js');
const Antonym = require('./commands/ant.js');
const Synonym = require('./commands/syn.js');
const Example = require('./commands/ex.js');

app.use(express.json());
app.use('/', indexRouter);

//for(;;){
let myArgs = process.argv;
console.log('myArgs: ', myArgs);

newArr = [myArgs[2], myArgs[3]];
console.log(newArr + newArr.length);
let cmd = new Command(newArr);
switch (myArgs[2]) {
    case 'defn':
        cmd.RunCommand(new Definition(newArr));
        break;
    case 'syn':
        cmd.RunCommand(new Synonym(newArr));
        break;
    case 'ant':
        cmd.RunCommand(new Antonym(newArr));
        break;
    case 'ex':
        cmd.RunCommand(new Example(newArr));
        break;
    case 'random':
        cmd.RunCommand(new Definition(newArr));
        break;
    case 'play':
        cmd.RunCommand(new Definition(newArr));
        break;
    default:
        cmd.RunCommand(new Definition(newArr));
}
//}
/*
program.arguments('command', 'word').action(async(command, word) => {
  switch (command) {
      case "def":
          {
              if (word && typeof word == 'string') {
                  console.log('\nGetting "Definition" of the word: "%s" \n', word);
                  wordnikApi.getDefinition(word);
              } else {
                  console.log('Please enter valid word \n');
              }
              break;
          }
      case "syn":
          {
              if (word && typeof word == 'string') {
                  console.log('\nGetting "Synonyms" of the word: "%s" \n', word);
                  wordnikApi.getSynonym(word);
              } else {
                  console.log('Please enter valid word \n');
              }
              break;
          }
      case "ant":
          {
              if (word && typeof word == 'string') {
                  console.log('\nGetting "Antonyms" of the word: "%s" \n', word);
                  wordnikApi.getAntonym(word);
              } else {
                  console.log('Please enter valid word \n');
              }
              break;
          }
      case "ex":
          {
              if (word && typeof word == 'string') {
                  console.log('\nGetting "Example" of the word: "%s" \n', word);
                  wordnikApi.getExample(word);
              } else {
                  console.log('Please enter valid word \n');
              }
              break;
          }
      case "dict":
          {
              if (word && typeof word == 'string') {
                  console.log('\nGetting "Details" of the word: "%s" \n', word);
                  wordnikApi.getDefinition(word)
                  wordnikApi.getSynonym(word)
                  wordnikApi.getAntonym(word)
                  wordnikApi.getExample(word)
              } else {
                  console.log('Please enter valid word \n');
              }
              break;
          }
      case "play":
          {
              if (word && typeof word == 'string') {
                  console.log('\nPreparing the ground for a game \n');
                  wordnikApi.startGame(word);
              } else {
                  console.log('Please enter valid word \n');
              }
              break;
          }
      default:
          {
              if (typeof word == 'object')
                  var word = command;
              if (word && typeof word == 'string') {
                  console.log('\nGetting "Details" of the word : "%s". \n', word);
                  wordnikApi.getDefinition(word);
                  wordnikApi.getSynonym(word);
                  wordnikApi.getAntonym(word);
                  wordnikApi.getExample(word);
              } else {
                  console.log('Please enter valid word \n');
              }
              break;
          }
  }
}).parse(process.argv);


*/
module.exports = app;
