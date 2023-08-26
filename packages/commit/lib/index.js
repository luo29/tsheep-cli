import Command from "@tsheep.com/command";
import { log } from "@tsheep.com/utils";

class CommitCommand extends Command {
  get command() {
    return "commit";
  }
  get description() {
    return "commit project";
  }
  action() {
    console.log(21);
  }
  get option() {}
}
function Commit(instance) {
  return new CommitCommand(instance);
}

export default Commit;
