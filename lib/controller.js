'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Controller = /*#__PURE__*/function () {
  function Controller() {
    _classCallCheck(this, Controller);
  }

  _createClass(Controller, [{
    key: "assignMethods",
    value: function assignMethods(createMethods, scheduler, model, view) {
      for (var _len = arguments.length, remainingArguments = new Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
        remainingArguments[_key - 4] = arguments[_key];
      }

      var methods = createMethods.apply(void 0, [scheduler, model, view].concat(remainingArguments));
      Object.assign(this, methods);
    }
  }]);

  return Controller;
}();

var controller = new Controller();
module.exports = controller;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsiQ29udHJvbGxlciIsImNyZWF0ZU1ldGhvZHMiLCJzY2hlZHVsZXIiLCJtb2RlbCIsInZpZXciLCJyZW1haW5pbmdBcmd1bWVudHMiLCJtZXRob2RzIiwiT2JqZWN0IiwiYXNzaWduIiwiY29udHJvbGxlciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztJQUVNQSxVOzs7Ozs7O2tDQUNVQyxhLEVBQWVDLFMsRUFBV0MsSyxFQUFPQyxJLEVBQTZCO0FBQUEsd0NBQXBCQyxrQkFBb0I7QUFBcEJBLFFBQUFBLGtCQUFvQjtBQUFBOztBQUMxRSxVQUFNQyxPQUFPLEdBQUdMLGFBQWEsTUFBYixVQUFjQyxTQUFkLEVBQXlCQyxLQUF6QixFQUFnQ0MsSUFBaEMsU0FBeUNDLGtCQUF6QyxFQUFoQjtBQUVBRSxNQUFBQSxNQUFNLENBQUNDLE1BQVAsQ0FBYyxJQUFkLEVBQW9CRixPQUFwQjtBQUNEOzs7Ozs7QUFHSCxJQUFNRyxVQUFVLEdBQUcsSUFBSVQsVUFBSixFQUFuQjtBQUVBVSxNQUFNLENBQUNDLE9BQVAsR0FBaUJGLFVBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBDb250cm9sbGVyIHtcbiAgYXNzaWduTWV0aG9kcyhjcmVhdGVNZXRob2RzLCBzY2hlZHVsZXIsIG1vZGVsLCB2aWV3LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBtZXRob2RzID0gY3JlYXRlTWV0aG9kcyhzY2hlZHVsZXIsIG1vZGVsLCB2aWV3LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBtZXRob2RzKTtcbiAgfVxufVxuXG5jb25zdCBjb250cm9sbGVyID0gbmV3IENvbnRyb2xsZXIoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb250cm9sbGVyO1xuIl19