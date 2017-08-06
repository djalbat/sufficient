'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Task = function () {
  function Task(synchronous, method, remainingArguments) {
    _classCallCheck(this, Task);

    this.synchronous = synchronous;
    this.method = method;
    this.remainingArguments = remainingArguments;
  }

  _createClass(Task, [{
    key: 'isSynchronous',
    value: function isSynchronous() {
      return this.synchronous;
    }
  }, {
    key: 'getMethod',
    value: function getMethod() {
      return this.method;
    }
  }, {
    key: 'getRemainingArguments',
    value: function getRemainingArguments() {
      return this.remainingArguments;
    }
  }]);

  return Task;
}();

module.exports = Task;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi90YXNrLmpzIl0sIm5hbWVzIjpbIlRhc2siLCJzeW5jaHJvbm91cyIsIm1ldGhvZCIsInJlbWFpbmluZ0FyZ3VtZW50cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsSTtBQUNKLGdCQUFZQyxXQUFaLEVBQXlCQyxNQUF6QixFQUFpQ0Msa0JBQWpDLEVBQXFEO0FBQUE7O0FBQ25ELFNBQUtGLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0Msa0JBQUwsR0FBMEJBLGtCQUExQjtBQUNEOzs7O29DQUVlO0FBQ2QsYUFBTyxLQUFLRixXQUFaO0FBQ0Q7OztnQ0FFVztBQUNWLGFBQU8sS0FBS0MsTUFBWjtBQUNEOzs7NENBRXVCO0FBQ3RCLGFBQU8sS0FBS0Msa0JBQVo7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJMLElBQWpCIiwiZmlsZSI6InRhc2suanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5jbGFzcyBUYXNrIHtcclxuICBjb25zdHJ1Y3RvcihzeW5jaHJvbm91cywgbWV0aG9kLCByZW1haW5pbmdBcmd1bWVudHMpIHtcclxuICAgIHRoaXMuc3luY2hyb25vdXMgPSBzeW5jaHJvbm91czsgICAgXHJcbiAgICB0aGlzLm1ldGhvZCA9IG1ldGhvZDtcclxuICAgIHRoaXMucmVtYWluaW5nQXJndW1lbnRzID0gcmVtYWluaW5nQXJndW1lbnRzOyAgICBcclxuICB9XHJcbiAgXHJcbiAgaXNTeW5jaHJvbm91cygpIHtcclxuICAgIHJldHVybiB0aGlzLnN5bmNocm9ub3VzO1xyXG4gIH1cclxuICBcclxuICBnZXRNZXRob2QoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5tZXRob2Q7XHJcbiAgfVxyXG4gIFxyXG4gIGdldFJlbWFpbmluZ0FyZ3VtZW50cygpIHtcclxuICAgIHJldHVybiB0aGlzLnJlbWFpbmluZ0FyZ3VtZW50cztcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gVGFzaztcclxuIl19