"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _queue = _interopRequireDefault(require("./queue"));
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
        },
        {
            key: "fromDeferred",
            value: function fromDeferred(deferred) {
                var queue = _queue.default.fromDeferred(deferred), scheduler = new Scheduler(queue);
                return scheduler;
            }
        }
    ]);
    return Scheduler;
}();
exports.default = Scheduler;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zY2hlZHVsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgUXVldWUgZnJvbSBcIi4vcXVldWVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjaGVkdWxlciB7XHJcbiAgY29uc3RydWN0b3IocXVldWUpIHtcclxuICAgIHRoaXMucXVldWUgPSBxdWV1ZTtcclxuICB9XHJcblxyXG4gIGFkZFRhc2tUb1F1ZXVlKHRhc2spIHtcclxuICAgIHRoaXMucXVldWUuYWRkVGFzayh0YXNrKTtcclxuICB9XHJcblxyXG4gIGV4ZWN1dGVUYXNrSW1tZWRpYXRlbHkodGFzaykge1xyXG4gICAgY29uc3QgcXVldWVFbXB0eSA9IHRoaXMucXVldWUuaXNFbXB0eSgpLFxyXG4gICAgICAgICAgc3VjY2Vzc2Z1bCA9IHF1ZXVlRW1wdHk7ICAvL1xyXG5cclxuICAgIGlmIChxdWV1ZUVtcHR5KSB7XHJcbiAgICAgIHRoaXMucXVldWUuYWRkVGFzayh0YXNrKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc3VjY2Vzc2Z1bDtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcclxuICAgIGNvbnN0IHF1ZXVlID0gUXVldWUuZnJvbU5vdGhpbmcoKSxcclxuICAgICAgICAgIHNjaGVkdWxlciA9IG5ldyBTY2hlZHVsZXIocXVldWUpO1xyXG5cclxuICAgIHJldHVybiBzY2hlZHVsZXI7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbURlZmVycmVkKGRlZmVycmVkKSB7XHJcbiAgICBjb25zdCBxdWV1ZSA9IFF1ZXVlLmZyb21EZWZlcnJlZChkZWZlcnJlZCksXHJcbiAgICAgICAgICBzY2hlZHVsZXIgPSBuZXcgU2NoZWR1bGVyKHF1ZXVlKTtcclxuXHJcbiAgICByZXR1cm4gc2NoZWR1bGVyO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFTSxHQUFTLENBQVQsTUFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVOLFNBQVM7YUFBVCxTQUFTLENBQ2hCLEtBQUs7OEJBREUsU0FBUzthQUVyQixLQUFLLEdBQUcsS0FBSzs7aUJBRkQsU0FBUzs7WUFLNUIsR0FBYyxHQUFkLGNBQWM7NEJBQWQsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDO3FCQUNmLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSTtZQUN6QixDQUFDOzs7WUFFRCxHQUFzQixHQUF0QixzQkFBc0I7NEJBQXRCLHNCQUFzQixDQUFDLElBQUksRUFBRSxDQUFDO2dCQUM1QixHQUFLLENBQUMsVUFBVSxRQUFRLEtBQUssQ0FBQyxPQUFPLElBQy9CLFVBQVUsR0FBRyxVQUFVLENBQUcsQ0FBRSxBQUFGLEVBQUU7Z0JBRWxDLEVBQUUsRUFBRSxVQUFVLEVBQUUsQ0FBQzt5QkFDVixLQUFLLENBQUMsT0FBTyxDQUFDLElBQUk7Z0JBQ3pCLENBQUM7dUJBRU0sVUFBVTtZQUNuQixDQUFDOzs7O1lBRU0sR0FBVyxHQUFYLFdBQVc7NEJBQVgsV0FBVyxHQUFHLENBQUM7Z0JBQ3BCLEdBQUssQ0FBQyxLQUFLLEdBdkJHLE1BQVMsU0F1QkgsV0FBVyxJQUN6QixTQUFTLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxLQUFLO3VCQUU5QixTQUFTO1lBQ2xCLENBQUM7OztZQUVNLEdBQVksR0FBWixZQUFZOzRCQUFaLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDN0IsR0FBSyxDQUFDLEtBQUssR0E5QkcsTUFBUyxTQThCSCxZQUFZLENBQUMsUUFBUSxHQUNuQyxTQUFTLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxLQUFLO3VCQUU5QixTQUFTO1lBQ2xCLENBQUM7OztXQWhDa0IsU0FBUzs7a0JBQVQsU0FBUyJ9