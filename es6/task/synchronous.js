'use strict';

const Task = require('../task');

class SynchronousTask extends Task {
  constructor(method, model, view, ...remainingArguments) {
    const synchronous = true;
    
    super(synchronous, method, model, view, remainingArguments);
  }

  execute() {
    const method = this.getMethod(),
          model = this.getModel(),
          view = this.getView(),
          remainingArguments = this.getRemainingArguments();
    
    method.call(null, model, view, ...remainingArguments);
  }
}

module.exports = SynchronousTask;
