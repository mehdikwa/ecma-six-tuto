function Subject(){
    // tableau d'observable
    this.observers = [];
}

Subject.prototype = {
    // implem
    subscribe: function(fn)
    {
        this.observers.push(fn)
    },
    unsubscribe: function(fnToRemove)
    {
        this.observers = this.observers.filter( fn => {
            if (fn != fnToRemove)
                return fn
        })
    },
    fire: function()
    {
        this.observers.forEach( fn => {
            fn.call()
        })
    }
}
// 1er observable output 'ca marche!'
// 2eme observable output 'ca marche encore!'
function ObserverTest(){
    console.log("ca marche!")
}

function AnotherFunction(){
    console.log("ca marche toujours!")
}

//subscribing the functions
function run() {
    // subscribe les functions et les executer tous a la fois
    const subject = new Subject();
    subject.subscribe(ObserverTest);
    subject.subscribe(AnotherFunction);

    subject.fire()
}

run();
