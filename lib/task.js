"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
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
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90YXNrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayAge1xyXG4gIGNvbnN0cnVjdG9yKG1ldGhvZCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XHJcbiAgICBjb25zdCBjYWxsYmFjayA9IHJlbWFpbmluZ0FyZ3VtZW50cy5wb3AoKTsgLy8vXHJcblxyXG4gICAgdGhpcy5tZXRob2QgPSBtZXRob2Q7XHJcbiAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICB0aGlzLnJlbWFpbmluZ0FyZ3VtZW50cyA9IHJlbWFpbmluZ0FyZ3VtZW50cztcclxuICB9XHJcblxyXG4gIGdldE1ldGhvZCgpIHtcclxuICAgIHJldHVybiB0aGlzLm1ldGhvZDtcclxuICB9XHJcblxyXG4gIGdldENhbGxiYWNrKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY2FsbGJhY2s7XHJcbiAgfVxyXG5cclxuICBnZXRSZW1haW5pbmdBcmd1bWVudHMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZW1haW5pbmdBcmd1bWVudHM7XHJcbiAgfVxyXG5cclxuICBleGVjdXRlKGNhbGxiYWNrKSB7XHJcbiAgICB0aGlzLm1ldGhvZC5jYWxsKG51bGwsIC4uLnRoaXMucmVtYWluaW5nQXJndW1lbnRzLCBjYWxsYmFjayk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJUYXNrIiwibWV0aG9kIiwicmVtYWluaW5nQXJndW1lbnRzIiwiY2FsbGJhY2siLCJwb3AiLCJnZXRNZXRob2QiLCJnZXRDYWxsYmFjayIsImdldFJlbWFpbmluZ0FyZ3VtZW50cyIsImV4ZWN1dGUiLCJjYWxsIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRVNBLElBQUksaUJBQVYsUUFBUTthQUFGQSxJQUFJLENBQ1hDLE1BQU07UUFBRSxHQUFHQyxDQUFILEdBQXFCLENBQXJCLElBQXFCLEdBQXJCLFNBQXFCLENBQXJCLE1BQXFCLEVBQWxCQSxrQkFBa0IsR0FBckIsR0FBcUIsT0FBckIsSUFBcUIsR0FBckIsQ0FBcUIsR0FBckIsSUFBcUIsR0FBckIsQ0FBcUIsT0FBckIsSUFBcUIsR0FBckIsQ0FBcUIsRUFBckIsSUFBcUIsR0FBckIsSUFBcUIsRUFBckIsSUFBcUIsR0FBckIsQ0FBQztZQUFFQSxrQkFBa0IsQ0FBckIsSUFBcUIsR0FBckIsQ0FBcUIsSUFBckIsU0FBcUIsQ0FBckIsSUFBcUI7UUFBRCxDQUFDOzhCQUR0QkYsSUFBSTtRQUVyQixHQUFLLENBQUNHLFFBQVEsR0FBR0Qsa0JBQWtCLENBQUNFLEdBQUcsR0FBSSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7UUFFOUMsSUFBSSxDQUFDSCxNQUFNLEdBQUdBLE1BQU07UUFDcEIsSUFBSSxDQUFDRSxRQUFRLEdBQUdBLFFBQVE7UUFDeEIsSUFBSSxDQUFDRCxrQkFBa0IsR0FBR0Esa0JBQWtCOztpQkFOM0JGLElBQUk7O1lBU3ZCSyxHQUFTLEVBQVRBLENBQVM7bUJBQVRBLFFBQVEsQ0FBUkEsU0FBUyxHQUFHLENBQUM7Z0JBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQ0osTUFBTTtZQUNwQixDQUFDOzs7WUFFREssR0FBVyxFQUFYQSxDQUFXO21CQUFYQSxRQUFRLENBQVJBLFdBQVcsR0FBRyxDQUFDO2dCQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUNILFFBQVE7WUFDdEIsQ0FBQzs7O1lBRURJLEdBQXFCLEVBQXJCQSxDQUFxQjttQkFBckJBLFFBQVEsQ0FBUkEscUJBQXFCLEdBQUcsQ0FBQztnQkFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQ0wsa0JBQWtCO1lBQ2hDLENBQUM7OztZQUVETSxHQUFPLEVBQVBBLENBQU87bUJBQVBBLFFBQVFMLENBQVJLLE9BQU8sQ0FBQ0wsUUFBUSxFQUFFLENBQUM7b0JBQ2pCLE9BQVc7aUJBQVgsT0FBVyxHQUFYLElBQUksQ0FBQ0YsTUFBTSxFQUFDUSxJQUFJLENBQWhCLEtBQTRELENBQTVELE9BQVcsRUFBWCxDQUFDO29CQUFnQixJQUFJO2dCQUFzQyxDQUFDLENBQTVELE1BQTRELG9CQUFsQyxJQUFJLENBQUNQLGtCQUFrQixHQUFqRCxDQUFDO29CQUFrREMsUUFBUTtnQkFBQSxDQUFDO1lBQzlELENBQUM7OztXQXZCa0JILElBQUk7O2tCQUFKQSxJQUFJIn0=