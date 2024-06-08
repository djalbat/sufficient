# Sufficient

An MVC framework with scheduling.

This framework came into being as a result of [Juxtapose](https://github.com/djalbat/Juxtapose), which provides the means to create an application's view. The corresponding model will always be bespoke, so there are no means to create it either here or in Juxtapose. That leaves the controller, which is implemented here. The reason that Sufficient is called an MVC framework is that the more or less prescriptive guidelines for putting an application together using these approaches are spelled out in what follows.
 
In summary, all that is to be found here is a [scheduler](https://github.com/djalbat/Sufficient/blob/master/es6/scheduler.js) and a modified [controller](https://github.com/djalbat/Sufficient/blob/master/es6/controller.js), together with prescriptions which you should follow in order to make use of them. The scheduler will be needed if you want to write an application that encompasses asynchronous behaviour such as accessing the file system, or has concurrent functionality.

## Installation

You can install Sufficient with [npm](https://www.npmjs.com/):

    npm install sufficient

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/sufficient.git

...and then install the dependencies with npm from within the project's root directory:

    npm install

## Usage

The basic idea is to create a view and a model and to pass these, together with a scheduler and a `createMethods()` function to make use of them all, to the `assignMethods()` method of the `controller` singleton. Only once these methods have been assigned to the controller is the view attached to the browser's DOM:
    
```
import { Scheduler, controller } from "sufficient";

const scheduler = Scheduler.fromNothing(),
      model = new Model(),
      view =

        <View />

      ;

controller.assignMethods(createMethods, scheduler, model, view);

const body = new Body();

body.mount(view);
```
    
### Invoking controller methods

Aside from being imported above, the controller should normally only be imported, and therefore its methods only invoked, from within the view classes. Furthermore, its methods should be invoked only in response to user events. Typically:

```
class ResetPasswordButton extends Element {
  clickHandler(event, element) {
    controller.resetPassword();
  }

  ...

  didMount() {
    this.onClick(this.clickHandler, this);
  }

  willUnmount() {
    this.offClick(this.clickHandler, this);
  }

  ...
}
```

Here the `clickHandler()` method will only be invoked in response to user interaction and this can only happen once the view has been attached to the DOM. And, in turn, this happens only after all of the requisite methods have been attached to the `controller` object as described above.

### Creating tasks

It is the job of controller methods to be available to the view as well as to create the tasks that manage the relationship between model and view or to carry out any other application functionality. Closure gives them access to the scheduler, the model and the view, with the aforementioned functionality typically being implemented by helper methods:

```
import { Task } from "sufficient";

import setPasswordHelper from "./helper/setPassword";

function createMethods(scheduler, model, view) {
  function setPassword(password) {
    const done = () => {},  ///
          setPasswordTask = new Task(setPasswordHelper, model, view, done);

    scheduler.addTaskToQueue(setPasswordTask);
  }

  return ({
    resetPassword
  });
}
```

Note the vacuous `done()` callback. The `Task` class constructor expects the last of its arguments to be a callback and will invoke it once the task has been executed, therefore such a method must be passed. Alternatively, a `done` argument could have been included in the `setPassword(...)` method's arguments and simply passed on. Here the assumption is that the caller requires no notification via a callback that the task has been executed.

Now the `createMethods()` function can export a `setPassword()` function that instantiates the requisite task and schedules it:

```
import SetPasswordTask from "./task/setPassword";

function createMethods(scheduler, model, view) {
  function setPassword(password) {
    const setPasswordTask = new SetPasswordTask(model, view, done);

    scheduler.addTaskToQueue(setPasswordTask);
  }

  return ({
    setPassword
  });
}
```

The tasks and scheduler are agnostic to method arguments. In the above examples the references to the model and view have been utilised but any number of arguments can be passed to the task constructor. A look at the [implementation](https://github.com/djalbat/sufficient/blob/master/src/task.js) of the Task class gashould convince.

## Building

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Contact

* james.smith@djalbat.com
