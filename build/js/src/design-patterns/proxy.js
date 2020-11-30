(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function SubjectFunction() {

    this.getSubjectValue = function (city) {

        switch (city) {
            case "Amsterdam":
                return "Netherlands";
            case "London":
                return "England";
            default:
                return "France";

        }
    };
}

function ProxyFunction() {
    var subjectFunction = new SubjectFunction();
    var proxyFunction = {};

    return {
        getSubjectValue: function getSubjectValue(address) {
            if (!proxyFunction[address]) {
                proxyFunction[address] = subjectFunction.getSubjectValue(address);
            }
            log.add(address + ": " + proxyFunction[address]);
            return proxyFunction[address];
        },
        getCount: function getCount() {
            var count = 0;
            for (var code in proxyFunction) {
                count++;
            }
            return count;
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
    var proxyFunction = new ProxyFunction();

    proxyFunction.getSubjectValue("Paris");
    proxyFunction.getSubjectValue("London");
    proxyFunction.getSubjectValue("London");
    proxyFunction.getSubjectValue("Amsterdam");
    proxyFunction.getSubjectValue("Amsterdam");
    proxyFunction.getSubjectValue("London");
    proxyFunction.getSubjectValue("London");

    log.add("\nCache size: " + proxyFunction.getCount());
    log.show();
}
run();

},{}]},{},[1]);
