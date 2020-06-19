"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var controller = {};

function assignMethods(createMethods, scheduler, model, view) {
  for (var _len = arguments.length, remainingArguments = new Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
    remainingArguments[_key - 4] = arguments[_key];
  }

  var methods = createMethods.apply(void 0, [scheduler, model, view].concat(remainingArguments));
  Object.assign(controller, methods);
}

Object.assign(controller, {
  assignMethods: assignMethods
});
var _default = controller;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsiY29udHJvbGxlciIsImFzc2lnbk1ldGhvZHMiLCJjcmVhdGVNZXRob2RzIiwic2NoZWR1bGVyIiwibW9kZWwiLCJ2aWV3IiwicmVtYWluaW5nQXJndW1lbnRzIiwibWV0aG9kcyIsIk9iamVjdCIsImFzc2lnbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFVBQVUsR0FBRyxFQUFuQjs7QUFFQSxTQUFTQyxhQUFULENBQXVCQyxhQUF2QixFQUFzQ0MsU0FBdEMsRUFBaURDLEtBQWpELEVBQXdEQyxJQUF4RCxFQUFxRjtBQUFBLG9DQUFwQkMsa0JBQW9CO0FBQXBCQSxJQUFBQSxrQkFBb0I7QUFBQTs7QUFDbkYsTUFBTUMsT0FBTyxHQUFHTCxhQUFhLE1BQWIsVUFBY0MsU0FBZCxFQUF5QkMsS0FBekIsRUFBZ0NDLElBQWhDLFNBQXlDQyxrQkFBekMsRUFBaEI7QUFFQUUsRUFBQUEsTUFBTSxDQUFDQyxNQUFQLENBQWNULFVBQWQsRUFBMEJPLE9BQTFCO0FBQ0Q7O0FBRURDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjVCxVQUFkLEVBQTBCO0FBQ3hCQyxFQUFBQSxhQUFhLEVBQWJBO0FBRHdCLENBQTFCO2VBSWVELFUiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgY29udHJvbGxlciA9IHt9O1xuXG5mdW5jdGlvbiBhc3NpZ25NZXRob2RzKGNyZWF0ZU1ldGhvZHMsIHNjaGVkdWxlciwgbW9kZWwsIHZpZXcsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICBjb25zdCBtZXRob2RzID0gY3JlYXRlTWV0aG9kcyhzY2hlZHVsZXIsIG1vZGVsLCB2aWV3LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gIE9iamVjdC5hc3NpZ24oY29udHJvbGxlciwgbWV0aG9kcyk7XG59XG5cbk9iamVjdC5hc3NpZ24oY29udHJvbGxlciwge1xuICBhc3NpZ25NZXRob2RzXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29udHJvbGxlcjtcbiJdfQ==