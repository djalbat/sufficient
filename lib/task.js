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
                var _method;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90YXNrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayAge1xyXG4gIGNvbnN0cnVjdG9yKG1ldGhvZCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XHJcbiAgICBjb25zdCBjYWxsYmFjayA9IHJlbWFpbmluZ0FyZ3VtZW50cy5wb3AoKTsgLy8vXHJcblxyXG4gICAgdGhpcy5tZXRob2QgPSBtZXRob2Q7XHJcbiAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICB0aGlzLnJlbWFpbmluZ0FyZ3VtZW50cyA9IHJlbWFpbmluZ0FyZ3VtZW50cztcclxuICB9XHJcblxyXG4gIGdldE1ldGhvZCgpIHtcclxuICAgIHJldHVybiB0aGlzLm1ldGhvZDtcclxuICB9XHJcblxyXG4gIGdldENhbGxiYWNrKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY2FsbGJhY2s7XHJcbiAgfVxyXG5cclxuICBnZXRSZW1haW5pbmdBcmd1bWVudHMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZW1haW5pbmdBcmd1bWVudHM7XHJcbiAgfVxyXG5cclxuICBleGVjdXRlKGNhbGxiYWNrKSB7XHJcbiAgICB0aGlzLm1ldGhvZC5jYWxsKG51bGwsIC4uLnRoaXMucmVtYWluaW5nQXJndW1lbnRzLCBjYWxsYmFjayk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJUYXNrIiwibWV0aG9kIiwicmVtYWluaW5nQXJndW1lbnRzIiwiY2FsbGJhY2siLCJwb3AiLCJnZXRNZXRob2QiLCJnZXRDYWxsYmFjayIsImdldFJlbWFpbmluZ0FyZ3VtZW50cyIsImV4ZWN1dGUiLCJjYWxsIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVTQSxJQUFJLGlCQUFWLFFBQVE7YUFBRkEsSUFBSSxDQUNYQyxNQUFNO1FBQUUsR0FBR0MsQ0FBSCxHQUFxQixDQUFyQixJQUFxQixHQUFyQixTQUFxQixDQUFyQixNQUFxQixFQUFsQkEsa0JBQWtCLEdBQXJCLEdBQXFCLE9BQXJCLElBQXFCLEdBQXJCLENBQXFCLEdBQXJCLElBQXFCLEdBQXJCLENBQXFCLEdBQXJCLENBQXFCLEdBQXJCLElBQXFCLEdBQXJCLENBQXFCLEVBQXJCLElBQXFCLEdBQXJCLElBQXFCLEVBQXJCLElBQXFCLEdBQXJCLENBQUM7WUFBRUEsa0JBQWtCLENBQXJCLElBQXFCLEdBQXJCLENBQXFCLElBQXJCLFNBQXFCLENBQXJCLElBQXFCO1FBQUQsQ0FBQzs4QkFEdEJGLElBQUk7UUFFckIsR0FBSyxDQUFDRyxRQUFRLEdBQUdELGtCQUFrQixDQUFDRSxHQUFHLEdBQUksQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO1FBRTlDLElBQUksQ0FBQ0gsTUFBTSxHQUFHQSxNQUFNO1FBQ3BCLElBQUksQ0FBQ0UsUUFBUSxHQUFHQSxRQUFRO1FBQ3hCLElBQUksQ0FBQ0Qsa0JBQWtCLEdBQUdBLGtCQUFrQjs7aUJBTjNCRixJQUFJOztZQVN2QkssR0FBUyxFQUFUQSxDQUFTO21CQUFUQSxRQUFRLENBQVJBLFNBQVMsR0FBRyxDQUFDO2dCQUNYLE1BQU0sQ0FBQyxJQUFJLENBQUNKLE1BQU07WUFDcEIsQ0FBQzs7O1lBRURLLEdBQVcsRUFBWEEsQ0FBVzttQkFBWEEsUUFBUSxDQUFSQSxXQUFXLEdBQUcsQ0FBQztnQkFDYixNQUFNLENBQUMsSUFBSSxDQUFDSCxRQUFRO1lBQ3RCLENBQUM7OztZQUVESSxHQUFxQixFQUFyQkEsQ0FBcUI7bUJBQXJCQSxRQUFRLENBQVJBLHFCQUFxQixHQUFHLENBQUM7Z0JBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUNMLGtCQUFrQjtZQUNoQyxDQUFDOzs7WUFFRE0sR0FBTyxFQUFQQSxDQUFPO21CQUFQQSxRQUFRTCxDQUFSSyxPQUFPLENBQUNMLFFBQVEsRUFBRSxDQUFDO29CQUNqQixPQUFXO2lCQUFYLE9BQVcsR0FBWCxJQUFJLENBQUNGLE1BQU0sRUFBQ1EsSUFBSSxDQUFoQixLQUE0RCxDQUE1RCxPQUFXLEVBQVgsQ0FBQztvQkFBZ0IsSUFBSTtnQkFBc0MsQ0FBQyxDQUE1RCxNQUE0RCxvQkFBbEMsSUFBSSxDQUFDUCxrQkFBa0IsR0FBakQsQ0FBQztvQkFBa0RDLFFBQVE7Z0JBQUEsQ0FBQztZQUM5RCxDQUFDOzs7V0F2QmtCSCxJQUFJOztrQkFBSkEsSUFBSSJ9