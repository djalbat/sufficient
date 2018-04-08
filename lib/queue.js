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
        this.executeFirstTask();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9xdWV1ZS5qcyJdLCJuYW1lcyI6WyJuZWNlc3NhcnkiLCJyZXF1aXJlIiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsIlF1ZXVlIiwidGFza3MiLCJ0YXNrIiwicHVzaCIsInRhc2tzTGVuZ3RoIiwiZ2V0VGFza3NMZW5ndGgiLCJleGVjdXRlRmlyc3RUYXNrIiwiZmlyc3RUYXNrIiwiZmlyc3RUYXNrU3luY2hyb25vdXMiLCJpc1N5bmNocm9ub3VzIiwic3luY2hyb25vdXNGaXJzdFRhc2siLCJleGVjdXRlU3luY2hyb25vdXNGaXJzdFRhc2siLCJhc3luY2hyb25vdXNGaXJzdFRhc2siLCJleGVjdXRlQXN5bmNocm9ub3VzRmlyc3RUYXNrIiwiZXhlY3V0ZSIsIm5leHQiLCJjYWxsYmFjayIsImdldENhbGxiYWNrIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJiaW5kIiwic2hpZnQiLCJlbXB0eSIsImlzRW1wdHkiLCJsZW5ndGgiLCJxdWV1ZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLFdBQVIsQ0FBbEI7O0FBRU0sSUFBRUMsY0FBRixHQUFxQkYsU0FBckIsQ0FBRUUsY0FBRjtBQUFBLElBQ0VDLEtBREYsR0FDWUQsY0FEWixDQUNFQyxLQURGOztJQUdBQyxLO0FBQ0osaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFDakIsU0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs7NEJBRU9DLEksRUFBTTtBQUNaLFdBQUtELEtBQUwsQ0FBV0UsSUFBWCxDQUFnQkQsSUFBaEI7O0FBRUEsVUFBTUUsY0FBYyxLQUFLQyxjQUFMLEVBQXBCOztBQUVBLFVBQUlELGdCQUFnQixDQUFwQixFQUF1QjtBQUNyQixhQUFLRSxnQkFBTDtBQUNEO0FBQ0Y7Ozt1Q0FFa0I7QUFDakIsVUFBTUMsWUFBWVIsTUFBTSxLQUFLRSxLQUFYLENBQWxCO0FBQUEsVUFDTU8sdUJBQXVCRCxVQUFVRSxhQUFWLEVBRDdCOztBQUdBLFVBQUlELG9CQUFKLEVBQTBCO0FBQUU7QUFDMUIsWUFBTUUsdUJBQXVCSCxTQUE3QixDQUR3QixDQUNpQjs7QUFFekMsYUFBS0ksMkJBQUwsQ0FBaUNELG9CQUFqQztBQUNELE9BSkQsTUFJTztBQUNMLFlBQU1FLHdCQUF3QkwsU0FBOUIsQ0FESyxDQUNxQzs7QUFFMUMsYUFBS00sNEJBQUwsQ0FBa0NELHFCQUFsQztBQUNEO0FBQ0Y7OztnREFFMkJGLG9CLEVBQXNCO0FBQ2hEQSwyQkFBcUJJLE9BQXJCOztBQUVBLFdBQUtDLElBQUw7QUFDRDs7O2lEQUU0QkgscUIsRUFBdUI7QUFDbERBLDRCQUFzQkUsT0FBdEIsQ0FBOEIsWUFBVztBQUN2QyxZQUFNRSxXQUFXSixzQkFBc0JLLFdBQXRCLEVBQWpCOztBQUVBRCxpQkFBU0UsS0FBVCxDQUFlTixxQkFBZixFQUFzQ08sU0FBdEM7O0FBRUEsYUFBS0osSUFBTDtBQUNELE9BTjZCLENBTTVCSyxJQU40QixDQU12QixJQU51QixDQUE5QjtBQU9EOzs7MkJBRU07QUFDTCxXQUFLbkIsS0FBTCxDQUFXb0IsS0FBWDs7QUFFQSxVQUFNQyxRQUFRLEtBQUtDLE9BQUwsRUFBZDs7QUFFQSxVQUFJLENBQUNELEtBQUwsRUFBWTtBQUNWLGFBQUtoQixnQkFBTDtBQUNEO0FBQ0Y7OztxQ0FFZ0I7QUFDZixVQUFNRixjQUFjLEtBQUtILEtBQUwsQ0FBV3VCLE1BQS9COztBQUVBLGFBQU9wQixXQUFQO0FBQ0Q7Ozs4QkFFUztBQUNSLFVBQU1BLGNBQWMsS0FBS0MsY0FBTCxFQUFwQjtBQUFBLFVBQ01pQixRQUFTbEIsZ0JBQWdCLENBRC9COztBQUdBLGFBQU9rQixLQUFQO0FBQ0Q7OztrQ0FFb0I7QUFDbkIsVUFBTXJCLFFBQVEsRUFBZDtBQUFBLFVBQ013QixRQUFRLElBQUl6QixLQUFKLENBQVVDLEtBQVYsQ0FEZDs7QUFHQSxhQUFPd0IsS0FBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQjNCLEtBQWpCIiwiZmlsZSI6InF1ZXVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XHJcblxyXG5jb25zdCB7IGFycmF5VXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXHJcbiAgICAgIHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xyXG5cclxuY2xhc3MgUXVldWUge1xyXG4gIGNvbnN0cnVjdG9yKHRhc2tzKSB7XHJcbiAgICB0aGlzLnRhc2tzID0gdGFza3M7XHJcbiAgfVxyXG5cclxuICBhZGRUYXNrKHRhc2spIHtcclxuICAgIHRoaXMudGFza3MucHVzaCh0YXNrKTtcclxuICAgIFxyXG4gICAgY29uc3QgdGFza3NMZW5ndGggPSB0aGlzLmdldFRhc2tzTGVuZ3RoKCk7XHJcbiAgICBcclxuICAgIGlmICh0YXNrc0xlbmd0aCA9PT0gMSkge1xyXG4gICAgICB0aGlzLmV4ZWN1dGVGaXJzdFRhc2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV4ZWN1dGVGaXJzdFRhc2soKSB7XHJcbiAgICBjb25zdCBmaXJzdFRhc2sgPSBmaXJzdCh0aGlzLnRhc2tzKSxcclxuICAgICAgICAgIGZpcnN0VGFza1N5bmNocm9ub3VzID0gZmlyc3RUYXNrLmlzU3luY2hyb25vdXMoKTtcclxuICAgIFxyXG4gICAgaWYgKGZpcnN0VGFza1N5bmNocm9ub3VzKSB7IC8vL1xyXG4gICAgICBjb25zdCBzeW5jaHJvbm91c0ZpcnN0VGFzayA9IGZpcnN0VGFzazsgIC8vL1xyXG5cclxuICAgICAgdGhpcy5leGVjdXRlU3luY2hyb25vdXNGaXJzdFRhc2soc3luY2hyb25vdXNGaXJzdFRhc2spO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgYXN5bmNocm9ub3VzRmlyc3RUYXNrID0gZmlyc3RUYXNrOyAgLy8vXHJcblxyXG4gICAgICB0aGlzLmV4ZWN1dGVBc3luY2hyb25vdXNGaXJzdFRhc2soYXN5bmNocm9ub3VzRmlyc3RUYXNrKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV4ZWN1dGVTeW5jaHJvbm91c0ZpcnN0VGFzayhzeW5jaHJvbm91c0ZpcnN0VGFzaykge1xyXG4gICAgc3luY2hyb25vdXNGaXJzdFRhc2suZXhlY3V0ZSgpO1xyXG5cclxuICAgIHRoaXMubmV4dCgpO1xyXG4gIH1cclxuXHJcbiAgZXhlY3V0ZUFzeW5jaHJvbm91c0ZpcnN0VGFzayhhc3luY2hyb25vdXNGaXJzdFRhc2spIHtcclxuICAgIGFzeW5jaHJvbm91c0ZpcnN0VGFzay5leGVjdXRlKGZ1bmN0aW9uKCkge1xyXG4gICAgICBjb25zdCBjYWxsYmFjayA9IGFzeW5jaHJvbm91c0ZpcnN0VGFzay5nZXRDYWxsYmFjaygpO1xyXG4gICAgICBcclxuICAgICAgY2FsbGJhY2suYXBwbHkoYXN5bmNocm9ub3VzRmlyc3RUYXNrLCBhcmd1bWVudHMpO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICB9LmJpbmQodGhpcykpO1xyXG4gIH1cclxuXHJcbiAgbmV4dCgpIHtcclxuICAgIHRoaXMudGFza3Muc2hpZnQoKTtcclxuXHJcbiAgICBjb25zdCBlbXB0eSA9IHRoaXMuaXNFbXB0eSgpO1xyXG5cclxuICAgIGlmICghZW1wdHkpIHtcclxuICAgICAgdGhpcy5leGVjdXRlRmlyc3RUYXNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGdldFRhc2tzTGVuZ3RoKCkge1xyXG4gICAgY29uc3QgdGFza3NMZW5ndGggPSB0aGlzLnRhc2tzLmxlbmd0aDtcclxuICAgIFxyXG4gICAgcmV0dXJuIHRhc2tzTGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgaXNFbXB0eSgpIHtcclxuICAgIGNvbnN0IHRhc2tzTGVuZ3RoID0gdGhpcy5nZXRUYXNrc0xlbmd0aCgpLFxyXG4gICAgICAgICAgZW1wdHkgPSAodGFza3NMZW5ndGggPT09IDApO1xyXG5cclxuICAgIHJldHVybiBlbXB0eTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcclxuICAgIGNvbnN0IHRhc2tzID0gW10sXHJcbiAgICAgICAgICBxdWV1ZSA9IG5ldyBRdWV1ZSh0YXNrcyk7XHJcblxyXG4gICAgcmV0dXJuIHF1ZXVlO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBRdWV1ZTtcclxuIl19