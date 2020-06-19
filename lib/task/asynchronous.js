"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _task = _interopRequireDefault(require("../task"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
}(_task["default"]);

exports["default"] = AsynchronousTask;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzeW5jaHJvbm91cy5qcyJdLCJuYW1lcyI6WyJBc3luY2hyb25vdXNUYXNrIiwiYXN5bmNocm9ub3VzTWV0aG9kIiwicmVtYWluaW5nQXJndW1lbnRzVGhlbkNhbGxiYWNrIiwic3luY2hyb25vdXMiLCJtZXRob2QiLCJjYWxsYmFjayIsInBvcCIsInJlbWFpbmluZ0FyZ3VtZW50cyIsImdldE1ldGhvZCIsImdldFJlbWFpbmluZ0FyZ3VtZW50cyIsImNhbGwiLCJUYXNrIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGdCOzs7QUFDbkIsNEJBQVlDLGtCQUFaLEVBQW1FO0FBQUE7O0FBQUE7O0FBQUEsc0NBQWhDQyw4QkFBZ0M7QUFBaENBLE1BQUFBLDhCQUFnQztBQUFBOztBQUNqRSxRQUFNQyxXQUFXLEdBQUcsS0FBcEI7QUFBQSxRQUNNQyxNQUFNLEdBQUdILGtCQURmO0FBQUEsUUFDb0M7QUFDOUJJLElBQUFBLFFBQVEsR0FBR0gsOEJBQThCLENBQUNJLEdBQS9CLEVBRmpCO0FBQUEsUUFFdUQ7QUFDakRDLElBQUFBLGtCQUFrQixHQUFHTCw4QkFIM0IsQ0FEaUUsQ0FJTDs7QUFFNUQsMEZBQU1DLFdBQU4sRUFBbUJDLE1BQW5CLEVBQTJCRyxrQkFBM0I7QUFFQSxVQUFLRixRQUFMLEdBQWdCQSxRQUFoQjtBQVJpRTtBQVNsRTs7OztrQ0FFYTtBQUNaLGFBQU8sS0FBS0EsUUFBWjtBQUNEOzs7NEJBRU9BLFEsRUFBVTtBQUNoQixVQUFNRCxNQUFNLEdBQUcsS0FBS0ksU0FBTCxFQUFmO0FBQUEsVUFDTVAsa0JBQWtCLEdBQUdHLE1BRDNCO0FBQUEsVUFDb0M7QUFDOUJHLE1BQUFBLGtCQUFrQixHQUFHLEtBQUtFLHFCQUFMLEVBRjNCO0FBSUFSLE1BQUFBLGtCQUFrQixDQUFDUyxJQUFuQixPQUFBVCxrQkFBa0IsR0FBTSxJQUFOLDRCQUFlTSxrQkFBZixJQUFtQ0YsUUFBbkMsR0FBbEI7QUFDRDs7OztFQXRCMkNNLGdCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgVGFzayBmcm9tIFwiLi4vdGFza1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXN5bmNocm9ub3VzVGFzayBleHRlbmRzIFRhc2sge1xyXG4gIGNvbnN0cnVjdG9yKGFzeW5jaHJvbm91c01ldGhvZCwgLi4ucmVtYWluaW5nQXJndW1lbnRzVGhlbkNhbGxiYWNrKSB7XHJcbiAgICBjb25zdCBzeW5jaHJvbm91cyA9IGZhbHNlLFxyXG4gICAgICAgICAgbWV0aG9kID0gYXN5bmNocm9ub3VzTWV0aG9kLCAgLy8vXHJcbiAgICAgICAgICBjYWxsYmFjayA9IHJlbWFpbmluZ0FyZ3VtZW50c1RoZW5DYWxsYmFjay5wb3AoKSwgLy8vXHJcbiAgICAgICAgICByZW1haW5pbmdBcmd1bWVudHMgPSByZW1haW5pbmdBcmd1bWVudHNUaGVuQ2FsbGJhY2s7ICAvLy9cclxuXHJcbiAgICBzdXBlcihzeW5jaHJvbm91cywgbWV0aG9kLCByZW1haW5pbmdBcmd1bWVudHMpO1xyXG5cclxuICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICB9XHJcbiAgXHJcbiAgZ2V0Q2FsbGJhY2soKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jYWxsYmFjaztcclxuICB9XHJcblxyXG4gIGV4ZWN1dGUoY2FsbGJhY2spIHtcclxuICAgIGNvbnN0IG1ldGhvZCA9IHRoaXMuZ2V0TWV0aG9kKCksXHJcbiAgICAgICAgICBhc3luY2hyb25vdXNNZXRob2QgPSBtZXRob2QsICAvLy9cclxuICAgICAgICAgIHJlbWFpbmluZ0FyZ3VtZW50cyA9IHRoaXMuZ2V0UmVtYWluaW5nQXJndW1lbnRzKCk7XHJcblxyXG4gICAgYXN5bmNocm9ub3VzTWV0aG9kLmNhbGwobnVsbCwgLi4ucmVtYWluaW5nQXJndW1lbnRzLCBjYWxsYmFjayk7XHJcbiAgfVxyXG59XHJcbiJdfQ==