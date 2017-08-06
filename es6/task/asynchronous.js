'use strict';

class AsynchronousTask {
  constructor(method, model, view, ...remainingArguments) {
    const lastRemainingArgument = remainingArguments.pop();
    
    this.method = method;

    this.model = model;

    this.view = view;

    this.remainingArguments = remainingArguments;
    
    const done = lastRemainingArgument; ///

    this.done = done;
  }

  execute(callback) {
    this.method.call(null, this.model, this.view, ...this.remainingArguments, callback);
  }
  
  callback() {
    this.done();
  }
}

module.exports = AsynchronousTask;
