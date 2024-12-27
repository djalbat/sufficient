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
var _queue = /*#__PURE__*/ _interop_require_default(require("./queue"));
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var Scheduler = /*#__PURE__*/ function() {
    function Scheduler(queue) {
        _class_call_check(this, Scheduler);
        this.queue = queue;
    }
    _create_class(Scheduler, [
        {
            key: "getQueue",
            value: function getQueue() {
                return this.queue;
            }
        },
        {
            key: "addTaskToQueue",
            value: function addTaskToQueue(task) {
                this.queue.addTask(task);
            }
        },
        {
            key: "executeImmediately",
            value: function executeImmediately(callback) {
                var successful = false;
                var queueEmpty = this.queue.isEmpty();
                if (queueEmpty) {
                    callback();
                    successful = true;
                }
                return successful;
            }
        },
        {
            key: "executeTaskImmediately",
            value: function executeTaskImmediately(task) {
                var successful = false;
                var queueEmpty = this.queue.isEmpty();
                if (queueEmpty) {
                    this.queue.addTask(task);
                    successful = true;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zY2hlZHVsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgUXVldWUgZnJvbSBcIi4vcXVldWVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjaGVkdWxlciB7XHJcbiAgY29uc3RydWN0b3IocXVldWUpIHtcclxuICAgIHRoaXMucXVldWUgPSBxdWV1ZTtcclxuICB9XHJcblxyXG4gIGdldFF1ZXVlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucXVldWU7XHJcbiAgfVxyXG5cclxuICBhZGRUYXNrVG9RdWV1ZSh0YXNrKSB7XHJcbiAgICB0aGlzLnF1ZXVlLmFkZFRhc2sodGFzayk7XHJcbiAgfVxyXG5cclxuICBleGVjdXRlSW1tZWRpYXRlbHkoY2FsbGJhY2spIHtcclxuICAgIGxldCBzdWNjZXNzZnVsID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3QgcXVldWVFbXB0eSA9IHRoaXMucXVldWUuaXNFbXB0eSgpO1xyXG5cclxuICAgIGlmIChxdWV1ZUVtcHR5KSB7XHJcbiAgICAgIGNhbGxiYWNrKCk7XHJcblxyXG4gICAgICBzdWNjZXNzZnVsID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc3VjY2Vzc2Z1bDtcclxuICB9XHJcblxyXG4gIGV4ZWN1dGVUYXNrSW1tZWRpYXRlbHkodGFzaykge1xyXG4gICAgbGV0IHN1Y2Nlc3NmdWwgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdCBxdWV1ZUVtcHR5ID0gdGhpcy5xdWV1ZS5pc0VtcHR5KCk7XHJcblxyXG4gICAgaWYgKHF1ZXVlRW1wdHkpIHtcclxuICAgICAgdGhpcy5xdWV1ZS5hZGRUYXNrKHRhc2spO1xyXG5cclxuICAgICAgc3VjY2Vzc2Z1bCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHN1Y2Nlc3NmdWw7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XHJcbiAgICBjb25zdCBxdWV1ZSA9IFF1ZXVlLmZyb21Ob3RoaW5nKCksXHJcbiAgICAgICAgICBzY2hlZHVsZXIgPSBuZXcgU2NoZWR1bGVyKHF1ZXVlKTtcclxuXHJcbiAgICByZXR1cm4gc2NoZWR1bGVyO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiU2NoZWR1bGVyIiwicXVldWUiLCJnZXRRdWV1ZSIsImFkZFRhc2tUb1F1ZXVlIiwidGFzayIsImFkZFRhc2siLCJleGVjdXRlSW1tZWRpYXRlbHkiLCJjYWxsYmFjayIsInN1Y2Nlc3NmdWwiLCJxdWV1ZUVtcHR5IiwiaXNFbXB0eSIsImV4ZWN1dGVUYXNrSW1tZWRpYXRlbHkiLCJmcm9tTm90aGluZyIsIlF1ZXVlIiwic2NoZWR1bGVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7Ozs0REFGSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVILElBQUEsQUFBTUEsMEJBQU47YUFBTUEsVUFDUEMsS0FBSztnQ0FERUQ7UUFFakIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBOztrQkFGSUQ7O1lBS25CRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELEtBQUs7WUFDbkI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZUMsSUFBSTtnQkFDakIsSUFBSSxDQUFDSCxLQUFLLENBQUNJLE9BQU8sQ0FBQ0Q7WUFDckI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsbUJBQW1CQyxRQUFRO2dCQUN6QixJQUFJQyxhQUFhO2dCQUVqQixJQUFNQyxhQUFhLElBQUksQ0FBQ1IsS0FBSyxDQUFDUyxPQUFPO2dCQUVyQyxJQUFJRCxZQUFZO29CQUNkRjtvQkFFQUMsYUFBYTtnQkFDZjtnQkFFQSxPQUFPQTtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLHVCQUF1QlAsSUFBSTtnQkFDekIsSUFBSUksYUFBYTtnQkFFakIsSUFBTUMsYUFBYSxJQUFJLENBQUNSLEtBQUssQ0FBQ1MsT0FBTztnQkFFckMsSUFBSUQsWUFBWTtvQkFDZCxJQUFJLENBQUNSLEtBQUssQ0FBQ0ksT0FBTyxDQUFDRDtvQkFFbkJJLGFBQWE7Z0JBQ2Y7Z0JBRUEsT0FBT0E7WUFDVDs7OztZQUVPSSxLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNWCxRQUFRWSxjQUFLLENBQUNELFdBQVcsSUFDekJFLFlBQVksSUEzQ0RkLFVBMkNlQztnQkFFaEMsT0FBT2E7WUFDVDs7O1dBOUNtQmQifQ==