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
    const firstTask = first(this.tasks),
          firstTaskSynchronous = firstTask.isSynchronous();

    setTimeout(() => {
      if (firstTaskSynchronous) { ///
        const synchronousTask = firstTask;  ///

        this.executeSynchronousTask(synchronousTask);
      } else {
        const asynchronousTask = firstTask;  ///

        this.executeAsynchronousTask(asynchronousTask);
      }
    }, 0);
  }

  executeSynchronousTask(synchronousTask) {
    synchronousTask.execute();

    this.next();
  }

  executeAsynchronousTask(asynchronousTask) {
    const next = this.next.bind(this);

    asynchronousTask.execute(function() { ///
      const callback = asynchronousTask.getCallback();
      
      callback.apply(asynchronousTask, arguments);
      
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
