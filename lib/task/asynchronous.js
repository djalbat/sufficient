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

    for (var _len = arguments.length, remainingArgumentsThenDone = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      remainingArgumentsThenDone[_key - 1] = arguments[_key];
    }

    var synchronous = false,
        method = asynchronousMethod,
        ///
    done = remainingArgumentsThenDone.pop(),
        ///
    remainingArguments = remainingArgumentsThenDone; ///

    var _this = _possibleConstructorReturn(this, (AsynchronousTask.__proto__ || Object.getPrototypeOf(AsynchronousTask)).call(this, synchronous, method, remainingArguments));

    _this.done = done;
    return _this;
  }

  _createClass(AsynchronousTask, [{
    key: 'getDone',
    value: function getDone() {
      return this.done;
    }
  }, {
    key: 'execute',
    value: function execute(done) {
      var method = this.getMethod(),
          asynchronousMethod = method,
          ///
      remainingArguments = this.getRemainingArguments();

      asynchronousMethod.call.apply(asynchronousMethod, [null].concat(_toConsumableArray(remainingArguments), [done]));
    }
  }]);

  return AsynchronousTask;
}(Task);

module.exports = AsynchronousTask;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi90YXNrL2FzeW5jaHJvbm91cy5qcyJdLCJuYW1lcyI6WyJUYXNrIiwicmVxdWlyZSIsIkFzeW5jaHJvbm91c1Rhc2siLCJhc3luY2hyb25vdXNNZXRob2QiLCJyZW1haW5pbmdBcmd1bWVudHNUaGVuRG9uZSIsInN5bmNocm9ub3VzIiwibWV0aG9kIiwiZG9uZSIsInBvcCIsInJlbWFpbmluZ0FyZ3VtZW50cyIsImdldE1ldGhvZCIsImdldFJlbWFpbmluZ0FyZ3VtZW50cyIsImNhbGwiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxTQUFSLENBQWI7O0lBRU1DLGdCOzs7QUFDSiw0QkFBWUMsa0JBQVosRUFBK0Q7QUFBQTs7QUFBQSxzQ0FBNUJDLDBCQUE0QjtBQUE1QkEsZ0NBQTRCO0FBQUE7O0FBQzdELFFBQU1DLGNBQWMsS0FBcEI7QUFBQSxRQUNNQyxTQUFTSCxrQkFEZjtBQUFBLFFBQ29DO0FBQzlCSSxXQUFPSCwyQkFBMkJJLEdBQTNCLEVBRmI7QUFBQSxRQUUrQztBQUN6Q0MseUJBQXFCTCwwQkFIM0IsQ0FENkQsQ0FJTDs7QUFKSyxvSUFNdkRDLFdBTnVELEVBTTFDQyxNQU4wQyxFQU1sQ0csa0JBTmtDOztBQVE3RCxVQUFLRixJQUFMLEdBQVlBLElBQVo7QUFSNkQ7QUFTOUQ7Ozs7OEJBRVM7QUFDUixhQUFPLEtBQUtBLElBQVo7QUFDRDs7OzRCQUVPQSxJLEVBQU07QUFDWixVQUFNRCxTQUFTLEtBQUtJLFNBQUwsRUFBZjtBQUFBLFVBQ01QLHFCQUFxQkcsTUFEM0I7QUFBQSxVQUNvQztBQUM5QkcsMkJBQXFCLEtBQUtFLHFCQUFMLEVBRjNCOztBQUlBUix5QkFBbUJTLElBQW5CLDRCQUF3QixJQUF4Qiw0QkFBaUNILGtCQUFqQyxJQUFxREYsSUFBckQ7QUFDRDs7OztFQXRCNEJQLEk7O0FBeUIvQmEsT0FBT0MsT0FBUCxHQUFpQlosZ0JBQWpCIiwiZmlsZSI6ImFzeW5jaHJvbm91cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IFRhc2sgPSByZXF1aXJlKCcuLi90YXNrJyk7XHJcblxyXG5jbGFzcyBBc3luY2hyb25vdXNUYXNrIGV4dGVuZHMgVGFzayB7XHJcbiAgY29uc3RydWN0b3IoYXN5bmNocm9ub3VzTWV0aG9kLCAuLi5yZW1haW5pbmdBcmd1bWVudHNUaGVuRG9uZSkge1xyXG4gICAgY29uc3Qgc3luY2hyb25vdXMgPSBmYWxzZSxcclxuICAgICAgICAgIG1ldGhvZCA9IGFzeW5jaHJvbm91c01ldGhvZCwgIC8vL1xyXG4gICAgICAgICAgZG9uZSA9IHJlbWFpbmluZ0FyZ3VtZW50c1RoZW5Eb25lLnBvcCgpLCAvLy9cclxuICAgICAgICAgIHJlbWFpbmluZ0FyZ3VtZW50cyA9IHJlbWFpbmluZ0FyZ3VtZW50c1RoZW5Eb25lOyAgLy8vXHJcblxyXG4gICAgc3VwZXIoc3luY2hyb25vdXMsIG1ldGhvZCwgcmVtYWluaW5nQXJndW1lbnRzKTtcclxuXHJcbiAgICB0aGlzLmRvbmUgPSBkb25lO1xyXG4gIH1cclxuICBcclxuICBnZXREb25lKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZG9uZTtcclxuICB9XHJcblxyXG4gIGV4ZWN1dGUoZG9uZSkge1xyXG4gICAgY29uc3QgbWV0aG9kID0gdGhpcy5nZXRNZXRob2QoKSxcclxuICAgICAgICAgIGFzeW5jaHJvbm91c01ldGhvZCA9IG1ldGhvZCwgIC8vL1xyXG4gICAgICAgICAgcmVtYWluaW5nQXJndW1lbnRzID0gdGhpcy5nZXRSZW1haW5pbmdBcmd1bWVudHMoKTtcclxuXHJcbiAgICBhc3luY2hyb25vdXNNZXRob2QuY2FsbChudWxsLCAuLi5yZW1haW5pbmdBcmd1bWVudHMsIGRvbmUpO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBBc3luY2hyb25vdXNUYXNrO1xyXG4iXX0=