"use strict";

import Queue from "./queue";

export default class Scheduler {
  constructor(queue) {
    this.queue = queue;
  }

  getQueue() {
    return this.queue;
  }

  addTaskToQueue(task) {
    this.queue.addTask(task);
  }

  executeImmediately(callback) {
    let successful = false;

    const queueEmpty = this.queue.isEmpty();

    if (queueEmpty) {
      callback();

      successful = true;
    }

    return successful;
  }

  executeTaskImmediately(task) {
    let successful = false;

    const queueEmpty = this.queue.isEmpty();

    if (queueEmpty) {
      this.queue.addTask(task);

      successful = true;
    }

    return successful;
  }

  static fromNothing() {
    const queue = Queue.fromNothing(),
          scheduler = new Scheduler(queue);

    return scheduler;
  }
}
