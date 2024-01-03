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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zY2hlZHVsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgUXVldWUgZnJvbSBcIi4vcXVldWVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjaGVkdWxlciB7XHJcbiAgY29uc3RydWN0b3IocXVldWUpIHtcclxuICAgIHRoaXMucXVldWUgPSBxdWV1ZTtcclxuICB9XHJcblxyXG4gIGdldFF1ZXVlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucXVldWU7XHJcbiAgfVxyXG5cclxuICBhZGRUYXNrVG9RdWV1ZSh0YXNrKSB7XHJcbiAgICB0aGlzLnF1ZXVlLmFkZFRhc2sodGFzayk7XHJcbiAgfVxyXG5cclxuICBleGVjdXRlVGFza0ltbWVkaWF0ZWx5KHRhc2spIHtcclxuICAgIGNvbnN0IHF1ZXVlRW1wdHkgPSB0aGlzLnF1ZXVlLmlzRW1wdHkoKSxcclxuICAgICAgICAgIHN1Y2Nlc3NmdWwgPSBxdWV1ZUVtcHR5OyAgLy9cclxuXHJcbiAgICBpZiAocXVldWVFbXB0eSkge1xyXG4gICAgICB0aGlzLnF1ZXVlLmFkZFRhc2sodGFzayk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHN1Y2Nlc3NmdWw7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XHJcbiAgICBjb25zdCBxdWV1ZSA9IFF1ZXVlLmZyb21Ob3RoaW5nKCksXHJcbiAgICAgICAgICBzY2hlZHVsZXIgPSBuZXcgU2NoZWR1bGVyKHF1ZXVlKTtcclxuXHJcbiAgICByZXR1cm4gc2NoZWR1bGVyO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiU2NoZWR1bGVyIiwicXVldWUiLCJnZXRRdWV1ZSIsImFkZFRhc2tUb1F1ZXVlIiwidGFzayIsImFkZFRhc2siLCJleGVjdXRlVGFza0ltbWVkaWF0ZWx5IiwicXVldWVFbXB0eSIsImlzRW1wdHkiLCJzdWNjZXNzZnVsIiwiZnJvbU5vdGhpbmciLCJRdWV1ZSIsInNjaGVkdWxlciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7NERBRkg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFSCxJQUFBLEFBQU1BLDBCQUFELEFBQUw7YUFBTUEsVUFDUEMsS0FBSztnQ0FERUQ7UUFFakIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBOztrQkFGSUQ7O1lBS25CRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELEtBQUs7WUFDbkI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZUMsSUFBSTtnQkFDakIsSUFBSSxDQUFDSCxLQUFLLENBQUNJLE9BQU8sQ0FBQ0Q7WUFDckI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsdUJBQXVCRixJQUFJO2dCQUN6QixJQUFNRyxhQUFhLElBQUksQ0FBQ04sS0FBSyxDQUFDTyxPQUFPLElBQy9CQyxhQUFhRixZQUFhLEVBQUU7Z0JBRWxDLElBQUlBLFlBQVk7b0JBQ2QsSUFBSSxDQUFDTixLQUFLLENBQUNJLE9BQU8sQ0FBQ0Q7Z0JBQ3JCO2dCQUVBLE9BQU9LO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBTVQsUUFBUVUsY0FBSyxDQUFDRCxXQUFXLElBQ3pCRSxZQUFZLElBMUJEWixVQTBCZUM7Z0JBRWhDLE9BQU9XO1lBQ1Q7OztXQTdCbUJaIn0=