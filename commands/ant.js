const Command = require('../command.js');
const config = require('../config/config');
const request = require('request');
const constant = require('../constant/constant');


class Antonym  {
    constructor() {
        this.commandName = "";
        this.word = "";
    }

    isValidCommand(commandName) {
        return commandName == constant.commandAntonym;
    }

    execute() {
        request(config.api.apiURL + "/word/" + this.word + "/relatedWords?api_key=" + config.api.apiKey, async (error, response, body) => {
            if (error)
                console.warn('Oops! Something went wrong!!!\n Error :', error);
            if (response && response.statusCode == 200) {
                let defArray = JSON.parse(body);
                if (defArray && Array.isArray(defArray) && defArray.length > 0) {
                    let def = "";
                    defArray.forEach((obj) => {
                        if (obj.relationshipType == constant.antonym)
                            def += obj.words + "\n";
                    });
                    console.log('\nAntonym:', def);
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
            console.log("Please enter a valid command" + "(Suggestion: ant <word>)");
            return;
        }
        this.execute();
    }
}

module.exports = Antonym;
