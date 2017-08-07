'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Controller = function () {
  function Controller() {
    _classCallCheck(this, Controller);
  }

  _createClass(Controller, [{
    key: 'assignMethods',
    value: function assignMethods(createMethods, schedule, model, view) {
      for (var _len = arguments.length, remainingArguments = Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
        remainingArguments[_key - 4] = arguments[_key];
      }

      var methods = createMethods.apply(undefined, [schedule, model, view].concat(remainingArguments));

      Object.assign(this, methods);
    }
  }]);

  return Controller;
}();

var controller = new Controller();

module.exports = controller;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJjcmVhdGVNZXRob2RzIiwic2NoZWR1bGUiLCJtb2RlbCIsInZpZXciLCJyZW1haW5pbmdBcmd1bWVudHMiLCJtZXRob2RzIiwiT2JqZWN0IiwiYXNzaWduIiwiY29udHJvbGxlciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFHTUEsVTs7Ozs7OztrQ0FDVUMsYSxFQUFlQyxRLEVBQVVDLEssRUFBT0MsSSxFQUE2QjtBQUFBLHdDQUFwQkMsa0JBQW9CO0FBQXBCQSwwQkFBb0I7QUFBQTs7QUFDekUsVUFBTUMsVUFBVUwsZ0NBQWNDLFFBQWQsRUFBd0JDLEtBQXhCLEVBQStCQyxJQUEvQixTQUF3Q0Msa0JBQXhDLEVBQWhCOztBQUVBRSxhQUFPQyxNQUFQLENBQWMsSUFBZCxFQUFvQkYsT0FBcEI7QUFDRDs7Ozs7O0FBR0gsSUFBTUcsYUFBYSxJQUFJVCxVQUFKLEVBQW5COztBQUVBVSxPQUFPQyxPQUFQLEdBQWlCRixVQUFqQiIsImZpbGUiOiJjb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5cbmNsYXNzIENvbnRyb2xsZXIge1xuICBhc3NpZ25NZXRob2RzKGNyZWF0ZU1ldGhvZHMsIHNjaGVkdWxlLCBtb2RlbCwgdmlldywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgbWV0aG9kcyA9IGNyZWF0ZU1ldGhvZHMoc2NoZWR1bGUsIG1vZGVsLCB2aWV3LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBtZXRob2RzKTtcbiAgfVxufVxuXG5jb25zdCBjb250cm9sbGVyID0gbmV3IENvbnRyb2xsZXIoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb250cm9sbGVyO1xuIl19