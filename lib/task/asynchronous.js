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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var AsynchronousTask = /*#__PURE__*/function (_Task) {
  _inherits(AsynchronousTask, _Task);

  var _super = _createSuper(AsynchronousTask);

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

    _this = _super.call(this, synchronous, method, remainingArguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzeW5jaHJvbm91cy5qcyJdLCJuYW1lcyI6WyJBc3luY2hyb25vdXNUYXNrIiwiYXN5bmNocm9ub3VzTWV0aG9kIiwicmVtYWluaW5nQXJndW1lbnRzVGhlbkNhbGxiYWNrIiwic3luY2hyb25vdXMiLCJtZXRob2QiLCJjYWxsYmFjayIsInBvcCIsInJlbWFpbmluZ0FyZ3VtZW50cyIsImdldE1ldGhvZCIsImdldFJlbWFpbmluZ0FyZ3VtZW50cyIsImNhbGwiLCJUYXNrIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGdCOzs7OztBQUNuQiw0QkFBWUMsa0JBQVosRUFBbUU7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBaENDLDhCQUFnQztBQUFoQ0EsTUFBQUEsOEJBQWdDO0FBQUE7O0FBQ2pFLFFBQU1DLFdBQVcsR0FBRyxLQUFwQjtBQUFBLFFBQ01DLE1BQU0sR0FBR0gsa0JBRGY7QUFBQSxRQUNvQztBQUM5QkksSUFBQUEsUUFBUSxHQUFHSCw4QkFBOEIsQ0FBQ0ksR0FBL0IsRUFGakI7QUFBQSxRQUV1RDtBQUNqREMsSUFBQUEsa0JBQWtCLEdBQUdMLDhCQUgzQixDQURpRSxDQUlMOztBQUU1RCw4QkFBTUMsV0FBTixFQUFtQkMsTUFBbkIsRUFBMkJHLGtCQUEzQjtBQUVBLFVBQUtGLFFBQUwsR0FBZ0JBLFFBQWhCO0FBUmlFO0FBU2xFOzs7O2tDQUVhO0FBQ1osYUFBTyxLQUFLQSxRQUFaO0FBQ0Q7Ozs0QkFFT0EsUSxFQUFVO0FBQ2hCLFVBQU1ELE1BQU0sR0FBRyxLQUFLSSxTQUFMLEVBQWY7QUFBQSxVQUNNUCxrQkFBa0IsR0FBR0csTUFEM0I7QUFBQSxVQUNvQztBQUM5QkcsTUFBQUEsa0JBQWtCLEdBQUcsS0FBS0UscUJBQUwsRUFGM0I7QUFJQVIsTUFBQUEsa0JBQWtCLENBQUNTLElBQW5CLE9BQUFULGtCQUFrQixHQUFNLElBQU4sNEJBQWVNLGtCQUFmLElBQW1DRixRQUFuQyxHQUFsQjtBQUNEOzs7O0VBdEIyQ00sZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCBUYXNrIGZyb20gXCIuLi90YXNrXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBc3luY2hyb25vdXNUYXNrIGV4dGVuZHMgVGFzayB7XHJcbiAgY29uc3RydWN0b3IoYXN5bmNocm9ub3VzTWV0aG9kLCAuLi5yZW1haW5pbmdBcmd1bWVudHNUaGVuQ2FsbGJhY2spIHtcclxuICAgIGNvbnN0IHN5bmNocm9ub3VzID0gZmFsc2UsXHJcbiAgICAgICAgICBtZXRob2QgPSBhc3luY2hyb25vdXNNZXRob2QsICAvLy9cclxuICAgICAgICAgIGNhbGxiYWNrID0gcmVtYWluaW5nQXJndW1lbnRzVGhlbkNhbGxiYWNrLnBvcCgpLCAvLy9cclxuICAgICAgICAgIHJlbWFpbmluZ0FyZ3VtZW50cyA9IHJlbWFpbmluZ0FyZ3VtZW50c1RoZW5DYWxsYmFjazsgIC8vL1xyXG5cclxuICAgIHN1cGVyKHN5bmNocm9ub3VzLCBtZXRob2QsIHJlbWFpbmluZ0FyZ3VtZW50cyk7XHJcblxyXG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gIH1cclxuICBcclxuICBnZXRDYWxsYmFjaygpIHtcclxuICAgIHJldHVybiB0aGlzLmNhbGxiYWNrO1xyXG4gIH1cclxuXHJcbiAgZXhlY3V0ZShjYWxsYmFjaykge1xyXG4gICAgY29uc3QgbWV0aG9kID0gdGhpcy5nZXRNZXRob2QoKSxcclxuICAgICAgICAgIGFzeW5jaHJvbm91c01ldGhvZCA9IG1ldGhvZCwgIC8vL1xyXG4gICAgICAgICAgcmVtYWluaW5nQXJndW1lbnRzID0gdGhpcy5nZXRSZW1haW5pbmdBcmd1bWVudHMoKTtcclxuXHJcbiAgICBhc3luY2hyb25vdXNNZXRob2QuY2FsbChudWxsLCAuLi5yZW1haW5pbmdBcmd1bWVudHMsIGNhbGxiYWNrKTtcclxuICB9XHJcbn1cclxuIl19