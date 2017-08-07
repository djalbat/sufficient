'use strict';

const Queue = require('./queue');

class Scheduler {
  constructor() {
    this.queue = new Queue();
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
}

module.exports = Scheduler;
