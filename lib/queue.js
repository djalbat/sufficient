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
    setTimeout(func, 1);
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9xdWV1ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xyXG5cclxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRdWV1ZSB7XHJcbiAgY29uc3RydWN0b3IodGFza3MsIGRlZmVycmVkKSB7XHJcbiAgICB0aGlzLnRhc2tzID0gdGFza3M7XHJcbiAgICB0aGlzLmRlZmVycmVkID0gZGVmZXJyZWQ7XHJcbiAgfVxyXG5cclxuICBnZXRUYXNrcygpIHtcclxuICAgIHJldHVybiB0YXNrcztcclxuICB9XHJcblxyXG4gIGlzRGVmZXJyZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5kZWZlcnJlZDtcclxuICB9XHJcblxyXG4gIHNldERlZmVycmVkKGRlZmVycmVkKSB7XHJcbiAgICB0aGlzLmRlZmVycmVkID0gZGVmZXJyZWQ7XHJcbiAgfVxyXG5cclxuICBhZGRUYXNrKHRhc2spIHtcclxuICAgIGNvbnN0IGVtcHR5ID0gdGhpcy5pc0VtcHR5KCk7XHJcblxyXG4gICAgdGhpcy50YXNrcy5wdXNoKHRhc2spO1xyXG5cclxuICAgIGlmIChlbXB0eSkge1xyXG4gICAgICB0aGlzLmV4ZWN1dGVGaXJzdFRhc2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV4ZWN1dGVGaXJzdFRhc2soKSB7XHJcbiAgICBjb25zdCBmaXJzdFRhc2sgPSBmaXJzdCh0aGlzLnRhc2tzKTtcclxuXHJcbiAgICBpZiAodGhpcy5kZWZlcnJlZCkge1xyXG4gICAgICBkZWZlcigoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFzayA9IGZpcnN0VGFzazsgIC8vL1xyXG5cclxuICAgICAgICB0aGlzLmV4ZWN1dGVUYXNrKHRhc2spO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0YXNrID0gZmlyc3RUYXNrOyAgLy8vXHJcblxyXG4gICAgdGhpcy5leGVjdXRlVGFzayh0YXNrKTtcclxuICB9XHJcblxyXG4gIGV4ZWN1dGVUYXNrKHRhc2spIHtcclxuICAgIGNvbnN0IG5leHQgPSB0aGlzLm5leHQuYmluZCh0aGlzKTtcclxuXHJcbiAgICB0YXNrLmV4ZWN1dGUoZnVuY3Rpb24oKSB7IC8vL1xyXG4gICAgICBjb25zdCBjYWxsYmFjayA9IHRhc2suZ2V0Q2FsbGJhY2soKTtcclxuICAgICAgXHJcbiAgICAgIGNhbGxiYWNrLmFwcGx5KHRhc2ssIGFyZ3VtZW50cyk7XHJcbiAgICAgIFxyXG4gICAgICBuZXh0KCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5leHQoKSB7XHJcbiAgICB0aGlzLnRhc2tzLnNoaWZ0KCk7XHJcblxyXG4gICAgY29uc3QgZW1wdHkgPSB0aGlzLmlzRW1wdHkoKTtcclxuXHJcbiAgICBpZiAoIWVtcHR5KSB7XHJcbiAgICAgIHRoaXMuZXhlY3V0ZUZpcnN0VGFzaygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaXNFbXB0eSgpIHtcclxuICAgIGNvbnN0IHRhc2tzTGVuZ3RoID0gdGhpcy50YXNrcy5sZW5ndGgsXHJcbiAgICAgICAgICBlbXB0eSA9ICh0YXNrc0xlbmd0aCA9PT0gMCk7XHJcblxyXG4gICAgcmV0dXJuIGVtcHR5O1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xyXG4gICAgY29uc3QgdGFza3MgPSBbXSxcclxuICAgICAgICAgIGRlZmVycmVkID0gdHJ1ZSxcclxuICAgICAgICAgIHF1ZXVlID0gbmV3IFF1ZXVlKHRhc2tzLCBkZWZlcnJlZCk7XHJcblxyXG4gICAgcmV0dXJuIHF1ZXVlO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZGVmZXIoZnVuYykge1xyXG4gIHNldFRpbWVvdXQoZnVuYywgMSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImZpcnN0IiwiUXVldWUiLCJ0YXNrcyIsImRlZmVycmVkIiwiZ2V0VGFza3MiLCJpc0RlZmVycmVkIiwic2V0RGVmZXJyZWQiLCJhZGRUYXNrIiwidGFzayIsImVtcHR5IiwiaXNFbXB0eSIsInB1c2giLCJleGVjdXRlRmlyc3RUYXNrIiwiZmlyc3RUYXNrIiwiZGVmZXIiLCJleGVjdXRlVGFzayIsIm5leHQiLCJiaW5kIiwiZXhlY3V0ZSIsImNhbGxiYWNrIiwiZ2V0Q2FsbGJhY2siLCJhcHBseSIsImFyZ3VtZW50cyIsInNoaWZ0IiwidGFza3NMZW5ndGgiLCJsZW5ndGgiLCJmcm9tTm90aGluZyIsInF1ZXVlIiwiZnVuYyIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRW1CLEdBQVcsQ0FBWCxVQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQyxHQUFLLENBQUdBLEtBQUssR0FGa0IsVUFBVyxnQkFFbENBLEtBQUs7SUFFUUMsS0FBSyxpQkFBWCxRQUFRO2FBQUZBLEtBQUssQ0FDWkMsS0FBSyxFQUFFQyxRQUFROztRQUN6QixJQUFJLENBQUNELEtBQUssR0FBR0EsS0FBSztRQUNsQixJQUFJLENBQUNDLFFBQVEsR0FBR0EsUUFBUTs7OztZQUcxQkMsR0FBUSxFQUFSQSxDQUFRO21CQUFSQSxRQUFRLENBQVJBLFFBQVEsR0FBRyxDQUFDO2dCQUNWLE1BQU0sQ0FBQ0YsS0FBSztZQUNkLENBQUM7OztZQUVERyxHQUFVLEVBQVZBLENBQVU7bUJBQVZBLFFBQVEsQ0FBUkEsVUFBVSxHQUFHLENBQUM7Z0JBQ1osTUFBTSxDQUFDLElBQUksQ0FBQ0YsUUFBUTtZQUN0QixDQUFDOzs7WUFFREcsR0FBVyxFQUFYQSxDQUFXO21CQUFYQSxRQUFRLENBQVJBLFdBQVcsQ0FBQ0gsUUFBUSxFQUFFLENBQUM7Z0JBQ3JCLElBQUksQ0FBQ0EsUUFBUSxHQUFHQSxRQUFRO1lBQzFCLENBQUM7OztZQUVESSxHQUFPLEVBQVBBLENBQU87bUJBQVBBLFFBQVFDLENBQVJELE9BQU8sQ0FBQ0MsSUFBSSxFQUFFLENBQUM7Z0JBQ2IsR0FBSyxDQUFDQyxLQUFLLEdBQUcsSUFBSSxDQUFDQyxPQUFPO2dCQUUxQixJQUFJLENBQUNSLEtBQUssQ0FBQ1MsSUFBSSxDQUFDSCxJQUFJO2dCQUVwQixFQUFFLEVBQUVDLEtBQUssRUFBRSxDQUFDO29CQUNWLElBQUksQ0FBQ0csZ0JBQWdCO2dCQUN2QixDQUFDO1lBQ0gsQ0FBQzs7O1lBRURBLEdBQWdCLEVBQWhCQSxDQUFnQjttQkFBaEJBLFFBQVEsQ0FBUkEsZ0JBQWdCLEdBQUcsQ0FBQztnQkFDbEIsR0FBSyxDQUFDQyxTQUFTLEdBQUdiLEtBQUssQ0FBQyxJQUFJLENBQUNFLEtBQUs7Z0JBRWxDLEVBQUUsRUFBRSxJQUFJLENBQUNDLFFBQVEsRUFBRSxDQUFDOztvQkFDbEJXLEtBQUssQ0FBQyxRQUFRLEdBQUYsQ0FBQzt3QkFDWCxHQUFLLENBQUNOLElBQUksR0FBR0ssU0FBUyxDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRzs4QkFFdkJFLFdBQVcsQ0FBQ1AsSUFBSTtvQkFDdkIsQ0FBQztvQkFFRCxNQUFNO2dCQUNSLENBQUM7Z0JBRUQsR0FBSyxDQUFDQSxLQUFJLEdBQUdLLFNBQVMsQ0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7Z0JBRTVCLElBQUksQ0FBQ0UsV0FBVyxDQUFDUCxLQUFJO1lBQ3ZCLENBQUM7OztZQUVETyxHQUFXLEVBQVhBLENBQVc7bUJBQVhBLFFBQVEsQ0FBUkEsV0FBVyxDQUFDUCxJQUFJLEVBQUUsQ0FBQztnQkFDakIsR0FBSyxDQUFDUSxJQUFJLEdBQUcsSUFBSSxDQUFDQSxJQUFJLENBQUNDLElBQUksQ0FBQyxJQUFJO2dCQUVoQ1QsSUFBSSxDQUFDVSxPQUFPLENBQUMsUUFBUSxHQUFHLENBQUM7b0JBQ3ZCLEdBQUssQ0FBQ0MsUUFBUSxHQUFHWCxJQUFJLENBQUNZLFdBQVc7b0JBRWpDRCxRQUFRLENBQUNFLEtBQUssQ0FBQ2IsSUFBSSxFQUFFYyxTQUFTO29CQUU5Qk4sSUFBSTtnQkFDTixDQUFDO1lBQ0gsQ0FBQzs7O1lBRURBLEdBQUksRUFBSkEsQ0FBSTttQkFBSkEsUUFBUSxDQUFSQSxJQUFJLEdBQUcsQ0FBQztnQkFDTixJQUFJLENBQUNkLEtBQUssQ0FBQ3FCLEtBQUs7Z0JBRWhCLEdBQUssQ0FBQ2QsS0FBSyxHQUFHLElBQUksQ0FBQ0MsT0FBTztnQkFFMUIsRUFBRSxHQUFHRCxLQUFLLEVBQUUsQ0FBQztvQkFDWCxJQUFJLENBQUNHLGdCQUFnQjtnQkFDdkIsQ0FBQztZQUNILENBQUM7OztZQUVERixHQUFPLEVBQVBBLENBQU87bUJBQVBBLFFBQVEsQ0FBUkEsT0FBTyxHQUFHLENBQUM7Z0JBQ1QsR0FBSyxDQUFDYyxXQUFXLEdBQUcsSUFBSSxDQUFDdEIsS0FBSyxDQUFDdUIsTUFBTSxFQUMvQmhCLEtBQUssR0FBSWUsV0FBVyxLQUFLLENBQUM7Z0JBRWhDLE1BQU0sQ0FBQ2YsS0FBSztZQUNkLENBQUM7Ozs7WUFFTWlCLEdBQVcsRUFBWEEsQ0FBVzttQkFBbEIsUUFBUSxDQUFEQSxXQUFXLEdBQUcsQ0FBQztnQkFDcEIsR0FBSyxDQUFDeEIsS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUNWQyxRQUFRLEdBQUcsSUFBSSxFQUNmd0IsS0FBSyxHQUFHLEdBQUcsQ0FBQzFCLEtBQUssQ0FBQ0MsS0FBSyxFQUFFQyxRQUFRO2dCQUV2QyxNQUFNLENBQUN3QixLQUFLO1lBQ2QsQ0FBQzs7Ozs7a0JBakZrQjFCLEtBQUs7U0FvRmpCYSxLQUFLLENBQUNjLElBQUksRUFBRSxDQUFDO0lBQ3BCQyxVQUFVLENBQUNELElBQUksRUFBRSxDQUFDO0FBQ3BCLENBQUMifQ==