(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

exports.__esModule = true;
function add(x, y) {
    return x + y;
}
function sub(x, y) {
    return x - y;
}
function mul(x, y) {
    return x * y;
}
function div(x, y) {
    return x / y;
}

var Command = function Command(execute, undo, value) {
    this.execute = execute;
    this.undo = undo;
    this.value = value;
};

var AddCommand = function AddCommand(value) {
    return new Command(add, sub, value);
};

var SubCommand = function SubCommand(value) {
    return new Command(sub, add, value);
};

var MulCommand = function MulCommand(value) {
    return new Command(mul, div, value);
};

var DivCommand = function DivCommand(value) {
    return new Command(div, mul, value);
};

var Calculator = function Calculator() {
    var current = 0;
    var commands = [];

    function action(command) {
        var name = command.execute.toString().substr(9, 3);
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    return {
        execute: function execute(command) {
            current = command.execute(current, command.value);
            commands.push(command);
            log.add(action(command) + ": " + command.value);
        },

        undo: function undo() {
            var command = commands.pop();
            current = command.undo(current, command.value);
            log.add("Undo " + action(command) + ": " + command.value);
        },

        getCurrentValue: function getCurrentValue() {
            return current;
        }
    };
};

var log = function () {
    var log = "";

    return {
        add: function add(msg) {
            log += msg + "\n";
        },
        show: function show() {
            console.log(log);log = "";
        }
    };
}();

function run() {
    var calculator = new Calculator();

    calculator.execute(new AddCommand(100));
    calculator.execute(new SubCommand(24));
    calculator.execute(new MulCommand(6));
    calculator.execute(new DivCommand(2));

    calculator.undo();
    calculator.undo();

    log.add("\nValue: " + calculator.getCurrentValue());
    log.show();
}

exports.run = run;

},{}],2:[function(require,module,exports){
'use strict';

var _command = require('./command.js');

(0, _command.run)();

},{"./command.js":1}]},{},[2]);
