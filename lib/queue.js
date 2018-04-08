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
      asynchronousTask.execute(function () {
        var callback = asynchronousTask.getCallback();

        callback.apply(asynchronousTask, arguments);

        this.next();
      }.bind(this));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9xdWV1ZS5qcyJdLCJuYW1lcyI6WyJuZWNlc3NhcnkiLCJyZXF1aXJlIiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsIlF1ZXVlIiwidGFza3MiLCJ0YXNrIiwicHVzaCIsInRhc2tzTGVuZ3RoIiwiZ2V0VGFza3NMZW5ndGgiLCJleGVjdXRlTmV4dFRhc2siLCJmaXJzdFRhc2siLCJuZXh0VGFzayIsIm5leHRUYXNrU3luY2hyb25vdXMiLCJpc1N5bmNocm9ub3VzIiwic3luY2hyb25vdXNUYXNrIiwiZXhlY3V0ZVN5bmNocm9ub3VzVGFzayIsImFzeW5jaHJvbm91c1Rhc2siLCJleGVjdXRlQXN5bmNocm9ub3VzVGFzayIsImV4ZWN1dGUiLCJuZXh0IiwiY2FsbGJhY2siLCJnZXRDYWxsYmFjayIsImFwcGx5IiwiYXJndW1lbnRzIiwiYmluZCIsInNoaWZ0IiwiZW1wdHkiLCJpc0VtcHR5IiwibGVuZ3RoIiwicXVldWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxXQUFSLENBQWxCOztBQUVNLElBQUVDLGNBQUYsR0FBcUJGLFNBQXJCLENBQUVFLGNBQUY7QUFBQSxJQUNFQyxLQURGLEdBQ1lELGNBRFosQ0FDRUMsS0FERjs7SUFHQUMsSztBQUNKLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7OzRCQUVPQyxJLEVBQU07QUFDWixXQUFLRCxLQUFMLENBQVdFLElBQVgsQ0FBZ0JELElBQWhCOztBQUVBLFVBQU1FLGNBQWMsS0FBS0MsY0FBTCxFQUFwQjs7QUFFQSxVQUFJRCxnQkFBZ0IsQ0FBcEIsRUFBdUI7QUFDckIsYUFBS0UsZUFBTDtBQUNEO0FBQ0Y7OztzQ0FFaUI7QUFDaEIsVUFBTUMsWUFBWVIsTUFBTSxLQUFLRSxLQUFYLENBQWxCO0FBQUEsVUFDTU8sV0FBV0QsU0FEakI7QUFBQSxVQUM0QjtBQUN0QkUsNEJBQXNCRCxTQUFTRSxhQUFULEVBRjVCOztBQUlBLFVBQUlELG1CQUFKLEVBQXlCO0FBQUU7QUFDekIsWUFBTUUsa0JBQWtCSCxRQUF4QixDQUR1QixDQUNZOztBQUVuQyxhQUFLSSxzQkFBTCxDQUE0QkQsZUFBNUI7QUFDRCxPQUpELE1BSU87QUFDTCxZQUFNRSxtQkFBbUJMLFFBQXpCLENBREssQ0FDK0I7O0FBRXBDLGFBQUtNLHVCQUFMLENBQTZCRCxnQkFBN0I7QUFDRDtBQUNGOzs7MkNBRXNCRixlLEVBQWlCO0FBQ3RDQSxzQkFBZ0JJLE9BQWhCOztBQUVBLFdBQUtDLElBQUw7QUFDRDs7OzRDQUV1QkgsZ0IsRUFBa0I7QUFDeENBLHVCQUFpQkUsT0FBakIsQ0FBeUIsWUFBVztBQUNsQyxZQUFNRSxXQUFXSixpQkFBaUJLLFdBQWpCLEVBQWpCOztBQUVBRCxpQkFBU0UsS0FBVCxDQUFlTixnQkFBZixFQUFpQ08sU0FBakM7O0FBRUEsYUFBS0osSUFBTDtBQUNELE9BTndCLENBTXZCSyxJQU51QixDQU1sQixJQU5rQixDQUF6QjtBQU9EOzs7MkJBRU07QUFDTCxXQUFLcEIsS0FBTCxDQUFXcUIsS0FBWDs7QUFFQSxVQUFNQyxRQUFRLEtBQUtDLE9BQUwsRUFBZDs7QUFFQSxVQUFJLENBQUNELEtBQUwsRUFBWTtBQUNWLGFBQUtqQixlQUFMO0FBQ0Q7QUFDRjs7O3FDQUVnQjtBQUNmLFVBQU1GLGNBQWMsS0FBS0gsS0FBTCxDQUFXd0IsTUFBL0I7O0FBRUEsYUFBT3JCLFdBQVA7QUFDRDs7OzhCQUVTO0FBQ1IsVUFBTUEsY0FBYyxLQUFLQyxjQUFMLEVBQXBCO0FBQUEsVUFDTWtCLFFBQVNuQixnQkFBZ0IsQ0FEL0I7O0FBR0EsYUFBT21CLEtBQVA7QUFDRDs7O2tDQUVvQjtBQUNuQixVQUFNdEIsUUFBUSxFQUFkO0FBQUEsVUFDTXlCLFFBQVEsSUFBSTFCLEtBQUosQ0FBVUMsS0FBVixDQURkOztBQUdBLGFBQU95QixLQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCNUIsS0FBakIiLCJmaWxlIjoicXVldWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcclxuXHJcbmNvbnN0IHsgYXJyYXlVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcclxuICAgICAgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XHJcblxyXG5jbGFzcyBRdWV1ZSB7XHJcbiAgY29uc3RydWN0b3IodGFza3MpIHtcclxuICAgIHRoaXMudGFza3MgPSB0YXNrcztcclxuICB9XHJcblxyXG4gIGFkZFRhc2sodGFzaykge1xyXG4gICAgdGhpcy50YXNrcy5wdXNoKHRhc2spO1xyXG4gICAgXHJcbiAgICBjb25zdCB0YXNrc0xlbmd0aCA9IHRoaXMuZ2V0VGFza3NMZW5ndGgoKTtcclxuICAgIFxyXG4gICAgaWYgKHRhc2tzTGVuZ3RoID09PSAxKSB7XHJcbiAgICAgIHRoaXMuZXhlY3V0ZU5leHRUYXNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBleGVjdXRlTmV4dFRhc2soKSB7XHJcbiAgICBjb25zdCBmaXJzdFRhc2sgPSBmaXJzdCh0aGlzLnRhc2tzKSxcclxuICAgICAgICAgIG5leHRUYXNrID0gZmlyc3RUYXNrLCAvLy9cclxuICAgICAgICAgIG5leHRUYXNrU3luY2hyb25vdXMgPSBuZXh0VGFzay5pc1N5bmNocm9ub3VzKCk7XHJcbiAgICBcclxuICAgIGlmIChuZXh0VGFza1N5bmNocm9ub3VzKSB7IC8vL1xyXG4gICAgICBjb25zdCBzeW5jaHJvbm91c1Rhc2sgPSBuZXh0VGFzazsgIC8vL1xyXG5cclxuICAgICAgdGhpcy5leGVjdXRlU3luY2hyb25vdXNUYXNrKHN5bmNocm9ub3VzVGFzayk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBhc3luY2hyb25vdXNUYXNrID0gbmV4dFRhc2s7ICAvLy9cclxuXHJcbiAgICAgIHRoaXMuZXhlY3V0ZUFzeW5jaHJvbm91c1Rhc2soYXN5bmNocm9ub3VzVGFzayk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBleGVjdXRlU3luY2hyb25vdXNUYXNrKHN5bmNocm9ub3VzVGFzaykge1xyXG4gICAgc3luY2hyb25vdXNUYXNrLmV4ZWN1dGUoKTtcclxuXHJcbiAgICB0aGlzLm5leHQoKTtcclxuICB9XHJcblxyXG4gIGV4ZWN1dGVBc3luY2hyb25vdXNUYXNrKGFzeW5jaHJvbm91c1Rhc2spIHtcclxuICAgIGFzeW5jaHJvbm91c1Rhc2suZXhlY3V0ZShmdW5jdGlvbigpIHtcclxuICAgICAgY29uc3QgY2FsbGJhY2sgPSBhc3luY2hyb25vdXNUYXNrLmdldENhbGxiYWNrKCk7XHJcbiAgICAgIFxyXG4gICAgICBjYWxsYmFjay5hcHBseShhc3luY2hyb25vdXNUYXNrLCBhcmd1bWVudHMpO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICB9LmJpbmQodGhpcykpO1xyXG4gIH1cclxuXHJcbiAgbmV4dCgpIHtcclxuICAgIHRoaXMudGFza3Muc2hpZnQoKTtcclxuXHJcbiAgICBjb25zdCBlbXB0eSA9IHRoaXMuaXNFbXB0eSgpO1xyXG5cclxuICAgIGlmICghZW1wdHkpIHtcclxuICAgICAgdGhpcy5leGVjdXRlTmV4dFRhc2soKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgZ2V0VGFza3NMZW5ndGgoKSB7XHJcbiAgICBjb25zdCB0YXNrc0xlbmd0aCA9IHRoaXMudGFza3MubGVuZ3RoO1xyXG4gICAgXHJcbiAgICByZXR1cm4gdGFza3NMZW5ndGg7XHJcbiAgfVxyXG5cclxuICBpc0VtcHR5KCkge1xyXG4gICAgY29uc3QgdGFza3NMZW5ndGggPSB0aGlzLmdldFRhc2tzTGVuZ3RoKCksXHJcbiAgICAgICAgICBlbXB0eSA9ICh0YXNrc0xlbmd0aCA9PT0gMCk7XHJcblxyXG4gICAgcmV0dXJuIGVtcHR5O1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xyXG4gICAgY29uc3QgdGFza3MgPSBbXSxcclxuICAgICAgICAgIHF1ZXVlID0gbmV3IFF1ZXVlKHRhc2tzKTtcclxuXHJcbiAgICByZXR1cm4gcXVldWU7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFF1ZXVlO1xyXG4iXX0=