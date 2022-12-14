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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zY2hlZHVsZXIuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgUXVldWUgZnJvbSBcIi4vcXVldWVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjaGVkdWxlciB7XHJcbiAgY29uc3RydWN0b3IocXVldWUpIHtcclxuICAgIHRoaXMucXVldWUgPSBxdWV1ZTtcclxuICB9XHJcblxyXG4gIGdldFF1ZXVlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucXVldWU7XHJcbiAgfVxyXG5cclxuICBhZGRUYXNrVG9RdWV1ZSh0YXNrKSB7XHJcbiAgICB0aGlzLnF1ZXVlLmFkZFRhc2sodGFzayk7XHJcbiAgfVxyXG5cclxuICBleGVjdXRlVGFza0ltbWVkaWF0ZWx5KHRhc2spIHtcclxuICAgIGNvbnN0IHF1ZXVlRW1wdHkgPSB0aGlzLnF1ZXVlLmlzRW1wdHkoKSxcclxuICAgICAgICAgIHN1Y2Nlc3NmdWwgPSBxdWV1ZUVtcHR5OyAgLy9cclxuXHJcbiAgICBpZiAocXVldWVFbXB0eSkge1xyXG4gICAgICB0aGlzLnF1ZXVlLmFkZFRhc2sodGFzayk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHN1Y2Nlc3NmdWw7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XHJcbiAgICBjb25zdCBxdWV1ZSA9IFF1ZXVlLmZyb21Ob3RoaW5nKCksXHJcbiAgICAgICAgICBzY2hlZHVsZXIgPSBuZXcgU2NoZWR1bGVyKHF1ZXVlKTtcclxuXHJcbiAgICByZXR1cm4gc2NoZWR1bGVyO1xyXG4gIH1cclxufVxyXG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlNjaGVkdWxlciIsInF1ZXVlIiwiZ2V0UXVldWUiLCJhZGRUYXNrVG9RdWV1ZSIsInRhc2siLCJhZGRUYXNrIiwiZXhlY3V0ZVRhc2tJbW1lZGlhdGVseSIsInF1ZXVlRW1wdHkiLCJpc0VtcHR5Iiwic3VjY2Vzc2Z1bCIsImZyb21Ob3RoaW5nIiwiUXVldWUiLCJzY2hlZHVsZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OzBEQUZIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUgsSUFBQSxBQUFNQSwwQkFBTjthQUFNQSxVQUNQQyxLQUFLOzhCQURFRDtRQUVqQixJQUFJLENBQUNDLEtBQUssR0FBR0E7O2lCQUZJRDs7WUFLbkJFLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXO2dCQUNULE9BQU8sSUFBSSxDQUFDRCxLQUFLO1lBQ25COzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVDLElBQUksRUFBRTtnQkFDbkIsSUFBSSxDQUFDSCxLQUFLLENBQUNJLE9BQU8sQ0FBQ0Q7WUFDckI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsdUJBQXVCRixJQUFJLEVBQUU7Z0JBQzNCLElBQU1HLGFBQWEsSUFBSSxDQUFDTixLQUFLLENBQUNPLE9BQU8sSUFDL0JDLGFBQWFGLFlBQWEsRUFBRTtnQkFFbEMsSUFBSUEsWUFBWTtvQkFDZCxJQUFJLENBQUNOLEtBQUssQ0FBQ0ksT0FBTyxDQUFDRDtnQkFDckIsQ0FBQztnQkFFRCxPQUFPSztZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLGNBQWM7Z0JBQ25CLElBQU1ULFFBQVFVLGNBQUssQ0FBQ0QsV0FBVyxJQUN6QkUsWUFBWSxJQTFCRFosVUEwQmVDO2dCQUVoQyxPQUFPVztZQUNUOzs7V0E3Qm1CWiJ9