'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var necessary = require('necessary');

var arrayUtilities = necessary.arrayUtilities,
    first = arrayUtilities.first;

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

module.exports = Queue;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZXVlLmpzIl0sIm5hbWVzIjpbIm5lY2Vzc2FyeSIsInJlcXVpcmUiLCJhcnJheVV0aWxpdGllcyIsImZpcnN0IiwiUXVldWUiLCJ0YXNrcyIsInRhc2siLCJlbXB0eSIsImlzRW1wdHkiLCJwdXNoIiwiZXhlY3V0ZU5leHRUYXNrIiwiZmlyc3RUYXNrIiwibmV4dFRhc2siLCJuZXh0VGFza1N5bmNocm9ub3VzIiwiaXNTeW5jaHJvbm91cyIsInN5bmNocm9ub3VzVGFzayIsImV4ZWN1dGVTeW5jaHJvbm91c1Rhc2siLCJhc3luY2hyb25vdXNUYXNrIiwiZXhlY3V0ZUFzeW5jaHJvbm91c1Rhc2siLCJleGVjdXRlIiwibmV4dCIsImJpbmQiLCJjYWxsYmFjayIsImdldENhbGxiYWNrIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJzaGlmdCIsInRhc2tzTGVuZ3RoIiwibGVuZ3RoIiwicXVldWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLE9BQU8sQ0FBQyxXQUFELENBQXpCOztBQUVNLElBQUVDLGNBQUYsR0FBcUJGLFNBQXJCLENBQUVFLGNBQUY7QUFBQSxJQUNFQyxLQURGLEdBQ1lELGNBRFosQ0FDRUMsS0FERjs7SUFHQUMsSztBQUNKLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7OzRCQUVPQyxJLEVBQU07QUFDWixVQUFNQyxLQUFLLEdBQUcsS0FBS0MsT0FBTCxFQUFkO0FBRUEsV0FBS0gsS0FBTCxDQUFXSSxJQUFYLENBQWdCSCxJQUFoQjs7QUFFQSxVQUFJQyxLQUFKLEVBQVc7QUFDVCxhQUFLRyxlQUFMO0FBQ0Q7QUFDRjs7O3NDQUVpQjtBQUNoQixVQUFNQyxTQUFTLEdBQUdSLEtBQUssQ0FBQyxLQUFLRSxLQUFOLENBQXZCO0FBQUEsVUFDTU8sUUFBUSxHQUFHRCxTQURqQjtBQUFBLFVBQzRCO0FBQ3RCRSxNQUFBQSxtQkFBbUIsR0FBR0QsUUFBUSxDQUFDRSxhQUFULEVBRjVCOztBQUlBLFVBQUlELG1CQUFKLEVBQXlCO0FBQUU7QUFDekIsWUFBTUUsZUFBZSxHQUFHSCxRQUF4QixDQUR1QixDQUNZOztBQUVuQyxhQUFLSSxzQkFBTCxDQUE0QkQsZUFBNUI7QUFDRCxPQUpELE1BSU87QUFDTCxZQUFNRSxnQkFBZ0IsR0FBR0wsUUFBekIsQ0FESyxDQUMrQjs7QUFFcEMsYUFBS00sdUJBQUwsQ0FBNkJELGdCQUE3QjtBQUNEO0FBQ0Y7OzsyQ0FFc0JGLGUsRUFBaUI7QUFDdENBLE1BQUFBLGVBQWUsQ0FBQ0ksT0FBaEI7QUFFQSxXQUFLQyxJQUFMO0FBQ0Q7Ozs0Q0FFdUJILGdCLEVBQWtCO0FBQ3hDLFVBQU1HLElBQUksR0FBRyxLQUFLQSxJQUFMLENBQVVDLElBQVYsQ0FBZSxJQUFmLENBQWI7QUFFQUosTUFBQUEsZ0JBQWdCLENBQUNFLE9BQWpCLENBQXlCLFlBQVc7QUFDbEMsWUFBTUcsUUFBUSxHQUFHTCxnQkFBZ0IsQ0FBQ00sV0FBakIsRUFBakI7QUFFQUQsUUFBQUEsUUFBUSxDQUFDRSxLQUFULENBQWVQLGdCQUFmLEVBQWlDUSxTQUFqQztBQUVBTCxRQUFBQSxJQUFJO0FBQ0wsT0FORDtBQU9EOzs7MkJBRU07QUFDTCxXQUFLZixLQUFMLENBQVdxQixLQUFYO0FBRUEsVUFBTW5CLEtBQUssR0FBRyxLQUFLQyxPQUFMLEVBQWQ7O0FBRUEsVUFBSSxDQUFDRCxLQUFMLEVBQVk7QUFDVixhQUFLRyxlQUFMO0FBQ0Q7QUFDRjs7OzhCQUVTO0FBQ1IsVUFBTWlCLFdBQVcsR0FBRyxLQUFLdEIsS0FBTCxDQUFXdUIsTUFBL0I7QUFBQSxVQUNNckIsS0FBSyxHQUFJb0IsV0FBVyxLQUFLLENBRC9CO0FBR0EsYUFBT3BCLEtBQVA7QUFDRDs7O2tDQUVvQjtBQUNuQixVQUFNRixLQUFLLEdBQUcsRUFBZDtBQUFBLFVBQ013QixLQUFLLEdBQUcsSUFBSXpCLEtBQUosQ0FBVUMsS0FBVixDQURkO0FBR0EsYUFBT3dCLEtBQVA7QUFDRDs7Ozs7O0FBR0hDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjNCLEtBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XHJcblxyXG5jb25zdCB7IGFycmF5VXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXHJcbiAgICAgIHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xyXG5cclxuY2xhc3MgUXVldWUge1xyXG4gIGNvbnN0cnVjdG9yKHRhc2tzKSB7XHJcbiAgICB0aGlzLnRhc2tzID0gdGFza3M7XHJcbiAgfVxyXG5cclxuICBhZGRUYXNrKHRhc2spIHtcclxuICAgIGNvbnN0IGVtcHR5ID0gdGhpcy5pc0VtcHR5KCk7XHJcblxyXG4gICAgdGhpcy50YXNrcy5wdXNoKHRhc2spO1xyXG5cclxuICAgIGlmIChlbXB0eSkge1xyXG4gICAgICB0aGlzLmV4ZWN1dGVOZXh0VGFzaygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZXhlY3V0ZU5leHRUYXNrKCkge1xyXG4gICAgY29uc3QgZmlyc3RUYXNrID0gZmlyc3QodGhpcy50YXNrcyksXHJcbiAgICAgICAgICBuZXh0VGFzayA9IGZpcnN0VGFzaywgLy8vXHJcbiAgICAgICAgICBuZXh0VGFza1N5bmNocm9ub3VzID0gbmV4dFRhc2suaXNTeW5jaHJvbm91cygpO1xyXG4gICAgXHJcbiAgICBpZiAobmV4dFRhc2tTeW5jaHJvbm91cykgeyAvLy9cclxuICAgICAgY29uc3Qgc3luY2hyb25vdXNUYXNrID0gbmV4dFRhc2s7ICAvLy9cclxuXHJcbiAgICAgIHRoaXMuZXhlY3V0ZVN5bmNocm9ub3VzVGFzayhzeW5jaHJvbm91c1Rhc2spO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgYXN5bmNocm9ub3VzVGFzayA9IG5leHRUYXNrOyAgLy8vXHJcblxyXG4gICAgICB0aGlzLmV4ZWN1dGVBc3luY2hyb25vdXNUYXNrKGFzeW5jaHJvbm91c1Rhc2spO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZXhlY3V0ZVN5bmNocm9ub3VzVGFzayhzeW5jaHJvbm91c1Rhc2spIHtcclxuICAgIHN5bmNocm9ub3VzVGFzay5leGVjdXRlKCk7XHJcblxyXG4gICAgdGhpcy5uZXh0KCk7XHJcbiAgfVxyXG5cclxuICBleGVjdXRlQXN5bmNocm9ub3VzVGFzayhhc3luY2hyb25vdXNUYXNrKSB7XHJcbiAgICBjb25zdCBuZXh0ID0gdGhpcy5uZXh0LmJpbmQodGhpcyk7XHJcblxyXG4gICAgYXN5bmNocm9ub3VzVGFzay5leGVjdXRlKGZ1bmN0aW9uKCkge1xyXG4gICAgICBjb25zdCBjYWxsYmFjayA9IGFzeW5jaHJvbm91c1Rhc2suZ2V0Q2FsbGJhY2soKTtcclxuICAgICAgXHJcbiAgICAgIGNhbGxiYWNrLmFwcGx5KGFzeW5jaHJvbm91c1Rhc2ssIGFyZ3VtZW50cyk7XHJcbiAgICAgIFxyXG4gICAgICBuZXh0KCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5leHQoKSB7XHJcbiAgICB0aGlzLnRhc2tzLnNoaWZ0KCk7XHJcblxyXG4gICAgY29uc3QgZW1wdHkgPSB0aGlzLmlzRW1wdHkoKTtcclxuXHJcbiAgICBpZiAoIWVtcHR5KSB7XHJcbiAgICAgIHRoaXMuZXhlY3V0ZU5leHRUYXNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpc0VtcHR5KCkge1xyXG4gICAgY29uc3QgdGFza3NMZW5ndGggPSB0aGlzLnRhc2tzLmxlbmd0aCxcclxuICAgICAgICAgIGVtcHR5ID0gKHRhc2tzTGVuZ3RoID09PSAwKTtcclxuXHJcbiAgICByZXR1cm4gZW1wdHk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XHJcbiAgICBjb25zdCB0YXNrcyA9IFtdLFxyXG4gICAgICAgICAgcXVldWUgPSBuZXcgUXVldWUodGFza3MpO1xyXG5cclxuICAgIHJldHVybiBxdWV1ZTtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gUXVldWU7XHJcbiJdfQ==