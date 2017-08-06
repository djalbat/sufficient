'use strict';

const Task = require('../task');

class AsynchronousTask extends Task {
  constructor(method, model, view, ...remainingArguments) {
    const synchronous = false,
          lastRemainingArgument = remainingArguments.pop(),
          callback = lastRemainingArgument; ///

    super(synchronous, method, model, view, remainingArguments);

    this.callback = callback;
  }
  
  getCallback() {
    return this.callback;
  }

  execute(callback) {
    const method = this.getMethod(),
          model = this.getModel(),
          view = this.getView(),
          remainingArguments = this.getRemainingArguments();

    method.call(null, model, view, ...remainingArguments, callback);
  }
}

module.exports = AsynchronousTask;
