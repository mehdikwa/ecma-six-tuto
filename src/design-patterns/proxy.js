function SubjectFunction() {

    this.getSubjectValue = function(city) {

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
        getSubjectValue: function(address) {
            if (!proxyFunction[address]) {
                proxyFunction[address] = subjectFunction.getSubjectValue(address);
            }
            log.add(address + ": " + proxyFunction[address]);
            return proxyFunction[address];
        },
        getCount: function() {
            var count = 0;
            for (var code in proxyFunction) { count++; }
            return count;
        }
    };
};

// log helper

var log = (function() {
    var log = "";

    return {
        add: function(msg) { log += msg + "\n"; },
        show: function() { console.log(log); log = ""; }
    }
})();

function run() {
    var proxyFunction = new ProxyFunction();

    // geolocation requests

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
