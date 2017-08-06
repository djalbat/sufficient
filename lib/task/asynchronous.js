'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Task = require('../task');

var AsynchronousTask = function (_Task) {
  _inherits(AsynchronousTask, _Task);

  function AsynchronousTask(method) {
    _classCallCheck(this, AsynchronousTask);

    for (var _len = arguments.length, remainingArguments = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      remainingArguments[_key - 1] = arguments[_key];
    }

    var synchronous = false,
        lastRemainingArgument = remainingArguments.pop(),
        callback = lastRemainingArgument; ///

    var _this = _possibleConstructorReturn(this, (AsynchronousTask.__proto__ || Object.getPrototypeOf(AsynchronousTask)).call(this, synchronous, method, remainingArguments));

    _this.callback = callback;
    return _this;
  }

  _createClass(AsynchronousTask, [{
    key: 'getCallback',
    value: function getCallback() {
      return this.callback;
    }
  }, {
    key: 'execute',
    value: function execute(callback) {
      var method = this.getMethod(),
          remainingArguments = this.getRemainingArguments();

      method.call.apply(method, [null].concat(_toConsumableArray(remainingArguments), [callback]));
    }
  }]);

  return AsynchronousTask;
}(Task);

module.exports = AsynchronousTask;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi90YXNrL2FzeW5jaHJvbm91cy5qcyJdLCJuYW1lcyI6WyJUYXNrIiwicmVxdWlyZSIsIkFzeW5jaHJvbm91c1Rhc2siLCJtZXRob2QiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJzeW5jaHJvbm91cyIsImxhc3RSZW1haW5pbmdBcmd1bWVudCIsInBvcCIsImNhbGxiYWNrIiwiZ2V0TWV0aG9kIiwiZ2V0UmVtYWluaW5nQXJndW1lbnRzIiwiY2FsbCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLFNBQVIsQ0FBYjs7SUFFTUMsZ0I7OztBQUNKLDRCQUFZQyxNQUFaLEVBQTJDO0FBQUE7O0FBQUEsc0NBQXBCQyxrQkFBb0I7QUFBcEJBLHdCQUFvQjtBQUFBOztBQUN6QyxRQUFNQyxjQUFjLEtBQXBCO0FBQUEsUUFDTUMsd0JBQXdCRixtQkFBbUJHLEdBQW5CLEVBRDlCO0FBQUEsUUFFTUMsV0FBV0YscUJBRmpCLENBRHlDLENBR0Q7O0FBSEMsb0lBS25DRCxXQUxtQyxFQUt0QkYsTUFMc0IsRUFLZEMsa0JBTGM7O0FBT3pDLFVBQUtJLFFBQUwsR0FBZ0JBLFFBQWhCO0FBUHlDO0FBUTFDOzs7O2tDQUVhO0FBQ1osYUFBTyxLQUFLQSxRQUFaO0FBQ0Q7Ozs0QkFFT0EsUSxFQUFVO0FBQ2hCLFVBQU1MLFNBQVMsS0FBS00sU0FBTCxFQUFmO0FBQUEsVUFDTUwscUJBQXFCLEtBQUtNLHFCQUFMLEVBRDNCOztBQUdBUCxhQUFPUSxJQUFQLGdCQUFZLElBQVosNEJBQXFCUCxrQkFBckIsSUFBeUNJLFFBQXpDO0FBQ0Q7Ozs7RUFwQjRCUixJOztBQXVCL0JZLE9BQU9DLE9BQVAsR0FBaUJYLGdCQUFqQiIsImZpbGUiOiJhc3luY2hyb25vdXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBUYXNrID0gcmVxdWlyZSgnLi4vdGFzaycpO1xyXG5cclxuY2xhc3MgQXN5bmNocm9ub3VzVGFzayBleHRlbmRzIFRhc2sge1xyXG4gIGNvbnN0cnVjdG9yKG1ldGhvZCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XHJcbiAgICBjb25zdCBzeW5jaHJvbm91cyA9IGZhbHNlLFxyXG4gICAgICAgICAgbGFzdFJlbWFpbmluZ0FyZ3VtZW50ID0gcmVtYWluaW5nQXJndW1lbnRzLnBvcCgpLFxyXG4gICAgICAgICAgY2FsbGJhY2sgPSBsYXN0UmVtYWluaW5nQXJndW1lbnQ7IC8vL1xyXG5cclxuICAgIHN1cGVyKHN5bmNocm9ub3VzLCBtZXRob2QsIHJlbWFpbmluZ0FyZ3VtZW50cyk7XHJcblxyXG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gIH1cclxuICBcclxuICBnZXRDYWxsYmFjaygpIHtcclxuICAgIHJldHVybiB0aGlzLmNhbGxiYWNrO1xyXG4gIH1cclxuXHJcbiAgZXhlY3V0ZShjYWxsYmFjaykge1xyXG4gICAgY29uc3QgbWV0aG9kID0gdGhpcy5nZXRNZXRob2QoKSxcclxuICAgICAgICAgIHJlbWFpbmluZ0FyZ3VtZW50cyA9IHRoaXMuZ2V0UmVtYWluaW5nQXJndW1lbnRzKCk7XHJcblxyXG4gICAgbWV0aG9kLmNhbGwobnVsbCwgLi4ucmVtYWluaW5nQXJndW1lbnRzLCBjYWxsYmFjayk7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEFzeW5jaHJvbm91c1Rhc2s7XHJcbiJdfQ==