"use strict";

import Task from "../task";

export default class SynchronousTask extends Task {
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
