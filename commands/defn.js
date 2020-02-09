const Command = require('../command.js');
const config = require('../config/config');
const request = require('request');

//const command = new Command();

class Definition extends Command {
    constructor(input) {
        super();
        this.input = input;
        this.commandName = "";
        this.word = "";
    }

    isValidCommand(commandName) {
        if (commandName == 'defn')
            return true;
        return false;
    }

    execute() {
        request(config.api.apiURL + "/word/" + this.word + "/definitions?api_key=" + config.api.apiKey, async (error, response, body) => {
            if (error)
                console.warn('Oops! Something went wrong!!!\n Error :', error);
            if (response && response.statusCode == 200) {
                console.log("response is: " + response);
                let defArray = JSON.parse(body);
                if (defArray && Array.isArray(defArray) && defArray.length > 0) {
                    let def = "";
                    defArray.forEach((obj) => {
                        def += obj.text + "\n";
                    });
                    console.log('\nDefinition:', def);
                } else {
                    console.warn('The word doesn\'t exist')
                }
            } else {
                console.warn('Oops! Something went wrong!!!\n Error :', body);
            }
        });
    }

    parse(input) {
        this.word = input[1];
        this.commandName = input[0];
        console.log(this.word + "....." + this.commandName);
    }

    run(input) {
        console.log("command   ", input);
        this.parse(input);
        if (!this.isValidCommand(this.commandName)) {
            console.log("Please enter a valid command" + "(Suggestion: defn <word>)");
            return;
        }
        this.execute(this.word);
    }
}

module.exports = Definition;
