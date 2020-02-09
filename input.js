var myArgs = process.argv.slice(2);
console.log('myArgs: ', myArgs);

switch (myArgs[0]) {
    case 'defn':
        console.log(myArgs[1], 'chose definition');
        break;
    case 'syn':
        console.log(myArgs[1], 'chose synonym');
        break;
    case 'ant':
        console.log(myArgs[1], 'chose antonym');
        break;
    case 'ex':
        console.log(myArgs[1], 'chose example');
        break; 
    case 'play':
        console.log(myArgs[1], 'chose the game');
        break;
    case 'ex':
        console.log(myArgs[1], 'is really cool.');
        break;  
    default:
        console.log('Sorry, that is not something I know how to do.');
}

module.exports = myArgs;