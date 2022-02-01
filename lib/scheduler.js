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
exports.default = Scheduler;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zY2hlZHVsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgUXVldWUgZnJvbSBcIi4vcXVldWVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjaGVkdWxlciB7XHJcbiAgY29uc3RydWN0b3IocXVldWUpIHtcclxuICAgIHRoaXMucXVldWUgPSBxdWV1ZTtcclxuICB9XHJcblxyXG4gIGdldFF1ZXVlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucXVldWU7XHJcbiAgfVxyXG5cclxuICBzZXREZWZlcnJlZChkZWZlcnJlZCkgeyB0aGlzLnF1ZXVlLnNldERlZmVycmVkKGRlZmVycmVkKTsgfVxyXG5cclxuICBhZGRUYXNrVG9RdWV1ZSh0YXNrKSB7XHJcbiAgICB0aGlzLnF1ZXVlLmFkZFRhc2sodGFzayk7XHJcbiAgfVxyXG5cclxuICBleGVjdXRlVGFza0ltbWVkaWF0ZWx5KHRhc2spIHtcclxuICAgIGNvbnN0IHF1ZXVlRW1wdHkgPSB0aGlzLnF1ZXVlLmlzRW1wdHkoKSxcclxuICAgICAgICAgIHN1Y2Nlc3NmdWwgPSBxdWV1ZUVtcHR5OyAgLy9cclxuXHJcbiAgICBpZiAocXVldWVFbXB0eSkge1xyXG4gICAgICB0aGlzLnF1ZXVlLmFkZFRhc2sodGFzayk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHN1Y2Nlc3NmdWw7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XHJcbiAgICBjb25zdCBxdWV1ZSA9IFF1ZXVlLmZyb21Ob3RoaW5nKCksXHJcbiAgICAgICAgICBzY2hlZHVsZXIgPSBuZXcgU2NoZWR1bGVyKHF1ZXVlKTtcclxuXHJcbiAgICByZXR1cm4gc2NoZWR1bGVyO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiU2NoZWR1bGVyIiwicXVldWUiLCJnZXRRdWV1ZSIsInNldERlZmVycmVkIiwiZGVmZXJyZWQiLCJhZGRUYXNrVG9RdWV1ZSIsInRhc2siLCJhZGRUYXNrIiwiZXhlY3V0ZVRhc2tJbW1lZGlhdGVseSIsInF1ZXVlRW1wdHkiLCJpc0VtcHR5Iiwic3VjY2Vzc2Z1bCIsImZyb21Ob3RoaW5nIiwic2NoZWR1bGVyIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVNLEdBQVMsQ0FBVCxNQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU5BLFNBQVMsaUJBQWYsUUFBUTthQUFGQSxTQUFTLENBQ2hCQyxLQUFLOztRQUNmLElBQUksQ0FBQ0EsS0FBSyxHQUFHQSxLQUFLOzs7O1lBR3BCQyxHQUFRLEVBQVJBLENBQVE7bUJBQVJBLFFBQVEsQ0FBUkEsUUFBUSxHQUFHLENBQUM7Z0JBQ1YsTUFBTSxDQUFDLElBQUksQ0FBQ0QsS0FBSztZQUNuQixDQUFDOzs7WUFFREUsR0FBVyxFQUFYQSxDQUFXO21CQUFYQSxRQUFRLENBQVJBLFdBQVcsQ0FBQ0MsUUFBUSxFQUFFLENBQUM7Z0JBQUMsSUFBSSxDQUFDSCxLQUFLLENBQUNFLFdBQVcsQ0FBQ0MsUUFBUTtZQUFHLENBQUM7OztZQUUzREMsR0FBYyxFQUFkQSxDQUFjO21CQUFkQSxRQUFRLENBQVJBLGNBQWMsQ0FBQ0MsSUFBSSxFQUFFLENBQUM7Z0JBQ3BCLElBQUksQ0FBQ0wsS0FBSyxDQUFDTSxPQUFPLENBQUNELElBQUk7WUFDekIsQ0FBQzs7O1lBRURFLEdBQXNCLEVBQXRCQSxDQUFzQjttQkFBdEJBLFFBQVEsQ0FBUkEsc0JBQXNCLENBQUNGLElBQUksRUFBRSxDQUFDO2dCQUM1QixHQUFLLENBQUNHLFVBQVUsR0FBRyxJQUFJLENBQUNSLEtBQUssQ0FBQ1MsT0FBTyxJQUMvQkMsVUFBVSxHQUFHRixVQUFVLENBQUcsQ0FBRSxBQUFGLEVBQUU7Z0JBRWxDLEVBQUUsRUFBRUEsVUFBVSxFQUFFLENBQUM7b0JBQ2YsSUFBSSxDQUFDUixLQUFLLENBQUNNLE9BQU8sQ0FBQ0QsSUFBSTtnQkFDekIsQ0FBQztnQkFFRCxNQUFNLENBQUNLLFVBQVU7WUFDbkIsQ0FBQzs7OztZQUVNQyxHQUFXLEVBQVhBLENBQVc7bUJBQWxCLFFBQVEsQ0FBREEsV0FBVyxHQUFHLENBQUM7Z0JBQ3BCLEdBQUssQ0FBQ1gsS0FBSyxHQTdCRyxNQUFTLFNBNkJIVyxXQUFXLElBQ3pCQyxTQUFTLEdBQUcsR0FBRyxDQUFDYixTQUFTLENBQUNDLEtBQUs7Z0JBRXJDLE1BQU0sQ0FBQ1ksU0FBUztZQUNsQixDQUFDOzs7OztrQkEvQmtCYixTQUFTIn0=