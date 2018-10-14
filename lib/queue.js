'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var arrayUtilities = necessary.arrayUtilities,
    first = arrayUtilities.first;

var Queue = function () {
  function Queue(tasks) {
    _classCallCheck(this, Queue);

    this.tasks = tasks;
  }

  _createClass(Queue, [{
    key: 'addTask',
    value: function addTask(task) {
      this.tasks.push(task);

      var tasksLength = this.getTasksLength();

      if (tasksLength === 1) {
        this.executeNextTask();
      }
    }
  }, {
    key: 'executeNextTask',
    value: function executeNextTask() {
      var firstTask = first(this.tasks),
          nextTask = firstTask,
          ///
      nextTaskSynchronous = nextTask.isSynchronous();

      if (nextTaskSynchronous) {
        ///
        var synchronousTask = nextTask; ///

        this.executeSynchronousTask(synchronousTask);
      } else {
        var asynchronousTask = nextTask; ///

        this.executeAsynchronousTask(asynchronousTask);
      }
    }
  }, {
    key: 'executeSynchronousTask',
    value: function executeSynchronousTask(synchronousTask) {
      synchronousTask.execute();

      this.next();
    }
  }, {
    key: 'executeAsynchronousTask',
    value: function executeAsynchronousTask(asynchronousTask) {
      var _arguments = arguments,
          _this = this;

      asynchronousTask.execute(function () {
        var callback = asynchronousTask.getCallback();

        callback.call.apply(callback, _arguments);

        _this.next();
      });
    }
  }, {
    key: 'next',
    value: function next() {
      this.tasks.shift();

      var empty = this.isEmpty();

      if (!empty) {
        this.executeNextTask();
      }
    }
  }, {
    key: 'getTasksLength',
    value: function getTasksLength() {
      var tasksLength = this.tasks.length;

      return tasksLength;
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      var tasksLength = this.getTasksLength(),
          empty = tasksLength === 0;

      return empty;
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing() {
      var tasks = [],
          queue = new Queue(tasks);

      return queue;
    }
  }]);

  return Queue;
}();

module.exports = Queue;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9xdWV1ZS5qcyJdLCJuYW1lcyI6WyJuZWNlc3NhcnkiLCJyZXF1aXJlIiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsIlF1ZXVlIiwidGFza3MiLCJ0YXNrIiwicHVzaCIsInRhc2tzTGVuZ3RoIiwiZ2V0VGFza3NMZW5ndGgiLCJleGVjdXRlTmV4dFRhc2siLCJmaXJzdFRhc2siLCJuZXh0VGFzayIsIm5leHRUYXNrU3luY2hyb25vdXMiLCJpc1N5bmNocm9ub3VzIiwic3luY2hyb25vdXNUYXNrIiwiZXhlY3V0ZVN5bmNocm9ub3VzVGFzayIsImFzeW5jaHJvbm91c1Rhc2siLCJleGVjdXRlQXN5bmNocm9ub3VzVGFzayIsImV4ZWN1dGUiLCJuZXh0IiwiY2FsbGJhY2siLCJnZXRDYWxsYmFjayIsImNhbGwiLCJhcmd1bWVudHMiLCJzaGlmdCIsImVtcHR5IiwiaXNFbXB0eSIsImxlbmd0aCIsInF1ZXVlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsV0FBUixDQUFsQjs7QUFFTSxJQUFFQyxjQUFGLEdBQXFCRixTQUFyQixDQUFFRSxjQUFGO0FBQUEsSUFDRUMsS0FERixHQUNZRCxjQURaLENBQ0VDLEtBREY7O0lBR0FDLEs7QUFDSixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7Ozs0QkFFT0MsSSxFQUFNO0FBQ1osV0FBS0QsS0FBTCxDQUFXRSxJQUFYLENBQWdCRCxJQUFoQjs7QUFFQSxVQUFNRSxjQUFjLEtBQUtDLGNBQUwsRUFBcEI7O0FBRUEsVUFBSUQsZ0JBQWdCLENBQXBCLEVBQXVCO0FBQ3JCLGFBQUtFLGVBQUw7QUFDRDtBQUNGOzs7c0NBRWlCO0FBQ2hCLFVBQU1DLFlBQVlSLE1BQU0sS0FBS0UsS0FBWCxDQUFsQjtBQUFBLFVBQ01PLFdBQVdELFNBRGpCO0FBQUEsVUFDNEI7QUFDdEJFLDRCQUFzQkQsU0FBU0UsYUFBVCxFQUY1Qjs7QUFJQSxVQUFJRCxtQkFBSixFQUF5QjtBQUFFO0FBQ3pCLFlBQU1FLGtCQUFrQkgsUUFBeEIsQ0FEdUIsQ0FDWTs7QUFFbkMsYUFBS0ksc0JBQUwsQ0FBNEJELGVBQTVCO0FBQ0QsT0FKRCxNQUlPO0FBQ0wsWUFBTUUsbUJBQW1CTCxRQUF6QixDQURLLENBQytCOztBQUVwQyxhQUFLTSx1QkFBTCxDQUE2QkQsZ0JBQTdCO0FBQ0Q7QUFDRjs7OzJDQUVzQkYsZSxFQUFpQjtBQUN0Q0Esc0JBQWdCSSxPQUFoQjs7QUFFQSxXQUFLQyxJQUFMO0FBQ0Q7Ozs0Q0FFdUJILGdCLEVBQWtCO0FBQUE7QUFBQTs7QUFDeENBLHVCQUFpQkUsT0FBakIsQ0FBeUIsWUFBTTtBQUM3QixZQUFNRSxXQUFXSixpQkFBaUJLLFdBQWpCLEVBQWpCOztBQUVBRCxpQkFBU0UsSUFBVCxpQkFBaUJDLFVBQWpCOztBQUVBLGNBQUtKLElBQUw7QUFDRCxPQU5EO0FBT0Q7OzsyQkFFTTtBQUNMLFdBQUtmLEtBQUwsQ0FBV29CLEtBQVg7O0FBRUEsVUFBTUMsUUFBUSxLQUFLQyxPQUFMLEVBQWQ7O0FBRUEsVUFBSSxDQUFDRCxLQUFMLEVBQVk7QUFDVixhQUFLaEIsZUFBTDtBQUNEO0FBQ0Y7OztxQ0FFZ0I7QUFDZixVQUFNRixjQUFjLEtBQUtILEtBQUwsQ0FBV3VCLE1BQS9COztBQUVBLGFBQU9wQixXQUFQO0FBQ0Q7Ozs4QkFFUztBQUNSLFVBQU1BLGNBQWMsS0FBS0MsY0FBTCxFQUFwQjtBQUFBLFVBQ01pQixRQUFTbEIsZ0JBQWdCLENBRC9COztBQUdBLGFBQU9rQixLQUFQO0FBQ0Q7OztrQ0FFb0I7QUFDbkIsVUFBTXJCLFFBQVEsRUFBZDtBQUFBLFVBQ013QixRQUFRLElBQUl6QixLQUFKLENBQVVDLEtBQVYsQ0FEZDs7QUFHQSxhQUFPd0IsS0FBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQjNCLEtBQWpCIiwiZmlsZSI6InF1ZXVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XHJcblxyXG5jb25zdCB7IGFycmF5VXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXHJcbiAgICAgIHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xyXG5cclxuY2xhc3MgUXVldWUge1xyXG4gIGNvbnN0cnVjdG9yKHRhc2tzKSB7XHJcbiAgICB0aGlzLnRhc2tzID0gdGFza3M7XHJcbiAgfVxyXG5cclxuICBhZGRUYXNrKHRhc2spIHtcclxuICAgIHRoaXMudGFza3MucHVzaCh0YXNrKTtcclxuICAgIFxyXG4gICAgY29uc3QgdGFza3NMZW5ndGggPSB0aGlzLmdldFRhc2tzTGVuZ3RoKCk7XHJcbiAgICBcclxuICAgIGlmICh0YXNrc0xlbmd0aCA9PT0gMSkge1xyXG4gICAgICB0aGlzLmV4ZWN1dGVOZXh0VGFzaygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZXhlY3V0ZU5leHRUYXNrKCkge1xyXG4gICAgY29uc3QgZmlyc3RUYXNrID0gZmlyc3QodGhpcy50YXNrcyksXHJcbiAgICAgICAgICBuZXh0VGFzayA9IGZpcnN0VGFzaywgLy8vXHJcbiAgICAgICAgICBuZXh0VGFza1N5bmNocm9ub3VzID0gbmV4dFRhc2suaXNTeW5jaHJvbm91cygpO1xyXG4gICAgXHJcbiAgICBpZiAobmV4dFRhc2tTeW5jaHJvbm91cykgeyAvLy9cclxuICAgICAgY29uc3Qgc3luY2hyb25vdXNUYXNrID0gbmV4dFRhc2s7ICAvLy9cclxuXHJcbiAgICAgIHRoaXMuZXhlY3V0ZVN5bmNocm9ub3VzVGFzayhzeW5jaHJvbm91c1Rhc2spO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgYXN5bmNocm9ub3VzVGFzayA9IG5leHRUYXNrOyAgLy8vXHJcblxyXG4gICAgICB0aGlzLmV4ZWN1dGVBc3luY2hyb25vdXNUYXNrKGFzeW5jaHJvbm91c1Rhc2spO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZXhlY3V0ZVN5bmNocm9ub3VzVGFzayhzeW5jaHJvbm91c1Rhc2spIHtcclxuICAgIHN5bmNocm9ub3VzVGFzay5leGVjdXRlKCk7XHJcblxyXG4gICAgdGhpcy5uZXh0KCk7XHJcbiAgfVxyXG5cclxuICBleGVjdXRlQXN5bmNocm9ub3VzVGFzayhhc3luY2hyb25vdXNUYXNrKSB7XHJcbiAgICBhc3luY2hyb25vdXNUYXNrLmV4ZWN1dGUoKCkgPT4ge1xyXG4gICAgICBjb25zdCBjYWxsYmFjayA9IGFzeW5jaHJvbm91c1Rhc2suZ2V0Q2FsbGJhY2soKTtcclxuICAgICAgXHJcbiAgICAgIGNhbGxiYWNrLmNhbGwoLi4uYXJndW1lbnRzKTtcclxuICAgICAgXHJcbiAgICAgIHRoaXMubmV4dCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZXh0KCkge1xyXG4gICAgdGhpcy50YXNrcy5zaGlmdCgpO1xyXG5cclxuICAgIGNvbnN0IGVtcHR5ID0gdGhpcy5pc0VtcHR5KCk7XHJcblxyXG4gICAgaWYgKCFlbXB0eSkge1xyXG4gICAgICB0aGlzLmV4ZWN1dGVOZXh0VGFzaygpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBnZXRUYXNrc0xlbmd0aCgpIHtcclxuICAgIGNvbnN0IHRhc2tzTGVuZ3RoID0gdGhpcy50YXNrcy5sZW5ndGg7XHJcbiAgICBcclxuICAgIHJldHVybiB0YXNrc0xlbmd0aDtcclxuICB9XHJcblxyXG4gIGlzRW1wdHkoKSB7XHJcbiAgICBjb25zdCB0YXNrc0xlbmd0aCA9IHRoaXMuZ2V0VGFza3NMZW5ndGgoKSxcclxuICAgICAgICAgIGVtcHR5ID0gKHRhc2tzTGVuZ3RoID09PSAwKTtcclxuXHJcbiAgICByZXR1cm4gZW1wdHk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XHJcbiAgICBjb25zdCB0YXNrcyA9IFtdLFxyXG4gICAgICAgICAgcXVldWUgPSBuZXcgUXVldWUodGFza3MpO1xyXG5cclxuICAgIHJldHVybiBxdWV1ZTtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gUXVldWU7XHJcbiJdfQ==