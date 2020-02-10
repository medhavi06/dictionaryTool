const Command = require('../command.js');
const config = require('../config/config');
const request = require('request');


class Random  {
    execute() {
        request(config.api.apiURL + "/words/randomWord?api_key=" + config.api.apiKey, async (error, response, body) => {
            if (error)
                console.warn('Oops!!! Something went wrong!!!\n Error :', error);
            if (response && response.statusCode == 200) {
                let defArray = JSON.parse(body);
                if (defArray.word != undefined) {
                    console.log('\nExample:', defArray.word);
                } else {
                    console.warn('The word doesn\'t exist')
                }
            } else {
                console.warn('Oops! Something went wrong!!!\n Error :', body);
            }
        });
    }

    run(input) {
        this.execute();
    }
}

module.exports = Random;
