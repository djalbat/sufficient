'use strict';

const necessary = require('necessary');

const { array } = necessary,
      { first } = array;

class Queue {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    const empty = this.isEmpty();

    this.tasks.push(task);

    if (empty) {
      task.execute(this.intermediateCallback.bind(this));
    }
  }

  intermediateCallback() {
    const firstTask = first(this.tasks);

    if (firstTask.callback) {
      firstTask.callback.apply(firstTask, arguments);
    }

    this.tasks.shift();

    this.next();
  }

  next() {
    const empty = this.isEmpty();

    if (!empty) {
      const firstTask = first(this.tasks);

      firstTask.execute(this.intermediateCallback.bind(this));
    }
  }

  isEmpty() {
    const tasksLength = this.tasks.length,
          empty = (tasksLength === 0);

    return empty;
  }
}

module.exports = Queue;
