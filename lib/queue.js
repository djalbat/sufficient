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
var first = _necessary.arrayUtilities.first;
var Queue = /*#__PURE__*/ function() {
    function Queue(tasks1) {
        _class_call_check(this, Queue);
        this.tasks = tasks1;
    }
    _create_class(Queue, [
        {
            key: "getTasks",
            value: function getTasks() {
                return tasks;
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
                defer(function() {
                    var task = firstTask; ///
                    _this.executeTask(task);
                });
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
                var tasks1 = [], queue = new Queue(tasks1);
                return queue;
            }
        }
    ]);
    return Queue;
}();
function defer(func) {
    setTimeout(func, 0);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9xdWV1ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xyXG5cclxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRdWV1ZSB7XHJcbiAgY29uc3RydWN0b3IodGFza3MpIHtcclxuICAgIHRoaXMudGFza3MgPSB0YXNrcztcclxuICB9XHJcblxyXG4gIGdldFRhc2tzKCkge1xyXG4gICAgcmV0dXJuIHRhc2tzO1xyXG4gIH1cclxuXHJcbiAgYWRkVGFzayh0YXNrKSB7XHJcbiAgICBjb25zdCBlbXB0eSA9IHRoaXMuaXNFbXB0eSgpO1xyXG5cclxuICAgIHRoaXMudGFza3MucHVzaCh0YXNrKTtcclxuXHJcbiAgICBpZiAoZW1wdHkpIHtcclxuICAgICAgdGhpcy5leGVjdXRlRmlyc3RUYXNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBleGVjdXRlRmlyc3RUYXNrKCkge1xyXG4gICAgY29uc3QgZmlyc3RUYXNrID0gZmlyc3QodGhpcy50YXNrcyk7XHJcblxyXG4gICAgZGVmZXIoKCkgPT4ge1xyXG4gICAgICBjb25zdCB0YXNrID0gZmlyc3RUYXNrOyAgLy8vXHJcblxyXG4gICAgICB0aGlzLmV4ZWN1dGVUYXNrKHRhc2spO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBleGVjdXRlVGFzayh0YXNrKSB7XHJcbiAgICBjb25zdCBuZXh0ID0gdGhpcy5uZXh0LmJpbmQodGhpcyk7XHJcblxyXG4gICAgdGFzay5leGVjdXRlKGZ1bmN0aW9uKCkgeyAvLy9cclxuICAgICAgY29uc3QgY2FsbGJhY2sgPSB0YXNrLmdldENhbGxiYWNrKCk7XHJcbiAgICAgIFxyXG4gICAgICBjYWxsYmFjay5hcHBseSh0YXNrLCBhcmd1bWVudHMpO1xyXG4gICAgICBcclxuICAgICAgbmV4dCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZXh0KCkge1xyXG4gICAgdGhpcy50YXNrcy5zaGlmdCgpO1xyXG5cclxuICAgIGNvbnN0IGVtcHR5ID0gdGhpcy5pc0VtcHR5KCk7XHJcblxyXG4gICAgaWYgKCFlbXB0eSkge1xyXG4gICAgICB0aGlzLmV4ZWN1dGVGaXJzdFRhc2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlzRW1wdHkoKSB7XHJcbiAgICBjb25zdCB0YXNrc0xlbmd0aCA9IHRoaXMudGFza3MubGVuZ3RoLFxyXG4gICAgICAgICAgZW1wdHkgPSAodGFza3NMZW5ndGggPT09IDApO1xyXG5cclxuICAgIHJldHVybiBlbXB0eTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcclxuICAgIGNvbnN0IHRhc2tzID0gW10sXHJcbiAgICAgICAgICBxdWV1ZSA9IG5ldyBRdWV1ZSh0YXNrcyk7XHJcblxyXG4gICAgcmV0dXJuIHF1ZXVlO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZGVmZXIoZnVuYykge1xyXG4gIHNldFRpbWVvdXQoZnVuYywgMCk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlF1ZXVlIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsInRhc2tzIiwiZ2V0VGFza3MiLCJhZGRUYXNrIiwidGFzayIsImVtcHR5IiwiaXNFbXB0eSIsInB1c2giLCJleGVjdXRlRmlyc3RUYXNrIiwiZmlyc3RUYXNrIiwiZGVmZXIiLCJleGVjdXRlVGFzayIsIm5leHQiLCJiaW5kIiwiZXhlY3V0ZSIsImNhbGxiYWNrIiwiZ2V0Q2FsbGJhY2siLCJhcHBseSIsImFyZ3VtZW50cyIsInNoaWZ0IiwidGFza3NMZW5ndGgiLCJsZW5ndGgiLCJmcm9tTm90aGluZyIsInF1ZXVlIiwiZnVuYyIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O3lCQUpVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvQixJQUFNLEFBQUVDLFFBQVVDLHlCQUFjLENBQXhCRDtBQUVPLElBQUEsQUFBTUQsc0JBQU47YUFBTUEsTUFDUEcsTUFBSztnQ0FERUg7UUFFakIsSUFBSSxDQUFDRyxLQUFLLEdBQUdBOztrQkFGSUg7O1lBS25CSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBT0Q7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRQyxJQUFJO2dCQUNWLElBQU1DLFFBQVEsSUFBSSxDQUFDQyxPQUFPO2dCQUUxQixJQUFJLENBQUNMLEtBQUssQ0FBQ00sSUFBSSxDQUFDSDtnQkFFaEIsSUFBSUMsT0FBTztvQkFDVCxJQUFJLENBQUNHLGdCQUFnQjtnQkFDdkI7WUFDRjs7O1lBRUFBLEtBQUFBO21CQUFBQSxTQUFBQTs7Z0JBQ0UsSUFBTUMsWUFBWVYsTUFBTSxJQUFJLENBQUNFLEtBQUs7Z0JBRWxDUyxNQUFNO29CQUNKLElBQU1OLE9BQU9LLFdBQVksR0FBRztvQkFFNUIsTUFBS0UsV0FBVyxDQUFDUDtnQkFDbkI7WUFDRjs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQSxZQUFZUCxJQUFJO2dCQUNkLElBQU1RLE9BQU8sSUFBSSxDQUFDQSxJQUFJLENBQUNDLElBQUksQ0FBQyxJQUFJO2dCQUVoQ1QsS0FBS1UsT0FBTyxDQUFDO29CQUNYLElBQU1DLFdBQVdYLEtBQUtZLFdBQVc7b0JBRWpDRCxTQUFTRSxLQUFLLENBQUNiLE1BQU1jO29CQUVyQk47Z0JBQ0Y7WUFDRjs7O1lBRUFBLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNYLEtBQUssQ0FBQ2tCLEtBQUs7Z0JBRWhCLElBQU1kLFFBQVEsSUFBSSxDQUFDQyxPQUFPO2dCQUUxQixJQUFJLENBQUNELE9BQU87b0JBQ1YsSUFBSSxDQUFDRyxnQkFBZ0I7Z0JBQ3ZCO1lBQ0Y7OztZQUVBRixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTWMsY0FBYyxJQUFJLENBQUNuQixLQUFLLENBQUNvQixNQUFNLEVBQy9CaEIsUUFBU2UsZ0JBQWdCO2dCQUUvQixPQUFPZjtZQUNUOzs7O1lBRU9pQixLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNckIsU0FBUSxFQUFFLEVBQ1ZzQixRQUFRLElBNURHekIsTUE0RE9HO2dCQUV4QixPQUFPc0I7WUFDVDs7O1dBL0RtQnpCOztBQWtFckIsU0FBU1ksTUFBTWMsSUFBSTtJQUNqQkMsV0FBV0QsTUFBTTtBQUNuQiJ9