'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Task = require('../task');

var AsynchronousTask = function (_Task) {
  _inherits(AsynchronousTask, _Task);

  function AsynchronousTask(asynchronousMethod) {
    _classCallCheck(this, AsynchronousTask);

    for (var _len = arguments.length, remainingArgumentsThenCallback = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      remainingArgumentsThenCallback[_key - 1] = arguments[_key];
    }

    var synchronous = false,
        method = asynchronousMethod,
        ///
    callback = remainingArgumentsThenCallback.pop(),
        ///
    remainingArguments = remainingArgumentsThenCallback; ///

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
          asynchronousMethod = method,
          ///
      remainingArguments = this.getRemainingArguments();

      asynchronousMethod.call.apply(asynchronousMethod, [null].concat(_toConsumableArray(remainingArguments), [callback]));
    }
  }]);

  return AsynchronousTask;
}(Task);

module.exports = AsynchronousTask;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi90YXNrL2FzeW5jaHJvbm91cy5qcyJdLCJuYW1lcyI6WyJUYXNrIiwicmVxdWlyZSIsIkFzeW5jaHJvbm91c1Rhc2siLCJhc3luY2hyb25vdXNNZXRob2QiLCJyZW1haW5pbmdBcmd1bWVudHNUaGVuQ2FsbGJhY2siLCJzeW5jaHJvbm91cyIsIm1ldGhvZCIsImNhbGxiYWNrIiwicG9wIiwicmVtYWluaW5nQXJndW1lbnRzIiwiZ2V0TWV0aG9kIiwiZ2V0UmVtYWluaW5nQXJndW1lbnRzIiwiY2FsbCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLFNBQVIsQ0FBYjs7SUFFTUMsZ0I7OztBQUNKLDRCQUFZQyxrQkFBWixFQUFtRTtBQUFBOztBQUFBLHNDQUFoQ0MsOEJBQWdDO0FBQWhDQSxvQ0FBZ0M7QUFBQTs7QUFDakUsUUFBTUMsY0FBYyxLQUFwQjtBQUFBLFFBQ01DLFNBQVNILGtCQURmO0FBQUEsUUFDb0M7QUFDOUJJLGVBQVdILCtCQUErQkksR0FBL0IsRUFGakI7QUFBQSxRQUV1RDtBQUNqREMseUJBQXFCTCw4QkFIM0IsQ0FEaUUsQ0FJTDs7QUFKSyxvSUFNM0RDLFdBTjJELEVBTTlDQyxNQU44QyxFQU10Q0csa0JBTnNDOztBQVFqRSxVQUFLRixRQUFMLEdBQWdCQSxRQUFoQjtBQVJpRTtBQVNsRTs7OztrQ0FFYTtBQUNaLGFBQU8sS0FBS0EsUUFBWjtBQUNEOzs7NEJBRU9BLFEsRUFBVTtBQUNoQixVQUFNRCxTQUFTLEtBQUtJLFNBQUwsRUFBZjtBQUFBLFVBQ01QLHFCQUFxQkcsTUFEM0I7QUFBQSxVQUNvQztBQUM5QkcsMkJBQXFCLEtBQUtFLHFCQUFMLEVBRjNCOztBQUlBUix5QkFBbUJTLElBQW5CLDRCQUF3QixJQUF4Qiw0QkFBaUNILGtCQUFqQyxJQUFxREYsUUFBckQ7QUFDRDs7OztFQXRCNEJQLEk7O0FBeUIvQmEsT0FBT0MsT0FBUCxHQUFpQlosZ0JBQWpCIiwiZmlsZSI6ImFzeW5jaHJvbm91cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IFRhc2sgPSByZXF1aXJlKCcuLi90YXNrJyk7XHJcblxyXG5jbGFzcyBBc3luY2hyb25vdXNUYXNrIGV4dGVuZHMgVGFzayB7XHJcbiAgY29uc3RydWN0b3IoYXN5bmNocm9ub3VzTWV0aG9kLCAuLi5yZW1haW5pbmdBcmd1bWVudHNUaGVuQ2FsbGJhY2spIHtcclxuICAgIGNvbnN0IHN5bmNocm9ub3VzID0gZmFsc2UsXHJcbiAgICAgICAgICBtZXRob2QgPSBhc3luY2hyb25vdXNNZXRob2QsICAvLy9cclxuICAgICAgICAgIGNhbGxiYWNrID0gcmVtYWluaW5nQXJndW1lbnRzVGhlbkNhbGxiYWNrLnBvcCgpLCAvLy9cclxuICAgICAgICAgIHJlbWFpbmluZ0FyZ3VtZW50cyA9IHJlbWFpbmluZ0FyZ3VtZW50c1RoZW5DYWxsYmFjazsgIC8vL1xyXG5cclxuICAgIHN1cGVyKHN5bmNocm9ub3VzLCBtZXRob2QsIHJlbWFpbmluZ0FyZ3VtZW50cyk7XHJcblxyXG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gIH1cclxuICBcclxuICBnZXRDYWxsYmFjaygpIHtcclxuICAgIHJldHVybiB0aGlzLmNhbGxiYWNrO1xyXG4gIH1cclxuXHJcbiAgZXhlY3V0ZShjYWxsYmFjaykge1xyXG4gICAgY29uc3QgbWV0aG9kID0gdGhpcy5nZXRNZXRob2QoKSxcclxuICAgICAgICAgIGFzeW5jaHJvbm91c01ldGhvZCA9IG1ldGhvZCwgIC8vL1xyXG4gICAgICAgICAgcmVtYWluaW5nQXJndW1lbnRzID0gdGhpcy5nZXRSZW1haW5pbmdBcmd1bWVudHMoKTtcclxuXHJcbiAgICBhc3luY2hyb25vdXNNZXRob2QuY2FsbChudWxsLCAuLi5yZW1haW5pbmdBcmd1bWVudHMsIGNhbGxiYWNrKTtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQXN5bmNocm9ub3VzVGFzaztcclxuIl19