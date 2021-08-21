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
        }
    ]);
    return Scheduler;
}();
exports.default = Scheduler;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zY2hlZHVsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgUXVldWUgZnJvbSBcIi4vcXVldWVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjaGVkdWxlciB7XHJcbiAgY29uc3RydWN0b3IocXVldWUpIHtcclxuICAgIHRoaXMucXVldWUgPSBxdWV1ZTtcclxuICB9XHJcblxyXG4gIGFkZFRhc2tUb1F1ZXVlKHRhc2spIHtcclxuICAgIHRoaXMucXVldWUuYWRkVGFzayh0YXNrKTtcclxuICB9XHJcblxyXG4gIGV4ZWN1dGVUYXNrSW1tZWRpYXRlbHkodGFzaykge1xyXG4gICAgY29uc3QgcXVldWVFbXB0eSA9IHRoaXMucXVldWUuaXNFbXB0eSgpLFxyXG4gICAgICAgICAgc3VjY2Vzc2Z1bCA9IHF1ZXVlRW1wdHk7ICAvL1xyXG5cclxuICAgIGlmIChxdWV1ZUVtcHR5KSB7XHJcbiAgICAgIHRoaXMucXVldWUuYWRkVGFzayh0YXNrKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc3VjY2Vzc2Z1bDtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcclxuICAgIGNvbnN0IHF1ZXVlID0gUXVldWUuZnJvbU5vdGhpbmcoKSxcclxuICAgICAgICAgIHNjaGVkdWxlciA9IG5ldyBTY2hlZHVsZXIocXVldWUpO1xyXG5cclxuICAgIHJldHVybiBzY2hlZHVsZXI7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVNLEdBQVMsQ0FBVCxNQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU4sU0FBUzthQUFULFNBQVMsQ0FDaEIsS0FBSzs4QkFERSxTQUFTO2FBRXJCLEtBQUssR0FBRyxLQUFLOztpQkFGRCxTQUFTOztZQUs1QixHQUFjLEdBQWQsY0FBYzs0QkFBZCxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7cUJBQ2YsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJO1lBQ3pCLENBQUM7OztZQUVELEdBQXNCLEdBQXRCLHNCQUFzQjs0QkFBdEIsc0JBQXNCLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQzVCLEdBQUssQ0FBQyxVQUFVLFFBQVEsS0FBSyxDQUFDLE9BQU8sSUFDL0IsVUFBVSxHQUFHLFVBQVUsQ0FBRyxDQUFFLEFBQUYsRUFBRTtnQkFFbEMsRUFBRSxFQUFFLFVBQVUsRUFBRSxDQUFDO3lCQUNWLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSTtnQkFDekIsQ0FBQzt1QkFFTSxVQUFVO1lBQ25CLENBQUM7Ozs7WUFFTSxHQUFXLEdBQVgsV0FBVzs0QkFBWCxXQUFXLEdBQUcsQ0FBQztnQkFDcEIsR0FBSyxDQUFDLEtBQUssR0F2QkcsTUFBUyxTQXVCSCxXQUFXLElBQ3pCLFNBQVMsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLEtBQUs7dUJBRTlCLFNBQVM7WUFDbEIsQ0FBQzs7O1dBekJrQixTQUFTOztrQkFBVCxTQUFTIn0=