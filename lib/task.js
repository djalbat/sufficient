"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){
            arr2[i] = arr[i];
        }
        return arr2;
    }
}
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
function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
var _method;
var Task = /*#__PURE__*/ function() {
    function Task(method) {
        for(var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            remainingArguments[_key - 1] = arguments[_key];
        }
        _classCallCheck(this, Task);
        var callback = remainingArguments.pop(); ///
        this.method = method;
        this.callback = callback;
        this.remainingArguments = remainingArguments;
    }
    _createClass(Task, [
        {
            key: "getMethod",
            value: function getMethod() {
                return this.method;
            }
        },
        {
            key: "getCallback",
            value: function getCallback() {
                return this.callback;
            }
        },
        {
            key: "getRemainingArguments",
            value: function getRemainingArguments() {
                return this.remainingArguments;
            }
        },
        {
            key: "execute",
            value: function execute(callback) {
                (_method = this.method).call.apply(_method, [
                    null
                ].concat(_toConsumableArray(this.remainingArguments), [
                    callback
                ]));
            }
        }
    ]);
    return Task;
}();
exports.default = Task;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90YXNrLmpzIl0sIm5hbWVzIjpbIlRhc2siLCJjb25zdHJ1Y3RvciIsIm1ldGhvZCIsInJlbWFpbmluZ0FyZ3VtZW50cyIsImNhbGxiYWNrIiwicG9wIiwiZ2V0TWV0aG9kIiwiZ2V0Q2FsbGJhY2siLCJnZXRSZW1haW5pbmdBcmd1bWVudHMiLCJleGVjdXRlIiwiY2FsbCJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUF3QlIsT0FBVztJQXRCTSxJQUFJLGlCQUFWLFFBQVE7YUFBRixJQUFJLENBQ1gsTUFBTTtRQUFFLEdBQUcsQ0FBSCxHQUFxQixDQUFyQixJQUFxQixHQUFyQixTQUFxQixDQUFyQixNQUFxQixFQUFsQixrQkFBa0IsR0FBckIsR0FBcUIsT0FBckIsSUFBcUIsR0FBckIsQ0FBcUIsR0FBckIsSUFBcUIsR0FBckIsQ0FBcUIsR0FBckIsQ0FBcUIsR0FBckIsSUFBcUIsR0FBckIsQ0FBcUIsRUFBckIsSUFBcUIsR0FBckIsSUFBcUIsRUFBckIsSUFBcUIsR0FBckIsQ0FBQztZQUFFLGtCQUFrQixDQUFyQixJQUFxQixHQUFyQixDQUFxQixJQUFyQixTQUFxQixDQUFyQixJQUFxQjtRQUFELENBQUM7OEJBRHRCLElBQUk7UUFFckIsR0FBSyxDQUFDLFFBQVEsR0FBRyxrQkFBa0IsQ0FBQyxHQUFHLEdBQUksQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO1FBRTlDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTTtRQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVE7UUFDeEIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGtCQUFrQjs7aUJBTjNCLElBQUk7O1lBU3ZCLEdBQVMsR0FBVCxTQUFTO21CQUFULFFBQVEsQ0FBUixTQUFTLEdBQUcsQ0FBQztnQkFDWCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU07WUFDcEIsQ0FBQzs7O1lBRUQsR0FBVyxHQUFYLFdBQVc7bUJBQVgsUUFBUSxDQUFSLFdBQVcsR0FBRyxDQUFDO2dCQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUTtZQUN0QixDQUFDOzs7WUFFRCxHQUFxQixHQUFyQixxQkFBcUI7bUJBQXJCLFFBQVEsQ0FBUixxQkFBcUIsR0FBRyxDQUFDO2dCQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQjtZQUNoQyxDQUFDOzs7WUFFRCxHQUFPLEdBQVAsT0FBTzttQkFBUCxRQUFRLENBQVIsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO2lCQUNqQixPQUFXLEdBQVgsSUFBSSxDQUFDLE1BQU0sRUFBQyxJQUFJLENBQWhCLEtBQTRELENBQTVELE9BQVcsRUFBWCxDQUFDO29CQUFnQixJQUFJO2dCQUFzQyxDQUFDLENBQTVELE1BQTRELG9CQUFsQyxJQUFJLENBQUMsa0JBQWtCLEdBQWpELENBQUM7b0JBQWtELFFBQVE7Z0JBQUEsQ0FBQztZQUM5RCxDQUFDOzs7V0F2QmtCLElBQUk7O2tCQUFKLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sgIHtcclxuICBjb25zdHJ1Y3RvcihtZXRob2QsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xyXG4gICAgY29uc3QgY2FsbGJhY2sgPSByZW1haW5pbmdBcmd1bWVudHMucG9wKCk7IC8vL1xyXG5cclxuICAgIHRoaXMubWV0aG9kID0gbWV0aG9kO1xyXG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgdGhpcy5yZW1haW5pbmdBcmd1bWVudHMgPSByZW1haW5pbmdBcmd1bWVudHM7XHJcbiAgfVxyXG5cclxuICBnZXRNZXRob2QoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5tZXRob2Q7XHJcbiAgfVxyXG5cclxuICBnZXRDYWxsYmFjaygpIHtcclxuICAgIHJldHVybiB0aGlzLmNhbGxiYWNrO1xyXG4gIH1cclxuXHJcbiAgZ2V0UmVtYWluaW5nQXJndW1lbnRzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVtYWluaW5nQXJndW1lbnRzO1xyXG4gIH1cclxuXHJcbiAgZXhlY3V0ZShjYWxsYmFjaykge1xyXG4gICAgdGhpcy5tZXRob2QuY2FsbChudWxsLCAuLi50aGlzLnJlbWFpbmluZ0FyZ3VtZW50cywgY2FsbGJhY2spO1xyXG4gIH1cclxufVxyXG4iXX0=