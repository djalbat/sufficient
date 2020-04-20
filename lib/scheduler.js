"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _queue = _interopRequireDefault(require("./queue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
      var queue = _queue["default"].fromNothing(),
          scheduler = new Scheduler(queue);

      return scheduler;
    }
  }]);

  return Scheduler;
}();

exports["default"] = Scheduler;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjaGVkdWxlci5qcyJdLCJuYW1lcyI6WyJTY2hlZHVsZXIiLCJxdWV1ZSIsInRhc2siLCJhZGRUYXNrIiwicXVldWVFbXB0eSIsImlzRW1wdHkiLCJzdWNjZXNzZnVsIiwiUXVldWUiLCJmcm9tTm90aGluZyIsInNjaGVkdWxlciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7Ozs7Ozs7OztJQUVxQkEsUztBQUNuQixxQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7OzttQ0FFY0MsSSxFQUFNO0FBQ25CLFdBQUtELEtBQUwsQ0FBV0UsT0FBWCxDQUFtQkQsSUFBbkI7QUFDRDs7OzJDQUVzQkEsSSxFQUFNO0FBQzNCLFVBQU1FLFVBQVUsR0FBRyxLQUFLSCxLQUFMLENBQVdJLE9BQVgsRUFBbkI7QUFBQSxVQUNNQyxVQUFVLEdBQUdGLFVBRG5CLENBRDJCLENBRUs7O0FBRWhDLFVBQUlBLFVBQUosRUFBZ0I7QUFDZCxhQUFLSCxLQUFMLENBQVdFLE9BQVgsQ0FBbUJELElBQW5CO0FBQ0Q7O0FBRUQsYUFBT0ksVUFBUDtBQUNEOzs7a0NBRW9CO0FBQ25CLFVBQU1MLEtBQUssR0FBR00sa0JBQU1DLFdBQU4sRUFBZDtBQUFBLFVBQ01DLFNBQVMsR0FBRyxJQUFJVCxTQUFKLENBQWNDLEtBQWQsQ0FEbEI7O0FBR0EsYUFBT1EsU0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgUXVldWUgZnJvbSBcIi4vcXVldWVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjaGVkdWxlciB7XHJcbiAgY29uc3RydWN0b3IocXVldWUpIHtcclxuICAgIHRoaXMucXVldWUgPSBxdWV1ZTtcclxuICB9XHJcblxyXG4gIGFkZFRhc2tUb1F1ZXVlKHRhc2spIHtcclxuICAgIHRoaXMucXVldWUuYWRkVGFzayh0YXNrKTtcclxuICB9XHJcblxyXG4gIGV4ZWN1dGVUYXNrSW1tZWRpYXRlbHkodGFzaykge1xyXG4gICAgY29uc3QgcXVldWVFbXB0eSA9IHRoaXMucXVldWUuaXNFbXB0eSgpLFxyXG4gICAgICAgICAgc3VjY2Vzc2Z1bCA9IHF1ZXVlRW1wdHk7ICAvL1xyXG5cclxuICAgIGlmIChxdWV1ZUVtcHR5KSB7XHJcbiAgICAgIHRoaXMucXVldWUuYWRkVGFzayh0YXNrKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc3VjY2Vzc2Z1bDtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcclxuICAgIGNvbnN0IHF1ZXVlID0gUXVldWUuZnJvbU5vdGhpbmcoKSxcclxuICAgICAgICAgIHNjaGVkdWxlciA9IG5ldyBTY2hlZHVsZXIocXVldWUpO1xyXG5cclxuICAgIHJldHVybiBzY2hlZHVsZXI7XHJcbiAgfVxyXG59XHJcbiJdfQ==