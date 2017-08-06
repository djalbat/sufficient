'use strict';

class SynchronousTask {
  constructor(method, model, view, ...remainingArguments) {

    
    this.method = method;

    this.model = model;

    this.view = view;

    this.remainingArguments = remainingArguments;


    
    
  }

  execute(done) {
    this.method.call(null, this.model, this.view, ...this.remainingArguments);

    done();
  }
}

module.exports = SynchronousTask;
