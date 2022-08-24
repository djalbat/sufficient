"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Scheduler;
    }
});
var _queue = /*#__PURE__*/ _interopRequireDefault(require("./queue"));
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var Scheduler = /*#__PURE__*/ function() {
    function Scheduler(queue) {
        _classCallCheck(this, Scheduler);
        this.queue = queue;
    }
    _createClass(Scheduler, [
        {
            key: "getQueue",
            value: function getQueue() {
                return this.queue;
            }
        },
        {
            key: "setDeferred",
            value: function setDeferred(deferred) {
                this.queue.setDeferred(deferred);
            }
        },
        {
            key: "addTaskToQueue",
            value: function addTaskToQueue(task) {
                this.queue.addTask(task);
            }
        },
        {
            key: "executeTaskImmediately",
            value: function executeTaskImmediately(task) {
                var queueEmpty = this.queue.isEmpty(), successful = queueEmpty; //
                if (queueEmpty) {
                    this.queue.addTask(task);
                }
                return successful;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var queue = _queue.default.fromNothing(), scheduler = new Scheduler(queue);
                return scheduler;
            }
        }
    ]);
    return Scheduler;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zY2hlZHVsZXIuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgUXVldWUgZnJvbSBcIi4vcXVldWVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjaGVkdWxlciB7XHJcbiAgY29uc3RydWN0b3IocXVldWUpIHtcclxuICAgIHRoaXMucXVldWUgPSBxdWV1ZTtcclxuICB9XHJcblxyXG4gIGdldFF1ZXVlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucXVldWU7XHJcbiAgfVxyXG5cclxuICBzZXREZWZlcnJlZChkZWZlcnJlZCkgeyB0aGlzLnF1ZXVlLnNldERlZmVycmVkKGRlZmVycmVkKTsgfVxyXG5cclxuICBhZGRUYXNrVG9RdWV1ZSh0YXNrKSB7XHJcbiAgICB0aGlzLnF1ZXVlLmFkZFRhc2sodGFzayk7XHJcbiAgfVxyXG5cclxuICBleGVjdXRlVGFza0ltbWVkaWF0ZWx5KHRhc2spIHtcclxuICAgIGNvbnN0IHF1ZXVlRW1wdHkgPSB0aGlzLnF1ZXVlLmlzRW1wdHkoKSxcclxuICAgICAgICAgIHN1Y2Nlc3NmdWwgPSBxdWV1ZUVtcHR5OyAgLy9cclxuXHJcbiAgICBpZiAocXVldWVFbXB0eSkge1xyXG4gICAgICB0aGlzLnF1ZXVlLmFkZFRhc2sodGFzayk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHN1Y2Nlc3NmdWw7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XHJcbiAgICBjb25zdCBxdWV1ZSA9IFF1ZXVlLmZyb21Ob3RoaW5nKCksXHJcbiAgICAgICAgICBzY2hlZHVsZXIgPSBuZXcgU2NoZWR1bGVyKHF1ZXVlKTtcclxuXHJcbiAgICByZXR1cm4gc2NoZWR1bGVyO1xyXG4gIH1cclxufVxyXG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlNjaGVkdWxlciIsInF1ZXVlIiwiZ2V0UXVldWUiLCJzZXREZWZlcnJlZCIsImRlZmVycmVkIiwiYWRkVGFza1RvUXVldWUiLCJ0YXNrIiwiYWRkVGFzayIsImV4ZWN1dGVUYXNrSW1tZWRpYXRlbHkiLCJxdWV1ZUVtcHR5IiwiaXNFbXB0eSIsInN1Y2Nlc3NmdWwiLCJmcm9tTm90aGluZyIsIlF1ZXVlIiwic2NoZWR1bGVyIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFJUUEsU0FBUzs7OzBEQUZaLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFWixJQUFBLEFBQU1BLFNBQVMsaUJBQWY7YUFBTUEsU0FBUyxDQUNoQkMsS0FBSzs4QkFERUQsU0FBUztRQUUxQixJQUFJLENBQUNDLEtBQUssR0FBR0EsS0FBSyxDQUFDOztpQkFGRkQsU0FBUzs7WUFLNUJFLEdBQVEsRUFBUkEsVUFBUTttQkFBUkEsU0FBQUEsUUFBUSxHQUFHO2dCQUNULE9BQU8sSUFBSSxDQUFDRCxLQUFLLENBQUM7WUFDcEIsQ0FBQzs7O1lBRURFLEdBQVcsRUFBWEEsYUFBVzttQkFBWEEsU0FBQUEsV0FBVyxDQUFDQyxRQUFRLEVBQUU7Z0JBQUUsSUFBSSxDQUFDSCxLQUFLLENBQUNFLFdBQVcsQ0FBQ0MsUUFBUSxDQUFDLENBQUM7WUFBQyxDQUFDOzs7WUFFM0RDLEdBQWMsRUFBZEEsZ0JBQWM7bUJBQWRBLFNBQUFBLGNBQWMsQ0FBQ0MsSUFBSSxFQUFFO2dCQUNuQixJQUFJLENBQUNMLEtBQUssQ0FBQ00sT0FBTyxDQUFDRCxJQUFJLENBQUMsQ0FBQztZQUMzQixDQUFDOzs7WUFFREUsR0FBc0IsRUFBdEJBLHdCQUFzQjttQkFBdEJBLFNBQUFBLHNCQUFzQixDQUFDRixJQUFJLEVBQUU7Z0JBQzNCLElBQU1HLFVBQVUsR0FBRyxJQUFJLENBQUNSLEtBQUssQ0FBQ1MsT0FBTyxFQUFFLEVBQ2pDQyxVQUFVLEdBQUdGLFVBQVUsQUFBQyxFQUFFLEVBQUU7Z0JBRWxDLElBQUlBLFVBQVUsRUFBRTtvQkFDZCxJQUFJLENBQUNSLEtBQUssQ0FBQ00sT0FBTyxDQUFDRCxJQUFJLENBQUMsQ0FBQztnQkFDM0IsQ0FBQztnQkFFRCxPQUFPSyxVQUFVLENBQUM7WUFDcEIsQ0FBQzs7OztZQUVNQyxHQUFXLEVBQVhBLGFBQVc7bUJBQWxCLFNBQU9BLFdBQVcsR0FBRztnQkFDbkIsSUFBTVgsS0FBSyxHQUFHWSxNQUFLLFFBQUEsQ0FBQ0QsV0FBVyxFQUFFLEVBQzNCRSxTQUFTLEdBQUcsSUE1QkRkLFNBQVMsQ0E0Qk1DLEtBQUssQ0FBQyxBQUFDO2dCQUV2QyxPQUFPYSxTQUFTLENBQUM7WUFDbkIsQ0FBQzs7O1dBL0JrQmQsU0FBUztDQWdDN0IsRUFBQSJ9