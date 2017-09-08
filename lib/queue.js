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
  }]);

  return Queue;
}();

module.exports = Queue;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9xdWV1ZS5qcyJdLCJuYW1lcyI6WyJuZWNlc3NhcnkiLCJyZXF1aXJlIiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsIlF1ZXVlIiwidGFza3MiLCJ0YXNrIiwicHVzaCIsInRhc2tzTGVuZ3RoIiwiZ2V0VGFza3NMZW5ndGgiLCJleGVjdXRlRmlyc3RUYXNrIiwiZmlyc3RUYXNrIiwiZmlyc3RUYXNrU3luY2hyb25vdXMiLCJpc1N5bmNocm9ub3VzIiwic3luY2hyb25vdXNGaXJzdFRhc2siLCJleGVjdXRlU3luY2hyb25vdXNGaXJzdFRhc2siLCJhc3luY2hyb25vdXNGaXJzdFRhc2siLCJleGVjdXRlQXN5bmNocm9ub3VzRmlyc3RUYXNrIiwiZXhlY3V0ZSIsIm5leHQiLCJjYWxsYmFjayIsImdldENhbGxiYWNrIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJiaW5kIiwic2hpZnQiLCJlbXB0eSIsImlzRW1wdHkiLCJsZW5ndGgiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxXQUFSLENBQWxCOztBQUVNLElBQUVDLGNBQUYsR0FBcUJGLFNBQXJCLENBQUVFLGNBQUY7QUFBQSxJQUNFQyxLQURGLEdBQ1lELGNBRFosQ0FDRUMsS0FERjs7SUFHQUMsSztBQUNKLG1CQUFjO0FBQUE7O0FBQ1osU0FBS0MsS0FBTCxHQUFhLEVBQWI7QUFDRDs7Ozs0QkFFT0MsSSxFQUFNO0FBQ1osV0FBS0QsS0FBTCxDQUFXRSxJQUFYLENBQWdCRCxJQUFoQjs7QUFFQSxVQUFNRSxjQUFjLEtBQUtDLGNBQUwsRUFBcEI7O0FBRUEsVUFBSUQsZ0JBQWdCLENBQXBCLEVBQXVCO0FBQ3JCLGFBQUtFLGdCQUFMO0FBQ0Q7QUFDRjs7O3VDQUVrQjtBQUNqQixVQUFNQyxZQUFZUixNQUFNLEtBQUtFLEtBQVgsQ0FBbEI7QUFBQSxVQUNNTyx1QkFBdUJELFVBQVVFLGFBQVYsRUFEN0I7O0FBR0EsVUFBSUQsb0JBQUosRUFBMEI7QUFBRTtBQUMxQixZQUFNRSx1QkFBdUJILFNBQTdCLENBRHdCLENBQ2lCOztBQUV6QyxhQUFLSSwyQkFBTCxDQUFpQ0Qsb0JBQWpDO0FBQ0QsT0FKRCxNQUlPO0FBQ0wsWUFBTUUsd0JBQXdCTCxTQUE5QixDQURLLENBQ3FDOztBQUUxQyxhQUFLTSw0QkFBTCxDQUFrQ0QscUJBQWxDO0FBQ0Q7QUFDRjs7O2dEQUUyQkYsb0IsRUFBc0I7QUFDaERBLDJCQUFxQkksT0FBckI7O0FBRUEsV0FBS0MsSUFBTDtBQUNEOzs7aURBRTRCSCxxQixFQUF1QjtBQUNsREEsNEJBQXNCRSxPQUF0QixDQUE4QixZQUFXO0FBQ3ZDLFlBQU1FLFdBQVdKLHNCQUFzQkssV0FBdEIsRUFBakI7O0FBRUFELGlCQUFTRSxLQUFULENBQWVOLHFCQUFmLEVBQXNDTyxTQUF0Qzs7QUFFQSxhQUFLSixJQUFMO0FBQ0QsT0FONkIsQ0FNNUJLLElBTjRCLENBTXZCLElBTnVCLENBQTlCO0FBT0Q7OzsyQkFFTTtBQUNMLFdBQUtuQixLQUFMLENBQVdvQixLQUFYOztBQUVBLFVBQU1DLFFBQVEsS0FBS0MsT0FBTCxFQUFkOztBQUVBLFVBQUksQ0FBQ0QsS0FBTCxFQUFZO0FBQ1YsWUFBTWYsWUFBWVIsTUFBTSxLQUFLRSxLQUFYLENBQWxCOztBQUVBLGFBQUtLLGdCQUFMLENBQXNCQyxTQUF0QjtBQUNEO0FBQ0Y7OztxQ0FFZ0I7QUFDZixVQUFNSCxjQUFjLEtBQUtILEtBQUwsQ0FBV3VCLE1BQS9COztBQUVBLGFBQU9wQixXQUFQO0FBQ0Q7Ozs4QkFFUztBQUNSLFVBQU1BLGNBQWMsS0FBS0MsY0FBTCxFQUFwQjtBQUFBLFVBQ01pQixRQUFTbEIsZ0JBQWdCLENBRC9COztBQUdBLGFBQU9rQixLQUFQO0FBQ0Q7Ozs7OztBQUdIRyxPQUFPQyxPQUFQLEdBQWlCMUIsS0FBakIiLCJmaWxlIjoicXVldWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcclxuXHJcbmNvbnN0IHsgYXJyYXlVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcclxuICAgICAgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XHJcblxyXG5jbGFzcyBRdWV1ZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnRhc2tzID0gW107XHJcbiAgfVxyXG5cclxuICBhZGRUYXNrKHRhc2spIHtcclxuICAgIHRoaXMudGFza3MucHVzaCh0YXNrKTtcclxuICAgIFxyXG4gICAgY29uc3QgdGFza3NMZW5ndGggPSB0aGlzLmdldFRhc2tzTGVuZ3RoKCk7XHJcbiAgICBcclxuICAgIGlmICh0YXNrc0xlbmd0aCA9PT0gMSkge1xyXG4gICAgICB0aGlzLmV4ZWN1dGVGaXJzdFRhc2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV4ZWN1dGVGaXJzdFRhc2soKSB7XHJcbiAgICBjb25zdCBmaXJzdFRhc2sgPSBmaXJzdCh0aGlzLnRhc2tzKSxcclxuICAgICAgICAgIGZpcnN0VGFza1N5bmNocm9ub3VzID0gZmlyc3RUYXNrLmlzU3luY2hyb25vdXMoKTtcclxuICAgIFxyXG4gICAgaWYgKGZpcnN0VGFza1N5bmNocm9ub3VzKSB7IC8vL1xyXG4gICAgICBjb25zdCBzeW5jaHJvbm91c0ZpcnN0VGFzayA9IGZpcnN0VGFzazsgIC8vL1xyXG5cclxuICAgICAgdGhpcy5leGVjdXRlU3luY2hyb25vdXNGaXJzdFRhc2soc3luY2hyb25vdXNGaXJzdFRhc2spO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgYXN5bmNocm9ub3VzRmlyc3RUYXNrID0gZmlyc3RUYXNrOyAgLy8vXHJcblxyXG4gICAgICB0aGlzLmV4ZWN1dGVBc3luY2hyb25vdXNGaXJzdFRhc2soYXN5bmNocm9ub3VzRmlyc3RUYXNrKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV4ZWN1dGVTeW5jaHJvbm91c0ZpcnN0VGFzayhzeW5jaHJvbm91c0ZpcnN0VGFzaykge1xyXG4gICAgc3luY2hyb25vdXNGaXJzdFRhc2suZXhlY3V0ZSgpO1xyXG5cclxuICAgIHRoaXMubmV4dCgpO1xyXG4gIH1cclxuXHJcbiAgZXhlY3V0ZUFzeW5jaHJvbm91c0ZpcnN0VGFzayhhc3luY2hyb25vdXNGaXJzdFRhc2spIHtcclxuICAgIGFzeW5jaHJvbm91c0ZpcnN0VGFzay5leGVjdXRlKGZ1bmN0aW9uKCkge1xyXG4gICAgICBjb25zdCBjYWxsYmFjayA9IGFzeW5jaHJvbm91c0ZpcnN0VGFzay5nZXRDYWxsYmFjaygpO1xyXG4gICAgICBcclxuICAgICAgY2FsbGJhY2suYXBwbHkoYXN5bmNocm9ub3VzRmlyc3RUYXNrLCBhcmd1bWVudHMpO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICB9LmJpbmQodGhpcykpO1xyXG4gIH1cclxuXHJcbiAgbmV4dCgpIHtcclxuICAgIHRoaXMudGFza3Muc2hpZnQoKTtcclxuXHJcbiAgICBjb25zdCBlbXB0eSA9IHRoaXMuaXNFbXB0eSgpO1xyXG5cclxuICAgIGlmICghZW1wdHkpIHtcclxuICAgICAgY29uc3QgZmlyc3RUYXNrID0gZmlyc3QodGhpcy50YXNrcyk7XHJcblxyXG4gICAgICB0aGlzLmV4ZWN1dGVGaXJzdFRhc2soZmlyc3RUYXNrKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgZ2V0VGFza3NMZW5ndGgoKSB7XHJcbiAgICBjb25zdCB0YXNrc0xlbmd0aCA9IHRoaXMudGFza3MubGVuZ3RoO1xyXG4gICAgXHJcbiAgICByZXR1cm4gdGFza3NMZW5ndGg7XHJcbiAgfVxyXG5cclxuICBpc0VtcHR5KCkge1xyXG4gICAgY29uc3QgdGFza3NMZW5ndGggPSB0aGlzLmdldFRhc2tzTGVuZ3RoKCksXHJcbiAgICAgICAgICBlbXB0eSA9ICh0YXNrc0xlbmd0aCA9PT0gMCk7XHJcblxyXG4gICAgcmV0dXJuIGVtcHR5O1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBRdWV1ZTtcclxuIl19