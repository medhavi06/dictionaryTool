const Command = require('../command.js');
const config = require('../config/config');
const request = require('request');
const constant = require('../constant/constant');


class Example  {
    constructor() {
        this.commandName = "";
        this.word = "";
    }

    isValidCommand(commandName) {
        return commandName == constant.commandExample;
    }

    execute() {
        request(config.api.apiURL + "/word/" + this.word + "/examples?api_key=" + config.api.apiKey, async (error, response, body) => {
            if (error)
                console.warn('Oops! Something went wrong!!!\n Error :', error);
            if (response && response.statusCode == 200) {
                let defArray = JSON.parse(body);
                if (defArray.examples && Array.isArray(defArray.examples) && defArray.examples.length > 0) {
                    let def = "";
                    defArray.examples.forEach((obj) => {
                        def += obj.text + "\n";
                    });
                    console.log('\nExample:', def);
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
    }

    run(input) {
        this.parse(input);
        if (!this.isValidCommand(this.commandName)) {
            console.log("Please enter a valid command" + "(Suggestion: ex <word>)");
            return;
        }
        this.execute();
    }
}

module.exports = Example;
