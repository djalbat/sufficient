'use strict';

const necessary = require('necessary');

const { arrayUtilities } = necessary,
      { first } = arrayUtilities;

class Queue {
  constructor() {
    this.tasks = [];
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
      this.executeSynchronousFirstTask();
    } else {
      this.executeAsynchronousFirstTask();
    }
  }

  executeAsynchronousFirstTask() {
    const firstTask = first(this.tasks);

    firstTask.execute(function() {
      const callback = firstTask.getCallback();
      
      callback.apply(firstTask, arguments);
      
      this.next();
    }.bind(this));
  }

  executeSynchronousFirstTask() {
    const firstTask = first(this.tasks);

    firstTask.execute();
    
    this.next();
  }
  
  next() {
    this.tasks.shift();

    const empty = this.isEmpty();

    if (!empty) {
      const firstTask = first(this.tasks);

      this.executeFirstTask(firstTask);
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
}

module.exports = Queue;
