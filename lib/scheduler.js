'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Queue = require('./queue');

var Scheduler = /*#__PURE__*/function () {
  function Scheduler(queue) {
    _classCallCheck(this, Scheduler);

    this.queue = queue;
  }

  _createClass(Scheduler, [{
    key: "addTaskToQueue",
    value: function addTaskToQueue(task) {
      this.queue.addTask(task);
    }
  }, {
    key: "executeTaskImmediately",
    value: function executeTaskImmediately(task) {
      var queueEmpty = this.queue.isEmpty(),
          successful = queueEmpty; //

      if (queueEmpty) {
        this.queue.addTask(task);
      }

      return successful;
    }
  }], [{
    key: "fromNothing",
    value: function fromNothing() {
      var queue = Queue.fromNothing(),
          scheduler = new Scheduler(queue);
      return scheduler;
    }
  }]);

  return Scheduler;
}();

module.exports = Scheduler;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjaGVkdWxlci5qcyJdLCJuYW1lcyI6WyJRdWV1ZSIsInJlcXVpcmUiLCJTY2hlZHVsZXIiLCJxdWV1ZSIsInRhc2siLCJhZGRUYXNrIiwicXVldWVFbXB0eSIsImlzRW1wdHkiLCJzdWNjZXNzZnVsIiwiZnJvbU5vdGhpbmciLCJzY2hlZHVsZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxLQUFLLEdBQUdDLE9BQU8sQ0FBQyxTQUFELENBQXJCOztJQUVNQyxTO0FBQ0oscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFDakIsU0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs7bUNBRWNDLEksRUFBTTtBQUNuQixXQUFLRCxLQUFMLENBQVdFLE9BQVgsQ0FBbUJELElBQW5CO0FBQ0Q7OzsyQ0FFc0JBLEksRUFBTTtBQUMzQixVQUFNRSxVQUFVLEdBQUcsS0FBS0gsS0FBTCxDQUFXSSxPQUFYLEVBQW5CO0FBQUEsVUFDTUMsVUFBVSxHQUFHRixVQURuQixDQUQyQixDQUVLOztBQUVoQyxVQUFJQSxVQUFKLEVBQWdCO0FBQ2QsYUFBS0gsS0FBTCxDQUFXRSxPQUFYLENBQW1CRCxJQUFuQjtBQUNEOztBQUVELGFBQU9JLFVBQVA7QUFDRDs7O2tDQUVvQjtBQUNuQixVQUFNTCxLQUFLLEdBQUdILEtBQUssQ0FBQ1MsV0FBTixFQUFkO0FBQUEsVUFDTUMsU0FBUyxHQUFHLElBQUlSLFNBQUosQ0FBY0MsS0FBZCxDQURsQjtBQUdBLGFBQU9PLFNBQVA7QUFDRDs7Ozs7O0FBR0hDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQlYsU0FBakIiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBRdWV1ZSA9IHJlcXVpcmUoJy4vcXVldWUnKTtcclxuXHJcbmNsYXNzIFNjaGVkdWxlciB7XHJcbiAgY29uc3RydWN0b3IocXVldWUpIHtcclxuICAgIHRoaXMucXVldWUgPSBxdWV1ZTtcclxuICB9XHJcblxyXG4gIGFkZFRhc2tUb1F1ZXVlKHRhc2spIHtcclxuICAgIHRoaXMucXVldWUuYWRkVGFzayh0YXNrKTtcclxuICB9XHJcblxyXG4gIGV4ZWN1dGVUYXNrSW1tZWRpYXRlbHkodGFzaykge1xyXG4gICAgY29uc3QgcXVldWVFbXB0eSA9IHRoaXMucXVldWUuaXNFbXB0eSgpLFxyXG4gICAgICAgICAgc3VjY2Vzc2Z1bCA9IHF1ZXVlRW1wdHk7ICAvL1xyXG5cclxuICAgIGlmIChxdWV1ZUVtcHR5KSB7XHJcbiAgICAgIHRoaXMucXVldWUuYWRkVGFzayh0YXNrKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc3VjY2Vzc2Z1bDtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcclxuICAgIGNvbnN0IHF1ZXVlID0gUXVldWUuZnJvbU5vdGhpbmcoKSxcclxuICAgICAgICAgIHNjaGVkdWxlciA9IG5ldyBTY2hlZHVsZXIocXVldWUpO1xyXG5cclxuICAgIHJldHVybiBzY2hlZHVsZXI7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFNjaGVkdWxlcjtcclxuIl19