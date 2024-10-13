"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Task;
    }
});
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var Task = /*#__PURE__*/ function() {
    function Task(method) {
        for(var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            remainingArguments[_key - 1] = arguments[_key];
        }
        _class_call_check(this, Task);
        var callback = remainingArguments.pop(); ///
        this.method = method;
        this.callback = callback;
        this.remainingArguments = remainingArguments;
    }
    _create_class(Task, [
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
                var _this_method;
                (_this_method = this.method).call.apply(_this_method, [
                    null
                ].concat(_to_consumable_array(this.remainingArguments), [
                    callback
                ]));
            }
        }
    ]);
    return Task;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90YXNrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayAge1xyXG4gIGNvbnN0cnVjdG9yKG1ldGhvZCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XHJcbiAgICBjb25zdCBjYWxsYmFjayA9IHJlbWFpbmluZ0FyZ3VtZW50cy5wb3AoKTsgLy8vXHJcblxyXG4gICAgdGhpcy5tZXRob2QgPSBtZXRob2Q7XHJcbiAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICB0aGlzLnJlbWFpbmluZ0FyZ3VtZW50cyA9IHJlbWFpbmluZ0FyZ3VtZW50cztcclxuICB9XHJcblxyXG4gIGdldE1ldGhvZCgpIHtcclxuICAgIHJldHVybiB0aGlzLm1ldGhvZDtcclxuICB9XHJcblxyXG4gIGdldENhbGxiYWNrKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY2FsbGJhY2s7XHJcbiAgfVxyXG5cclxuICBnZXRSZW1haW5pbmdBcmd1bWVudHMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZW1haW5pbmdBcmd1bWVudHM7XHJcbiAgfVxyXG5cclxuICBleGVjdXRlKGNhbGxiYWNrKSB7XHJcbiAgICB0aGlzLm1ldGhvZC5jYWxsKG51bGwsIC4uLnRoaXMucmVtYWluaW5nQXJndW1lbnRzLCBjYWxsYmFjayk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJUYXNrIiwibWV0aG9kIiwicmVtYWluaW5nQXJndW1lbnRzIiwiY2FsbGJhY2siLCJwb3AiLCJnZXRNZXRob2QiLCJnZXRDYWxsYmFjayIsImdldFJlbWFpbmluZ0FyZ3VtZW50cyIsImV4ZWN1dGUiLCJjYWxsIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUVxQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU4sSUFBQSxBQUFNQSxxQkFBTjthQUFNQSxLQUNQQyxNQUFNO1FBQUUsSUFBQSxJQUFBLE9BQUEsVUFBQSxRQUFBLEFBQUdDLHFCQUFILFVBQUEsT0FBQSxJQUFBLE9BQUEsUUFBQSxPQUFBLEdBQUEsT0FBQSxNQUFBO1lBQUdBLG1CQUFILE9BQUEsS0FBQSxTQUFBLENBQUEsS0FBcUI7O2dDQUR0QkY7UUFFakIsSUFBTUcsV0FBV0QsbUJBQW1CRSxHQUFHLElBQUksR0FBRztRQUU5QyxJQUFJLENBQUNILE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNFLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDRCxrQkFBa0IsR0FBR0E7O2tCQU5URjs7WUFTbkJLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osTUFBTTtZQUNwQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsUUFBUTtZQUN0Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsa0JBQWtCO1lBQ2hDOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFMLFFBQVE7b0JBQ2Q7Z0JBQUEsQ0FBQSxlQUFBLElBQUksQ0FBQ0YsTUFBTSxFQUFDUSxJQUFJLE9BQWhCLGNBQUE7b0JBQWlCO2lCQUEyQyxDQUE1RCxPQUF1QixxQkFBRyxJQUFJLENBQUNQLGtCQUFrQixHQUFqRDtvQkFBbURDO2lCQUFTO1lBQzlEOzs7V0F2Qm1CSCJ9