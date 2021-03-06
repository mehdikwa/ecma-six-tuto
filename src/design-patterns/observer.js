function Click() {
    this.handlers = [];  // observers
}

Click.prototype = {

    subscribe: function(fn) {
        this.handlers.push(fn);
    },

    unsubscribe: function(fn) {
        this.handlers = this.handlers.filter(
            function(item) {
                if (item !== fn) {
                    return item;
                }
            }
        );
    },

    fire: function(o, thisObj) {
        let scope = thisObj || undefined;
        this.handlers.forEach(function(item) {
            item.call(scope, o);
        });
    }
}

// showLog helper

let showLog = (function() {
    let log = "";

    return {
        add: function(msg) { log += msg + "\n"; },
        show: function() { console.log(log); log = ""; }
    }
})();

function run() {

    let clickHandler = function(item) {
        showLog.add("fired: " + item);
    };

    let click = new Click();

    click.subscribe(clickHandler);
    click.fire('event #1');
    click.unsubscribe(clickHandler);
    click.fire('event #2');
    click.subscribe(clickHandler);
    click.fire('event #3');

    showLog.show();
}
run();
