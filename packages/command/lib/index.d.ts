declare class Command {
    constructor(instance: any);
    get command(): void;
    get description(): void;
    get options(): any[];
    get action(): void;
    preAction(): void;
    postAction(): void;
}
export default Command;
