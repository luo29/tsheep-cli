class Command {
  constructor(instance) {
    if (!instance) {
      throw new Error("command instance must not be null!");
    }
    this.program = instance;
    this.program
      .command(this.command)
      .description("init project")
      .option("-f, --force", "是否强制更新", false)
      .action((name, opts) => {
        console.log("init...", name, opts);
      });
  }
  get command() {
    throw new Error("command must be implements");
  }
}
module.exports = Command;
