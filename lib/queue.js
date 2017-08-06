'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var array = necessary.array,
    first = array.first;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9xdWV1ZS5qcyJdLCJuYW1lcyI6WyJuZWNlc3NhcnkiLCJyZXF1aXJlIiwiYXJyYXkiLCJmaXJzdCIsIlF1ZXVlIiwidGFza3MiLCJ0YXNrIiwicHVzaCIsInRhc2tzTGVuZ3RoIiwiZ2V0VGFza3NMZW5ndGgiLCJleGVjdXRlRmlyc3RUYXNrIiwiZmlyc3RUYXNrIiwiZmlyc3RUYXNrU3luY2hyb25vdXMiLCJpc1N5bmNocm9ub3VzIiwiZXhlY3V0ZVN5bmNocm9ub3VzRmlyc3RUYXNrIiwiZXhlY3V0ZUFzeW5jaHJvbm91c0ZpcnN0VGFzayIsImV4ZWN1dGUiLCJjYWxsYmFjayIsImdldENhbGxiYWNrIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJuZXh0IiwiYmluZCIsInNoaWZ0IiwiZW1wdHkiLCJpc0VtcHR5IiwibGVuZ3RoIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsV0FBUixDQUFsQjs7QUFFTSxJQUFFQyxLQUFGLEdBQVlGLFNBQVosQ0FBRUUsS0FBRjtBQUFBLElBQ0VDLEtBREYsR0FDWUQsS0FEWixDQUNFQyxLQURGOztJQUdBQyxLO0FBQ0osbUJBQWM7QUFBQTs7QUFDWixTQUFLQyxLQUFMLEdBQWEsRUFBYjtBQUNEOzs7OzRCQUVPQyxJLEVBQU07QUFDWixXQUFLRCxLQUFMLENBQVdFLElBQVgsQ0FBZ0JELElBQWhCOztBQUVBLFVBQU1FLGNBQWMsS0FBS0MsY0FBTCxFQUFwQjs7QUFFQSxVQUFJRCxnQkFBZ0IsQ0FBcEIsRUFBdUI7QUFDckIsYUFBS0UsZ0JBQUw7QUFDRDtBQUNGOzs7dUNBRWtCO0FBQ2pCLFVBQU1DLFlBQVlSLE1BQU0sS0FBS0UsS0FBWCxDQUFsQjtBQUFBLFVBQ01PLHVCQUF1QkQsVUFBVUUsYUFBVixFQUQ3Qjs7QUFHQSxVQUFJRCxvQkFBSixFQUEwQjtBQUFFO0FBQzFCLGFBQUtFLDJCQUFMO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsYUFBS0MsNEJBQUw7QUFDRDtBQUNGOzs7bURBRThCO0FBQzdCLFVBQU1KLFlBQVlSLE1BQU0sS0FBS0UsS0FBWCxDQUFsQjs7QUFFQU0sZ0JBQVVLLE9BQVYsQ0FBa0IsWUFBVztBQUMzQixZQUFNQyxXQUFXTixVQUFVTyxXQUFWLEVBQWpCOztBQUVBRCxpQkFBU0UsS0FBVCxDQUFlUixTQUFmLEVBQTBCUyxTQUExQjs7QUFFQSxhQUFLQyxJQUFMO0FBQ0QsT0FOaUIsQ0FNaEJDLElBTmdCLENBTVgsSUFOVyxDQUFsQjtBQU9EOzs7a0RBRTZCO0FBQzVCLFVBQU1YLFlBQVlSLE1BQU0sS0FBS0UsS0FBWCxDQUFsQjs7QUFFQU0sZ0JBQVVLLE9BQVY7O0FBRUEsV0FBS0ssSUFBTDtBQUNEOzs7MkJBRU07QUFDTCxXQUFLaEIsS0FBTCxDQUFXa0IsS0FBWDs7QUFFQSxVQUFNQyxRQUFRLEtBQUtDLE9BQUwsRUFBZDs7QUFFQSxVQUFJLENBQUNELEtBQUwsRUFBWTtBQUNWLFlBQU1iLFlBQVlSLE1BQU0sS0FBS0UsS0FBWCxDQUFsQjs7QUFFQSxhQUFLSyxnQkFBTCxDQUFzQkMsU0FBdEI7QUFDRDtBQUNGOzs7cUNBRWdCO0FBQ2YsVUFBTUgsY0FBYyxLQUFLSCxLQUFMLENBQVdxQixNQUEvQjs7QUFFQSxhQUFPbEIsV0FBUDtBQUNEOzs7OEJBRVM7QUFDUixVQUFNQSxjQUFjLEtBQUtDLGNBQUwsRUFBcEI7QUFBQSxVQUNNZSxRQUFTaEIsZ0JBQWdCLENBRC9COztBQUdBLGFBQU9nQixLQUFQO0FBQ0Q7Ozs7OztBQUdIRyxPQUFPQyxPQUFQLEdBQWlCeEIsS0FBakIiLCJmaWxlIjoicXVldWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcclxuXHJcbmNvbnN0IHsgYXJyYXkgfSA9IG5lY2Vzc2FyeSxcclxuICAgICAgeyBmaXJzdCB9ID0gYXJyYXk7XHJcblxyXG5jbGFzcyBRdWV1ZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnRhc2tzID0gW107XHJcbiAgfVxyXG5cclxuICBhZGRUYXNrKHRhc2spIHtcclxuICAgIHRoaXMudGFza3MucHVzaCh0YXNrKTtcclxuICAgIFxyXG4gICAgY29uc3QgdGFza3NMZW5ndGggPSB0aGlzLmdldFRhc2tzTGVuZ3RoKCk7XHJcbiAgICBcclxuICAgIGlmICh0YXNrc0xlbmd0aCA9PT0gMSkge1xyXG4gICAgICB0aGlzLmV4ZWN1dGVGaXJzdFRhc2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV4ZWN1dGVGaXJzdFRhc2soKSB7XHJcbiAgICBjb25zdCBmaXJzdFRhc2sgPSBmaXJzdCh0aGlzLnRhc2tzKSxcclxuICAgICAgICAgIGZpcnN0VGFza1N5bmNocm9ub3VzID0gZmlyc3RUYXNrLmlzU3luY2hyb25vdXMoKTtcclxuICAgIFxyXG4gICAgaWYgKGZpcnN0VGFza1N5bmNocm9ub3VzKSB7IC8vL1xyXG4gICAgICB0aGlzLmV4ZWN1dGVTeW5jaHJvbm91c0ZpcnN0VGFzaygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5leGVjdXRlQXN5bmNocm9ub3VzRmlyc3RUYXNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBleGVjdXRlQXN5bmNocm9ub3VzRmlyc3RUYXNrKCkge1xyXG4gICAgY29uc3QgZmlyc3RUYXNrID0gZmlyc3QodGhpcy50YXNrcyk7XHJcblxyXG4gICAgZmlyc3RUYXNrLmV4ZWN1dGUoZnVuY3Rpb24oKSB7XHJcbiAgICAgIGNvbnN0IGNhbGxiYWNrID0gZmlyc3RUYXNrLmdldENhbGxiYWNrKCk7XHJcbiAgICAgIFxyXG4gICAgICBjYWxsYmFjay5hcHBseShmaXJzdFRhc2ssIGFyZ3VtZW50cyk7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLm5leHQoKTtcclxuICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgfVxyXG5cclxuICBleGVjdXRlU3luY2hyb25vdXNGaXJzdFRhc2soKSB7XHJcbiAgICBjb25zdCBmaXJzdFRhc2sgPSBmaXJzdCh0aGlzLnRhc2tzKTtcclxuXHJcbiAgICBmaXJzdFRhc2suZXhlY3V0ZSgpO1xyXG4gICAgXHJcbiAgICB0aGlzLm5leHQoKTtcclxuICB9XHJcbiAgXHJcbiAgbmV4dCgpIHtcclxuICAgIHRoaXMudGFza3Muc2hpZnQoKTtcclxuXHJcbiAgICBjb25zdCBlbXB0eSA9IHRoaXMuaXNFbXB0eSgpO1xyXG5cclxuICAgIGlmICghZW1wdHkpIHtcclxuICAgICAgY29uc3QgZmlyc3RUYXNrID0gZmlyc3QodGhpcy50YXNrcyk7XHJcblxyXG4gICAgICB0aGlzLmV4ZWN1dGVGaXJzdFRhc2soZmlyc3RUYXNrKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgZ2V0VGFza3NMZW5ndGgoKSB7XHJcbiAgICBjb25zdCB0YXNrc0xlbmd0aCA9IHRoaXMudGFza3MubGVuZ3RoO1xyXG4gICAgXHJcbiAgICByZXR1cm4gdGFza3NMZW5ndGg7XHJcbiAgfVxyXG5cclxuICBpc0VtcHR5KCkge1xyXG4gICAgY29uc3QgdGFza3NMZW5ndGggPSB0aGlzLmdldFRhc2tzTGVuZ3RoKCksXHJcbiAgICAgICAgICBlbXB0eSA9ICh0YXNrc0xlbmd0aCA9PT0gMCk7XHJcblxyXG4gICAgcmV0dXJuIGVtcHR5O1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBRdWV1ZTtcclxuIl19