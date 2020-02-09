class Command {
    constructor(input){
        this.input = input;
    }
    runCommand(command){
        return command.run();
    }
}
module.exports = Command;