'use strict';

const Task = require('../task');

class SynchronousTask extends Task {
  constructor(synchronousMethod, ...remainingArguments) {
    const synchronous = true,
          method = synchronousMethod; ///
    
    super(synchronous, method, remainingArguments);
  }

  execute() {
    const method = this.getMethod(),
          synchronousMethod = method, ///
          remainingArguments = this.getRemainingArguments();

    synchronousMethod.call(null, ...remainingArguments);
  }
}

module.exports = SynchronousTask;
