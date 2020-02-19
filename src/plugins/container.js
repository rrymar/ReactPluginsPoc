export class Container {
    constructor() {
        this.functions = {};
    }

    registerFunc = (name, func) => {
        this.functions[name] = func;
    }

    resolve = (name) => {
        return this.functions[name];
    }
}