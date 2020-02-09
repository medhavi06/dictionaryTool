class Command {
    constructor(input) {
        this.input = input;
    }

    RunCommand(command) {
        console.log("input commands", command);
        return command.run(this.input);
    }
}

module.exports = Command;
