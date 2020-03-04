'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Task = require('../task');

var AsynchronousTask = /*#__PURE__*/function (_Task) {
  _inherits(AsynchronousTask, _Task);

  function AsynchronousTask(asynchronousMethod) {
    var _this;

    _classCallCheck(this, AsynchronousTask);

    for (var _len = arguments.length, remainingArgumentsThenCallback = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      remainingArgumentsThenCallback[_key - 1] = arguments[_key];
    }

    var synchronous = false,
        method = asynchronousMethod,
        ///
    callback = remainingArgumentsThenCallback.pop(),
        ///
    remainingArguments = remainingArgumentsThenCallback; ///

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AsynchronousTask).call(this, synchronous, method, remainingArguments));
    _this.callback = callback;
    return _this;
  }

  _createClass(AsynchronousTask, [{
    key: "getCallback",
    value: function getCallback() {
      return this.callback;
    }
  }, {
    key: "execute",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzeW5jaHJvbm91cy5qcyJdLCJuYW1lcyI6WyJUYXNrIiwicmVxdWlyZSIsIkFzeW5jaHJvbm91c1Rhc2siLCJhc3luY2hyb25vdXNNZXRob2QiLCJyZW1haW5pbmdBcmd1bWVudHNUaGVuQ2FsbGJhY2siLCJzeW5jaHJvbm91cyIsIm1ldGhvZCIsImNhbGxiYWNrIiwicG9wIiwicmVtYWluaW5nQXJndW1lbnRzIiwiZ2V0TWV0aG9kIiwiZ2V0UmVtYWluaW5nQXJndW1lbnRzIiwiY2FsbCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsSUFBSSxHQUFHQyxPQUFPLENBQUMsU0FBRCxDQUFwQjs7SUFFTUMsZ0I7OztBQUNKLDRCQUFZQyxrQkFBWixFQUFtRTtBQUFBOztBQUFBOztBQUFBLHNDQUFoQ0MsOEJBQWdDO0FBQWhDQSxNQUFBQSw4QkFBZ0M7QUFBQTs7QUFDakUsUUFBTUMsV0FBVyxHQUFHLEtBQXBCO0FBQUEsUUFDTUMsTUFBTSxHQUFHSCxrQkFEZjtBQUFBLFFBQ29DO0FBQzlCSSxJQUFBQSxRQUFRLEdBQUdILDhCQUE4QixDQUFDSSxHQUEvQixFQUZqQjtBQUFBLFFBRXVEO0FBQ2pEQyxJQUFBQSxrQkFBa0IsR0FBR0wsOEJBSDNCLENBRGlFLENBSUw7O0FBRTVELDBGQUFNQyxXQUFOLEVBQW1CQyxNQUFuQixFQUEyQkcsa0JBQTNCO0FBRUEsVUFBS0YsUUFBTCxHQUFnQkEsUUFBaEI7QUFSaUU7QUFTbEU7Ozs7a0NBRWE7QUFDWixhQUFPLEtBQUtBLFFBQVo7QUFDRDs7OzRCQUVPQSxRLEVBQVU7QUFDaEIsVUFBTUQsTUFBTSxHQUFHLEtBQUtJLFNBQUwsRUFBZjtBQUFBLFVBQ01QLGtCQUFrQixHQUFHRyxNQUQzQjtBQUFBLFVBQ29DO0FBQzlCRyxNQUFBQSxrQkFBa0IsR0FBRyxLQUFLRSxxQkFBTCxFQUYzQjtBQUlBUixNQUFBQSxrQkFBa0IsQ0FBQ1MsSUFBbkIsT0FBQVQsa0JBQWtCLEdBQU0sSUFBTiw0QkFBZU0sa0JBQWYsSUFBbUNGLFFBQW5DLEdBQWxCO0FBQ0Q7Ozs7RUF0QjRCUCxJOztBQXlCL0JhLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQlosZ0JBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgVGFzayA9IHJlcXVpcmUoJy4uL3Rhc2snKTtcclxuXHJcbmNsYXNzIEFzeW5jaHJvbm91c1Rhc2sgZXh0ZW5kcyBUYXNrIHtcclxuICBjb25zdHJ1Y3Rvcihhc3luY2hyb25vdXNNZXRob2QsIC4uLnJlbWFpbmluZ0FyZ3VtZW50c1RoZW5DYWxsYmFjaykge1xyXG4gICAgY29uc3Qgc3luY2hyb25vdXMgPSBmYWxzZSxcclxuICAgICAgICAgIG1ldGhvZCA9IGFzeW5jaHJvbm91c01ldGhvZCwgIC8vL1xyXG4gICAgICAgICAgY2FsbGJhY2sgPSByZW1haW5pbmdBcmd1bWVudHNUaGVuQ2FsbGJhY2sucG9wKCksIC8vL1xyXG4gICAgICAgICAgcmVtYWluaW5nQXJndW1lbnRzID0gcmVtYWluaW5nQXJndW1lbnRzVGhlbkNhbGxiYWNrOyAgLy8vXHJcblxyXG4gICAgc3VwZXIoc3luY2hyb25vdXMsIG1ldGhvZCwgcmVtYWluaW5nQXJndW1lbnRzKTtcclxuXHJcbiAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgfVxyXG4gIFxyXG4gIGdldENhbGxiYWNrKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY2FsbGJhY2s7XHJcbiAgfVxyXG5cclxuICBleGVjdXRlKGNhbGxiYWNrKSB7XHJcbiAgICBjb25zdCBtZXRob2QgPSB0aGlzLmdldE1ldGhvZCgpLFxyXG4gICAgICAgICAgYXN5bmNocm9ub3VzTWV0aG9kID0gbWV0aG9kLCAgLy8vXHJcbiAgICAgICAgICByZW1haW5pbmdBcmd1bWVudHMgPSB0aGlzLmdldFJlbWFpbmluZ0FyZ3VtZW50cygpO1xyXG5cclxuICAgIGFzeW5jaHJvbm91c01ldGhvZC5jYWxsKG51bGwsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cywgY2FsbGJhY2spO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBBc3luY2hyb25vdXNUYXNrO1xyXG4iXX0=