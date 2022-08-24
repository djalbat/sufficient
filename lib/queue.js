"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Queue;
    }
});
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
    function Queue(tasks1, deferred) {
        _classCallCheck(this, Queue);
        this.tasks = tasks1;
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
                var _this = this;
                var firstTask = first(this.tasks);
                if (this.deferred) {
                    defer(function() {
                        var task = firstTask; ///
                        _this.executeTask(task);
                    });
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
                var tasks1 = [], deferred = true, queue = new Queue(tasks1, deferred);
                return queue;
            }
        }
    ]);
    return Queue;
}();
function defer(func) {
    setTimeout(func, 1);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9xdWV1ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xyXG5cclxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRdWV1ZSB7XHJcbiAgY29uc3RydWN0b3IodGFza3MsIGRlZmVycmVkKSB7XHJcbiAgICB0aGlzLnRhc2tzID0gdGFza3M7XHJcbiAgICB0aGlzLmRlZmVycmVkID0gZGVmZXJyZWQ7XHJcbiAgfVxyXG5cclxuICBnZXRUYXNrcygpIHtcclxuICAgIHJldHVybiB0YXNrcztcclxuICB9XHJcblxyXG4gIGlzRGVmZXJyZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5kZWZlcnJlZDtcclxuICB9XHJcblxyXG4gIHNldERlZmVycmVkKGRlZmVycmVkKSB7XHJcbiAgICB0aGlzLmRlZmVycmVkID0gZGVmZXJyZWQ7XHJcbiAgfVxyXG5cclxuICBhZGRUYXNrKHRhc2spIHtcclxuICAgIGNvbnN0IGVtcHR5ID0gdGhpcy5pc0VtcHR5KCk7XHJcblxyXG4gICAgdGhpcy50YXNrcy5wdXNoKHRhc2spO1xyXG5cclxuICAgIGlmIChlbXB0eSkge1xyXG4gICAgICB0aGlzLmV4ZWN1dGVGaXJzdFRhc2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV4ZWN1dGVGaXJzdFRhc2soKSB7XHJcbiAgICBjb25zdCBmaXJzdFRhc2sgPSBmaXJzdCh0aGlzLnRhc2tzKTtcclxuXHJcbiAgICBpZiAodGhpcy5kZWZlcnJlZCkge1xyXG4gICAgICBkZWZlcigoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFzayA9IGZpcnN0VGFzazsgIC8vL1xyXG5cclxuICAgICAgICB0aGlzLmV4ZWN1dGVUYXNrKHRhc2spO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0YXNrID0gZmlyc3RUYXNrOyAgLy8vXHJcblxyXG4gICAgdGhpcy5leGVjdXRlVGFzayh0YXNrKTtcclxuICB9XHJcblxyXG4gIGV4ZWN1dGVUYXNrKHRhc2spIHtcclxuICAgIGNvbnN0IG5leHQgPSB0aGlzLm5leHQuYmluZCh0aGlzKTtcclxuXHJcbiAgICB0YXNrLmV4ZWN1dGUoZnVuY3Rpb24oKSB7IC8vL1xyXG4gICAgICBjb25zdCBjYWxsYmFjayA9IHRhc2suZ2V0Q2FsbGJhY2soKTtcclxuICAgICAgXHJcbiAgICAgIGNhbGxiYWNrLmFwcGx5KHRhc2ssIGFyZ3VtZW50cyk7XHJcbiAgICAgIFxyXG4gICAgICBuZXh0KCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5leHQoKSB7XHJcbiAgICB0aGlzLnRhc2tzLnNoaWZ0KCk7XHJcblxyXG4gICAgY29uc3QgZW1wdHkgPSB0aGlzLmlzRW1wdHkoKTtcclxuXHJcbiAgICBpZiAoIWVtcHR5KSB7XHJcbiAgICAgIHRoaXMuZXhlY3V0ZUZpcnN0VGFzaygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaXNFbXB0eSgpIHtcclxuICAgIGNvbnN0IHRhc2tzTGVuZ3RoID0gdGhpcy50YXNrcy5sZW5ndGgsXHJcbiAgICAgICAgICBlbXB0eSA9ICh0YXNrc0xlbmd0aCA9PT0gMCk7XHJcblxyXG4gICAgcmV0dXJuIGVtcHR5O1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xyXG4gICAgY29uc3QgdGFza3MgPSBbXSxcclxuICAgICAgICAgIGRlZmVycmVkID0gdHJ1ZSxcclxuICAgICAgICAgIHF1ZXVlID0gbmV3IFF1ZXVlKHRhc2tzLCBkZWZlcnJlZCk7XHJcblxyXG4gICAgcmV0dXJuIHF1ZXVlO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZGVmZXIoZnVuYykge1xyXG4gIHNldFRpbWVvdXQoZnVuYywgMSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlF1ZXVlIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsInRhc2tzIiwiZGVmZXJyZWQiLCJnZXRUYXNrcyIsImlzRGVmZXJyZWQiLCJzZXREZWZlcnJlZCIsImFkZFRhc2siLCJ0YXNrIiwiZW1wdHkiLCJpc0VtcHR5IiwicHVzaCIsImV4ZWN1dGVGaXJzdFRhc2siLCJmaXJzdFRhc2siLCJkZWZlciIsImV4ZWN1dGVUYXNrIiwibmV4dCIsImJpbmQiLCJleGVjdXRlIiwiY2FsbGJhY2siLCJnZXRDYWxsYmFjayIsImFwcGx5IiwiYXJndW1lbnRzIiwic2hpZnQiLCJ0YXNrc0xlbmd0aCIsImxlbmd0aCIsImZyb21Ob3RoaW5nIiwicXVldWUiLCJmdW5jIiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7O2VBTVFBLEtBQUs7Ozt5QkFKSyxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQyxJQUFNLEFBQUVDLEtBQUssR0FBS0MsVUFBYyxlQUFBLENBQXhCRCxLQUFLLEFBQW1CLEFBQUM7QUFFbEIsSUFBQSxBQUFNRCxLQUFLLGlCQW9GekIsQUFwRmM7YUFBTUEsS0FBSyxDQUNaRyxNQUFLLEVBQUVDLFFBQVE7OEJBRFJKLEtBQUs7UUFFdEIsSUFBSSxDQUFDRyxLQUFLLEdBQUdBLE1BQUssQ0FBQztRQUNuQixJQUFJLENBQUNDLFFBQVEsR0FBR0EsUUFBUSxDQUFDOztpQkFIUkosS0FBSzs7WUFNeEJLLEdBQVEsRUFBUkEsVUFBUTttQkFBUkEsU0FBQUEsUUFBUSxHQUFHO2dCQUNULE9BQU9GLEtBQUssQ0FBQztZQUNmLENBQUM7OztZQUVERyxHQUFVLEVBQVZBLFlBQVU7bUJBQVZBLFNBQUFBLFVBQVUsR0FBRztnQkFDWCxPQUFPLElBQUksQ0FBQ0YsUUFBUSxDQUFDO1lBQ3ZCLENBQUM7OztZQUVERyxHQUFXLEVBQVhBLGFBQVc7bUJBQVhBLFNBQUFBLFdBQVcsQ0FBQ0gsUUFBUSxFQUFFO2dCQUNwQixJQUFJLENBQUNBLFFBQVEsR0FBR0EsUUFBUSxD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