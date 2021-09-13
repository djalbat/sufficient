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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9xdWV1ZS5qcyJdLCJuYW1lcyI6WyJhcnJheVV0aWxpdGllcyIsImZpcnN0IiwiUXVldWUiLCJjb25zdHJ1Y3RvciIsInRhc2tzIiwiYWRkVGFzayIsInRhc2siLCJlbXB0eSIsImlzRW1wdHkiLCJwdXNoIiwiZXhlY3V0ZUZpcnN0VGFzayIsImZpcnN0VGFzayIsInNldFRpbWVvdXQiLCJleGVjdXRlVGFzayIsIm5leHQiLCJiaW5kIiwiZXhlY3V0ZSIsImNhbGxiYWNrIiwiZ2V0Q2FsbGJhY2siLCJhcHBseSIsImFyZ3VtZW50cyIsInNoaWZ0IiwidGFza3NMZW5ndGgiLCJsZW5ndGgiLCJmcm9tTm90aGluZyIsInF1ZXVlIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVtQixHQUFXLENBQVgsVUFBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUMsR0FBSyxDQUFHLEtBQUssR0FGa0IsVUFBVyxnQkFFbEMsS0FBSztJQUVRLEtBQUssaUJBQVgsUUFBUTthQUFGLEtBQUssQ0FDWixLQUFLOzhCQURFLEtBQUs7UUFFdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLOztpQkFGRCxLQUFLOztZQUt4QixHQUFPLEdBQVAsT0FBTzttQkFBUCxRQUFRLENBQVIsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNiLEdBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU87Z0JBRTFCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUk7Z0JBRXBCLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQztvQkFDVixJQUFJLENBQUMsZ0JBQWdCO2dCQUN2QixDQUFDO1lBQ0gsQ0FBQzs7O1lBRUQsR0FBZ0IsR0FBaEIsZ0JBQWdCO21CQUFoQixRQUFRLENBQVIsZ0JBQWdCLEdBQUcsQ0FBQztnQkFDbEIsR0FBSyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUs7Z0JBRWxDLFVBQVUsRUFBQyxRQUFRLEdBQUYsQ0FBQztvQkFDaEIsR0FBSyxDQUFDLElBQUksR0FBRyxTQUFTLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO29CQUU1QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUk7Z0JBQ3ZCLENBQUMsY0FBRSxDQUFDO1lBQ04sQ0FBQzs7O1lBRUQsR0FBVyxHQUFYLFdBQVc7bUJBQVgsUUFBUSxDQUFSLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDakIsR0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO2dCQUVoQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRyxDQUFDO29CQUN2QixHQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXO29CQUVqQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTO29CQUU5QixJQUFJO2dCQUNOLENBQUM7WUFDSCxDQUFDOzs7WUFFRCxHQUFJLEdBQUosSUFBSTttQkFBSixRQUFRLENBQVIsSUFBSSxHQUFHLENBQUM7Z0JBQ04sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLO2dCQUVoQixHQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPO2dCQUUxQixFQUFFLEdBQUcsS0FBSyxFQUFFLENBQUM7b0JBQ1gsSUFBSSxDQUFDLGdCQUFnQjtnQkFDdkIsQ0FBQztZQUNILENBQUM7OztZQUVELEdBQU8sR0FBUCxPQUFPO21CQUFQLFFBQVEsQ0FBUixPQUFPLEdBQUcsQ0FBQztnQkFDVCxHQUFLLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUMvQixLQUFLLEdBQUksV0FBVyxLQUFLLENBQUM7Z0JBRWhDLE1BQU0sQ0FBQyxLQUFLO1lBQ2QsQ0FBQzs7OztZQUVNLEdBQVcsR0FBWCxXQUFXO21CQUFsQixRQUFRLENBQUQsV0FBVyxHQUFHLENBQUM7Z0JBQ3BCLEdBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQ1YsS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSztnQkFFN0IsTUFBTSxDQUFDLEtBQUs7WUFDZCxDQUFDOzs7V0EzRGtCLEtBQUs7O2tCQUFMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xyXG5cclxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRdWV1ZSB7XHJcbiAgY29uc3RydWN0b3IodGFza3MpIHtcclxuICAgIHRoaXMudGFza3MgPSB0YXNrcztcclxuICB9XHJcblxyXG4gIGFkZFRhc2sodGFzaykge1xyXG4gICAgY29uc3QgZW1wdHkgPSB0aGlzLmlzRW1wdHkoKTtcclxuXHJcbiAgICB0aGlzLnRhc2tzLnB1c2godGFzayk7XHJcblxyXG4gICAgaWYgKGVtcHR5KSB7XHJcbiAgICAgIHRoaXMuZXhlY3V0ZUZpcnN0VGFzaygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZXhlY3V0ZUZpcnN0VGFzaygpIHtcclxuICAgIGNvbnN0IGZpcnN0VGFzayA9IGZpcnN0KHRoaXMudGFza3MpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBjb25zdCB0YXNrID0gZmlyc3RUYXNrOyAgLy8vXHJcblxyXG4gICAgICB0aGlzLmV4ZWN1dGVUYXNrKHRhc2spO1xyXG4gICAgfSwgMCk7XHJcbiAgfVxyXG5cclxuICBleGVjdXRlVGFzayh0YXNrKSB7XHJcbiAgICBjb25zdCBuZXh0ID0gdGhpcy5uZXh0LmJpbmQodGhpcyk7XHJcblxyXG4gICAgdGFzay5leGVjdXRlKGZ1bmN0aW9uKCkgeyAvLy9cclxuICAgICAgY29uc3QgY2FsbGJhY2sgPSB0YXNrLmdldENhbGxiYWNrKCk7XHJcbiAgICAgIFxyXG4gICAgICBjYWxsYmFjay5hcHBseSh0YXNrLCBhcmd1bWVudHMpO1xyXG4gICAgICBcclxuICAgICAgbmV4dCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZXh0KCkge1xyXG4gICAgdGhpcy50YXNrcy5zaGlmdCgpO1xyXG5cclxuICAgIGNvbnN0IGVtcHR5ID0gdGhpcy5pc0VtcHR5KCk7XHJcblxyXG4gICAgaWYgKCFlbXB0eSkge1xyXG4gICAgICB0aGlzLmV4ZWN1dGVGaXJzdFRhc2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlzRW1wdHkoKSB7XHJcbiAgICBjb25zdCB0YXNrc0xlbmd0aCA9IHRoaXMudGFza3MubGVuZ3RoLFxyXG4gICAgICAgICAgZW1wdHkgPSAodGFza3NMZW5ndGggPT09IDApO1xyXG5cclxuICAgIHJldHVybiBlbXB0eTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcclxuICAgIGNvbnN0IHRhc2tzID0gW10sXHJcbiAgICAgICAgICBxdWV1ZSA9IG5ldyBRdWV1ZSh0YXNrcyk7XHJcblxyXG4gICAgcmV0dXJuIHF1ZXVlO1xyXG4gIH1cclxufVxyXG4iXX0=