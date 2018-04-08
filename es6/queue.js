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
      this.executeFirstTask();
    }
  }

  executeFirstTask() {
    const firstTask = first(this.tasks),
          firstTaskSynchronous = firstTask.isSynchronous();
    
    if (firstTaskSynchronous) { ///
      const synchronousFirstTask = firstTask;  ///

      this.executeSynchronousFirstTask(synchronousFirstTask);
    } else {
      const asynchronousFirstTask = firstTask;  ///

      this.executeAsynchronousFirstTask(asynchronousFirstTask);
    }
  }

  executeSynchronousFirstTask(synchronousFirstTask) {
    synchronousFirstTask.execute();

    this.next();
  }

  executeAsynchronousFirstTask(asynchronousFirstTask) {
    asynchronousFirstTask.execute(function() {
      const callback = asynchronousFirstTask.getCallback();
      
      callback.apply(asynchronousFirstTask, arguments);
      
      this.next();
    }.bind(this));
  }

  next() {
    this.tasks.shift();

    const empty = this.isEmpty();

    if (!empty) {
      this.executeFirstTask();
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
