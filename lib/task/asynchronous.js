'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AsynchronousTask = function () {
  function AsynchronousTask(method, model, view) {
    _classCallCheck(this, AsynchronousTask);

    for (var _len = arguments.length, remainingArguments = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      remainingArguments[_key - 3] = arguments[_key];
    }

    var lastRemainingArgument = remainingArguments.pop();

    this.method = method;

    this.model = model;

    this.view = view;

    this.remainingArguments = remainingArguments;

    var done = lastRemainingArgument; ///

    this.done = done;
  }

  _createClass(AsynchronousTask, [{
    key: 'execute',
    value: function execute(callback) {
      var _method;

      (_method = this.method).call.apply(_method, [null, this.model, this.view].concat(_toConsumableArray(this.remainingArguments), [callback]));
    }
  }, {
    key: 'callback',
    value: function callback() {
      this.done();
    }
  }]);

  return AsynchronousTask;
}();

module.exports = AsynchronousTask;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi90YXNrL2FzeW5jaHJvbm91cy5qcyJdLCJuYW1lcyI6WyJBc3luY2hyb25vdXNUYXNrIiwibWV0aG9kIiwibW9kZWwiLCJ2aWV3IiwicmVtYWluaW5nQXJndW1lbnRzIiwibGFzdFJlbWFpbmluZ0FyZ3VtZW50IiwicG9wIiwiZG9uZSIsImNhbGxiYWNrIiwiY2FsbCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztJQUVNQSxnQjtBQUNKLDRCQUFZQyxNQUFaLEVBQW9CQyxLQUFwQixFQUEyQkMsSUFBM0IsRUFBd0Q7QUFBQTs7QUFBQSxzQ0FBcEJDLGtCQUFvQjtBQUFwQkEsd0JBQW9CO0FBQUE7O0FBQ3RELFFBQU1DLHdCQUF3QkQsbUJBQW1CRSxHQUFuQixFQUE5Qjs7QUFFQSxTQUFLTCxNQUFMLEdBQWNBLE1BQWQ7O0FBRUEsU0FBS0MsS0FBTCxHQUFhQSxLQUFiOztBQUVBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjs7QUFFQSxTQUFLQyxrQkFBTCxHQUEwQkEsa0JBQTFCOztBQUVBLFFBQU1HLE9BQU9GLHFCQUFiLENBWHNELENBV2xCOztBQUVwQyxTQUFLRSxJQUFMLEdBQVlBLElBQVo7QUFDRDs7Ozs0QkFFT0MsUSxFQUFVO0FBQUE7O0FBQ2hCLHNCQUFLUCxNQUFMLEVBQVlRLElBQVosaUJBQWlCLElBQWpCLEVBQXVCLEtBQUtQLEtBQTVCLEVBQW1DLEtBQUtDLElBQXhDLDRCQUFpRCxLQUFLQyxrQkFBdEQsSUFBMEVJLFFBQTFFO0FBQ0Q7OzsrQkFFVTtBQUNULFdBQUtELElBQUw7QUFDRDs7Ozs7O0FBR0hHLE9BQU9DLE9BQVAsR0FBaUJYLGdCQUFqQiIsImZpbGUiOiJhc3luY2hyb25vdXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5jbGFzcyBBc3luY2hyb25vdXNUYXNrIHtcclxuICBjb25zdHJ1Y3RvcihtZXRob2QsIG1vZGVsLCB2aWV3LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcclxuICAgIGNvbnN0IGxhc3RSZW1haW5pbmdBcmd1bWVudCA9IHJlbWFpbmluZ0FyZ3VtZW50cy5wb3AoKTtcclxuICAgIFxyXG4gICAgdGhpcy5tZXRob2QgPSBtZXRob2Q7XHJcblxyXG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xyXG5cclxuICAgIHRoaXMudmlldyA9IHZpZXc7XHJcblxyXG4gICAgdGhpcy5yZW1haW5pbmdBcmd1bWVudHMgPSByZW1haW5pbmdBcmd1bWVudHM7XHJcbiAgICBcclxuICAgIGNvbnN0IGRvbmUgPSBsYXN0UmVtYWluaW5nQXJndW1lbnQ7IC8vL1xyXG5cclxuICAgIHRoaXMuZG9uZSA9IGRvbmU7XHJcbiAgfVxyXG5cclxuICBleGVjdXRlKGNhbGxiYWNrKSB7XHJcbiAgICB0aGlzLm1ldGhvZC5jYWxsKG51bGwsIHRoaXMubW9kZWwsIHRoaXMudmlldywgLi4udGhpcy5yZW1haW5pbmdBcmd1bWVudHMsIGNhbGxiYWNrKTtcclxuICB9XHJcbiAgXHJcbiAgY2FsbGJhY2soKSB7XHJcbiAgICB0aGlzLmRvbmUoKTtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQXN5bmNocm9ub3VzVGFzaztcclxuIl19