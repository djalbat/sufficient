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

        callback.call.apply(callback, [asynchronousTask].concat(Array.prototype.slice.call(_arguments)));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9xdWV1ZS5qcyJdLCJuYW1lcyI6WyJuZWNlc3NhcnkiLCJyZXF1aXJlIiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsIlF1ZXVlIiwidGFza3MiLCJ0YXNrIiwicHVzaCIsInRhc2tzTGVuZ3RoIiwiZ2V0VGFza3NMZW5ndGgiLCJleGVjdXRlTmV4dFRhc2siLCJmaXJzdFRhc2siLCJuZXh0VGFzayIsIm5leHRUYXNrU3luY2hyb25vdXMiLCJpc1N5bmNocm9ub3VzIiwic3luY2hyb25vdXNUYXNrIiwiZXhlY3V0ZVN5bmNocm9ub3VzVGFzayIsImFzeW5jaHJvbm91c1Rhc2siLCJleGVjdXRlQXN5bmNocm9ub3VzVGFzayIsImV4ZWN1dGUiLCJuZXh0IiwiY2FsbGJhY2siLCJnZXRDYWxsYmFjayIsImNhbGwiLCJhcmd1bWVudHMiLCJzaGlmdCIsImVtcHR5IiwiaXNFbXB0eSIsImxlbmd0aCIsInF1ZXVlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsV0FBUixDQUFsQjs7QUFFTSxJQUFFQyxjQUFGLEdBQXFCRixTQUFyQixDQUFFRSxjQUFGO0FBQUEsSUFDRUMsS0FERixHQUNZRCxjQURaLENBQ0VDLEtBREY7O0lBR0FDLEs7QUFDSixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7Ozs0QkFFT0MsSSxFQUFNO0FBQ1osV0FBS0QsS0FBTCxDQUFXRSxJQUFYLENBQWdCRCxJQUFoQjs7QUFFQSxVQUFNRSxjQUFjLEtBQUtDLGNBQUwsRUFBcEI7O0FBRUEsVUFBSUQsZ0JBQWdCLENBQXBCLEVBQXVCO0FBQ3JCLGFBQUtFLGVBQUw7QUFDRDtBQUNGOzs7c0NBRWlCO0FBQ2hCLFVBQU1DLFlBQVlSLE1BQU0sS0FBS0UsS0FBWCxDQUFsQjtBQUFBLFVBQ01PLFdBQVdELFNBRGpCO0FBQUEsVUFDNEI7QUFDdEJFLDRCQUFzQkQsU0FBU0UsYUFBVCxFQUY1Qjs7QUFJQSxVQUFJRCxtQkFBSixFQUF5QjtBQUFFO0FBQ3pCLFlBQU1FLGtCQUFrQkgsUUFBeEIsQ0FEdUIsQ0FDWTs7QUFFbkMsYUFBS0ksc0JBQUwsQ0FBNEJELGVBQTVCO0FBQ0QsT0FKRCxNQUlPO0FBQ0wsWUFBTUUsbUJBQW1CTCxRQUF6QixDQURLLENBQytCOztBQUVwQyxhQUFLTSx1QkFBTCxDQUE2QkQsZ0JBQTdCO0FBQ0Q7QUFDRjs7OzJDQUVzQkYsZSxFQUFpQjtBQUN0Q0Esc0JBQWdCSSxPQUFoQjs7QUFFQSxXQUFLQyxJQUFMO0FBQ0Q7Ozs0Q0FFdUJILGdCLEVBQWtCO0FBQUE7QUFBQTs7QUFDeENBLHVCQUFpQkUsT0FBakIsQ0FBeUIsWUFBTTtBQUM3QixZQUFNRSxXQUFXSixpQkFBaUJLLFdBQWpCLEVBQWpCOztBQUVBRCxpQkFBU0UsSUFBVCxrQkFBY04sZ0JBQWQsb0NBQW1DTyxVQUFuQzs7QUFFQSxjQUFLSixJQUFMO0FBQ0QsT0FORDtBQU9EOzs7MkJBRU07QUFDTCxXQUFLZixLQUFMLENBQVdvQixLQUFYOztBQUVBLFVBQU1DLFFBQVEsS0FBS0MsT0FBTCxFQUFkOztBQUVBLFVBQUksQ0FBQ0QsS0FBTCxFQUFZO0FBQ1YsYUFBS2hCLGVBQUw7QUFDRDtBQUNGOzs7cUNBRWdCO0FBQ2YsVUFBTUYsY0FBYyxLQUFLSCxLQUFMLENBQVd1QixNQUEvQjs7QUFFQSxhQUFPcEIsV0FBUDtBQUNEOzs7OEJBRVM7QUFDUixVQUFNQSxjQUFjLEtBQUtDLGNBQUwsRUFBcEI7QUFBQSxVQUNNaUIsUUFBU2xCLGdCQUFnQixDQUQvQjs7QUFHQSxhQUFPa0IsS0FBUDtBQUNEOzs7a0NBRW9CO0FBQ25CLFVBQU1yQixRQUFRLEVBQWQ7QUFBQSxVQUNNd0IsUUFBUSxJQUFJekIsS0FBSixDQUFVQyxLQUFWLENBRGQ7O0FBR0EsYUFBT3dCLEtBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUIzQixLQUFqQiIsImZpbGUiOiJxdWV1ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xyXG5cclxuY29uc3QgeyBhcnJheVV0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxyXG4gICAgICB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcclxuXHJcbmNsYXNzIFF1ZXVlIHtcclxuICBjb25zdHJ1Y3Rvcih0YXNrcykge1xyXG4gICAgdGhpcy50YXNrcyA9IHRhc2tzO1xyXG4gIH1cclxuXHJcbiAgYWRkVGFzayh0YXNrKSB7XHJcbiAgICB0aGlzLnRhc2tzLnB1c2godGFzayk7XHJcbiAgICBcclxuICAgIGNvbnN0IHRhc2tzTGVuZ3RoID0gdGhpcy5nZXRUYXNrc0xlbmd0aCgpO1xyXG4gICAgXHJcbiAgICBpZiAodGFza3NMZW5ndGggPT09IDEpIHtcclxuICAgICAgdGhpcy5leGVjdXRlTmV4dFRhc2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV4ZWN1dGVOZXh0VGFzaygpIHtcclxuICAgIGNvbnN0IGZpcnN0VGFzayA9IGZpcnN0KHRoaXMudGFza3MpLFxyXG4gICAgICAgICAgbmV4dFRhc2sgPSBmaXJzdFRhc2ssIC8vL1xyXG4gICAgICAgICAgbmV4dFRhc2tTeW5jaHJvbm91cyA9IG5leHRUYXNrLmlzU3luY2hyb25vdXMoKTtcclxuICAgIFxyXG4gICAgaWYgKG5leHRUYXNrU3luY2hyb25vdXMpIHsgLy8vXHJcbiAgICAgIGNvbnN0IHN5bmNocm9ub3VzVGFzayA9IG5leHRUYXNrOyAgLy8vXHJcblxyXG4gICAgICB0aGlzLmV4ZWN1dGVTeW5jaHJvbm91c1Rhc2soc3luY2hyb25vdXNUYXNrKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGFzeW5jaHJvbm91c1Rhc2sgPSBuZXh0VGFzazsgIC8vL1xyXG5cclxuICAgICAgdGhpcy5leGVjdXRlQXN5bmNocm9ub3VzVGFzayhhc3luY2hyb25vdXNUYXNrKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV4ZWN1dGVTeW5jaHJvbm91c1Rhc2soc3luY2hyb25vdXNUYXNrKSB7XHJcbiAgICBzeW5jaHJvbm91c1Rhc2suZXhlY3V0ZSgpO1xyXG5cclxuICAgIHRoaXMubmV4dCgpO1xyXG4gIH1cclxuXHJcbiAgZXhlY3V0ZUFzeW5jaHJvbm91c1Rhc2soYXN5bmNocm9ub3VzVGFzaykge1xyXG4gICAgYXN5bmNocm9ub3VzVGFzay5leGVjdXRlKCgpID0+IHtcclxuICAgICAgY29uc3QgY2FsbGJhY2sgPSBhc3luY2hyb25vdXNUYXNrLmdldENhbGxiYWNrKCk7XHJcbiAgICAgIFxyXG4gICAgICBjYWxsYmFjay5jYWxsKGFzeW5jaHJvbm91c1Rhc2ssIC4uLmFyZ3VtZW50cyk7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLm5leHQoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmV4dCgpIHtcclxuICAgIHRoaXMudGFza3Muc2hpZnQoKTtcclxuXHJcbiAgICBjb25zdCBlbXB0eSA9IHRoaXMuaXNFbXB0eSgpO1xyXG5cclxuICAgIGlmICghZW1wdHkpIHtcclxuICAgICAgdGhpcy5leGVjdXRlTmV4dFRhc2soKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgZ2V0VGFza3NMZW5ndGgoKSB7XHJcbiAgICBjb25zdCB0YXNrc0xlbmd0aCA9IHRoaXMudGFza3MubGVuZ3RoO1xyXG4gICAgXHJcbiAgICByZXR1cm4gdGFza3NMZW5ndGg7XHJcbiAgfVxyXG5cclxuICBpc0VtcHR5KCkge1xyXG4gICAgY29uc3QgdGFza3NMZW5ndGggPSB0aGlzLmdldFRhc2tzTGVuZ3RoKCksXHJcbiAgICAgICAgICBlbXB0eSA9ICh0YXNrc0xlbmd0aCA9PT0gMCk7XHJcblxyXG4gICAgcmV0dXJuIGVtcHR5O1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xyXG4gICAgY29uc3QgdGFza3MgPSBbXSxcclxuICAgICAgICAgIHF1ZXVlID0gbmV3IFF1ZXVlKHRhc2tzKTtcclxuXHJcbiAgICByZXR1cm4gcXVldWU7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFF1ZXVlO1xyXG4iXX0=