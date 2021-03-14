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
var Queue = function() {
    function Queue(tasks) {
        _classCallCheck(this, Queue);
        this.tasks = tasks;
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
                setTimeout((function() {
                    var task = firstTask; ///
                    this.executeTask(task);
                }).bind(this), 0);
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
                var tasks = [], queue = new Queue(tasks);
                return queue;
            }
        }
    ]);
    return Queue;
}();
exports.default = Queue;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9xdWV1ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xyXG5cclxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRdWV1ZSB7XHJcbiAgY29uc3RydWN0b3IodGFza3MpIHtcclxuICAgIHRoaXMudGFza3MgPSB0YXNrcztcclxuICB9XHJcblxyXG4gIGFkZFRhc2sodGFzaykge1xyXG4gICAgY29uc3QgZW1wdHkgPSB0aGlzLmlzRW1wdHkoKTtcclxuXHJcbiAgICB0aGlzLnRhc2tzLnB1c2godGFzayk7XHJcblxyXG4gICAgaWYgKGVtcHR5KSB7XHJcbiAgICAgIHRoaXMuZXhlY3V0ZUZpcnN0VGFzaygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZXhlY3V0ZUZpcnN0VGFzaygpIHtcclxuICAgIGNvbnN0IGZpcnN0VGFzayA9IGZpcnN0KHRoaXMudGFza3MpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBjb25zdCB0YXNrID0gZmlyc3RUYXNrOyAgLy8vXHJcblxyXG4gICAgICB0aGlzLmV4ZWN1dGVUYXNrKHRhc2spO1xyXG4gICAgfSwgMCk7XHJcbiAgfVxyXG5cclxuICBleGVjdXRlVGFzayh0YXNrKSB7XHJcbiAgICBjb25zdCBuZXh0ID0gdGhpcy5uZXh0LmJpbmQodGhpcyk7XHJcblxyXG4gICAgdGFzay5leGVjdXRlKGZ1bmN0aW9uKCkgeyAvLy9cclxuICAgICAgY29uc3QgY2FsbGJhY2sgPSB0YXNrLmdldENhbGxiYWNrKCk7XHJcbiAgICAgIFxyXG4gICAgICBjYWxsYmFjay5hcHBseSh0YXNrLCBhcmd1bWVudHMpO1xyXG4gICAgICBcclxuICAgICAgbmV4dCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZXh0KCkge1xyXG4gICAgdGhpcy50YXNrcy5zaGlmdCgpO1xyXG5cclxuICAgIGNvbnN0IGVtcHR5ID0gdGhpcy5pc0VtcHR5KCk7XHJcblxyXG4gICAgaWYgKCFlbXB0eSkge1xyXG4gICAgICB0aGlzLmV4ZWN1dGVGaXJzdFRhc2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlzRW1wdHkoKSB7XHJcbiAgICBjb25zdCB0YXNrc0xlbmd0aCA9IHRoaXMudGFza3MubGVuZ3RoLFxyXG4gICAgICAgICAgZW1wdHkgPSAodGFza3NMZW5ndGggPT09IDApO1xyXG5cclxuICAgIHJldHVybiBlbXB0eTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcclxuICAgIGNvbnN0IHRhc2tzID0gW10sXHJcbiAgICAgICAgICBxdWV1ZSA9IG5ldyBRdWV1ZSh0YXNrcyk7XHJcblxyXG4gICAgcmV0dXJuIHF1ZXVlO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBQTs7Ozs7SUFFQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVBLEtBQUEsR0FGQSxVQUFBLGdCQUVBLEtBQUE7SUFFQSxLQUFBO2FBQUEsS0FBQSxDQUNBLEtBQUE7OEJBREEsS0FBQTthQUVBLEtBQUEsR0FBQSxLQUFBOztpQkFGQSxLQUFBOztBQUtBLGVBQUEsR0FBQSxPQUFBOzRCQUFBLE9BQUEsQ0FBQSxJQUFBO29CQUNBLEtBQUEsUUFBQSxPQUFBO3FCQUVBLEtBQUEsQ0FBQSxJQUFBLENBQUEsSUFBQTtvQkFFQSxLQUFBO3lCQUNBLGdCQUFBOzs7OztBQUlBLGVBQUEsR0FBQSxnQkFBQTs0QkFBQSxnQkFBQTtvQkFDQSxTQUFBLEdBQUEsS0FBQSxNQUFBLEtBQUE7QUFFQSwwQkFBQTt3QkFDQSxJQUFBLEdBQUEsU0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBO3lCQUVBLFdBQUEsQ0FBQSxJQUFBOytCQUNBLENBQUE7Ozs7QUFHQSxlQUFBLEdBQUEsV0FBQTs0QkFBQSxXQUFBLENBQUEsSUFBQTtvQkFDQSxJQUFBLFFBQUEsSUFBQSxDQUFBLElBQUE7QUFFQSxvQkFBQSxDQUFBLE9BQUE7d0JBQ0EsUUFBQSxHQUFBLElBQUEsQ0FBQSxXQUFBO0FBRUEsNEJBQUEsQ0FBQSxLQUFBLENBQUEsSUFBQSxFQUFBLFNBQUE7QUFFQSx3QkFBQTs7Ozs7QUFJQSxlQUFBLEdBQUEsSUFBQTs0QkFBQSxJQUFBO3FCQUNBLEtBQUEsQ0FBQSxLQUFBO29CQUVBLEtBQUEsUUFBQSxPQUFBO3FCQUVBLEtBQUE7eUJBQ0EsZ0JBQUE7Ozs7O0FBSUEsZUFBQSxHQUFBLE9BQUE7NEJBQUEsT0FBQTtvQkFDQSxXQUFBLFFBQUEsS0FBQSxDQUFBLE1BQUEsRUFDQSxLQUFBLEdBQUEsV0FBQSxLQUFBLENBQUE7dUJBRUEsS0FBQTs7Ozs7QUFHQSxlQUFBLEdBQUEsV0FBQTs0QkFBQSxXQUFBO29CQUNBLEtBQUEsT0FDQSxLQUFBLE9BQUEsS0FBQSxDQUFBLEtBQUE7dUJBRUEsS0FBQTs7OztXQTFEQSxLQUFBOztrQkFBQSxLQUFBIn0=