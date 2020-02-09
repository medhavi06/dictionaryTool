const Command = require('../command.js');
const config = require('../config/config');
//const command = new Command();

class Definition extends Command{
    constructor(input){
        this.input = input;
        this.commandName = "";
        this.word = "";
    }
    isValidCommand(commandName){
        if(commandName == 'defn')
            return true;
        return false;    
    }
    execute(){
        request(config.api.apiURL + "/word/" + this.word +"/definitions?api_key=" + config.api.apiKey, async(error, response, body) => {
            if (error)
                console.warn('Oops! Something went wrong!!!\n Error :', error);
            if (response && response.statusCode == 200) {
                console.log("response is: "+response);
                var defArray = JSON.parse(body);
                if (defArray && Array.isArray(defArray) && defArray.length > 0) {
                    var def = "";
                    defArray.forEach((obj) => {
                        def += obj.text + "\n";
                    })
                    console.log('\nDefinition:', def);
                } else {
                    console.warn('The word doesn\'t exist')
                }
            } else {
                console.warn('Oops! Something went wrong!!!\n Error :', body);
            }
        });
        console.log(uri);
    }
    parse(command){
        const input = command.split(' ');
        console.log(input);
        const commandName = input[0];
        const word = input[1];
        this.word = word;
        this.commandName = commandName;
        console.log(word + "....." + commandName);
    }
    run(command){
        this.parse(command);
        if(!this.isValidCommand(commandName)){
            console.log("Please enter a valid command. (Suggestion: defn <word>)");
            return;
        }
        this.execute(word);
    }
}
module.exports = Definition;
