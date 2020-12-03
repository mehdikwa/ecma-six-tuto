function add(x, y) { return x + y; }
function sub(x, y) { return x - y; }
function mul(x, y) { return x * y; }
function div(x, y) { return x / y; }

export let Command = function (execute, undo, value) {
    this.execute = execute;
    this.undo = undo;
    this.value = value;
}

export let AddCommand = function (value) {
    return new Command(add, sub, value);
};

export let SubCommand = function (value) {
    return new Command(sub, add, value);
};

export let MulCommand = function (value) {
    return new Command(mul, div, value);
};

export let DivCommand = function (value) {
    return new Command(div, mul, value);
};

export const CommandsList = (str, value) => {
    if (str === 'add') {
        return new AddCommand(value);
    }
}
export let Calculator = function () {
    let current = 0;
    let commands = [];

    function action(command) {
        let name = command.execute.toString().substr(9, 3);
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    return {
        execute: function (command) {
            current = command.execute(current, command.value);
            commands.push(command);
            log.add(action(command) + ": " + command.value);
            log.show();
        },

        undo: function () {
            let command = commands.pop();
            current = command.undo(current, command.value);
            log.add("Undo " + action(command) + ": " + command.value);
        },

        getCurrentValue: function () {
            return current;
        }
    }
}

// showLog helper

let log = (function () {
    let log = "";

    return {
        add: function (msg) { log += msg + "\n"; },
        show: function () {
            console.log(log); log = "";
        }
    }
})();


function run() {
    let calculator = new Calculator();

    // issue commands

    calculator.execute(new AddCommand(100));
    calculator.execute(new SubCommand(24));
    calculator.execute(new MulCommand(6));
    calculator.execute(new DivCommand(2));

    // reverse last two commands

    calculator.undo();
    calculator.undo();


    log.add("\nValue: " + calculator.getCurrentValue());
    log.show();
}

export { run }
