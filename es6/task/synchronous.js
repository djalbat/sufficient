'use strict';

const Task = require('../task');

class SynchronousTask extends Task {
  constructor(method, ...remainingArguments) {
    const synchronous = true;
    
    super(synchronous, method, remainingArguments);
  }

  execute() {
    const method = this.getMethod(),
          remainingArguments = this.getRemainingArguments();
    
    method.call(null, ...remainingArguments);
  }
}

module.exports = SynchronousTask;
