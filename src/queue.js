"use strict";

import { arrayUtilities } from "necessary";

const { first } = arrayUtilities;

export default class Queue {
  constructor(tasks) {
    this.tasks = tasks;
  }

  addTask(task) {
    const empty = this.isEmpty();

    this.tasks.push(task);

    if (empty) {
      this.executeFirstTask();
    }
  }

  executeFirstTask() {
    const firstTask = first(this.tasks);

    setTimeout(() => {
      const task = firstTask;  ///

      this.executeTask(task);
    }, 0);
  }

  executeTask(task) {
    const next = this.next.bind(this);

    task.execute(function() { ///
      const callback = task.getCallback();
      
      callback.apply(task, arguments);
      
      next();
    });
  }

  next() {
    this.tasks.shift();

    const empty = this.isEmpty();

    if (!empty) {
      this.executeFirstTask();
    }
  }

  isEmpty() {
    const tasksLength = this.tasks.length,
          empty = (tasksLength === 0);

    return empty;
  }

  static fromNothing() {
    const tasks = [],
          queue = new Queue(tasks);

    return queue;
  }
}
