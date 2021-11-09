"use strict";

import { arrayUtilities } from "necessary";

const { first } = arrayUtilities;

export default class Queue {
  constructor(tasks, deferred) {
    this.tasks = tasks;
    this.deferred = deferred;
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

    if (this.deferred) {
      defer(() => {
        const task = firstTask;  ///

        this.executeTask(task);
      });

      return;
    }

    const task = firstTask;  ///

    this.executeTask(task);
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
          deferred = true,
          queue = new Queue(tasks, deferred);

    return queue;
  }

  static fromDeferred(deferred) {
    const tasks = [],
          queue = new Queue(tasks, deferred);

    return queue;
  }
}

function defer(func) {
  setTimeout(func, 0);
}
