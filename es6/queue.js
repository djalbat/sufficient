'use strict';

const necessary = require('necessary');

const { arrayUtilities } = necessary,
      { first } = arrayUtilities;

class Queue {
  constructor(tasks) {
    this.tasks = tasks;
  }

  addTask(task) {
    this.tasks.push(task);
    
    const tasksLength = this.getTasksLength();
    
    if (tasksLength === 1) {
      this.executeNextTask();
    }
  }

  executeNextTask() {
    const firstTask = first(this.tasks),
          nextTask = firstTask, ///
          nextTaskSynchronous = nextTask.isSynchronous();
    
    if (nextTaskSynchronous) { ///
      const synchronousTask = nextTask;  ///

      this.executeSynchronousTask(synchronousTask);
    } else {
      const asynchronousTask = nextTask;  ///

      this.executeAsynchronousTask(asynchronousTask);
    }
  }

  executeSynchronousTask(synchronousTask) {
    synchronousTask.execute();

    this.next();
  }

  executeAsynchronousTask(asynchronousTask) {
    asynchronousTask.execute(() => {
      const callback = asynchronousTask.getCallback();
      
      callback.call(asynchronousTask, ...arguments);
      
      this.next();
    });
  }

  next() {
    this.tasks.shift();

    const empty = this.isEmpty();

    if (!empty) {
      this.executeNextTask();
    }
  }
  
  getTasksLength() {
    const tasksLength = this.tasks.length;
    
    return tasksLength;
  }

  isEmpty() {
    const tasksLength = this.getTasksLength(),
          empty = (tasksLength === 0);

    return empty;
  }

  static fromNothing() {
    const tasks = [],
          queue = new Queue(tasks);

    return queue;
  }
}

module.exports = Queue;
