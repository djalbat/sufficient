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
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
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
    ].concat(_to_consumable_array(remainingArguments)));
    Object.assign(controller, methods);
}
Object.assign(controller, {
    assignMethods: assignMethods
});
var _default = controller;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb250cm9sbGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pZiAoIWdsb2JhbFRoaXMuY29udHJvbGxlcikge1xuICBnbG9iYWxUaGlzLmNvbnRyb2xsZXIgPSB7fTtcbn1cblxuY29uc3QgeyBjb250cm9sbGVyIH0gPSBnbG9iYWxUaGlzO1xuXG5mdW5jdGlvbiBhc3NpZ25NZXRob2RzKGNyZWF0ZU1ldGhvZHMsIHNjaGVkdWxlciwgbW9kZWwsIHZpZXcsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICBjb25zdCBtZXRob2RzID0gY3JlYXRlTWV0aG9kcyhzY2hlZHVsZXIsIG1vZGVsLCB2aWV3LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gIE9iamVjdC5hc3NpZ24oY29udHJvbGxlciwgbWV0aG9kcyk7XG59XG5cbk9iamVjdC5hc3NpZ24oY29udHJvbGxlciwge1xuICBhc3NpZ25NZXRob2RzXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29udHJvbGxlcjtcbiJdLCJuYW1lcyI6WyJnbG9iYWxUaGlzIiwiY29udHJvbGxlciIsImFzc2lnbk1ldGhvZHMiLCJjcmVhdGVNZXRob2RzIiwic2NoZWR1bGVyIiwibW9kZWwiLCJ2aWV3IiwicmVtYWluaW5nQXJndW1lbnRzIiwibWV0aG9kcyIsIk9iamVjdCIsImFzc2lnbiJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBa0JBOzs7ZUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWhCQSxJQUFJLENBQUNBLFdBQVdDLFVBQVUsRUFBRTtJQUMxQkQsV0FBV0MsVUFBVSxHQUFHLENBQUM7QUFDM0I7QUFFQSxJQUFNLEFBQUVBLGFBQWVELFdBQWZDO0FBRVIsU0FBU0MsY0FBY0MsYUFBYSxFQUFFQyxTQUFTLEVBQUVDLEtBQUssRUFBRUMsSUFBSTtJQUFFLElBQUEsSUFBQSxPQUFBLFVBQUEsUUFBQSxBQUFHQyxxQkFBSCxVQUFBLE9BQUEsSUFBQSxPQUFBLFFBQUEsT0FBQSxHQUFBLE9BQUEsTUFBQTtRQUFHQSxtQkFBSCxPQUFBLEtBQUEsU0FBQSxDQUFBLEtBQXFCOztJQUNqRixJQUFNQyxVQUFVTCxjQUFBQSxNQUFBQSxLQUFBQSxHQUFBQTtRQUFjQztRQUFXQztRQUFPQztLQUE0QixDQUE1REgsT0FBc0MscUJBQUdJO0lBRXpERSxPQUFPQyxNQUFNLENBQUNULFlBQVlPO0FBQzVCO0FBRUFDLE9BQU9DLE1BQU0sQ0FBQ1QsWUFBWTtJQUN4QkMsZUFBQUE7QUFDRjtJQUVBLFdBQWVEIn0=