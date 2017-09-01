# Sufficient

An MVC framework with scheduling.

This framework came into being as a result of work on [Juxtapose](https://github.com/djalbat/Juxtapose), which provides the means to create an application's view. The corresponding model will always be bespoke, so to speak, so there are no means to create it either here or in Juxtapose. That leaves the controller, which is implemented here. The reason that Sufficient is called an MVC framework is that the more or less prescriptive guidelines for putting an application together using these approaches are spelled out in what follows.
 
To gain an idea of how to put an application together using Sufficient and Juxtapose, it is a very good idea to watch the last few videos in the [The Joy of JSX](https://vimeo.com/album/4562013) series that went with Juxtapose, especially the last video, [10 Traditional MVC](https://vimeo.com/album/4562013/video/227405572). This video describes an MVC example application which you should probably get up and running yourself. It's [controller](https://github.com/djalbat/Juxtapose/blob/master/es6/examples/mvcApp/controller.js) is identical to the one here, in fact, aside from the lack of a reference to a scheduler. In what follows it is tacitly assumed that you have more than a passing familiarity with this material. 

In summary, all that is to be found here is a [scheduler](https://github.com/djalbat/Sufficient/blob/master/es6/scheduler.js) and a modified [controller](https://github.com/djalbat/Sufficient/blob/master/es6/controller.js), together with some guidelines which you should follow in order to put it all together. The scheduler seems to be essential if you want to write an application that encompasses asynchronous behaviour such as accessing the file system or has concurrent functionality.  

## Installation

You can install Sufficient with [npm](https://www.npmjs.com/):

    npm install sufficient

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/Sufficient.git

...and then install the sufficient modules with npm from within the project's root directory:

    npm install

## Usage

If you are building with [Node.js](http://nodejs.org) the usage is as follows:

```js
const sufficient = require('sufficient'),
      { Scheduler, controller } = sufficient;
```

## Compiling from source

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug
    
## Main application architecture

The basic idea is to create the view and model and to pass references to these, together with references to a scheduler and a method to make use of them all, to the `assignMethods()` method of the `controller` singleton. Only once methods have been assigned to the controller is the view attached to the browser's DOM:  
    
```js
const scheduler = new Scheduler(),
      model = new Model(),
      view = <View />;

controller.assignMethods(createMethods, scheduler, model, view);

const body = new Body();

body.prepend(view);
```
    
## Invoking controller methods

Aside from being required above, the controller should only be required, and therefore its methods only invoked, from view classes. And from within these classes controller methods should only be referenced at runtime and not compile time, so to speak. Remember that they are assigned dynamically after the view has been created and will therefore not be available when this happens. For example:

```js
class ResetPasswordButton extends Element {
  clickHandler() {
    controller.resetPassword();
  }
  
  ...

  initialise() {
    this.onClick(this.clickHandler);
  }
  
  ...
}
```

The assignment `this.onClick(controller.resetPassword)` would not work.

## Creating tasks

It is the job of controller methods to be available to the view as well as to create the tasks that manage the relationship between model and view or to carry out any other application functionality. Closure gives them access to the scheduler, the model and the view, with the functionality typically being implemented by helper methods:

```js
const sufficient = require('sufficient');

const { SynchronousTask, AsynchronousTask } = sufficient;

function createMethods(scheduler, model, view) {
  function setPassword(password) {
    const setPasswordAsynchronousTask = new AsynchronousTask(helper.setPassword, model, view, done);

    scheduler.addTaskToQueue(setPasswordAsynchronousTask);
    
    function done() {
    
    }
  }

  function resetPassword() {
    const resetPasswordSynchronousTask = new SynchronousTask(helper.resetPassword, model, view);

    scheduler.addTaskToQueue(resetPasswordSynchronousTask);
  }

  return ({
    setPassword: setPassword,
    resetPassword: resetPassword
  });
}
```

Note that if there is no need to pass control back to the view, the asynchronous functionality can mopped up by vacuous `done()` methods within the controller methods themselves.

In the case of asynchronous tasks the scheduler will pass its own intermediate callback to the corresponding method in order to give itself the opportunity to remove the task from its queue. It will then invoke the given callback method, which must be the last argument passed to the constructor, passing on the arguments. 

The tasks and scheduler are also agnostic to the method arguments. In the above examples the references to the model and view have been utilised but any number of arguments can be passed to the task constructors. A look at the [SynchronousTask](https://github.com/djalbat/Sufficient/blob/master/es6/task/synchronous.js) and [AsynchronousTask](https://github.com/djalbat/Sufficient/blob/master/es6/task/asynchronous.js) classes should convince. The scheduler can also be passed to a concurrency manager, say, that can also create tasks and add them to the queue.

## Contact

- james.smith@djalbat.com
- http://djalbat.com
