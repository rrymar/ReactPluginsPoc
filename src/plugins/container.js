export class Container {
    constructor() {
        this.functions = {};
    }

    register = (name, func) => {
        this.functions[name] = func;
    }

    resolve = (name) => {
        return this.functions[name];
    }
}