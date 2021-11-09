"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _necessary = require("necessary");
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
var first = _necessary.arrayUtilities.first;
var Queue = /*#__PURE__*/ function() {
    function Queue(tasks, deferred) {
        _classCallCheck(this, Queue);
        this.tasks = tasks;
        this.deferred = deferred;
    }
    _createClass(Queue, [
        {
            key: "getTasks",
            value: function getTasks() {
                return tasks;
            }
        },
        {
            key: "isDeferred",
            value: function isDeferred() {
                return this.deferred;
            }
        },
        {
            key: "setDeferred",
            value: function setDeferred(deferred) {
                this.deferred = deferred;
            }
        },
        {
            key: "addTask",
            value: function addTask(task) {
                var empty = this.isEmpty();
                this.tasks.push(task);
                if (empty) {
                    this.executeFirstTask();
                }
            }
        },
        {
            key: "executeFirstTask",
            value: function executeFirstTask() {
                var firstTask = first(this.tasks);
                if (this.deferred) {
                    var _this = this;
                    defer(function() {
                        var task = firstTask; ///
                        _this.executeTask(task);
                    });
                    return;
                }
                var task1 = firstTask; ///
                this.executeTask(task1);
            }
        },
        {
            key: "executeTask",
            value: function executeTask(task) {
                var next = this.next.bind(this);
                task.execute(function() {
                    var callback = task.getCallback();
                    callback.apply(task, arguments);
                    next();
                });
            }
        },
        {
            key: "next",
            value: function next() {
                this.tasks.shift();
                var empty = this.isEmpty();
                if (!empty) {
                    this.executeFirstTask();
                }
            }
        },
        {
            key: "isEmpty",
            value: function isEmpty() {
                var tasksLength = this.tasks.length, empty = tasksLength === 0;
                return empty;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var tasks = [], deferred = true, queue = new Queue(tasks, deferred);
                return queue;
            }
        }
    ]);
    return Queue;
}();
exports.default = Queue;
function defer(func) {
    setTimeout(func, 0);
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9xdWV1ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xyXG5cclxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRdWV1ZSB7XHJcbiAgY29uc3RydWN0b3IodGFza3MsIGRlZmVycmVkKSB7XHJcbiAgICB0aGlzLnRhc2tzID0gdGFza3M7XHJcbiAgICB0aGlzLmRlZmVycmVkID0gZGVmZXJyZWQ7XHJcbiAgfVxyXG5cclxuICBnZXRUYXNrcygpIHtcclxuICAgIHJldHVybiB0YXNrcztcclxuICB9XHJcblxyXG4gIGlzRGVmZXJyZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5kZWZlcnJlZDtcclxuICB9XHJcblxyXG4gIHNldERlZmVycmVkKGRlZmVycmVkKSB7XHJcbiAgICB0aGlzLmRlZmVycmVkID0gZGVmZXJyZWQ7XHJcbiAgfVxyXG5cclxuICBhZGRUYXNrKHRhc2spIHtcclxuICAgIGNvbnN0IGVtcHR5ID0gdGhpcy5pc0VtcHR5KCk7XHJcblxyXG4gICAgdGhpcy50YXNrcy5wdXNoKHRhc2spO1xyXG5cclxuICAgIGlmIChlbXB0eSkge1xyXG4gICAgICB0aGlzLmV4ZWN1dGVGaXJzdFRhc2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV4ZWN1dGVGaXJzdFRhc2soKSB7XHJcbiAgICBjb25zdCBmaXJzdFRhc2sgPSBmaXJzdCh0aGlzLnRhc2tzKTtcclxuXHJcbiAgICBpZiAodGhpcy5kZWZlcnJlZCkge1xyXG4gICAgICBkZWZlcigoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFzayA9IGZpcnN0VGFzazsgIC8vL1xyXG5cclxuICAgICAgICB0aGlzLmV4ZWN1dGVUYXNrKHRhc2spO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0YXNrID0gZmlyc3RUYXNrOyAgLy8vXHJcblxyXG4gICAgdGhpcy5leGVjdXRlVGFzayh0YXNrKTtcclxuICB9XHJcblxyXG4gIGV4ZWN1dGVUYXNrKHRhc2spIHtcclxuICAgIGNvbnN0IG5leHQgPSB0aGlzLm5leHQuYmluZCh0aGlzKTtcclxuXHJcbiAgICB0YXNrLmV4ZWN1dGUoZnVuY3Rpb24oKSB7IC8vL1xyXG4gICAgICBjb25zdCBjYWxsYmFjayA9IHRhc2suZ2V0Q2FsbGJhY2soKTtcclxuICAgICAgXHJcbiAgICAgIGNhbGxiYWNrLmFwcGx5KHRhc2ssIGFyZ3VtZW50cyk7XHJcbiAgICAgIFxyXG4gICAgICBuZXh0KCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5leHQoKSB7XHJcbiAgICB0aGlzLnRhc2tzLnNoaWZ0KCk7XHJcblxyXG4gICAgY29uc3QgZW1wdHkgPSB0aGlzLmlzRW1wdHkoKTtcclxuXHJcbiAgICBpZiAoIWVtcHR5KSB7XHJcbiAgICAgIHRoaXMuZXhlY3V0ZUZpcnN0VGFzaygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaXNFbXB0eSgpIHtcclxuICAgIGNvbnN0IHRhc2tzTGVuZ3RoID0gdGhpcy50YXNrcy5sZW5ndGgsXHJcbiAgICAgICAgICBlbXB0eSA9ICh0YXNrc0xlbmd0aCA9PT0gMCk7XHJcblxyXG4gICAgcmV0dXJuIGVtcHR5O1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xyXG4gICAgY29uc3QgdGFza3MgPSBbXSxcclxuICAgICAgICAgIGRlZmVycmVkID0gdHJ1ZSxcclxuICAgICAgICAgIHF1ZXVlID0gbmV3IFF1ZXVlKHRhc2tzLCBkZWZlcnJlZCk7XHJcblxyXG4gICAgcmV0dXJuIHF1ZXVlO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZGVmZXIoZnVuYykge1xyXG4gIHNldFRpbWVvdXQoZnVuYywgMCk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImZpcnN0IiwiUXVldWUiLCJ0YXNrcyIsImRlZmVycmVkIiwiZ2V0VGFza3MiLCJpc0RlZmVycmVkIiwic2V0RGVmZXJyZWQiLCJhZGRUYXNrIiwidGFzayIsImVtcHR5IiwiaXNFbXB0eSIsInB1c2giLCJleGVjdXRlRmlyc3RUYXNrIiwiZmlyc3RUYXNrIiwiZGVmZXIiLCJleGVjdXRlVGFzayIsIm5leHQiLCJiaW5kIiwiZXhlY3V0ZSIsImNhbGxiYWNrIiwiZ2V0Q2FsbGJhY2siLCJhcHBseSIsImFyZ3VtZW50cyIsInNoaWZ0IiwidGFza3NMZW5ndGgiLCJsZW5ndGgiLCJmcm9tTm90aGluZyIsInF1ZXVlIiwiZnVuYyIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRW1CLEdBQVcsQ0FBWCxVQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQyxHQUFLLENBQUdBLEtBQUssR0FGa0IsVUFBVyxnQkFFbENBLEtBQUs7SUFFUUMsS0FBSyxpQkFBWCxRQUFRO2FBQUZBLEtBQUssQ0FDWkMsS0FBSyxFQUFFQyxRQUFROzhCQURSRixLQUFLO1FBRXRCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQSxLQUFLO1FBQ2xCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQSxRQUFROztpQkFIUEYsS0FBSzs7WUFNeEJHLEdBQVEsRUFBUkEsQ0FBUTttQkFBUkEsUUFBUSxDQUFSQSxRQUFRLEdBQUcsQ0FBQztnQkFDVixNQUFNLENBQUNGLEtBQUs7WUFDZCxDQUFDOzs7WUFFREcsR0FBVSxFQUFWQSxDQUFVO21CQUFWQSxRQUFRLENBQVJBLFVBQVUsR0FBRyxDQUFDO2dCQUNaLE1BQU0sQ0FBQyxJQUFJLENBQUNGLFFBQVE7WUFDdEIsQ0FBQzs7O1lBRURHLEdBQVcsRUFBWEEsQ0FBVzttQkFBWEEsUUFBUSxDQUFSQSxXQUFXLENBQUNILFFBQVEsRUFBRSxDQUFDO2dCQUNyQixJQUFJLENBQUNBLFFBQVEsR0FBR0EsUUFBUTtZQUMxQixDQUFDOzs7WUFFREksR0FBTyxFQUFQQSxDQUFPO21C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