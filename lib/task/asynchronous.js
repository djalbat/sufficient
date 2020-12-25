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

    for (var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      remainingArguments[_key - 1] = arguments[_key];
    }

    var synchronous = false,
        method = asynchronousMethod,
        ///
    callback = remainingArguments.pop(); ///

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzeW5jaHJvbm91cy5qcyJdLCJuYW1lcyI6WyJBc3luY2hyb25vdXNUYXNrIiwiYXN5bmNocm9ub3VzTWV0aG9kIiwicmVtYWluaW5nQXJndW1lbnRzIiwic3luY2hyb25vdXMiLCJtZXRob2QiLCJjYWxsYmFjayIsInBvcCIsImdldE1ldGhvZCIsImdldFJlbWFpbmluZ0FyZ3VtZW50cyIsImNhbGwiLCJUYXNrIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGdCOzs7OztBQUNuQiw0QkFBWUMsa0JBQVosRUFBdUQ7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBcEJDLGtCQUFvQjtBQUFwQkEsTUFBQUEsa0JBQW9CO0FBQUE7O0FBQ3JELFFBQU1DLFdBQVcsR0FBRyxLQUFwQjtBQUFBLFFBQ01DLE1BQU0sR0FBR0gsa0JBRGY7QUFBQSxRQUNvQztBQUM5QkksSUFBQUEsUUFBUSxHQUFHSCxrQkFBa0IsQ0FBQ0ksR0FBbkIsRUFGakIsQ0FEcUQsQ0FHVjs7QUFFM0MsOEJBQU1ILFdBQU4sRUFBbUJDLE1BQW5CLEVBQTJCRixrQkFBM0I7QUFFQSxVQUFLRyxRQUFMLEdBQWdCQSxRQUFoQjtBQVBxRDtBQVF0RDs7OztrQ0FFYTtBQUNaLGFBQU8sS0FBS0EsUUFBWjtBQUNEOzs7NEJBRU9BLFEsRUFBVTtBQUNoQixVQUFNRCxNQUFNLEdBQUcsS0FBS0csU0FBTCxFQUFmO0FBQUEsVUFDTU4sa0JBQWtCLEdBQUdHLE1BRDNCO0FBQUEsVUFDb0M7QUFDOUJGLE1BQUFBLGtCQUFrQixHQUFHLEtBQUtNLHFCQUFMLEVBRjNCO0FBSUFQLE1BQUFBLGtCQUFrQixDQUFDUSxJQUFuQixPQUFBUixrQkFBa0IsR0FBTSxJQUFOLDRCQUFlQyxrQkFBZixJQUFtQ0csUUFBbkMsR0FBbEI7QUFDRDs7OztFQXJCMkNLLGdCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgVGFzayBmcm9tIFwiLi4vdGFza1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXN5bmNocm9ub3VzVGFzayBleHRlbmRzIFRhc2sge1xyXG4gIGNvbnN0cnVjdG9yKGFzeW5jaHJvbm91c01ldGhvZCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XHJcbiAgICBjb25zdCBzeW5jaHJvbm91cyA9IGZhbHNlLFxyXG4gICAgICAgICAgbWV0aG9kID0gYXN5bmNocm9ub3VzTWV0aG9kLCAgLy8vXHJcbiAgICAgICAgICBjYWxsYmFjayA9IHJlbWFpbmluZ0FyZ3VtZW50cy5wb3AoKTsgLy8vXHJcblxyXG4gICAgc3VwZXIoc3luY2hyb25vdXMsIG1ldGhvZCwgcmVtYWluaW5nQXJndW1lbnRzKTtcclxuXHJcbiAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgfVxyXG4gIFxyXG4gIGdldENhbGxiYWNrKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY2FsbGJhY2s7XHJcbiAgfVxyXG5cclxuICBleGVjdXRlKGNhbGxiYWNrKSB7XHJcbiAgICBjb25zdCBtZXRob2QgPSB0aGlzLmdldE1ldGhvZCgpLFxyXG4gICAgICAgICAgYXN5bmNocm9ub3VzTWV0aG9kID0gbWV0aG9kLCAgLy8vXHJcbiAgICAgICAgICByZW1haW5pbmdBcmd1bWVudHMgPSB0aGlzLmdldFJlbWFpbmluZ0FyZ3VtZW50cygpO1xyXG5cclxuICAgIGFzeW5jaHJvbm91c01ldGhvZC5jYWxsKG51bGwsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cywgY2FsbGJhY2spO1xyXG4gIH1cclxufVxyXG4iXX0=