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
function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
if (!globalThis.controller) {
    globalThis.controller = {
    };
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
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb250cm9sbGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pZiAoIWdsb2JhbFRoaXMuY29udHJvbGxlcikge1xuICBnbG9iYWxUaGlzLmNvbnRyb2xsZXIgPSB7fTtcbn1cblxuY29uc3QgeyBjb250cm9sbGVyIH0gPSBnbG9iYWxUaGlzO1xuXG5mdW5jdGlvbiBhc3NpZ25NZXRob2RzKGNyZWF0ZU1ldGhvZHMsIHNjaGVkdWxlciwgbW9kZWwsIHZpZXcsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICBjb25zdCBtZXRob2RzID0gY3JlYXRlTWV0aG9kcyhzY2hlZHVsZXIsIG1vZGVsLCB2aWV3LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gIE9iamVjdC5hc3NpZ24oY29udHJvbGxlciwgbWV0aG9kcyk7XG59XG5cbk9iamVjdC5hc3NpZ24oY29udHJvbGxlciwge1xuICBhc3NpZ25NZXRob2RzXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29udHJvbGxlcjtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVosRUFBRSxHQUFHLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMzQixVQUFVLENBQUMsVUFBVTs7QUFDdkIsQ0FBQztBQUVELEdBQUssQ0FBRyxVQUFVLEdBQUssVUFBVSxDQUF6QixVQUFVO1NBRVQsYUFBYSxDQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBeUIsQ0FBQztRQUF4QixHQUFxQixDQUFyQixJQUFxQixHQUFyQixTQUFxQixDQUFyQixNQUFxQixFQUFsQixrQkFBa0IsR0FBckIsR0FBcUIsT0FBckIsSUFBcUIsR0FBckIsQ0FBcUIsR0FBckIsSUFBcUIsR0FBckIsQ0FBcUIsR0FBckIsQ0FBcUIsR0FBckIsSUFBcUIsR0FBckIsQ0FBcUIsRUFBckIsSUFBcUIsR0FBckIsSUFBcUIsRUFBckIsSUFBcUIsR0FBckIsQ0FBQztRQUFFLGtCQUFrQixDQUFyQixJQUFxQixHQUFyQixDQUFxQixJQUFyQixTQUFxQixDQUFyQixJQUFxQjtJQUFELENBQUM7SUFDakYsR0FBSyxDQUFDLE9BQU8sR0FBRyxhQUFhLENBQWIsS0FBNEQsTUFBNUQsQ0FBYTtRQUFDLFNBQVM7UUFBRSxLQUFLO1FBQUUsSUFBSTtNQUFwQyxNQUE0RCxvQkFBbkIsa0JBQWtCO0lBRTNFLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLE9BQU87QUFDbkMsQ0FBQztBQUVELE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVTtJQUN0QixhQUFhLEVBQWIsYUFBYTs7ZUFHQSxVQUFVIn0=