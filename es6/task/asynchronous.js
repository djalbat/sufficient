'use strict';

const Task = require('../task');

class AsynchronousTask extends Task {
  constructor(method, ...remainingArguments) {
    const synchronous = false,
          lastRemainingArgument = remainingArguments.pop(),
          callback = lastRemainingArgument; ///

    super(synchronous, method, remainingArguments);

    this.callback = callback;
  }
  
  getCallback() {
    return this.callback;
  }

  execute(callback) {
    const method = this.getMethod(),
          remainingArguments = this.getRemainingArguments();

    method.call(null, ...remainingArguments, callback);
  }
}

module.exports = AsynchronousTask;
