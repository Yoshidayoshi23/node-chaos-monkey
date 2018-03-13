const EventEmitter = require("events");

class ImmediateSchedule extends EventEmitter {
  constructor(properties) {
    super();
    this.properties = properties;
    setTimeout(() => {
      
    }, timeout);
  }

  start(){
    console.log(`One time schedule is about to emit start event`);
    this.emit("start", {});
  }
}

module.exports = ImmediateSchedule;