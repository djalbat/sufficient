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
        var synchronousFirstTask = firstTask; ///

        this.executeSynchronousFirstTask(synchronousFirstTask);
      } else {
        var asynchronousFirstTask = firstTask; ///

        this.executeAsynchronousFirstTask(asynchronousFirstTask);
      }
    }
  }, {
    key: 'executeSynchronousFirstTask',
    value: function executeSynchronousFirstTask(synchronousFirstTask) {
      synchronousFirstTask.execute();

      this.next();
    }
  }, {
    key: 'executeAsynchronousFirstTask',
    value: function executeAsynchronousFirstTask(asynchronousFirstTask) {
      asynchronousFirstTask.execute(function () {
        var callback = asynchronousFirstTask.getCallback();

        callback.apply(asynchronousFirstTask, arguments);

        this.next();
      }.bind(this));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9xdWV1ZS5qcyJdLCJuYW1lcyI6WyJuZWNlc3NhcnkiLCJyZXF1aXJlIiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsIlF1ZXVlIiwidGFza3MiLCJ0YXNrIiwicHVzaCIsInRhc2tzTGVuZ3RoIiwiZ2V0VGFza3NMZW5ndGgiLCJleGVjdXRlRmlyc3RUYXNrIiwiZmlyc3RUYXNrIiwiZmlyc3RUYXNrU3luY2hyb25vdXMiLCJpc1N5bmNocm9ub3VzIiwic3luY2hyb25vdXNGaXJzdFRhc2siLCJleGVjdXRlU3luY2hyb25vdXNGaXJzdFRhc2siLCJhc3luY2hyb25vdXNGaXJzdFRhc2siLCJleGVjdXRlQXN5bmNocm9ub3VzRmlyc3RUYXNrIiwiZXhlY3V0ZSIsIm5leHQiLCJjYWxsYmFjayIsImdldENhbGxiYWNrIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJiaW5kIiwic2hpZnQiLCJlbXB0eSIsImlzRW1wdHkiLCJsZW5ndGgiLCJxdWV1ZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLFdBQVIsQ0FBbEI7O0FBRU0sSUFBRUMsY0FBRixHQUFxQkYsU0FBckIsQ0FBRUUsY0FBRjtBQUFBLElBQ0VDLEtBREYsR0FDWUQsY0FEWixDQUNFQyxLQURGOztJQUdBQyxLO0FBQ0osaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFDakIsU0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs7NEJBRU9DLEksRUFBTTtBQUNaLFdBQUtELEtBQUwsQ0FBV0UsSUFBWCxDQUFnQkQsSUFBaEI7O0FBRUEsVUFBTUUsY0FBYyxLQUFLQyxjQUFMLEVBQXBCOztBQUVBLFVBQUlELGdCQUFnQixDQUFwQixFQUF1QjtBQUNyQixhQUFLRSxnQkFBTDtBQUNEO0FBQ0Y7Ozt1Q0FFa0I7QUFDakIsVUFBTUMsWUFBWVIsTUFBTSxLQUFLRSxLQUFYLENBQWxCO0FBQUEsVUFDTU8sdUJBQXVCRCxVQUFVRSxhQUFWLEVBRDdCOztBQUdBLFVBQUlELG9CQUFKLEVBQTBCO0FBQUU7QUFDMUIsWUFBTUUsdUJBQXVCSCxTQUE3QixDQUR3QixDQUNpQjs7QUFFekMsYUFBS0ksMkJBQUwsQ0FBaUNELG9CQUFqQztBQUNELE9BSkQsTUFJTztBQUNMLFlBQU1FLHdCQUF3QkwsU0FBOUIsQ0FESyxDQUNxQzs7QUFFMUMsYUFBS00sNEJBQUwsQ0FBa0NELHFCQUFsQztBQUNEO0FBQ0Y7OztnREFFMkJGLG9CLEVBQXNCO0FBQ2hEQSwyQkFBcUJJLE9BQXJCOztBQUVBLFdBQUtDLElBQUw7QUFDRDs7O2lEQUU0QkgscUIsRUFBdUI7QUFDbERBLDRCQUFzQkUsT0FBdEIsQ0FBOEIsWUFBVztBQUN2QyxZQUFNRSxXQUFXSixzQkFBc0JLLFdBQXRCLEVBQWpCOztBQUVBRCxpQkFBU0UsS0FBVCxDQUFlTixxQkFBZixFQUFzQ08sU0FBdEM7O0FBRUEsYUFBS0osSUFBTDtBQUNELE9BTjZCLENBTTVCSyxJQU40QixDQU12QixJQU51QixDQUE5QjtBQU9EOzs7MkJBRU07QUFDTCxXQUFLbkIsS0FBTCxDQUFXb0IsS0FBWDs7QUFFQSxVQUFNQyxRQUFRLEtBQUtDLE9BQUwsRUFBZDs7QUFFQSxVQUFJLENBQUNELEtBQUwsRUFBWTtBQUNWLFlBQU1mLFlBQVlSLE1BQU0sS0FBS0UsS0FBWCxDQUFsQjs7QUFFQSxhQUFLSyxnQkFBTCxDQUFzQkMsU0FBdEI7QUFDRDtBQUNGOzs7cUNBRWdCO0FBQ2YsVUFBTUgsY0FBYyxLQUFLSCxLQUFMLENBQVd1QixNQUEvQjs7QUFFQSxhQUFPcEIsV0FBUDtBQUNEOzs7OEJBRVM7QUFDUixVQUFNQSxjQUFjLEtBQUtDLGNBQUwsRUFBcEI7QUFBQSxVQUNNaUIsUUFBU2xCLGdCQUFnQixDQUQvQjs7QUFHQSxhQUFPa0IsS0FBUDtBQUNEOzs7a0NBRW9CO0FBQ25CLFVBQU1yQixRQUFRLEVBQWQ7QUFBQSxVQUNNd0IsUUFBUSxJQUFJekIsS0FBSixDQUFVQyxLQUFWLENBRGQ7O0FBR0EsYUFBT3dCLEtBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUIzQixLQUFqQiIsImZpbGUiOiJxdWV1ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xyXG5cclxuY29uc3QgeyBhcnJheVV0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxyXG4gICAgICB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcclxuXHJcbmNsYXNzIFF1ZXVlIHtcclxuICBjb25zdHJ1Y3Rvcih0YXNrcykge1xyXG4gICAgdGhpcy50YXNrcyA9IHRhc2tzO1xyXG4gIH1cclxuXHJcbiAgYWRkVGFzayh0YXNrKSB7XHJcbiAgICB0aGlzLnRhc2tzLnB1c2godGFzayk7XHJcbiAgICBcclxuICAgIGNvbnN0IHRhc2tzTGVuZ3RoID0gdGhpcy5nZXRUYXNrc0xlbmd0aCgpO1xyXG4gICAgXHJcbiAgICBpZiAodGFza3NMZW5ndGggPT09IDEpIHtcclxuICAgICAgdGhpcy5leGVjdXRlRmlyc3RUYXNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBleGVjdXRlRmlyc3RUYXNrKCkge1xyXG4gICAgY29uc3QgZmlyc3RUYXNrID0gZmlyc3QodGhpcy50YXNrcyksXHJcbiAgICAgICAgICBmaXJzdFRhc2tTeW5jaHJvbm91cyA9IGZpcnN0VGFzay5pc1N5bmNocm9ub3VzKCk7XHJcbiAgICBcclxuICAgIGlmIChmaXJzdFRhc2tTeW5jaHJvbm91cykgeyAvLy9cclxuICAgICAgY29uc3Qgc3luY2hyb25vdXNGaXJzdFRhc2sgPSBmaXJzdFRhc2s7ICAvLy9cclxuXHJcbiAgICAgIHRoaXMuZXhlY3V0ZVN5bmNocm9ub3VzRmlyc3RUYXNrKHN5bmNocm9ub3VzRmlyc3RUYXNrKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGFzeW5jaHJvbm91c0ZpcnN0VGFzayA9IGZpcnN0VGFzazsgIC8vL1xyXG5cclxuICAgICAgdGhpcy5leGVjdXRlQXN5bmNocm9ub3VzRmlyc3RUYXNrKGFzeW5jaHJvbm91c0ZpcnN0VGFzayk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBleGVjdXRlU3luY2hyb25vdXNGaXJzdFRhc2soc3luY2hyb25vdXNGaXJzdFRhc2spIHtcclxuICAgIHN5bmNocm9ub3VzRmlyc3RUYXNrLmV4ZWN1dGUoKTtcclxuXHJcbiAgICB0aGlzLm5leHQoKTtcclxuICB9XHJcblxyXG4gIGV4ZWN1dGVBc3luY2hyb25vdXNGaXJzdFRhc2soYXN5bmNocm9ub3VzRmlyc3RUYXNrKSB7XHJcbiAgICBhc3luY2hyb25vdXNGaXJzdFRhc2suZXhlY3V0ZShmdW5jdGlvbigpIHtcclxuICAgICAgY29uc3QgY2FsbGJhY2sgPSBhc3luY2hyb25vdXNGaXJzdFRhc2suZ2V0Q2FsbGJhY2soKTtcclxuICAgICAgXHJcbiAgICAgIGNhbGxiYWNrLmFwcGx5KGFzeW5jaHJvbm91c0ZpcnN0VGFzaywgYXJndW1lbnRzKTtcclxuICAgICAgXHJcbiAgICAgIHRoaXMubmV4dCgpO1xyXG4gICAgfS5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIG5leHQoKSB7XHJcbiAgICB0aGlzLnRhc2tzLnNoaWZ0KCk7XHJcblxyXG4gICAgY29uc3QgZW1wdHkgPSB0aGlzLmlzRW1wdHkoKTtcclxuXHJcbiAgICBpZiAoIWVtcHR5KSB7XHJcbiAgICAgIGNvbnN0IGZpcnN0VGFzayA9IGZpcnN0KHRoaXMudGFza3MpO1xyXG5cclxuICAgICAgdGhpcy5leGVjdXRlRmlyc3RUYXNrKGZpcnN0VGFzayk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGdldFRhc2tzTGVuZ3RoKCkge1xyXG4gICAgY29uc3QgdGFza3NMZW5ndGggPSB0aGlzLnRhc2tzLmxlbmd0aDtcclxuICAgIFxyXG4gICAgcmV0dXJuIHRhc2tzTGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgaXNFbXB0eSgpIHtcclxuICAgIGNvbnN0IHRhc2tzTGVuZ3RoID0gdGhpcy5nZXRUYXNrc0xlbmd0aCgpLFxyXG4gICAgICAgICAgZW1wdHkgPSAodGFza3NMZW5ndGggPT09IDApO1xyXG5cclxuICAgIHJldHVybiBlbXB0eTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcclxuICAgIGNvbnN0IHRhc2tzID0gW10sXHJcbiAgICAgICAgICBxdWV1ZSA9IG5ldyBRdWV1ZSh0YXNrcyk7XHJcblxyXG4gICAgcmV0dXJuIHF1ZXVlO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBRdWV1ZTtcclxuIl19