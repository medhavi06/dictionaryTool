var createError = require('http-errors');
var express = require('express');
var path = require('path');
var indexRouter = require('./routes/index');
var app = express();
const Command = require('./command.js');
const Definition = require('./commands/defn.js');

app.use(express.json());
app.use('/', indexRouter);

/*if (process.argv.length == 2) {
  console.log('Getting word of the day...');
  wordnikApi.wordOfTheDay();
}*/

//for(;;){
  var myArgs = process.argv;
  console.log('myArgs: ', myArgs);

  newArr=[myArgs[2],myArgs[3]] ;
  console.log(newArr + newArr.length);
  switch (myArgs[2]) {
  case 'defn':
      console.log(myArgs[3], 'smells quite badly.');
      Command.runCommand(new Definition(newArr));
      break;
  case 'syn':
    console.log(myArgs[1], 'smells quite badly.');

    break;
  case 'ant':
    console.log(myArgs[1], 'smells quite badly.');

    break; 
  case 'ex':
    console.log(myArgs[1], 'smells quite badly.');

    break; 
  case 'dict':
      console.log(myArgs[1], 'is really cool.');
      break;
  case 'play':
    console.log(myArgs[1], 'smells quite badly.');

    break;
  default:
      console.log('Sorry, that is not something I know how to do.');
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
