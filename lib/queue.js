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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZXVlLmpzIl0sIm5hbWVzIjpbImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJRdWV1ZSIsInRhc2tzIiwidGFzayIsImVtcHR5IiwiaXNFbXB0eSIsInB1c2giLCJleGVjdXRlTmV4dFRhc2siLCJmaXJzdFRhc2siLCJuZXh0VGFzayIsIm5leHRUYXNrU3luY2hyb25vdXMiLCJpc1N5bmNocm9ub3VzIiwic3luY2hyb25vdXNUYXNrIiwiZXhlY3V0ZVN5bmNocm9ub3VzVGFzayIsImFzeW5jaHJvbm91c1Rhc2siLCJleGVjdXRlQXN5bmNocm9ub3VzVGFzayIsImV4ZWN1dGUiLCJuZXh0IiwiYmluZCIsImNhbGxiYWNrIiwiZ2V0Q2FsbGJhY2siLCJhcHBseSIsImFyZ3VtZW50cyIsInNoaWZ0IiwidGFza3NMZW5ndGgiLCJsZW5ndGgiLCJxdWV1ZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7Ozs7Ozs7SUFFUUEsSyxHQUFVQyx5QixDQUFWRCxLOztJQUVhRSxLO0FBQ25CLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7OzRCQUVPQyxJLEVBQU07QUFDWixVQUFNQyxLQUFLLEdBQUcsS0FBS0MsT0FBTCxFQUFkO0FBRUEsV0FBS0gsS0FBTCxDQUFXSSxJQUFYLENBQWdCSCxJQUFoQjs7QUFFQSxVQUFJQyxLQUFKLEVBQVc7QUFDVCxhQUFLRyxlQUFMO0FBQ0Q7QUFDRjs7O3NDQUVpQjtBQUNoQixVQUFNQyxTQUFTLEdBQUdULEtBQUssQ0FBQyxLQUFLRyxLQUFOLENBQXZCO0FBQUEsVUFDTU8sUUFBUSxHQUFHRCxTQURqQjtBQUFBLFVBQzRCO0FBQ3RCRSxNQUFBQSxtQkFBbUIsR0FBR0QsUUFBUSxDQUFDRSxhQUFULEVBRjVCOztBQUlBLFVBQUlELG1CQUFKLEVBQXlCO0FBQUU7QUFDekIsWUFBTUUsZUFBZSxHQUFHSCxRQUF4QixDQUR1QixDQUNZOztBQUVuQyxhQUFLSSxzQkFBTCxDQUE0QkQsZUFBNUI7QUFDRCxPQUpELE1BSU87QUFDTCxZQUFNRSxnQkFBZ0IsR0FBR0wsUUFBekIsQ0FESyxDQUMrQjs7QUFFcEMsYUFBS00sdUJBQUwsQ0FBNkJELGdCQUE3QjtBQUNEO0FBQ0Y7OzsyQ0FFc0JGLGUsRUFBaUI7QUFDdENBLE1BQUFBLGVBQWUsQ0FBQ0ksT0FBaEI7QUFFQSxXQUFLQyxJQUFMO0FBQ0Q7Ozs0Q0FFdUJILGdCLEVBQWtCO0FBQ3hDLFVBQU1HLElBQUksR0FBRyxLQUFLQSxJQUFMLENBQVVDLElBQVYsQ0FBZSxJQUFmLENBQWI7QUFFQUosTUFBQUEsZ0JBQWdCLENBQUNFLE9BQWpCLENBQXlCLFlBQVc7QUFDbEMsWUFBTUcsUUFBUSxHQUFHTCxnQkFBZ0IsQ0FBQ00sV0FBakIsRUFBakI7QUFFQUQsUUFBQUEsUUFBUSxDQUFDRSxLQUFULENBQWVQLGdCQUFmLEVBQWlDUSxTQUFqQztBQUVBTCxRQUFBQSxJQUFJO0FBQ0wsT0FORDtBQU9EOzs7MkJBRU07QUFDTCxXQUFLZixLQUFMLENBQVdxQixLQUFYO0FBRUEsVUFBTW5CLEtBQUssR0FBRyxLQUFLQyxPQUFMLEVBQWQ7O0FBRUEsVUFBSSxDQUFDRCxLQUFMLEVBQVk7QUFDVixhQUFLRyxlQUFMO0FBQ0Q7QUFDRjs7OzhCQUVTO0FBQ1IsVUFBTWlCLFdBQVcsR0FBRyxLQUFLdEIsS0FBTCxDQUFXdUIsTUFBL0I7QUFBQSxVQUNNckIsS0FBSyxHQUFJb0IsV0FBVyxLQUFLLENBRC9CO0FBR0EsYUFBT3BCLEtBQVA7QUFDRDs7O2tDQUVvQjtBQUNuQixVQUFNRixLQUFLLEdBQUcsRUFBZDtBQUFBLFVBQ013QixLQUFLLEdBQUcsSUFBSXpCLEtBQUosQ0FBVUMsS0FBVixDQURkO0FBR0EsYUFBT3dCLEtBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XHJcblxyXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1ZXVlIHtcclxuICBjb25zdHJ1Y3Rvcih0YXNrcykge1xyXG4gICAgdGhpcy50YXNrcyA9IHRhc2tzO1xyXG4gIH1cclxuXHJcbiAgYWRkVGFzayh0YXNrKSB7XHJcbiAgICBjb25zdCBlbXB0eSA9IHRoaXMuaXNFbXB0eSgpO1xyXG5cclxuICAgIHRoaXMudGFza3MucHVzaCh0YXNrKTtcclxuXHJcbiAgICBpZiAoZW1wdHkpIHtcclxuICAgICAgdGhpcy5leGVjdXRlTmV4dFRhc2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV4ZWN1dGVOZXh0VGFzaygpIHtcclxuICAgIGNvbnN0IGZpcnN0VGFzayA9IGZpcnN0KHRoaXMudGFza3MpLFxyXG4gICAgICAgICAgbmV4dFRhc2sgPSBmaXJzdFRhc2ssIC8vL1xyXG4gICAgICAgICAgbmV4dFRhc2tTeW5jaHJvbm91cyA9IG5leHRUYXNrLmlzU3luY2hyb25vdXMoKTtcclxuICAgIFxyXG4gICAgaWYgKG5leHRUYXNrU3luY2hyb25vdXMpIHsgLy8vXHJcbiAgICAgIGNvbnN0IHN5bmNocm9ub3VzVGFzayA9IG5leHRUYXNrOyAgLy8vXHJcblxyXG4gICAgICB0aGlzLmV4ZWN1dGVTeW5jaHJvbm91c1Rhc2soc3luY2hyb25vdXNUYXNrKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGFzeW5jaHJvbm91c1Rhc2sgPSBuZXh0VGFzazsgIC8vL1xyXG5cclxuICAgICAgdGhpcy5leGVjdXRlQXN5bmNocm9ub3VzVGFzayhhc3luY2hyb25vdXNUYXNrKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV4ZWN1dGVTeW5jaHJvbm91c1Rhc2soc3luY2hyb25vdXNUYXNrKSB7XHJcbiAgICBzeW5jaHJvbm91c1Rhc2suZXhlY3V0ZSgpO1xyXG5cclxuICAgIHRoaXMubmV4dCgpO1xyXG4gIH1cclxuXHJcbiAgZXhlY3V0ZUFzeW5jaHJvbm91c1Rhc2soYXN5bmNocm9ub3VzVGFzaykge1xyXG4gICAgY29uc3QgbmV4dCA9IHRoaXMubmV4dC5iaW5kKHRoaXMpO1xyXG5cclxuICAgIGFzeW5jaHJvbm91c1Rhc2suZXhlY3V0ZShmdW5jdGlvbigpIHtcclxuICAgICAgY29uc3QgY2FsbGJhY2sgPSBhc3luY2hyb25vdXNUYXNrLmdldENhbGxiYWNrKCk7XHJcbiAgICAgIFxyXG4gICAgICBjYWxsYmFjay5hcHBseShhc3luY2hyb25vdXNUYXNrLCBhcmd1bWVudHMpO1xyXG4gICAgICBcclxuICAgICAgbmV4dCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZXh0KCkge1xyXG4gICAgdGhpcy50YXNrcy5zaGlmdCgpO1xyXG5cclxuICAgIGNvbnN0IGVtcHR5ID0gdGhpcy5pc0VtcHR5KCk7XHJcblxyXG4gICAgaWYgKCFlbXB0eSkge1xyXG4gICAgICB0aGlzLmV4ZWN1dGVOZXh0VGFzaygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaXNFbXB0eSgpIHtcclxuICAgIGNvbnN0IHRhc2tzTGVuZ3RoID0gdGhpcy50YXNrcy5sZW5ndGgsXHJcbiAgICAgICAgICBlbXB0eSA9ICh0YXNrc0xlbmd0aCA9PT0gMCk7XHJcblxyXG4gICAgcmV0dXJuIGVtcHR5O1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xyXG4gICAgY29uc3QgdGFza3MgPSBbXSxcclxuICAgICAgICAgIHF1ZXVlID0gbmV3IFF1ZXVlKHRhc2tzKTtcclxuXHJcbiAgICByZXR1cm4gcXVldWU7XHJcbiAgfVxyXG59XHJcbiJdfQ==