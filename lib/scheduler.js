'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Queue = require('./queue');

var Scheduler = function () {
  function Scheduler() {
    _classCallCheck(this, Scheduler);

    this.queue = new Queue();
  }

  _createClass(Scheduler, [{
    key: 'addTaskToQueue',
    value: function addTaskToQueue(task) {
      this.queue.addTask(task);
    }
  }, {
    key: 'executeTaskImmediately',
    value: function executeTaskImmediately(task) {
      var queueEmpty = this.queue.isEmpty(),
          successful = queueEmpty; //

      if (queueEmpty) {
        this.queue.addTask(task);
      }

      return successful;
    }
  }]);

  return Scheduler;
}();

module.exports = Scheduler;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9zY2hlZHVsZXIuanMiXSwibmFtZXMiOlsiUXVldWUiLCJyZXF1aXJlIiwiU2NoZWR1bGVyIiwicXVldWUiLCJ0YXNrIiwiYWRkVGFzayIsInF1ZXVlRW1wdHkiLCJpc0VtcHR5Iiwic3VjY2Vzc2Z1bCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxRQUFRQyxRQUFRLFNBQVIsQ0FBZDs7SUFFTUMsUztBQUNKLHVCQUFjO0FBQUE7O0FBQ1osU0FBS0MsS0FBTCxHQUFhLElBQUlILEtBQUosRUFBYjtBQUNEOzs7O21DQUVjSSxJLEVBQU07QUFDbkIsV0FBS0QsS0FBTCxDQUFXRSxPQUFYLENBQW1CRCxJQUFuQjtBQUNEOzs7MkNBRXNCQSxJLEVBQU07QUFDM0IsVUFBTUUsYUFBYSxLQUFLSCxLQUFMLENBQVdJLE9BQVgsRUFBbkI7QUFBQSxVQUNNQyxhQUFhRixVQURuQixDQUQyQixDQUVLOztBQUVoQyxVQUFJQSxVQUFKLEVBQWdCO0FBQ2QsYUFBS0gsS0FBTCxDQUFXRSxPQUFYLENBQW1CRCxJQUFuQjtBQUNEOztBQUVELGFBQU9JLFVBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJSLFNBQWpCIiwiZmlsZSI6InNjaGVkdWxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IFF1ZXVlID0gcmVxdWlyZSgnLi9xdWV1ZScpO1xyXG5cclxuY2xhc3MgU2NoZWR1bGVyIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMucXVldWUgPSBuZXcgUXVldWUoKTtcclxuICB9XHJcblxyXG4gIGFkZFRhc2tUb1F1ZXVlKHRhc2spIHtcclxuICAgIHRoaXMucXVldWUuYWRkVGFzayh0YXNrKTtcclxuICB9XHJcblxyXG4gIGV4ZWN1dGVUYXNrSW1tZWRpYXRlbHkodGFzaykge1xyXG4gICAgY29uc3QgcXVldWVFbXB0eSA9IHRoaXMucXVldWUuaXNFbXB0eSgpLFxyXG4gICAgICAgICAgc3VjY2Vzc2Z1bCA9IHF1ZXVlRW1wdHk7ICAvL1xyXG5cclxuICAgIGlmIChxdWV1ZUVtcHR5KSB7XHJcbiAgICAgIHRoaXMucXVldWUuYWRkVGFzayh0YXNrKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc3VjY2Vzc2Z1bDtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gU2NoZWR1bGVyO1xyXG4iXX0=