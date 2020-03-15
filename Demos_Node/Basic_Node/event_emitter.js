const events = require("events");

const emitter = new events.EventEmitter();

emitter.on("someEvent", function(message) {
  console.log(message);
});

emitter.emit("someEvent", "the event was emitted");
