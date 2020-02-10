const Command = require('../command.js');
const Definition = require('./defn.js');
const Antonym = require('./ant.js');
const Synonym = require('./syn.js');
const Example = require('./ex.js');
const constant = require('../constant/constant');


class ShowAll {
    constructor() {
        this.word = "";
    }

    execute() {
        new Command([constant.commandDefination, this.word]).RunCommand(new Definition());
        new Command([constant.commandExample, this.word]).RunCommand(new Example());
        new Command([constant.commandAntonym, this.word]).RunCommand(new Antonym());
        new Command([constant.commandSynonym, this.word]).RunCommand(new Synonym());
    }

    parse(input) {
        this.word = input[0];
    }

    run(input) {
        this.parse(input);
        this.execute();
    }
}

module.exports = ShowAll;
