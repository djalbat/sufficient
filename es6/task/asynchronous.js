"use strict";

import Task from "../task";

export default class AsynchronousTask extends Task {
  constructor(asynchronousMethod, ...remainingArgumentsThenCallback) {
    const synchronous = false,
          method = asynchronousMethod,  ///
          callback = remainingArgumentsThenCallback.pop(), ///
          remainingArguments = remainingArgumentsThenCallback;  ///

    super(synchronous, method, remainingArguments);

    this.callback = callback;
  }
  
  getCallback() {
    return this.callback;
  }

  execute(callback) {
    const method = this.getMethod(),
          asynchronousMethod = method,  ///
          remainingArguments = this.getRemainingArguments();

    asynchronousMethod.call(null, ...remainingArguments, callback);
  }
}
