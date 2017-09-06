'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var arrayUtilities = necessary.arrayUtilities,
    first = arrayUtilities.first;

var Queue = function () {
  function Queue() {
    _classCallCheck(this, Queue);

    this.tasks = [];
  }

  _createClass(Queue, [{
    key: 'addTask',
    value: function addTask(task) {
      this.tasks.push(task);

      var tasksLength = this.getTasksLength();

      if (tasksLength === 1) {
        this.executeFirstTask();
      }
    }
  }, {
    key: 'executeFirstTask',
    value: function executeFirstTask() {
      var firstTask = first(this.tasks),
          firstTaskSynchronous = firstTask.isSynchronous();

      if (firstTaskSynchronous) {
        ///
        this.executeSynchronousFirstTask();
      } else {
        this.executeAsynchronousFirstTask();
      }
    }
  }, {
    key: 'executeAsynchronousFirstTask',
    value: function executeAsynchronousFirstTask() {
      var firstTask = first(this.tasks);

      firstTask.execute(function () {
        var callback = firstTask.getCallback();

        callback.apply(firstTask, arguments);

        this.next();
      }.bind(this));
    }
  }, {
    key: 'executeSynchronousFirstTask',
    value: function executeSynchronousFirstTask() {
      var firstTask = first(this.tasks);

      firstTask.execute();

      this.next();
    }
  }, {
    key: 'next',
    value: function next() {
      this.tasks.shift();

      var empty = this.isEmpty();

      if (!empty) {
        var firstTask = first(this.tasks);

        this.executeFirstTask(firstTask);
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
  }]);

  return Queue;
}();

module.exports = Queue;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9xdWV1ZS5qcyJdLCJuYW1lcyI6WyJuZWNlc3NhcnkiLCJyZXF1aXJlIiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsIlF1ZXVlIiwidGFza3MiLCJ0YXNrIiwicHVzaCIsInRhc2tzTGVuZ3RoIiwiZ2V0VGFza3NMZW5ndGgiLCJleGVjdXRlRmlyc3RUYXNrIiwiZmlyc3RUYXNrIiwiZmlyc3RUYXNrU3luY2hyb25vdXMiLCJpc1N5bmNocm9ub3VzIiwiZXhlY3V0ZVN5bmNocm9ub3VzRmlyc3RUYXNrIiwiZXhlY3V0ZUFzeW5jaHJvbm91c0ZpcnN0VGFzayIsImV4ZWN1dGUiLCJjYWxsYmFjayIsImdldENhbGxiYWNrIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJuZXh0IiwiYmluZCIsInNoaWZ0IiwiZW1wdHkiLCJpc0VtcHR5IiwibGVuZ3RoIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsV0FBUixDQUFsQjs7QUFFTSxJQUFFQyxjQUFGLEdBQXFCRixTQUFyQixDQUFFRSxjQUFGO0FBQUEsSUFDRUMsS0FERixHQUNZRCxjQURaLENBQ0VDLEtBREY7O0lBR0FDLEs7QUFDSixtQkFBYztBQUFBOztBQUNaLFNBQUtDLEtBQUwsR0FBYSxFQUFiO0FBQ0Q7Ozs7NEJBRU9DLEksRUFBTTtBQUNaLFdBQUtELEtBQUwsQ0FBV0UsSUFBWCxDQUFnQkQsSUFBaEI7O0FBRUEsVUFBTUUsY0FBYyxLQUFLQyxjQUFMLEVBQXBCOztBQUVBLFVBQUlELGdCQUFnQixDQUFwQixFQUF1QjtBQUNyQixhQUFLRSxnQkFBTDtBQUNEO0FBQ0Y7Ozt1Q0FFa0I7QUFDakIsVUFBTUMsWUFBWVIsTUFBTSxLQUFLRSxLQUFYLENBQWxCO0FBQUEsVUFDTU8sdUJBQXVCRCxVQUFVRSxhQUFWLEVBRDdCOztBQUdBLFVBQUlELG9CQUFKLEVBQTBCO0FBQUU7QUFDMUIsYUFBS0UsMkJBQUw7QUFDRCxPQUZELE1BRU87QUFDTCxhQUFLQyw0QkFBTDtBQUNEO0FBQ0Y7OzttREFFOEI7QUFDN0IsVUFBTUosWUFBWVIsTUFBTSxLQUFLRSxLQUFYLENBQWxCOztBQUVBTSxnQkFBVUssT0FBVixDQUFrQixZQUFXO0FBQzNCLFlBQU1DLFdBQVdOLFVBQVVPLFdBQVYsRUFBakI7O0FBRUFELGlCQUFTRSxLQUFULENBQWVSLFNBQWYsRUFBMEJTLFNBQTFCOztBQUVBLGFBQUtDLElBQUw7QUFDRCxPQU5pQixDQU1oQkMsSUFOZ0IsQ0FNWCxJQU5XLENBQWxCO0FBT0Q7OztrREFFNkI7QUFDNUIsVUFBTVgsWUFBWVIsTUFBTSxLQUFLRSxLQUFYLENBQWxCOztBQUVBTSxnQkFBVUssT0FBVjs7QUFFQSxXQUFLSyxJQUFMO0FBQ0Q7OzsyQkFFTTtBQUNMLFdBQUtoQixLQUFMLENBQVdrQixLQUFYOztBQUVBLFVBQU1DLFFBQVEsS0FBS0MsT0FBTCxFQUFkOztBQUVBLFVBQUksQ0FBQ0QsS0FBTCxFQUFZO0FBQ1YsWUFBTWIsWUFBWVIsTUFBTSxLQUFLRSxLQUFYLENBQWxCOztBQUVBLGFBQUtLLGdCQUFMLENBQXNCQyxTQUF0QjtBQUNEO0FBQ0Y7OztxQ0FFZ0I7QUFDZixVQUFNSCxjQUFjLEtBQUtILEtBQUwsQ0FBV3FCLE1BQS9COztBQUVBLGFBQU9sQixXQUFQO0FBQ0Q7Ozs4QkFFUztBQUNSLFVBQU1BLGNBQWMsS0FBS0MsY0FBTCxFQUFwQjtBQUFBLFVBQ01lLFFBQVNoQixnQkFBZ0IsQ0FEL0I7O0FBR0EsYUFBT2dCLEtBQVA7QUFDRDs7Ozs7O0FBR0hHLE9BQU9DLE9BQVAsR0FBaUJ4QixLQUFqQiIsImZpbGUiOiJxdWV1ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xyXG5cclxuY29uc3QgeyBhcnJheVV0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxyXG4gICAgICB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcclxuXHJcbmNsYXNzIFF1ZXVlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMudGFza3MgPSBbXTtcclxuICB9XHJcblxyXG4gIGFkZFRhc2sodGFzaykge1xyXG4gICAgdGhpcy50YXNrcy5wdXNoKHRhc2spO1xyXG4gICAgXHJcbiAgICBjb25zdCB0YXNrc0xlbmd0aCA9IHRoaXMuZ2V0VGFza3NMZW5ndGgoKTtcclxuICAgIFxyXG4gICAgaWYgKHRhc2tzTGVuZ3RoID09PSAxKSB7XHJcbiAgICAgIHRoaXMuZXhlY3V0ZUZpcnN0VGFzaygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZXhlY3V0ZUZpcnN0VGFzaygpIHtcclxuICAgIGNvbnN0IGZpcnN0VGFzayA9IGZpcnN0KHRoaXMudGFza3MpLFxyXG4gICAgICAgICAgZmlyc3RUYXNrU3luY2hyb25vdXMgPSBmaXJzdFRhc2suaXNTeW5jaHJvbm91cygpO1xyXG4gICAgXHJcbiAgICBpZiAoZmlyc3RUYXNrU3luY2hyb25vdXMpIHsgLy8vXHJcbiAgICAgIHRoaXMuZXhlY3V0ZVN5bmNocm9ub3VzRmlyc3RUYXNrKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmV4ZWN1dGVBc3luY2hyb25vdXNGaXJzdFRhc2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV4ZWN1dGVBc3luY2hyb25vdXNGaXJzdFRhc2soKSB7XHJcbiAgICBjb25zdCBmaXJzdFRhc2sgPSBmaXJzdCh0aGlzLnRhc2tzKTtcclxuXHJcbiAgICBmaXJzdFRhc2suZXhlY3V0ZShmdW5jdGlvbigpIHtcclxuICAgICAgY29uc3QgY2FsbGJhY2sgPSBmaXJzdFRhc2suZ2V0Q2FsbGJhY2soKTtcclxuICAgICAgXHJcbiAgICAgIGNhbGxiYWNrLmFwcGx5KGZpcnN0VGFzaywgYXJndW1lbnRzKTtcclxuICAgICAgXHJcbiAgICAgIHRoaXMubmV4dCgpO1xyXG4gICAgfS5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIGV4ZWN1dGVTeW5jaHJvbm91c0ZpcnN0VGFzaygpIHtcclxuICAgIGNvbnN0IGZpcnN0VGFzayA9IGZpcnN0KHRoaXMudGFza3MpO1xyXG5cclxuICAgIGZpcnN0VGFzay5leGVjdXRlKCk7XHJcbiAgICBcclxuICAgIHRoaXMubmV4dCgpO1xyXG4gIH1cclxuICBcclxuICBuZXh0KCkge1xyXG4gICAgdGhpcy50YXNrcy5zaGlmdCgpO1xyXG5cclxuICAgIGNvbnN0IGVtcHR5ID0gdGhpcy5pc0VtcHR5KCk7XHJcblxyXG4gICAgaWYgKCFlbXB0eSkge1xyXG4gICAgICBjb25zdCBmaXJzdFRhc2sgPSBmaXJzdCh0aGlzLnRhc2tzKTtcclxuXHJcbiAgICAgIHRoaXMuZXhlY3V0ZUZpcnN0VGFzayhmaXJzdFRhc2spO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBnZXRUYXNrc0xlbmd0aCgpIHtcclxuICAgIGNvbnN0IHRhc2tzTGVuZ3RoID0gdGhpcy50YXNrcy5sZW5ndGg7XHJcbiAgICBcclxuICAgIHJldHVybiB0YXNrc0xlbmd0aDtcclxuICB9XHJcblxyXG4gIGlzRW1wdHkoKSB7XHJcbiAgICBjb25zdCB0YXNrc0xlbmd0aCA9IHRoaXMuZ2V0VGFza3NMZW5ndGgoKSxcclxuICAgICAgICAgIGVtcHR5ID0gKHRhc2tzTGVuZ3RoID09PSAwKTtcclxuXHJcbiAgICByZXR1cm4gZW1wdHk7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFF1ZXVlO1xyXG4iXX0=