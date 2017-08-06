'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Queue = require('./queue');

var Schedule = function () {
  function Schedule() {
    _classCallCheck(this, Schedule);

    this.queue = new Queue();
  }

  _createClass(Schedule, [{
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

  return Schedule;
}();

module.exports = Schedule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9zY2hlZHVsZS5qcyJdLCJuYW1lcyI6WyJRdWV1ZSIsInJlcXVpcmUiLCJTY2hlZHVsZSIsInF1ZXVlIiwidGFzayIsImFkZFRhc2siLCJxdWV1ZUVtcHR5IiwiaXNFbXB0eSIsInN1Y2Nlc3NmdWwiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsUUFBUUMsUUFBUSxTQUFSLENBQWQ7O0lBRU1DLFE7QUFDSixzQkFBYztBQUFBOztBQUNaLFNBQUtDLEtBQUwsR0FBYSxJQUFJSCxLQUFKLEVBQWI7QUFDRDs7OzttQ0FFY0ksSSxFQUFNO0FBQ25CLFdBQUtELEtBQUwsQ0FBV0UsT0FBWCxDQUFtQkQsSUFBbkI7QUFDRDs7OzJDQUVzQkEsSSxFQUFNO0FBQzNCLFVBQU1FLGFBQWEsS0FBS0gsS0FBTCxDQUFXSSxPQUFYLEVBQW5CO0FBQUEsVUFDTUMsYUFBYUYsVUFEbkIsQ0FEMkIsQ0FFSzs7QUFFaEMsVUFBSUEsVUFBSixFQUFnQjtBQUNkLGFBQUtILEtBQUwsQ0FBV0UsT0FBWCxDQUFtQkQsSUFBbkI7QUFDRDs7QUFFRCxhQUFPSSxVQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCUixRQUFqQiIsImZpbGUiOiJzY2hlZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IFF1ZXVlID0gcmVxdWlyZSgnLi9xdWV1ZScpO1xyXG5cclxuY2xhc3MgU2NoZWR1bGUge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5xdWV1ZSA9IG5ldyBRdWV1ZSgpO1xyXG4gIH1cclxuXHJcbiAgYWRkVGFza1RvUXVldWUodGFzaykge1xyXG4gICAgdGhpcy5xdWV1ZS5hZGRUYXNrKHRhc2spO1xyXG4gIH1cclxuXHJcbiAgZXhlY3V0ZVRhc2tJbW1lZGlhdGVseSh0YXNrKSB7XHJcbiAgICBjb25zdCBxdWV1ZUVtcHR5ID0gdGhpcy5xdWV1ZS5pc0VtcHR5KCksXHJcbiAgICAgICAgICBzdWNjZXNzZnVsID0gcXVldWVFbXB0eTsgIC8vXHJcblxyXG4gICAgaWYgKHF1ZXVlRW1wdHkpIHtcclxuICAgICAgdGhpcy5xdWV1ZS5hZGRUYXNrKHRhc2spO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzdWNjZXNzZnVsO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBTY2hlZHVsZTtcclxuIl19