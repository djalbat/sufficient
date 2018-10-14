'use strict';

const Task = require('../task');

class AsynchronousTask extends Task {
  constructor(asynchronousMethod, ...remainingArgumentsThenDone) {
    const synchronous = false,
          method = asynchronousMethod,  ///
          done = remainingArgumentsThenDone.pop(), ///
          remainingArguments = remainingArgumentsThenDone;  ///

    super(synchronous, method, remainingArguments);

    this.done = done;
  }
  
  getDone() {
    return this.done;
  }

  execute(done) {
    const method = this.getMethod(),
          asynchronousMethod = method,  ///
          remainingArguments = this.getRemainingArguments();

    asynchronousMethod.call(null, ...remainingArguments, done);
  }
}

module.exports = AsynchronousTask;
