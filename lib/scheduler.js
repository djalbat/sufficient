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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zY2hlZHVsZXIuanMiXSwibmFtZXMiOlsiUXVldWUiLCJTY2hlZHVsZXIiLCJjb25zdHJ1Y3RvciIsInF1ZXVlIiwiYWRkVGFza1RvUXVldWUiLCJ0YXNrIiwiYWRkVGFzayIsImV4ZWN1dGVUYXNrSW1tZWRpYXRlbHkiLCJxdWV1ZUVtcHR5IiwiaXNFbXB0eSIsInN1Y2Nlc3NmdWwiLCJmcm9tTm90aGluZyIsInNjaGVkdWxlciJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFTSxHQUFTLENBQVQsTUFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVOLFNBQVMsaUJBQWYsUUFBUTthQUFGLFNBQVMsQ0FDaEIsS0FBSzs4QkFERSxTQUFTO1FBRTFCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSzs7aUJBRkQsU0FBUzs7WUFLNUIsR0FBYyxHQUFkLGNBQWM7bUJBQWQsUUFBUSxDQUFSLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSTtZQUN6QixDQUFDOzs7WUFFRCxHQUFzQixHQUF0QixzQkFBc0I7bUJBQXRCLFFBQVEsQ0FBUixzQkFBc0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDNUIsR0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFDL0IsVUFBVSxHQUFHLFVBQVUsQ0FBRyxDQUFFLEFBQUYsRUFBRTtnQkFFbEMsRUFBRSxFQUFFLFVBQVUsRUFBRSxDQUFDO29CQUNmLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUk7Z0JBQ3pCLENBQUM7Z0JBRUQsTUFBTSxDQUFDLFVBQVU7WUFDbkIsQ0FBQzs7OztZQUVNLEdBQVcsR0FBWCxXQUFXO21CQUFsQixRQUFRLENBQUQsV0FBVyxHQUFHLENBQUM7Z0JBQ3BCLEdBQUssQ0FBQyxLQUFLLEdBdkJHLE1BQVMsU0F1QkgsV0FBVyxJQUN6QixTQUFTLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxLQUFLO2dCQUVyQyxNQUFNLENBQUMsU0FBUztZQUNsQixDQUFDOzs7V0F6QmtCLFNBQVM7O2tCQUFULFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCBRdWV1ZSBmcm9tIFwiLi9xdWV1ZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NoZWR1bGVyIHtcclxuICBjb25zdHJ1Y3RvcihxdWV1ZSkge1xyXG4gICAgdGhpcy5xdWV1ZSA9IHF1ZXVlO1xyXG4gIH1cclxuXHJcbiAgYWRkVGFza1RvUXVldWUodGFzaykge1xyXG4gICAgdGhpcy5xdWV1ZS5hZGRUYXNrKHRhc2spO1xyXG4gIH1cclxuXHJcbiAgZXhlY3V0ZVRhc2tJbW1lZGlhdGVseSh0YXNrKSB7XHJcbiAgICBjb25zdCBxdWV1ZUVtcHR5ID0gdGhpcy5xdWV1ZS5pc0VtcHR5KCksXHJcbiAgICAgICAgICBzdWNjZXNzZnVsID0gcXVldWVFbXB0eTsgIC8vXHJcblxyXG4gICAgaWYgKHF1ZXVlRW1wdHkpIHtcclxuICAgICAgdGhpcy5xdWV1ZS5hZGRUYXNrKHRhc2spO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzdWNjZXNzZnVsO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xyXG4gICAgY29uc3QgcXVldWUgPSBRdWV1ZS5mcm9tTm90aGluZygpLFxyXG4gICAgICAgICAgc2NoZWR1bGVyID0gbmV3IFNjaGVkdWxlcihxdWV1ZSk7XHJcblxyXG4gICAgcmV0dXJuIHNjaGVkdWxlcjtcclxuICB9XHJcbn1cclxuIl19