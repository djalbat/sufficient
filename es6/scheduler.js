"use strict";

const Queue = require("./queue");

class Scheduler {
  constructor(queue) {
    this.queue = queue;
  }

  addTaskToQueue(task) {
    this.queue.addTask(task);
  }

  executeTaskImmediately(task) {
    const queueEmpty = this.queue.isEmpty(),
          successful = queueEmpty;  //

    if (queueEmpty) {
      this.queue.addTask(task);
    }

    return successful;
  }

  static fromNothing() {
    const queue = Queue.fromNothing(),
          scheduler = new Scheduler(queue);

    return scheduler;
  }
}

module.exports = Scheduler;
