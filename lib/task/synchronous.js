'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Task = require('../task');

var SynchronousTask = function (_Task) {
  _inherits(SynchronousTask, _Task);

  function SynchronousTask(method) {
    _classCallCheck(this, SynchronousTask);

    var synchronous = true;

    for (var _len = arguments.length, remainingArguments = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      remainingArguments[_key - 1] = arguments[_key];
    }

    return _possibleConstructorReturn(this, (SynchronousTask.__proto__ || Object.getPrototypeOf(SynchronousTask)).call(this, synchronous, method, remainingArguments));
  }

  _createClass(SynchronousTask, [{
    key: 'execute',
    value: function execute() {
      var method = this.getMethod(),
          remainingArguments = this.getRemainingArguments();

      method.call.apply(method, [null].concat(_toConsumableArray(remainingArguments)));
    }
  }]);

  return SynchronousTask;
}(Task);

module.exports = SynchronousTask;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi90YXNrL3N5bmNocm9ub3VzLmpzIl0sIm5hbWVzIjpbIlRhc2siLCJyZXF1aXJlIiwiU3luY2hyb25vdXNUYXNrIiwibWV0aG9kIiwic3luY2hyb25vdXMiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJnZXRNZXRob2QiLCJnZXRSZW1haW5pbmdBcmd1bWVudHMiLCJjYWxsIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsU0FBUixDQUFiOztJQUVNQyxlOzs7QUFDSiwyQkFBWUMsTUFBWixFQUEyQztBQUFBOztBQUN6QyxRQUFNQyxjQUFjLElBQXBCOztBQUR5QyxzQ0FBcEJDLGtCQUFvQjtBQUFwQkEsd0JBQW9CO0FBQUE7O0FBQUEsNkhBR25DRCxXQUhtQyxFQUd0QkQsTUFIc0IsRUFHZEUsa0JBSGM7QUFJMUM7Ozs7OEJBRVM7QUFDUixVQUFNRixTQUFTLEtBQUtHLFNBQUwsRUFBZjtBQUFBLFVBQ01ELHFCQUFxQixLQUFLRSxxQkFBTCxFQUQzQjs7QUFHQUosYUFBT0ssSUFBUCxnQkFBWSxJQUFaLDRCQUFxQkgsa0JBQXJCO0FBQ0Q7Ozs7RUFaMkJMLEk7O0FBZTlCUyxPQUFPQyxPQUFQLEdBQWlCUixlQUFqQiIsImZpbGUiOiJzeW5jaHJvbm91cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IFRhc2sgPSByZXF1aXJlKCcuLi90YXNrJyk7XHJcblxyXG5jbGFzcyBTeW5jaHJvbm91c1Rhc2sgZXh0ZW5kcyBUYXNrIHtcclxuICBjb25zdHJ1Y3RvcihtZXRob2QsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xyXG4gICAgY29uc3Qgc3luY2hyb25vdXMgPSB0cnVlO1xyXG4gICAgXHJcbiAgICBzdXBlcihzeW5jaHJvbm91cywgbWV0aG9kLCByZW1haW5pbmdBcmd1bWVudHMpO1xyXG4gIH1cclxuXHJcbiAgZXhlY3V0ZSgpIHtcclxuICAgIGNvbnN0IG1ldGhvZCA9IHRoaXMuZ2V0TWV0aG9kKCksXHJcbiAgICAgICAgICByZW1haW5pbmdBcmd1bWVudHMgPSB0aGlzLmdldFJlbWFpbmluZ0FyZ3VtZW50cygpO1xyXG4gICAgXHJcbiAgICBtZXRob2QuY2FsbChudWxsLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBTeW5jaHJvbm91c1Rhc2s7XHJcbiJdfQ==