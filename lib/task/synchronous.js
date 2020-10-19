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

var SynchronousTask = /*#__PURE__*/function (_Task) {
  _inherits(SynchronousTask, _Task);

  var _super = _createSuper(SynchronousTask);

  function SynchronousTask(synchronousMethod) {
    _classCallCheck(this, SynchronousTask);

    var synchronous = true,
        method = synchronousMethod; ///

    for (var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      remainingArguments[_key - 1] = arguments[_key];
    }

    return _super.call(this, synchronous, method, remainingArguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN5bmNocm9ub3VzLmpzIl0sIm5hbWVzIjpbIlN5bmNocm9ub3VzVGFzayIsInN5bmNocm9ub3VzTWV0aG9kIiwic3luY2hyb25vdXMiLCJtZXRob2QiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJnZXRNZXRob2QiLCJnZXRSZW1haW5pbmdBcmd1bWVudHMiLCJjYWxsIiwiVGFzayJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxlOzs7OztBQUNuQiwyQkFBWUMsaUJBQVosRUFBc0Q7QUFBQTs7QUFDcEQsUUFBTUMsV0FBVyxHQUFHLElBQXBCO0FBQUEsUUFDTUMsTUFBTSxHQUFHRixpQkFEZixDQURvRCxDQUVsQjs7QUFGa0Isc0NBQXBCRyxrQkFBb0I7QUFBcEJBLE1BQUFBLGtCQUFvQjtBQUFBOztBQUFBLDZCQUk5Q0YsV0FKOEMsRUFJakNDLE1BSmlDLEVBSXpCQyxrQkFKeUI7QUFLckQ7Ozs7OEJBRVM7QUFDUixVQUFNRCxNQUFNLEdBQUcsS0FBS0UsU0FBTCxFQUFmO0FBQUEsVUFDTUosaUJBQWlCLEdBQUdFLE1BRDFCO0FBQUEsVUFDa0M7QUFDNUJDLE1BQUFBLGtCQUFrQixHQUFHLEtBQUtFLHFCQUFMLEVBRjNCO0FBSUFMLE1BQUFBLGlCQUFpQixDQUFDTSxJQUFsQixPQUFBTixpQkFBaUIsR0FBTSxJQUFOLDRCQUFlRyxrQkFBZixHQUFqQjtBQUNEOzs7O0VBZDBDSSxnQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IFRhc2sgZnJvbSBcIi4uL3Rhc2tcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN5bmNocm9ub3VzVGFzayBleHRlbmRzIFRhc2sge1xyXG4gIGNvbnN0cnVjdG9yKHN5bmNocm9ub3VzTWV0aG9kLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcclxuICAgIGNvbnN0IHN5bmNocm9ub3VzID0gdHJ1ZSxcclxuICAgICAgICAgIG1ldGhvZCA9IHN5bmNocm9ub3VzTWV0aG9kOyAvLy9cclxuICAgIFxyXG4gICAgc3VwZXIoc3luY2hyb25vdXMsIG1ldGhvZCwgcmVtYWluaW5nQXJndW1lbnRzKTtcclxuICB9XHJcblxyXG4gIGV4ZWN1dGUoKSB7XHJcbiAgICBjb25zdCBtZXRob2QgPSB0aGlzLmdldE1ldGhvZCgpLFxyXG4gICAgICAgICAgc3luY2hyb25vdXNNZXRob2QgPSBtZXRob2QsIC8vL1xyXG4gICAgICAgICAgcmVtYWluaW5nQXJndW1lbnRzID0gdGhpcy5nZXRSZW1haW5pbmdBcmd1bWVudHMoKTtcclxuXHJcbiAgICBzeW5jaHJvbm91c01ldGhvZC5jYWxsKG51bGwsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==