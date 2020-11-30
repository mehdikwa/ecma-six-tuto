(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function Click() {
    this.handlers = [];
}

Click.prototype = {

    subscribe: function subscribe(fn) {
        this.handlers.push(fn);
    },

    unsubscribe: function unsubscribe(fn) {
        this.handlers = this.handlers.filter(function (item) {
            if (item !== fn) {
                return item;
            }
        });
    },

    fire: function fire(o, thisObj) {
        var scope = thisObj || undefined;
        this.handlers.forEach(function (item) {
            item.call(scope, o);
        });
    }
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

    var clickHandler = function clickHandler(item) {
        log.add("fired: " + item);
    };

    var click = new Click();

    click.subscribe(clickHandler);
    click.fire('event #1');
    click.unsubscribe(clickHandler);
    click.fire('event #2');
    click.subscribe(clickHandler);
    click.fire('event #3');

    log.show();
}
run();

},{}]},{},[1]);
