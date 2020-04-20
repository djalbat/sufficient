"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _task = _interopRequireDefault(require("../task"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzeW5jaHJvbm91cy5qcyJdLCJuYW1lcyI6WyJBc3luY2hyb25vdXNUYXNrIiwiYXN5bmNocm9ub3VzTWV0aG9kIiwicmVtYWluaW5nQXJndW1lbnRzVGhlbkNhbGxiYWNrIiwic3luY2hyb25vdXMiLCJtZXRob2QiLCJjYWxsYmFjayIsInBvcCIsInJlbWFpbmluZ0FyZ3VtZW50cyIsImdldE1ldGhvZCIsImdldFJlbWFpbmluZ0FyZ3VtZW50cyIsImNhbGwiLCJUYXNrIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsZ0I7Ozs7O0FBQ25CLDRCQUFZQyxrQkFBWixFQUFtRTtBQUFBOztBQUFBOztBQUFBLHNDQUFoQ0MsOEJBQWdDO0FBQWhDQSxNQUFBQSw4QkFBZ0M7QUFBQTs7QUFDakUsUUFBTUMsV0FBVyxHQUFHLEtBQXBCO0FBQUEsUUFDTUMsTUFBTSxHQUFHSCxrQkFEZjtBQUFBLFFBQ29DO0FBQzlCSSxJQUFBQSxRQUFRLEdBQUdILDhCQUE4QixDQUFDSSxHQUEvQixFQUZqQjtBQUFBLFFBRXVEO0FBQ2pEQyxJQUFBQSxrQkFBa0IsR0FBR0wsOEJBSDNCLENBRGlFLENBSUw7O0FBRTVELDhCQUFNQyxXQUFOLEVBQW1CQyxNQUFuQixFQUEyQkcsa0JBQTNCO0FBRUEsVUFBS0YsUUFBTCxHQUFnQkEsUUFBaEI7QUFSaUU7QUFTbEU7Ozs7a0NBRWE7QUFDWixhQUFPLEtBQUtBLFFBQVo7QUFDRDs7OzRCQUVPQSxRLEVBQVU7QUFDaEIsVUFBTUQsTUFBTSxHQUFHLEtBQUtJLFNBQUwsRUFBZjtBQUFBLFVBQ01QLGtCQUFrQixHQUFHRyxNQUQzQjtBQUFBLFVBQ29DO0FBQzlCRyxNQUFBQSxrQkFBa0IsR0FBRyxLQUFLRSxxQkFBTCxFQUYzQjtBQUlBUixNQUFBQSxrQkFBa0IsQ0FBQ1MsSUFBbkIsT0FBQVQsa0JBQWtCLEdBQU0sSUFBTiw0QkFBZU0sa0JBQWYsSUFBbUNGLFFBQW5DLEdBQWxCO0FBQ0Q7Ozs7RUF0QjJDTSxnQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IFRhc2sgZnJvbSBcIi4uL3Rhc2tcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFzeW5jaHJvbm91c1Rhc2sgZXh0ZW5kcyBUYXNrIHtcclxuICBjb25zdHJ1Y3Rvcihhc3luY2hyb25vdXNNZXRob2QsIC4uLnJlbWFpbmluZ0FyZ3VtZW50c1RoZW5DYWxsYmFjaykge1xyXG4gICAgY29uc3Qgc3luY2hyb25vdXMgPSBmYWxzZSxcclxuICAgICAgICAgIG1ldGhvZCA9IGFzeW5jaHJvbm91c01ldGhvZCwgIC8vL1xyXG4gICAgICAgICAgY2FsbGJhY2sgPSByZW1haW5pbmdBcmd1bWVudHNUaGVuQ2FsbGJhY2sucG9wKCksIC8vL1xyXG4gICAgICAgICAgcmVtYWluaW5nQXJndW1lbnRzID0gcmVtYWluaW5nQXJndW1lbnRzVGhlbkNhbGxiYWNrOyAgLy8vXHJcblxyXG4gICAgc3VwZXIoc3luY2hyb25vdXMsIG1ldGhvZCwgcmVtYWluaW5nQXJndW1lbnRzKTtcclxuXHJcbiAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgfVxyXG4gIFxyXG4gIGdldENhbGxiYWNrKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY2FsbGJhY2s7XHJcbiAgfVxyXG5cclxuICBleGVjdXRlKGNhbGxiYWNrKSB7XHJcbiAgICBjb25zdCBtZXRob2QgPSB0aGlzLmdldE1ldGhvZCgpLFxyXG4gICAgICAgICAgYXN5bmNocm9ub3VzTWV0aG9kID0gbWV0aG9kLCAgLy8vXHJcbiAgICAgICAgICByZW1haW5pbmdBcmd1bWVudHMgPSB0aGlzLmdldFJlbWFpbmluZ0FyZ3VtZW50cygpO1xyXG5cclxuICAgIGFzeW5jaHJvbm91c01ldGhvZC5jYWxsKG51bGwsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cywgY2FsbGJhY2spO1xyXG4gIH1cclxufVxyXG4iXX0=