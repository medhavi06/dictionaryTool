class Command {
    constructor(input) {
        this.input = input;
    }
    RunCommand(command) {
        return command.run(this.input);
    }
}

module.exports = Command;
