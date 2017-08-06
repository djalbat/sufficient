'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Task = function () {
  function Task(synchronous, method, model, view, remainingArguments) {
    _classCallCheck(this, Task);

    this.synchronous = synchronous;
    this.method = method;
    this.model = model;
    this.view = view;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi90YXNrLmpzIl0sIm5hbWVzIjpbIlRhc2siLCJzeW5jaHJvbm91cyIsIm1ldGhvZCIsIm1vZGVsIiwidmlldyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsSTtBQUNKLGdCQUFZQyxXQUFaLEVBQXlCQyxNQUF6QixFQUFpQ0MsS0FBakMsRUFBd0NDLElBQXhDLEVBQThDQyxrQkFBOUMsRUFBa0U7QUFBQTs7QUFDaEUsU0FBS0osV0FBTCxHQUFtQkEsV0FBbkI7QUFDQSxTQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxrQkFBTCxHQUEwQkEsa0JBQTFCO0FBQ0Q7Ozs7b0NBRWU7QUFDZCxhQUFPLEtBQUtKLFdBQVo7QUFDRDs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLQyxNQUFaO0FBQ0Q7OzsrQkFFVTtBQUNULGFBQU8sS0FBS0MsS0FBWjtBQUNEOzs7OEJBRVM7QUFDUixhQUFPLEtBQUtDLElBQVo7QUFDRDs7OzRDQUV1QjtBQUN0QixhQUFPLEtBQUtDLGtCQUFaO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCUCxJQUFqQiIsImZpbGUiOiJ0YXNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY2xhc3MgVGFzayB7XHJcbiAgY29uc3RydWN0b3Ioc3luY2hyb25vdXMsIG1ldGhvZCwgbW9kZWwsIHZpZXcsIHJlbWFpbmluZ0FyZ3VtZW50cykge1xyXG4gICAgdGhpcy5zeW5jaHJvbm91cyA9IHN5bmNocm9ub3VzOyAgICBcclxuICAgIHRoaXMubWV0aG9kID0gbWV0aG9kO1xyXG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xyXG4gICAgdGhpcy52aWV3ID0gdmlldztcclxuICAgIHRoaXMucmVtYWluaW5nQXJndW1lbnRzID0gcmVtYWluaW5nQXJndW1lbnRzOyAgICBcclxuICB9XHJcbiAgXHJcbiAgaXNTeW5jaHJvbm91cygpIHtcclxuICAgIHJldHVybiB0aGlzLnN5bmNocm9ub3VzO1xyXG4gIH1cclxuICBcclxuICBnZXRNZXRob2QoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5tZXRob2Q7XHJcbiAgfVxyXG4gIFxyXG4gIGdldE1vZGVsKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubW9kZWw7XHJcbiAgfVxyXG4gIFxyXG4gIGdldFZpZXcoKSB7XHJcbiAgICByZXR1cm4gdGhpcy52aWV3O1xyXG4gIH1cclxuICBcclxuICBnZXRSZW1haW5pbmdBcmd1bWVudHMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZW1haW5pbmdBcmd1bWVudHM7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFRhc2s7XHJcbiJdfQ==