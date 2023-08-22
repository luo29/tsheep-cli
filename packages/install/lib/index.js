import Command from "@tsheep.com/command";

class InstallCommand extends Command {
  get command() {
    return "install";
  }
  get description() {
    return "install project";
  }
  get option() {}
  async action(params) {
    console.log(212);
  }
}

function Install(instance) {
  return new InstallCommand(instance);
}

export default Install;
