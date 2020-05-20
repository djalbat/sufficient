"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _necessary = require("necessary");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var first = _necessary.arrayUtilities.first;

var Queue = /*#__PURE__*/function () {
  function Queue(tasks) {
    _classCallCheck(this, Queue);

    this.tasks = tasks;
  }

  _createClass(Queue, [{
    key: "addTask",
    value: function addTask(task) {
      var empty = this.isEmpty();
      this.tasks.push(task);

      if (empty) {
        this.executeNextTask();
      }
    }
  }, {
    key: "executeNextTask",
    value: function executeNextTask() {
      var _this = this;

      var firstTask = first(this.tasks),
          nextTask = firstTask,
          ///
      nextTaskSynchronous = nextTask.isSynchronous();
      setTimeout(function () {
        if (nextTaskSynchronous) {
          ///
          var synchronousTask = nextTask; ///

          _this.executeSynchronousTask(synchronousTask);
        } else {
          var asynchronousTask = nextTask; ///

          _this.executeAsynchronousTask(asynchronousTask);
        }
      }, 0);
    }
  }, {
    key: "executeSynchronousTask",
    value: function executeSynchronousTask(synchronousTask) {
      synchronousTask.execute();
      this.next();
    }
  }, {
    key: "executeAsynchronousTask",
    value: function executeAsynchronousTask(asynchronousTask) {
      var next = this.next.bind(this);
      asynchronousTask.execute(function () {
        var callback = asynchronousTask.getCallback();
        callback.apply(asynchronousTask, arguments);
        next();
      });
    }
  }, {
    key: "next",
    value: function next() {
      this.tasks.shift();
      var empty = this.isEmpty();

      if (!empty) {
        this.executeNextTask();
      }
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      var tasksLength = this.tasks.length,
          empty = tasksLength === 0;
      return empty;
    }
  }], [{
    key: "fromNothing",
    value: function fromNothing() {
      var tasks = [],
          queue = new Queue(tasks);
      return queue;
    }
  }]);

  return Queue;
}();

exports["default"] = Queue;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZXVlLmpzIl0sIm5hbWVzIjpbImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJRdWV1ZSIsInRhc2tzIiwidGFzayIsImVtcHR5IiwiaXNFbXB0eSIsInB1c2giLCJleGVjdXRlTmV4dFRhc2siLCJmaXJzdFRhc2siLCJuZXh0VGFzayIsIm5leHRUYXNrU3luY2hyb25vdXMiLCJpc1N5bmNocm9ub3VzIiwic2V0VGltZW91dCIsInN5bmNocm9ub3VzVGFzayIsImV4ZWN1dGVTeW5jaHJvbm91c1Rhc2siLCJhc3luY2hyb25vdXNUYXNrIiwiZXhlY3V0ZUFzeW5jaHJvbm91c1Rhc2siLCJleGVjdXRlIiwibmV4dCIsImJpbmQiLCJjYWxsYmFjayIsImdldENhbGxiYWNrIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJzaGlmdCIsInRhc2tzTGVuZ3RoIiwibGVuZ3RoIiwicXVldWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7Ozs7Ozs7O0lBRVFBLEssR0FBVUMseUIsQ0FBVkQsSzs7SUFFYUUsSztBQUNuQixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7Ozs0QkFFT0MsSSxFQUFNO0FBQ1osVUFBTUMsS0FBSyxHQUFHLEtBQUtDLE9BQUwsRUFBZDtBQUVBLFdBQUtILEtBQUwsQ0FBV0ksSUFBWCxDQUFnQkgsSUFBaEI7O0FBRUEsVUFBSUMsS0FBSixFQUFXO0FBQ1QsYUFBS0csZUFBTDtBQUNEO0FBQ0Y7OztzQ0FFaUI7QUFBQTs7QUFDaEIsVUFBTUMsU0FBUyxHQUFHVCxLQUFLLENBQUMsS0FBS0csS0FBTixDQUF2QjtBQUFBLFVBQ01PLFFBQVEsR0FBR0QsU0FEakI7QUFBQSxVQUM0QjtBQUN0QkUsTUFBQUEsbUJBQW1CLEdBQUdELFFBQVEsQ0FBQ0UsYUFBVCxFQUY1QjtBQUlBQyxNQUFBQSxVQUFVLENBQUMsWUFBTTtBQUNmLFlBQUlGLG1CQUFKLEVBQXlCO0FBQUU7QUFDekIsY0FBTUcsZUFBZSxHQUFHSixRQUF4QixDQUR1QixDQUNZOztBQUVuQyxVQUFBLEtBQUksQ0FBQ0ssc0JBQUwsQ0FBNEJELGVBQTVCO0FBQ0QsU0FKRCxNQUlPO0FBQ0wsY0FBTUUsZ0JBQWdCLEdBQUdOLFFBQXpCLENBREssQ0FDK0I7O0FBRXBDLFVBQUEsS0FBSSxDQUFDTyx1QkFBTCxDQUE2QkQsZ0JBQTdCO0FBQ0Q7QUFDRixPQVZTLEVBVVAsQ0FWTyxDQUFWO0FBV0Q7OzsyQ0FFc0JGLGUsRUFBaUI7QUFDdENBLE1BQUFBLGVBQWUsQ0FBQ0ksT0FBaEI7QUFFQSxXQUFLQyxJQUFMO0FBQ0Q7Ozs0Q0FFdUJILGdCLEVBQWtCO0FBQ3hDLFVBQU1HLElBQUksR0FBRyxLQUFLQSxJQUFMLENBQVVDLElBQVYsQ0FBZSxJQUFmLENBQWI7QUFFQUosTUFBQUEsZ0JBQWdCLENBQUNFLE9BQWpCLENBQXlCLFlBQVc7QUFDbEMsWUFBTUcsUUFBUSxHQUFHTCxnQkFBZ0IsQ0FBQ00sV0FBakIsRUFBakI7QUFFQUQsUUFBQUEsUUFBUSxDQUFDRSxLQUFULENBQWVQLGdCQUFmLEVBQWlDUSxTQUFqQztBQUVBTCxRQUFBQSxJQUFJO0FBQ0wsT0FORDtBQU9EOzs7MkJBRU07QUFDTCxXQUFLaEIsS0FBTCxDQUFXc0IsS0FBWDtBQUVBLFVBQU1wQixLQUFLLEdBQUcsS0FBS0MsT0FBTCxFQUFkOztBQUVBLFVBQUksQ0FBQ0QsS0FBTCxFQUFZO0FBQ1YsYUFBS0csZUFBTDtBQUNEO0FBQ0Y7Ozs4QkFFUztBQUNSLFVBQU1rQixXQUFXLEdBQUcsS0FBS3ZCLEtBQUwsQ0FBV3dCLE1BQS9CO0FBQUEsVUFDTXRCLEtBQUssR0FBSXFCLFdBQVcsS0FBSyxDQUQvQjtBQUdBLGFBQU9yQixLQUFQO0FBQ0Q7OztrQ0FFb0I7QUFDbkIsVUFBTUYsS0FBSyxHQUFHLEVBQWQ7QUFBQSxVQUNNeUIsS0FBSyxHQUFHLElBQUkxQixLQUFKLENBQVVDLEtBQVYsQ0FEZDtBQUdBLGFBQU95QixLQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xyXG5cclxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRdWV1ZSB7XHJcbiAgY29uc3RydWN0b3IodGFza3MpIHtcclxuICAgIHRoaXMudGFza3MgPSB0YXNrcztcclxuICB9XHJcblxyXG4gIGFkZFRhc2sodGFzaykge1xyXG4gICAgY29uc3QgZW1wdHkgPSB0aGlzLmlzRW1wdHkoKTtcclxuXHJcbiAgICB0aGlzLnRhc2tzLnB1c2godGFzayk7XHJcblxyXG4gICAgaWYgKGVtcHR5KSB7XHJcbiAgICAgIHRoaXMuZXhlY3V0ZU5leHRUYXNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBleGVjdXRlTmV4dFRhc2soKSB7XHJcbiAgICBjb25zdCBmaXJzdFRhc2sgPSBmaXJzdCh0aGlzLnRhc2tzKSxcclxuICAgICAgICAgIG5leHRUYXNrID0gZmlyc3RUYXNrLCAvLy9cclxuICAgICAgICAgIG5leHRUYXNrU3luY2hyb25vdXMgPSBuZXh0VGFzay5pc1N5bmNocm9ub3VzKCk7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmIChuZXh0VGFza1N5bmNocm9ub3VzKSB7IC8vL1xyXG4gICAgICAgIGNvbnN0IHN5bmNocm9ub3VzVGFzayA9IG5leHRUYXNrOyAgLy8vXHJcblxyXG4gICAgICAgIHRoaXMuZXhlY3V0ZVN5bmNocm9ub3VzVGFzayhzeW5jaHJvbm91c1Rhc2spO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IGFzeW5jaHJvbm91c1Rhc2sgPSBuZXh0VGFzazsgIC8vL1xyXG5cclxuICAgICAgICB0aGlzLmV4ZWN1dGVBc3luY2hyb25vdXNUYXNrKGFzeW5jaHJvbm91c1Rhc2spO1xyXG4gICAgICB9XHJcbiAgICB9LCAwKTtcclxuICB9XHJcblxyXG4gIGV4ZWN1dGVTeW5jaHJvbm91c1Rhc2soc3luY2hyb25vdXNUYXNrKSB7XHJcbiAgICBzeW5jaHJvbm91c1Rhc2suZXhlY3V0ZSgpO1xyXG5cclxuICAgIHRoaXMubmV4dCgpO1xyXG4gIH1cclxuXHJcbiAgZXhlY3V0ZUFzeW5jaHJvbm91c1Rhc2soYXN5bmNocm9ub3VzVGFzaykge1xyXG4gICAgY29uc3QgbmV4dCA9IHRoaXMubmV4dC5iaW5kKHRoaXMpO1xyXG5cclxuICAgIGFzeW5jaHJvbm91c1Rhc2suZXhlY3V0ZShmdW5jdGlvbigpIHtcclxuICAgICAgY29uc3QgY2FsbGJhY2sgPSBhc3luY2hyb25vdXNUYXNrLmdldENhbGxiYWNrKCk7XHJcbiAgICAgIFxyXG4gICAgICBjYWxsYmFjay5hcHBseShhc3luY2hyb25vdXNUYXNrLCBhcmd1bWVudHMpO1xyXG4gICAgICBcclxuICAgICAgbmV4dCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZXh0KCkge1xyXG4gICAgdGhpcy50YXNrcy5zaGlmdCgpO1xyXG5cclxuICAgIGNvbnN0IGVtcHR5ID0gdGhpcy5pc0VtcHR5KCk7XHJcblxyXG4gICAgaWYgKCFlbXB0eSkge1xyXG4gICAgICB0aGlzLmV4ZWN1dGVOZXh0VGFzaygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaXNFbXB0eSgpIHtcclxuICAgIGNvbnN0IHRhc2tzTGVuZ3RoID0gdGhpcy50YXNrcy5sZW5ndGgsXHJcbiAgICAgICAgICBlbXB0eSA9ICh0YXNrc0xlbmd0aCA9PT0gMCk7XHJcblxyXG4gICAgcmV0dXJuIGVtcHR5O1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xyXG4gICAgY29uc3QgdGFza3MgPSBbXSxcclxuICAgICAgICAgIHF1ZXVlID0gbmV3IFF1ZXVlKHRhc2tzKTtcclxuXHJcbiAgICByZXR1cm4gcXVldWU7XHJcbiAgfVxyXG59XHJcbiJdfQ==