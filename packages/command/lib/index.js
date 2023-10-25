class Command {
    constructor(instance) {
        var _a;
        if (!instance) {
            throw new Error("command instance must not be null!");
        }
        this.program = instance;
        const cmd = this.program.command(this.command);
        cmd.description(this.description);
        cmd.hook("preAction", () => {
            this.preAction();
        });
        cmd.hook("postAction", () => {
            this.postAction();
        });
        if (((_a = this.options) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            this.options.forEach((option) => {
                cmd.option(...option);
            });
        }
        cmd.action((...params) => {
            this.action(params);
        });
    }
    action(params) {
        throw new Error("Method not implemented.");
    }
    get command() {
        throw new Error("command must be implements");
    }
    get description() {
        throw new Error("description must be implements");
    }
    get options() {
        return [];
    }
    preAction() {
    }
    postAction() {
    }
}
export default Command;
//# sourceMappingURL=index.js.map