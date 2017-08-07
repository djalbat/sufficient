# Sufficient

An MVC framework with scheduling.

This framework came into being as a result of work on [Juxtapose](https://github.com/djalbat/Juxtapose), which provides the means to create an application's view. The corresponding model will always be bespoke, so to speak, so there are no means to create it either here or in Juxtapose. That leaves the controller, which is implemented here. The reason that Sufficient is called an MVC framework is that the more or less prescriptive guidelines for putting an application together using these approaches are elucidated in what follows.
 
To gain an idea of how to put an application together using Sufficient and Juxtapose, it is a very good idea to watch the last few videos in the [The Joy of JSX](https://vimeo.com/album/4562013) series of videos that went with Juxtapose. In particular the last video, [10 Traditional MVC](https://vimeo.com/album/4562013/video/227405572), is pretty much compulsory viewing. In particular it describes an MVC example application which you should probably get up and running yourself. It's [controller](https://github.com/djalbat/Juxtapose/blob/master/es6/examples/mvcApp/controller.js) is identical to the one here, in fact, aside from the lack of a reference to a scheduler. In what follows it is tacitly assumed that you have more than a passing familiarity with this material. 

In summary, all that is to be found here is a [scheduler](https://github.com/djalbat/Sufficient/blob/master/es6/scheduler.js) and a modified [controller](https://github.com/djalbat/Sufficient/blob/master/es6/controller.js), together with the guidelines spelled out to enable you to put it all together. The scheduler seems to be essential if you want to write an application that encompasses asynchronous behaviour such as accessing the file system or has concurrent functionality.  

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
      pathUtilities = sufficient.pathUtilities,
      arrayUtilities = sufficient.arrayUtilities;
```

## Compiling from source

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Contact

- james.smith@djalbat.com
- http://djalbat.com
