'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Queue = require('./queue');

var Scheduler = function () {
  function Scheduler(queue) {
    _classCallCheck(this, Scheduler);

    this.queue = queue;
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
  }], [{
    key: 'fromNothing',
    value: function fromNothing() {
      var queue = Queue.fromNothing(),
          scheduler = new Scheduler(queue);

      return scheduler;
    }
  }]);

  return Scheduler;
}();

module.exports = Scheduler;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9zY2hlZHVsZXIuanMiXSwibmFtZXMiOlsiUXVldWUiLCJyZXF1aXJlIiwiU2NoZWR1bGVyIiwicXVldWUiLCJ0YXNrIiwiYWRkVGFzayIsInF1ZXVlRW1wdHkiLCJpc0VtcHR5Iiwic3VjY2Vzc2Z1bCIsImZyb21Ob3RoaW5nIiwic2NoZWR1bGVyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFFBQVFDLFFBQVEsU0FBUixDQUFkOztJQUVNQyxTO0FBQ0oscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFDakIsU0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs7bUNBRWNDLEksRUFBTTtBQUNuQixXQUFLRCxLQUFMLENBQVdFLE9BQVgsQ0FBbUJELElBQW5CO0FBQ0Q7OzsyQ0FFc0JBLEksRUFBTTtBQUMzQixVQUFNRSxhQUFhLEtBQUtILEtBQUwsQ0FBV0ksT0FBWCxFQUFuQjtBQUFBLFVBQ01DLGFBQWFGLFVBRG5CLENBRDJCLENBRUs7O0FBRWhDLFVBQUlBLFVBQUosRUFBZ0I7QUFDZCxhQUFLSCxLQUFMLENBQVdFLE9BQVgsQ0FBbUJELElBQW5CO0FBQ0Q7O0FBRUQsYUFBT0ksVUFBUDtBQUNEOzs7a0NBRW9CO0FBQ25CLFVBQU1MLFFBQVFILE1BQU1TLFdBQU4sRUFBZDtBQUFBLFVBQ01DLFlBQVksSUFBSVIsU0FBSixDQUFjQyxLQUFkLENBRGxCOztBQUdBLGFBQU9PLFNBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJWLFNBQWpCIiwiZmlsZSI6InNjaGVkdWxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IFF1ZXVlID0gcmVxdWlyZSgnLi9xdWV1ZScpO1xyXG5cclxuY2xhc3MgU2NoZWR1bGVyIHtcclxuICBjb25zdHJ1Y3RvcihxdWV1ZSkge1xyXG4gICAgdGhpcy5xdWV1ZSA9IHF1ZXVlO1xyXG4gIH1cclxuXHJcbiAgYWRkVGFza1RvUXVldWUodGFzaykge1xyXG4gICAgdGhpcy5xdWV1ZS5hZGRUYXNrKHRhc2spO1xyXG4gIH1cclxuXHJcbiAgZXhlY3V0ZVRhc2tJbW1lZGlhdGVseSh0YXNrKSB7XHJcbiAgICBjb25zdCBxdWV1ZUVtcHR5ID0gdGhpcy5xdWV1ZS5pc0VtcHR5KCksXHJcbiAgICAgICAgICBzdWNjZXNzZnVsID0gcXVldWVFbXB0eTsgIC8vXHJcblxyXG4gICAgaWYgKHF1ZXVlRW1wdHkpIHtcclxuICAgICAgdGhpcy5xdWV1ZS5hZGRUYXNrKHRhc2spO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzdWNjZXNzZnVsO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xyXG4gICAgY29uc3QgcXVldWUgPSBRdWV1ZS5mcm9tTm90aGluZygpLFxyXG4gICAgICAgICAgc2NoZWR1bGVyID0gbmV3IFNjaGVkdWxlcihxdWV1ZSk7XHJcblxyXG4gICAgcmV0dXJuIHNjaGVkdWxlcjtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gU2NoZWR1bGVyO1xyXG4iXX0=