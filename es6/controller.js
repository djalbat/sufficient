'use strict';

class Controller {
  assignMethods(createMethods, scheduler, model, view, ...remainingArguments) {
    const methods = createMethods(scheduler, model, view, ...remainingArguments);

    Object.assign(this, methods);
  }
}

const controller = new Controller();

module.exports = controller;
