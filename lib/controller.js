"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
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
if (!globalThis.controller) {
    globalThis.controller = {};
}
var controller = globalThis.controller;
function assignMethods(createMethods, scheduler, model, view) {
    for(var _len = arguments.length, remainingArguments = new Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++){
        remainingArguments[_key - 4] = arguments[_key];
    }
    var methods = createMethods.apply(void 0, [
        scheduler,
        model,
        view
    ].concat(_toConsumableArray(remainingArguments)));
    Object.assign(controller, methods);
}
Object.assign(controller, {
    assignMethods: assignMethods
});
var _default = controller;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb250cm9sbGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pZiAoIWdsb2JhbFRoaXMuY29udHJvbGxlcikge1xuICBnbG9iYWxUaGlzLmNvbnRyb2xsZXIgPSB7fTtcbn1cblxuY29uc3QgeyBjb250cm9sbGVyIH0gPSBnbG9iYWxUaGlzO1xuXG5mdW5jdGlvbiBhc3NpZ25NZXRob2RzKGNyZWF0ZU1ldGhvZHMsIHNjaGVkdWxlciwgbW9kZWwsIHZpZXcsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICBjb25zdCBtZXRob2RzID0gY3JlYXRlTWV0aG9kcyhzY2hlZHVsZXIsIG1vZGVsLCB2aWV3LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gIE9iamVjdC5hc3NpZ24oY29udHJvbGxlciwgbWV0aG9kcyk7XG59XG5cbk9iamVjdC5hc3NpZ24oY29udHJvbGxlciwge1xuICBhc3NpZ25NZXRob2RzXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29udHJvbGxlcjtcbiJdLCJuYW1lcyI6WyJnbG9iYWxUaGlzIiwiY29udHJvbGxlciIsImFzc2lnbk1ldGhvZHMiLCJjcmVhdGVNZXRob2RzIiwic2NoZWR1bGVyIiwibW9kZWwiLCJ2aWV3IiwicmVtYWluaW5nQXJndW1lbnRzIiwibWV0aG9kcyIsIk9iamVjdCIsImFzc2lnbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBa0JBOzs7ZUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWhCQSxJQUFJLENBQUNBLFdBQVdDLFVBQVUsRUFBRTtJQUMxQkQsV0FBV0MsVUFBVSxHQUFHLENBQUM7QUFDM0IsQ0FBQztBQUVELElBQU0sQUFBRUEsYUFBZUQsV0FBZkM7QUFFUixTQUFTQyxjQUFjQyxhQUFhLEVBQUVDLFNBQVMsRUFBRUMsS0FBSyxFQUFFQyxJQUFJLEVBQXlCO0lBQXZCLElBQUEsSUFBQSxPQUFBLFVBQUEsUUFBQSxBQUFHQyxxQkFBSCxVQUFBLE9BQUEsSUFBQSxPQUFBLEtBQXFCLEdBQXJCLE9BQUEsR0FBQSxPQUFBLE1BQUEsT0FBQTtRQUFHQSxtQkFBSCxPQUFBLEtBQUEsU0FBQSxDQUFBLEtBQXFCO0lBQUQ7SUFDaEYsSUFBTUMsVUFBVUwsY0FBQUEsTUFBQUEsS0FBQUEsR0FBQUE7UUFBY0M7UUFBV0M7UUFBT0M7S0FBNEIsQ0FBNURILE9BQXNDLG1CQUFHSTtJQUV6REUsT0FBT0MsTUFBTSxDQUFDVCxZQUFZTztBQUM1QjtBQUVBQyxPQUFPQyxNQUFNLENBQUNULFlBQVk7SUFDeEJDLGVBQUFBO0FBQ0Y7SUFFQSxXQUFlRCJ9