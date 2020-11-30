let Country = function(name) {
    this.name = name;
}

Country.prototype = {

    applyFor: function() {
        // access multiple subsystems...
        let country = "none";
        if (new FranceCountry().verify(this.name)) {
            country = "France";
        } else if (new EnglandCountry().verify(this.name)) {
            country = "denied";
        } else if (new NetherlandsCountry().verify(this.name)) {
            country = "denied";
        } else {
            country = "!not found"
        }
        return country;
    }
}

var FranceCountry = function() {

    this.verify = function(name) {
        if (name === "France") {
            return true;
        } else {
            return false;
        }
    }
}
var EnglandCountry = function() {

    this.verify = function(name) {
        if (name === "England") {
            return true;
        } else {
            return false;
        }
    }
}
var NetherlandsCountry = function() {

    this.verify = function(name) {
        if (name === "France") {
            return true;
        } else {
            return false;
        }
    }
}

function run() {
    let country1 = new Country("France");
    let notFoundCountry = new Country("None");
    var result = country1.applyFor();
    var notFoundResult = notFoundCountry.applyFor();

    console.log(result);
    console.log(notFoundResult);
}
run()
