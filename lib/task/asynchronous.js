'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Task = require('../task');

var AsynchronousTask = function (_Task) {
  _inherits(AsynchronousTask, _Task);

  function AsynchronousTask(method, model, view) {
    _classCallCheck(this, AsynchronousTask);

    for (var _len = arguments.length, remainingArguments = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      remainingArguments[_key - 3] = arguments[_key];
    }

    var synchronous = false,
        lastRemainingArgument = remainingArguments.pop(),
        callback = lastRemainingArgument; ///

    var _this = _possibleConstructorReturn(this, (AsynchronousTask.__proto__ || Object.getPrototypeOf(AsynchronousTask)).call(this, synchronous, method, model, view, remainingArguments));

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
          model = this.getModel(),
          view = this.getView(),
          remainingArguments = this.getRemainingArguments();

      method.call.apply(method, [null, model, view].concat(_toConsumableArray(remainingArguments), [callback]));
    }
  }]);

  return AsynchronousTask;
}(Task);

module.exports = AsynchronousTask;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi90YXNrL2FzeW5jaHJvbm91cy5qcyJdLCJuYW1lcyI6WyJUYXNrIiwicmVxdWlyZSIsIkFzeW5jaHJvbm91c1Rhc2siLCJtZXRob2QiLCJtb2RlbCIsInZpZXciLCJyZW1haW5pbmdBcmd1bWVudHMiLCJzeW5jaHJvbm91cyIsImxhc3RSZW1haW5pbmdBcmd1bWVudCIsInBvcCIsImNhbGxiYWNrIiwiZ2V0TWV0aG9kIiwiZ2V0TW9kZWwiLCJnZXRWaWV3IiwiZ2V0UmVtYWluaW5nQXJndW1lbnRzIiwiY2FsbCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLFNBQVIsQ0FBYjs7SUFFTUMsZ0I7OztBQUNKLDRCQUFZQyxNQUFaLEVBQW9CQyxLQUFwQixFQUEyQkMsSUFBM0IsRUFBd0Q7QUFBQTs7QUFBQSxzQ0FBcEJDLGtCQUFvQjtBQUFwQkEsd0JBQW9CO0FBQUE7O0FBQ3RELFFBQU1DLGNBQWMsS0FBcEI7QUFBQSxRQUNNQyx3QkFBd0JGLG1CQUFtQkcsR0FBbkIsRUFEOUI7QUFBQSxRQUVNQyxXQUFXRixxQkFGakIsQ0FEc0QsQ0FHZDs7QUFIYyxvSUFLaERELFdBTGdELEVBS25DSixNQUxtQyxFQUszQkMsS0FMMkIsRUFLcEJDLElBTG9CLEVBS2RDLGtCQUxjOztBQU90RCxVQUFLSSxRQUFMLEdBQWdCQSxRQUFoQjtBQVBzRDtBQVF2RDs7OztrQ0FFYTtBQUNaLGFBQU8sS0FBS0EsUUFBWjtBQUNEOzs7NEJBRU9BLFEsRUFBVTtBQUNoQixVQUFNUCxTQUFTLEtBQUtRLFNBQUwsRUFBZjtBQUFBLFVBQ01QLFFBQVEsS0FBS1EsUUFBTCxFQURkO0FBQUEsVUFFTVAsT0FBTyxLQUFLUSxPQUFMLEVBRmI7QUFBQSxVQUdNUCxxQkFBcUIsS0FBS1EscUJBQUwsRUFIM0I7O0FBS0FYLGFBQU9ZLElBQVAsZ0JBQVksSUFBWixFQUFrQlgsS0FBbEIsRUFBeUJDLElBQXpCLDRCQUFrQ0Msa0JBQWxDLElBQXNESSxRQUF0RDtBQUNEOzs7O0VBdEI0QlYsSTs7QUF5Qi9CZ0IsT0FBT0MsT0FBUCxHQUFpQmYsZ0JBQWpCIiwiZmlsZSI6ImFzeW5jaHJvbm91cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IFRhc2sgPSByZXF1aXJlKCcuLi90YXNrJyk7XHJcblxyXG5jbGFzcyBBc3luY2hyb25vdXNUYXNrIGV4dGVuZHMgVGFzayB7XHJcbiAgY29uc3RydWN0b3IobWV0aG9kLCBtb2RlbCwgdmlldywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XHJcbiAgICBjb25zdCBzeW5jaHJvbm91cyA9IGZhbHNlLFxyXG4gICAgICAgICAgbGFzdFJlbWFpbmluZ0FyZ3VtZW50ID0gcmVtYWluaW5nQXJndW1lbnRzLnBvcCgpLFxyXG4gICAgICAgICAgY2FsbGJhY2sgPSBsYXN0UmVtYWluaW5nQXJndW1lbnQ7IC8vL1xyXG5cclxuICAgIHN1cGVyKHN5bmNocm9ub3VzLCBtZXRob2QsIG1vZGVsLCB2aWV3LCByZW1haW5pbmdBcmd1bWVudHMpO1xyXG5cclxuICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICB9XHJcbiAgXHJcbiAgZ2V0Q2FsbGJhY2soKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jYWxsYmFjaztcclxuICB9XHJcblxyXG4gIGV4ZWN1dGUoY2FsbGJhY2spIHtcclxuICAgIGNvbnN0IG1ldGhvZCA9IHRoaXMuZ2V0TWV0aG9kKCksXHJcbiAgICAgICAgICBtb2RlbCA9IHRoaXMuZ2V0TW9kZWwoKSxcclxuICAgICAgICAgIHZpZXcgPSB0aGlzLmdldFZpZXcoKSxcclxuICAgICAgICAgIHJlbWFpbmluZ0FyZ3VtZW50cyA9IHRoaXMuZ2V0UmVtYWluaW5nQXJndW1lbnRzKCk7XHJcblxyXG4gICAgbWV0aG9kLmNhbGwobnVsbCwgbW9kZWwsIHZpZXcsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cywgY2FsbGJhY2spO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBBc3luY2hyb25vdXNUYXNrO1xyXG4iXX0=