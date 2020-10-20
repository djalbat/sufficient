"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var controller;

if (typeof window === "undefined") {
  controller = {};
} else {
  var _window = window;
  controller = _window.controller;

  ///
  if (controller === undefined) {
    controller = {};
  }

  Object.assign(window, {
    controller: controller
  });
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsiY29udHJvbGxlciIsIndpbmRvdyIsInVuZGVmaW5lZCIsIk9iamVjdCIsImFzc2lnbiIsImFzc2lnbk1ldGhvZHMiLCJjcmVhdGVNZXRob2RzIiwic2NoZWR1bGVyIiwibW9kZWwiLCJ2aWV3IiwicmVtYWluaW5nQXJndW1lbnRzIiwibWV0aG9kcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLFVBQUo7O0FBRUEsSUFBSSxPQUFPQyxNQUFQLEtBQWtCLFdBQXRCLEVBQW1DO0FBQ2pDRCxFQUFBQSxVQUFVLEdBQUcsRUFBYjtBQUNELENBRkQsTUFFTztBQUFBLGdCQUNhQyxNQURiO0FBQ0ZELEVBQUFBLFVBREUsV0FDRkEsVUFERTs7QUFDdUI7QUFFNUIsTUFBSUEsVUFBVSxLQUFLRSxTQUFuQixFQUE4QjtBQUM1QkYsSUFBQUEsVUFBVSxHQUFHLEVBQWI7QUFDRDs7QUFFREcsRUFBQUEsTUFBTSxDQUFDQyxNQUFQLENBQWNILE1BQWQsRUFBc0I7QUFDcEJELElBQUFBLFVBQVUsRUFBVkE7QUFEb0IsR0FBdEI7QUFHRDs7QUFFRCxTQUFTSyxhQUFULENBQXVCQyxhQUF2QixFQUFzQ0MsU0FBdEMsRUFBaURDLEtBQWpELEVBQXdEQyxJQUF4RCxFQUFxRjtBQUFBLG9DQUFwQkMsa0JBQW9CO0FBQXBCQSxJQUFBQSxrQkFBb0I7QUFBQTs7QUFDbkYsTUFBTUMsT0FBTyxHQUFHTCxhQUFhLE1BQWIsVUFBY0MsU0FBZCxFQUF5QkMsS0FBekIsRUFBZ0NDLElBQWhDLFNBQXlDQyxrQkFBekMsRUFBaEI7QUFFQVAsRUFBQUEsTUFBTSxDQUFDQyxNQUFQLENBQWNKLFVBQWQsRUFBMEJXLE9BQTFCO0FBQ0Q7O0FBRURSLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjSixVQUFkLEVBQTBCO0FBQ3hCSyxFQUFBQSxhQUFhLEVBQWJBO0FBRHdCLENBQTFCO2VBSWVMLFUiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxubGV0IGNvbnRyb2xsZXI7XG5cbmlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gIGNvbnRyb2xsZXIgPSB7fVxufSBlbHNlIHtcbiAgKHsgY29udHJvbGxlciB9ID0gd2luZG93KTsgIC8vL1xuXG4gIGlmIChjb250cm9sbGVyID09PSB1bmRlZmluZWQpIHtcbiAgICBjb250cm9sbGVyID0ge307XG4gIH1cblxuICBPYmplY3QuYXNzaWduKHdpbmRvdywge1xuICAgIGNvbnRyb2xsZXJcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFzc2lnbk1ldGhvZHMoY3JlYXRlTWV0aG9kcywgc2NoZWR1bGVyLCBtb2RlbCwgdmlldywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gIGNvbnN0IG1ldGhvZHMgPSBjcmVhdGVNZXRob2RzKHNjaGVkdWxlciwgbW9kZWwsIHZpZXcsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgT2JqZWN0LmFzc2lnbihjb250cm9sbGVyLCBtZXRob2RzKTtcbn1cblxuT2JqZWN0LmFzc2lnbihjb250cm9sbGVyLCB7XG4gIGFzc2lnbk1ldGhvZHNcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb250cm9sbGVyO1xuIl19