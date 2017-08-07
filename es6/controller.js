'use strict';


class Controller {
  assignMethods(createMethods, schedule, model, view, ...remainingArguments) {
    const methods = createMethods(schedule, model, view, ...remainingArguments);

    Object.assign(this, methods);
  }
}

const controller = new Controller();

module.exports = controller;
