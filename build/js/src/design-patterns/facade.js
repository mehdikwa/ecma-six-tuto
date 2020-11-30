(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var Country = function Country(name) {
    this.name = name;
};

Country.prototype = {

    applyFor: function applyFor() {
        var country = "none";
        if (new FranceCountry().verify(this.name)) {
            country = "France";
        } else if (new EnglandCountry().verify(this.name)) {
            country = "denied";
        } else if (new NetherlandsCountry().verify(this.name)) {
            country = "denied";
        } else {
            country = "!not found";
        }
        return country;
    }
};

var FranceCountry = function FranceCountry() {

    this.verify = function (name) {
        if (name === "France") {
            return true;
        } else {
            return false;
        }
    };
};
var EnglandCountry = function EnglandCountry() {

    this.verify = function (name) {
        if (name === "England") {
            return true;
        } else {
            return false;
        }
    };
};
var NetherlandsCountry = function NetherlandsCountry() {

    this.verify = function (name) {
        if (name === "France") {
            return true;
        } else {
            return false;
        }
    };
};

function run() {
    var country1 = new Country("France");
    var notFoundCountry = new Country("None");
    var result = country1.applyFor();
    var notFoundResult = notFoundCountry.applyFor();

    console.log(result);
    console.log(notFoundResult);
}
run();

},{}]},{},[1]);
