"use strict";

const sufficient = require("./lib");

const { Scheduler, Task } = sufficient;

class ExampleTask extends Task {
  constructor(done) {
    super(exampleMethod, done);
  }
}

function exampleMethod(done) {
  console.log("Example!")

  done();
}

function done() {
  console.log("Done!")
}

const scheduler = Scheduler.fromNothing(),
      exampleTask = new ExampleTask(done);

scheduler.addTaskToQueue(exampleTask);
