'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Controller = function () {
  function Controller() {
    _classCallCheck(this, Controller);
  }

  _createClass(Controller, [{
    key: 'assignMethods',
    value: function assignMethods(createMethods, scheduler, model, view) {
      for (var _len = arguments.length, remainingArguments = Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
        remainingArguments[_key - 4] = arguments[_key];
      }

      var methods = createMethods.apply(undefined, [scheduler, model, view].concat(remainingArguments));

      Object.assign(this, methods);
    }
  }]);

  return Controller;
}();

var controller = new Controller();

module.exports = controller;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJjcmVhdGVNZXRob2RzIiwic2NoZWR1bGVyIiwibW9kZWwiLCJ2aWV3IiwicmVtYWluaW5nQXJndW1lbnRzIiwibWV0aG9kcyIsIk9iamVjdCIsImFzc2lnbiIsImNvbnRyb2xsZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBR01BLFU7Ozs7Ozs7a0NBQ1VDLGEsRUFBZUMsUyxFQUFXQyxLLEVBQU9DLEksRUFBNkI7QUFBQSx3Q0FBcEJDLGtCQUFvQjtBQUFwQkEsMEJBQW9CO0FBQUE7O0FBQzFFLFVBQU1DLFVBQVVMLGdDQUFjQyxTQUFkLEVBQXlCQyxLQUF6QixFQUFnQ0MsSUFBaEMsU0FBeUNDLGtCQUF6QyxFQUFoQjs7QUFFQUUsYUFBT0MsTUFBUCxDQUFjLElBQWQsRUFBb0JGLE9BQXBCO0FBQ0Q7Ozs7OztBQUdILElBQU1HLGFBQWEsSUFBSVQsVUFBSixFQUFuQjs7QUFFQVUsT0FBT0MsT0FBUCxHQUFpQkYsVUFBakIiLCJmaWxlIjoiY29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuXG5jbGFzcyBDb250cm9sbGVyIHtcbiAgYXNzaWduTWV0aG9kcyhjcmVhdGVNZXRob2RzLCBzY2hlZHVsZXIsIG1vZGVsLCB2aWV3LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBtZXRob2RzID0gY3JlYXRlTWV0aG9kcyhzY2hlZHVsZXIsIG1vZGVsLCB2aWV3LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBtZXRob2RzKTtcbiAgfVxufVxuXG5jb25zdCBjb250cm9sbGVyID0gbmV3IENvbnRyb2xsZXIoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb250cm9sbGVyO1xuIl19