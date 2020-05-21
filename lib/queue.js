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
        ///
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZXVlLmpzIl0sIm5hbWVzIjpbImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJRdWV1ZSIsInRhc2tzIiwidGFzayIsImVtcHR5IiwiaXNFbXB0eSIsInB1c2giLCJleGVjdXRlTmV4dFRhc2siLCJmaXJzdFRhc2siLCJuZXh0VGFzayIsIm5leHRUYXNrU3luY2hyb25vdXMiLCJpc1N5bmNocm9ub3VzIiwic2V0VGltZW91dCIsInN5bmNocm9ub3VzVGFzayIsImV4ZWN1dGVTeW5jaHJvbm91c1Rhc2siLCJhc3luY2hyb25vdXNUYXNrIiwiZXhlY3V0ZUFzeW5jaHJvbm91c1Rhc2siLCJleGVjdXRlIiwibmV4dCIsImJpbmQiLCJjYWxsYmFjayIsImdldENhbGxiYWNrIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJzaGlmdCIsInRhc2tzTGVuZ3RoIiwibGVuZ3RoIiwicXVldWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7Ozs7Ozs7O0lBRVFBLEssR0FBVUMseUIsQ0FBVkQsSzs7SUFFYUUsSztBQUNuQixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7Ozs0QkFFT0MsSSxFQUFNO0FBQ1osVUFBTUMsS0FBSyxHQUFHLEtBQUtDLE9BQUwsRUFBZDtBQUVBLFdBQUtILEtBQUwsQ0FBV0ksSUFBWCxDQUFnQkgsSUFBaEI7O0FBRUEsVUFBSUMsS0FBSixFQUFXO0FBQ1QsYUFBS0csZUFBTDtBQUNEO0FBQ0Y7OztzQ0FFaUI7QUFBQTs7QUFDaEIsVUFBTUMsU0FBUyxHQUFHVCxLQUFLLENBQUMsS0FBS0csS0FBTixDQUF2QjtBQUFBLFVBQ01PLFFBQVEsR0FBR0QsU0FEakI7QUFBQSxVQUM0QjtBQUN0QkUsTUFBQUEsbUJBQW1CLEdBQUdELFFBQVEsQ0FBQ0UsYUFBVCxFQUY1QjtBQUlBQyxNQUFBQSxVQUFVLENBQUMsWUFBTTtBQUNmLFlBQUlGLG1CQUFKLEVBQXlCO0FBQUU7QUFDekIsY0FBTUcsZUFBZSxHQUFHSixRQUF4QixDQUR1QixDQUNZOztBQUVuQyxVQUFBLEtBQUksQ0FBQ0ssc0JBQUwsQ0FBNEJELGVBQTVCO0FBQ0QsU0FKRCxNQUlPO0FBQ0wsY0FBTUUsZ0JBQWdCLEdBQUdOLFFBQXpCLENBREssQ0FDK0I7O0FBRXBDLFVBQUEsS0FBSSxDQUFDTyx1QkFBTCxDQUE2QkQsZ0JBQTdCO0FBQ0Q7QUFDRixPQVZTLEVBVVAsQ0FWTyxDQUFWO0FBV0Q7OzsyQ0FFc0JGLGUsRUFBaUI7QUFDdENBLE1BQUFBLGVBQWUsQ0FBQ0ksT0FBaEI7QUFFQSxXQUFLQyxJQUFMO0FBQ0Q7Ozs0Q0FFdUJILGdCLEVBQWtCO0FBQ3hDLFVBQU1HLElBQUksR0FBRyxLQUFLQSxJQUFMLENBQVVDLElBQVYsQ0FBZSxJQUFmLENBQWI7QUFFQUosTUFBQUEsZ0JBQWdCLENBQUNFLE9BQWpCLENBQXlCLFlBQVc7QUFBRTtBQUNwQyxZQUFNRyxRQUFRLEdBQUdMLGdCQUFnQixDQUFDTSxXQUFqQixFQUFqQjtBQUVBRCxRQUFBQSxRQUFRLENBQUNFLEtBQVQsQ0FBZVAsZ0JBQWYsRUFBaUNRLFNBQWpDO0FBRUFMLFFBQUFBLElBQUk7QUFDTCxPQU5EO0FBT0Q7OzsyQkFFTTtBQUNMLFdBQUtoQixLQUFMLENBQVdzQixLQUFYO0FBRUEsVUFBTXBCLEtBQUssR0FBRyxLQUFLQyxPQUFMLEVBQWQ7O0FBRUEsVUFBSSxDQUFDRCxLQUFMLEVBQVk7QUFDVixhQUFLRyxlQUFMO0FBQ0Q7QUFDRjs7OzhCQUVTO0FBQ1IsVUFBTWtCLFdBQVcsR0FBRyxLQUFLdkIsS0FBTCxDQUFXd0IsTUFBL0I7QUFBQSxVQUNNdEIsS0FBSyxHQUFJcUIsV0FBVyxLQUFLLENBRC9CO0FBR0EsYUFBT3JCLEtBQVA7QUFDRDs7O2tDQUVvQjtBQUNuQixVQUFNRixLQUFLLEdBQUcsRUFBZDtBQUFBLFVBQ015QixLQUFLLEdBQUcsSUFBSTFCLEtBQUosQ0FBVUMsS0FBVixDQURkO0FBR0EsYUFBT3lCLEtBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XHJcblxyXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1ZXVlIHtcclxuICBjb25zdHJ1Y3Rvcih0YXNrcykge1xyXG4gICAgdGhpcy50YXNrcyA9IHRhc2tzO1xyXG4gIH1cclxuXHJcbiAgYWRkVGFzayh0YXNrKSB7XHJcbiAgICBjb25zdCBlbXB0eSA9IHRoaXMuaXNFbXB0eSgpO1xyXG5cclxuICAgIHRoaXMudGFza3MucHVzaCh0YXNrKTtcclxuXHJcbiAgICBpZiAoZW1wdHkpIHtcclxuICAgICAgdGhpcy5leGVjdXRlTmV4dFRhc2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV4ZWN1dGVOZXh0VGFzaygpIHtcclxuICAgIGNvbnN0IGZpcnN0VGFzayA9IGZpcnN0KHRoaXMudGFza3MpLFxyXG4gICAgICAgICAgbmV4dFRhc2sgPSBmaXJzdFRhc2ssIC8vL1xyXG4gICAgICAgICAgbmV4dFRhc2tTeW5jaHJvbm91cyA9IG5leHRUYXNrLmlzU3luY2hyb25vdXMoKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKG5leHRUYXNrU3luY2hyb25vdXMpIHsgLy8vXHJcbiAgICAgICAgY29uc3Qgc3luY2hyb25vdXNUYXNrID0gbmV4dFRhc2s7ICAvLy9cclxuXHJcbiAgICAgICAgdGhpcy5leGVjdXRlU3luY2hyb25vdXNUYXNrKHN5bmNocm9ub3VzVGFzayk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgYXN5bmNocm9ub3VzVGFzayA9IG5leHRUYXNrOyAgLy8vXHJcblxyXG4gICAgICAgIHRoaXMuZXhlY3V0ZUFzeW5jaHJvbm91c1Rhc2soYXN5bmNocm9ub3VzVGFzayk7XHJcbiAgICAgIH1cclxuICAgIH0sIDApO1xyXG4gIH1cclxuXHJcbiAgZXhlY3V0ZVN5bmNocm9ub3VzVGFzayhzeW5jaHJvbm91c1Rhc2spIHtcclxuICAgIHN5bmNocm9ub3VzVGFzay5leGVjdXRlKCk7XHJcblxyXG4gICAgdGhpcy5uZXh0KCk7XHJcbiAgfVxyXG5cclxuICBleGVjdXRlQXN5bmNocm9ub3VzVGFzayhhc3luY2hyb25vdXNUYXNrKSB7XHJcbiAgICBjb25zdCBuZXh0ID0gdGhpcy5uZXh0LmJpbmQodGhpcyk7XHJcblxyXG4gICAgYXN5bmNocm9ub3VzVGFzay5leGVjdXRlKGZ1bmN0aW9uKCkgeyAvLy9cclxuICAgICAgY29uc3QgY2FsbGJhY2sgPSBhc3luY2hyb25vdXNUYXNrLmdldENhbGxiYWNrKCk7XHJcbiAgICAgIFxyXG4gICAgICBjYWxsYmFjay5hcHBseShhc3luY2hyb25vdXNUYXNrLCBhcmd1bWVudHMpO1xyXG4gICAgICBcclxuICAgICAgbmV4dCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZXh0KCkge1xyXG4gICAgdGhpcy50YXNrcy5zaGlmdCgpO1xyXG5cclxuICAgIGNvbnN0IGVtcHR5ID0gdGhpcy5pc0VtcHR5KCk7XHJcblxyXG4gICAgaWYgKCFlbXB0eSkge1xyXG4gICAgICB0aGlzLmV4ZWN1dGVOZXh0VGFzaygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaXNFbXB0eSgpIHtcclxuICAgIGNvbnN0IHRhc2tzTGVuZ3RoID0gdGhpcy50YXNrcy5sZW5ndGgsXHJcbiAgICAgICAgICBlbXB0eSA9ICh0YXNrc0xlbmd0aCA9PT0gMCk7XHJcblxyXG4gICAgcmV0dXJuIGVtcHR5O1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xyXG4gICAgY29uc3QgdGFza3MgPSBbXSxcclxuICAgICAgICAgIHF1ZXVlID0gbmV3IFF1ZXVlKHRhc2tzKTtcclxuXHJcbiAgICByZXR1cm4gcXVldWU7XHJcbiAgfVxyXG59XHJcbiJdfQ==