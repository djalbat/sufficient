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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zY2hlZHVsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgUXVldWUgZnJvbSBcIi4vcXVldWVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjaGVkdWxlciB7XHJcbiAgY29uc3RydWN0b3IocXVldWUpIHtcclxuICAgIHRoaXMucXVldWUgPSBxdWV1ZTtcclxuICB9XHJcblxyXG4gIGdldFF1ZXVlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucXVldWU7XHJcbiAgfVxyXG5cclxuICBhZGRUYXNrVG9RdWV1ZSh0YXNrKSB7XHJcbiAgICB0aGlzLnF1ZXVlLmFkZFRhc2sodGFzayk7XHJcbiAgfVxyXG5cclxuICBleGVjdXRlVGFza0ltbWVkaWF0ZWx5KHRhc2spIHtcclxuICAgIGNvbnN0IHF1ZXVlRW1wdHkgPSB0aGlzLnF1ZXVlLmlzRW1wdHkoKSxcclxuICAgICAgICAgIHN1Y2Nlc3NmdWwgPSBxdWV1ZUVtcHR5OyAgLy9cclxuXHJcbiAgICBpZiAocXVldWVFbXB0eSkge1xyXG4gICAgICB0aGlzLnF1ZXVlLmFkZFRhc2sodGFzayk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHN1Y2Nlc3NmdWw7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XHJcbiAgICBjb25zdCBxdWV1ZSA9IFF1ZXVlLmZyb21Ob3RoaW5nKCksXHJcbiAgICAgICAgICBzY2hlZHVsZXIgPSBuZXcgU2NoZWR1bGVyKHF1ZXVlKTtcclxuXHJcbiAgICByZXR1cm4gc2NoZWR1bGVyO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiU2NoZWR1bGVyIiwicXVldWUiLCJnZXRRdWV1ZSIsImFkZFRhc2tUb1F1ZXVlIiwidGFzayIsImFkZFRhc2siLCJleGVjdXRlVGFza0ltbWVkaWF0ZWx5IiwicXVldWVFbXB0eSIsImlzRW1wdHkiLCJzdWNjZXNzZnVsIiwiZnJvbU5vdGhpbmciLCJRdWV1ZSIsInNjaGVkdWxlciJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OzREQUZIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUgsSUFBQSxBQUFNQSwwQkFBRCxBQUFMO2FBQU1BLFVBQ1BDLEtBQUs7Z0NBREVEO1FBRWpCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTs7a0JBRklEOztZQUtuQkUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxLQUFLO1lBQ25COzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVDLElBQUk7Z0JBQ2pCLElBQUksQ0FBQ0gsS0FBSyxDQUFDSSxPQUFPLENBQUNEO1lBQ3JCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLHVCQUF1QkYsSUFBSTtnQkFDekIsSUFBTUcsYUFBYSxJQUFJLENBQUNOLEtBQUssQ0FBQ08sT0FBTyxJQUMvQkMsYUFBYUYsWUFBYSxFQUFFO2dCQUVsQyxJQUFJQSxZQUFZO29CQUNkLElBQUksQ0FBQ04sS0FBSyxDQUFDSSxPQUFPLENBQUNEO2dCQUNyQjtnQkFFQSxPQUFPSztZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BO2dCQUNMLElBQU1ULFFBQVFVLGNBQUssQ0FBQ0QsV0FBVyxJQUN6QkUsWUFBWSxJQTFCRFosVUEwQmVDO2dCQUVoQyxPQUFPVztZQUNUOzs7V0E3Qm1CWiJ9