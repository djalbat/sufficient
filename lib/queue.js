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
var defer = setTimeout(func, 0);
var Queue = /*#__PURE__*/ function() {
    function Queue(tasks, deferred) {
        _classCallCheck(this, Queue);
        this.tasks = tasks;
        this.deferred = deferred;
    }
    _createClass(Queue, [
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
                    defer((function() {
                        var task = firstTask; ///
                        this.executeTask(task);
                    }).bind(this));
                    return;
                }
                var task = firstTask; ///
                this.executeTask(task);
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
        },
        {
            key: "fromDeferred",
            value: function fromDeferred(deferred) {
                var tasks = [], queue = new Queue(tasks, deferred);
                return queue;
            }
        }
    ]);
    return Queue;
}();
exports.default = Queue;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9xdWV1ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xyXG5cclxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XHJcblxyXG5jb25zdCBkZWZlciA9IHNldFRpbWVvdXQoZnVuYywgMCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRdWV1ZSB7XHJcbiAgY29uc3RydWN0b3IodGFza3MsIGRlZmVycmVkKSB7XHJcbiAgICB0aGlzLnRhc2tzID0gdGFza3M7XHJcbiAgICB0aGlzLmRlZmVycmVkID0gZGVmZXJyZWQ7XHJcbiAgfVxyXG5cclxuICBhZGRUYXNrKHRhc2spIHtcclxuICAgIGNvbnN0IGVtcHR5ID0gdGhpcy5pc0VtcHR5KCk7XHJcblxyXG4gICAgdGhpcy50YXNrcy5wdXNoKHRhc2spO1xyXG5cclxuICAgIGlmIChlbXB0eSkge1xyXG4gICAgICB0aGlzLmV4ZWN1dGVGaXJzdFRhc2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV4ZWN1dGVGaXJzdFRhc2soKSB7XHJcbiAgICBjb25zdCBmaXJzdFRhc2sgPSBmaXJzdCh0aGlzLnRhc2tzKTtcclxuXHJcbiAgICBpZiAodGhpcy5kZWZlcnJlZCkge1xyXG4gICAgICBkZWZlcigoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFzayA9IGZpcnN0VGFzazsgIC8vL1xyXG5cclxuICAgICAgICB0aGlzLmV4ZWN1dGVUYXNrKHRhc2spO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0YXNrID0gZmlyc3RUYXNrOyAgLy8vXHJcblxyXG4gICAgdGhpcy5leGVjdXRlVGFzayh0YXNrKTtcclxuICB9XHJcblxyXG4gIGV4ZWN1dGVUYXNrKHRhc2spIHtcclxuICAgIGNvbnN0IG5leHQgPSB0aGlzLm5leHQuYmluZCh0aGlzKTtcclxuXHJcbiAgICB0YXNrLmV4ZWN1dGUoZnVuY3Rpb24oKSB7IC8vL1xyXG4gICAgICBjb25zdCBjYWxsYmFjayA9IHRhc2suZ2V0Q2FsbGJhY2soKTtcclxuICAgICAgXHJcbiAgICAgIGNhbGxiYWNrLmFwcGx5KHRhc2ssIGFyZ3VtZW50cyk7XHJcbiAgICAgIFxyXG4gICAgICBuZXh0KCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5leHQoKSB7XHJcbiAgICB0aGlzLnRhc2tzLnNoaWZ0KCk7XHJcblxyXG4gICAgY29uc3QgZW1wdHkgPSB0aGlzLmlzRW1wdHkoKTtcclxuXHJcbiAgICBpZiAoIWVtcHR5KSB7XHJcbiAgICAgIHRoaXMuZXhlY3V0ZUZpcnN0VGFzaygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaXNFbXB0eSgpIHtcclxuICAgIGNvbnN0IHRhc2tzTGVuZ3RoID0gdGhpcy50YXNrcy5sZW5ndGgsXHJcbiAgICAgICAgICBlbXB0eSA9ICh0YXNrc0xlbmd0aCA9PT0gMCk7XHJcblxyXG4gICAgcmV0dXJuIGVtcHR5O1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xyXG4gICAgY29uc3QgdGFza3MgPSBbXSxcclxuICAgICAgICAgIGRlZmVycmVkID0gdHJ1ZSxcclxuICAgICAgICAgIHF1ZXVlID0gbmV3IFF1ZXVlKHRhc2tzLCBkZWZlcnJlZCk7XHJcblxyXG4gICAgcmV0dXJuIHF1ZXVlO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21EZWZlcnJlZChkZWZlcnJlZCkge1xyXG4gICAgY29uc3QgdGFza3MgPSBbXSxcclxuICAgICAgICAgIHF1ZXVlID0gbmV3IFF1ZXVlKHRhc2tzLCBkZWZlcnJlZCk7XHJcblxyXG4gICAgcmV0dXJuIHF1ZXVlO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFbUIsR0FBVyxDQUFYLFVBQVc7Ozs7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