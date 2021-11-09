"use strict";

import Queue from "./queue";

export default class Scheduler {
  constructor(queue) {
    this.queue = queue;
  }

  getQueue() {
    return this.queue;
  }

  setDeferred(deferred) { this.queue.setDeferred(deferred); }

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
