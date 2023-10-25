declare class Command {
    program: any;
    constructor(instance: any);
    action(params: any[]): void;
    get command(): void;
    get description(): void;
    get options(): any[];
    preAction(): void;
    postAction(): void;
}
export default Command;
