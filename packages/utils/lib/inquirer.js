import inquirer from "inquirer";
function make({ choices, defaultValue, message = "请选择", type = "list", require = true, mask = "*", validate, pageSize, loop, }) {
    const options = {
        name: "name",
        defaultValue: defaultValue,
        message,
        type,
        require,
        mask,
        validate,
        pageSize,
        loop,
    };
    if (type === "list") {
        options.choices = choices;
    }
    return inquirer.prompt(options).then((answer) => answer.name);
}
export function makeList(params) {
    return make(Object.assign({}, params));
}
export function makeInput(params) {
    return make(Object.assign({ type: "input" }, params));
}
export function makePassword(params) {
    return make(Object.assign({ type: "password" }, params));
}
//# sourceMappingURL=inquirer.js.map