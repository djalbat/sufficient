'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Task = function () {
  function Task(synchronous, method, model, view) {
    _classCallCheck(this, Task);

    this.synchronous = synchronous;
    this.method = method;
    this.model = model;
    this.view = view;

    for (var _len = arguments.length, remainingArguments = Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
      remainingArguments[_key - 4] = arguments[_key];
    }

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
    key: 'getModel',
    value: function getModel() {
      return this.model;
    }
  }, {
    key: 'getView',
    value: function getView() {
      return this.view;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi90YXNrLmpzIl0sIm5hbWVzIjpbIlRhc2siLCJzeW5jaHJvbm91cyIsIm1ldGhvZCIsIm1vZGVsIiwidmlldyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsSTtBQUNKLGdCQUFZQyxXQUFaLEVBQXlCQyxNQUF6QixFQUFpQ0MsS0FBakMsRUFBd0NDLElBQXhDLEVBQXFFO0FBQUE7O0FBQ25FLFNBQUtILFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0MsSUFBTCxHQUFZQSxJQUFaOztBQUptRSxzQ0FBcEJDLGtCQUFvQjtBQUFwQkEsd0JBQW9CO0FBQUE7O0FBS25FLFNBQUtBLGtCQUFMLEdBQTBCQSxrQkFBMUI7QUFDRDs7OztvQ0FFZTtBQUNkLGFBQU8sS0FBS0osV0FBWjtBQUNEOzs7Z0NBRVc7QUFDVixhQUFPLEtBQUtDLE1BQVo7QUFDRDs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLQyxLQUFaO0FBQ0Q7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0MsSUFBWjtBQUNEOzs7NENBRXVCO0FBQ3RCLGFBQU8sS0FBS0Msa0JBQVo7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJQLElBQWpCIiwiZmlsZSI6InRhc2suanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5jbGFzcyBUYXNrIHtcclxuICBjb25zdHJ1Y3RvcihzeW5jaHJvbm91cywgbWV0aG9kLCBtb2RlbCwgdmlldywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XHJcbiAgICB0aGlzLnN5bmNocm9ub3VzID0gc3luY2hyb25vdXM7ICAgIFxyXG4gICAgdGhpcy5tZXRob2QgPSBtZXRob2Q7XHJcbiAgICB0aGlzLm1vZGVsID0gbW9kZWw7XHJcbiAgICB0aGlzLnZpZXcgPSB2aWV3O1xyXG4gICAgdGhpcy5yZW1haW5pbmdBcmd1bWVudHMgPSByZW1haW5pbmdBcmd1bWVudHM7ICAgIFxyXG4gIH1cclxuICBcclxuICBpc1N5bmNocm9ub3VzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3luY2hyb25vdXM7XHJcbiAgfVxyXG4gIFxyXG4gIGdldE1ldGhvZCgpIHtcclxuICAgIHJldHVybiB0aGlzLm1ldGhvZDtcclxuICB9XHJcbiAgXHJcbiAgZ2V0TW9kZWwoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5tb2RlbDtcclxuICB9XHJcbiAgXHJcbiAgZ2V0VmlldygpIHtcclxuICAgIHJldHVybiB0aGlzLnZpZXc7XHJcbiAgfVxyXG4gIFxyXG4gIGdldFJlbWFpbmluZ0FyZ3VtZW50cygpIHtcclxuICAgIHJldHVybiB0aGlzLnJlbWFpbmluZ0FyZ3VtZW50cztcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gVGFzaztcclxuIl19