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
      var empty = this.isEmpty();

      this.tasks.push(task);

      if (empty) {
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
      var next = this.next.bind(this);

      asynchronousTask.execute(function () {
        var callback = asynchronousTask.getCallback();

        callback.apply(asynchronousTask, arguments);

        next();
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
    key: 'isEmpty',
    value: function isEmpty() {
      var tasksLength = this.tasks.length,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9xdWV1ZS5qcyJdLCJuYW1lcyI6WyJuZWNlc3NhcnkiLCJyZXF1aXJlIiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsIlF1ZXVlIiwidGFza3MiLCJ0YXNrIiwiZW1wdHkiLCJpc0VtcHR5IiwicHVzaCIsImV4ZWN1dGVOZXh0VGFzayIsImZpcnN0VGFzayIsIm5leHRUYXNrIiwibmV4dFRhc2tTeW5jaHJvbm91cyIsImlzU3luY2hyb25vdXMiLCJzeW5jaHJvbm91c1Rhc2siLCJleGVjdXRlU3luY2hyb25vdXNUYXNrIiwiYXN5bmNocm9ub3VzVGFzayIsImV4ZWN1dGVBc3luY2hyb25vdXNUYXNrIiwiZXhlY3V0ZSIsIm5leHQiLCJiaW5kIiwiY2FsbGJhY2siLCJnZXRDYWxsYmFjayIsImFwcGx5IiwiYXJndW1lbnRzIiwic2hpZnQiLCJ0YXNrc0xlbmd0aCIsImxlbmd0aCIsInF1ZXVlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsV0FBUixDQUFsQjs7QUFFTSxJQUFFQyxjQUFGLEdBQXFCRixTQUFyQixDQUFFRSxjQUFGO0FBQUEsSUFDRUMsS0FERixHQUNZRCxjQURaLENBQ0VDLEtBREY7O0lBR0FDLEs7QUFDSixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7Ozs0QkFFT0MsSSxFQUFNO0FBQ1osVUFBTUMsUUFBUSxLQUFLQyxPQUFMLEVBQWQ7O0FBRUEsV0FBS0gsS0FBTCxDQUFXSSxJQUFYLENBQWdCSCxJQUFoQjs7QUFFQSxVQUFJQyxLQUFKLEVBQVc7QUFDVCxhQUFLRyxlQUFMO0FBQ0Q7QUFDRjs7O3NDQUVpQjtBQUNoQixVQUFNQyxZQUFZUixNQUFNLEtBQUtFLEtBQVgsQ0FBbEI7QUFBQSxVQUNNTyxXQUFXRCxTQURqQjtBQUFBLFVBQzRCO0FBQ3RCRSw0QkFBc0JELFNBQVNFLGFBQVQsRUFGNUI7O0FBSUEsVUFBSUQsbUJBQUosRUFBeUI7QUFBRTtBQUN6QixZQUFNRSxrQkFBa0JILFFBQXhCLENBRHVCLENBQ1k7O0FBRW5DLGFBQUtJLHNCQUFMLENBQTRCRCxlQUE1QjtBQUNELE9BSkQsTUFJTztBQUNMLFlBQU1FLG1CQUFtQkwsUUFBekIsQ0FESyxDQUMrQjs7QUFFcEMsYUFBS00sdUJBQUwsQ0FBNkJELGdCQUE3QjtBQUNEO0FBQ0Y7OzsyQ0FFc0JGLGUsRUFBaUI7QUFDdENBLHNCQUFnQkksT0FBaEI7O0FBRUEsV0FBS0MsSUFBTDtBQUNEOzs7NENBRXVCSCxnQixFQUFrQjtBQUN4QyxVQUFNRyxPQUFPLEtBQUtBLElBQUwsQ0FBVUMsSUFBVixDQUFlLElBQWYsQ0FBYjs7QUFFQUosdUJBQWlCRSxPQUFqQixDQUF5QixZQUFXO0FBQ2xDLFlBQU1HLFdBQVdMLGlCQUFpQk0sV0FBakIsRUFBakI7O0FBRUFELGlCQUFTRSxLQUFULENBQWVQLGdCQUFmLEVBQWlDUSxTQUFqQzs7QUFFQUw7QUFDRCxPQU5EO0FBT0Q7OzsyQkFFTTtBQUNMLFdBQUtmLEtBQUwsQ0FBV3FCLEtBQVg7O0FBRUEsVUFBTW5CLFFBQVEsS0FBS0MsT0FBTCxFQUFkOztBQUVBLFVBQUksQ0FBQ0QsS0FBTCxFQUFZO0FBQ1YsYUFBS0csZUFBTDtBQUNEO0FBQ0Y7Ozs4QkFFUztBQUNSLFVBQU1pQixjQUFjLEtBQUt0QixLQUFMLENBQVd1QixNQUEvQjtBQUFBLFVBQ01yQixRQUFTb0IsZ0JBQWdCLENBRC9COztBQUdBLGFBQU9wQixLQUFQO0FBQ0Q7OztrQ0FFb0I7QUFDbkIsVUFBTUYsUUFBUSxFQUFkO0FBQUEsVUFDTXdCLFFBQVEsSUFBSXpCLEtBQUosQ0FBVUMsS0FBVixDQURkOztBQUdBLGFBQU93QixLQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCM0IsS0FBakIiLCJmaWxlIjoicXVldWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcclxuXHJcbmNvbnN0IHsgYXJyYXlVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcclxuICAgICAgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XHJcblxyXG5jbGFzcyBRdWV1ZSB7XHJcbiAgY29uc3RydWN0b3IodGFza3MpIHtcclxuICAgIHRoaXMudGFza3MgPSB0YXNrcztcclxuICB9XHJcblxyXG4gIGFkZFRhc2sodGFzaykge1xyXG4gICAgY29uc3QgZW1wdHkgPSB0aGlzLmlzRW1wdHkoKTtcclxuXHJcbiAgICB0aGlzLnRhc2tzLnB1c2godGFzayk7XHJcblxyXG4gICAgaWYgKGVtcHR5KSB7XHJcbiAgICAgIHRoaXMuZXhlY3V0ZU5leHRUYXNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBleGVjdXRlTmV4dFRhc2soKSB7XHJcbiAgICBjb25zdCBmaXJzdFRhc2sgPSBmaXJzdCh0aGlzLnRhc2tzKSxcclxuICAgICAgICAgIG5leHRUYXNrID0gZmlyc3RUYXNrLCAvLy9cclxuICAgICAgICAgIG5leHRUYXNrU3luY2hyb25vdXMgPSBuZXh0VGFzay5pc1N5bmNocm9ub3VzKCk7XHJcbiAgICBcclxuICAgIGlmIChuZXh0VGFza1N5bmNocm9ub3VzKSB7IC8vL1xyXG4gICAgICBjb25zdCBzeW5jaHJvbm91c1Rhc2sgPSBuZXh0VGFzazsgIC8vL1xyXG5cclxuICAgICAgdGhpcy5leGVjdXRlU3luY2hyb25vdXNUYXNrKHN5bmNocm9ub3VzVGFzayk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBhc3luY2hyb25vdXNUYXNrID0gbmV4dFRhc2s7ICAvLy9cclxuXHJcbiAgICAgIHRoaXMuZXhlY3V0ZUFzeW5jaHJvbm91c1Rhc2soYXN5bmNocm9ub3VzVGFzayk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBleGVjdXRlU3luY2hyb25vdXNUYXNrKHN5bmNocm9ub3VzVGFzaykge1xyXG4gICAgc3luY2hyb25vdXNUYXNrLmV4ZWN1dGUoKTtcclxuXHJcbiAgICB0aGlzLm5leHQoKTtcclxuICB9XHJcblxyXG4gIGV4ZWN1dGVBc3luY2hyb25vdXNUYXNrKGFzeW5jaHJvbm91c1Rhc2spIHtcclxuICAgIGNvbnN0IG5leHQgPSB0aGlzLm5leHQuYmluZCh0aGlzKTtcclxuXHJcbiAgICBhc3luY2hyb25vdXNUYXNrLmV4ZWN1dGUoZnVuY3Rpb24oKSB7XHJcbiAgICAgIGNvbnN0IGNhbGxiYWNrID0gYXN5bmNocm9ub3VzVGFzay5nZXRDYWxsYmFjaygpO1xyXG4gICAgICBcclxuICAgICAgY2FsbGJhY2suYXBwbHkoYXN5bmNocm9ub3VzVGFzaywgYXJndW1lbnRzKTtcclxuICAgICAgXHJcbiAgICAgIG5leHQoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmV4dCgpIHtcclxuICAgIHRoaXMudGFza3Muc2hpZnQoKTtcclxuXHJcbiAgICBjb25zdCBlbXB0eSA9IHRoaXMuaXNFbXB0eSgpO1xyXG5cclxuICAgIGlmICghZW1wdHkpIHtcclxuICAgICAgdGhpcy5leGVjdXRlTmV4dFRhc2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlzRW1wdHkoKSB7XHJcbiAgICBjb25zdCB0YXNrc0xlbmd0aCA9IHRoaXMudGFza3MubGVuZ3RoLFxyXG4gICAgICAgICAgZW1wdHkgPSAodGFza3NMZW5ndGggPT09IDApO1xyXG5cclxuICAgIHJldHVybiBlbXB0eTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcclxuICAgIGNvbnN0IHRhc2tzID0gW10sXHJcbiAgICAgICAgICBxdWV1ZSA9IG5ldyBRdWV1ZSh0YXNrcyk7XHJcblxyXG4gICAgcmV0dXJuIHF1ZXVlO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBRdWV1ZTtcclxuIl19