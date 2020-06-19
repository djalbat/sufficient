"use strict";

const controller = {};

function assignMethods(createMethods, scheduler, model, view, ...remainingArguments) {
  const methods = createMethods(scheduler, model, view, ...remainingArguments);

  Object.assign(controller, methods);
}

Object.assign(controller, {
  assignMethods
});

export default controller;
