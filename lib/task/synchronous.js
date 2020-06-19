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

var SynchronousTask = /*#__PURE__*/function (_Task) {
  _inherits(SynchronousTask, _Task);

  function SynchronousTask(synchronousMethod) {
    _classCallCheck(this, SynchronousTask);

    var synchronous = true,
        method = synchronousMethod; ///

    for (var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      remainingArguments[_key - 1] = arguments[_key];
    }

    return _possibleConstructorReturn(this, _getPrototypeOf(SynchronousTask).call(this, synchronous, method, remainingArguments));
  }

  _createClass(SynchronousTask, [{
    key: "execute",
    value: function execute() {
      var method = this.getMethod(),
          synchronousMethod = method,
          ///
      remainingArguments = this.getRemainingArguments();
      synchronousMethod.call.apply(synchronousMethod, [null].concat(_toConsumableArray(remainingArguments)));
    }
  }]);

  return SynchronousTask;
}(_task["default"]);

exports["default"] = SynchronousTask;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN5bmNocm9ub3VzLmpzIl0sIm5hbWVzIjpbIlN5bmNocm9ub3VzVGFzayIsInN5bmNocm9ub3VzTWV0aG9kIiwic3luY2hyb25vdXMiLCJtZXRob2QiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJnZXRNZXRob2QiLCJnZXRSZW1haW5pbmdBcmd1bWVudHMiLCJjYWxsIiwiVGFzayJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxlOzs7QUFDbkIsMkJBQVlDLGlCQUFaLEVBQXNEO0FBQUE7O0FBQ3BELFFBQU1DLFdBQVcsR0FBRyxJQUFwQjtBQUFBLFFBQ01DLE1BQU0sR0FBR0YsaUJBRGYsQ0FEb0QsQ0FFbEI7O0FBRmtCLHNDQUFwQkcsa0JBQW9CO0FBQXBCQSxNQUFBQSxrQkFBb0I7QUFBQTs7QUFBQSx3RkFJOUNGLFdBSjhDLEVBSWpDQyxNQUppQyxFQUl6QkMsa0JBSnlCO0FBS3JEOzs7OzhCQUVTO0FBQ1IsVUFBTUQsTUFBTSxHQUFHLEtBQUtFLFNBQUwsRUFBZjtBQUFBLFVBQ01KLGlCQUFpQixHQUFHRSxNQUQxQjtBQUFBLFVBQ2tDO0FBQzVCQyxNQUFBQSxrQkFBa0IsR0FBRyxLQUFLRSxxQkFBTCxFQUYzQjtBQUlBTCxNQUFBQSxpQkFBaUIsQ0FBQ00sSUFBbEIsT0FBQU4saUJBQWlCLEdBQU0sSUFBTiw0QkFBZUcsa0JBQWYsR0FBakI7QUFDRDs7OztFQWQwQ0ksZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCBUYXNrIGZyb20gXCIuLi90YXNrXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTeW5jaHJvbm91c1Rhc2sgZXh0ZW5kcyBUYXNrIHtcclxuICBjb25zdHJ1Y3RvcihzeW5jaHJvbm91c01ldGhvZCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XHJcbiAgICBjb25zdCBzeW5jaHJvbm91cyA9IHRydWUsXHJcbiAgICAgICAgICBtZXRob2QgPSBzeW5jaHJvbm91c01ldGhvZDsgLy8vXHJcbiAgICBcclxuICAgIHN1cGVyKHN5bmNocm9ub3VzLCBtZXRob2QsIHJlbWFpbmluZ0FyZ3VtZW50cyk7XHJcbiAgfVxyXG5cclxuICBleGVjdXRlKCkge1xyXG4gICAgY29uc3QgbWV0aG9kID0gdGhpcy5nZXRNZXRob2QoKSxcclxuICAgICAgICAgIHN5bmNocm9ub3VzTWV0aG9kID0gbWV0aG9kLCAvLy9cclxuICAgICAgICAgIHJlbWFpbmluZ0FyZ3VtZW50cyA9IHRoaXMuZ2V0UmVtYWluaW5nQXJndW1lbnRzKCk7XHJcblxyXG4gICAgc3luY2hyb25vdXNNZXRob2QuY2FsbChudWxsLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xyXG4gIH1cclxufVxyXG4iXX0=