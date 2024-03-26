
/*
Create an event emitter that includes the following methods

--on(event, callback): Subscribe to an event and return unsubscribe function.

--emit(event, args): Emits an event with the specified arguments.
*/

class Emitter{
    map;
    constructor(){
        this.map = new Map();
    }

    on(event, callback){
        if(this.map.has(event)){
            this.map.get(event).add(callback);
        }else{
            this.map.set(event, new Set([callback]));
        }

        return () => this.map.get(event).delete(callback);
    };

    emit(event, ...args){
      this.map.get(event).forEach(callback => {
        callback(args)
      });
    }
}

const emitter = new Emitter();
const unSubA = emitter.on("onClick",(value)=>console.log(" A " + value));
const unSubB = emitter.on("onClick",(value)=>console.log(" B " + value));
const unSubC = emitter.on("onClick",(value)=>console.log(" C " + value));

const unSubD = emitter.on("onMove",(value)=>console.log(" D " + value));
const unSubE = emitter.on("onMove",(value)=>console.log(" E " + value));

emitter.emit("onMove","hello","there")
unSubB();
emitter.emit("onClick","hey")