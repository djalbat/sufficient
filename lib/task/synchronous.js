'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Task = require('../task');

var SynchronousTask = function (_Task) {
  _inherits(SynchronousTask, _Task);

  function SynchronousTask(synchronousMethod) {
    _classCallCheck(this, SynchronousTask);

    var synchronous = true,
        method = synchronousMethod; ///

    for (var _len = arguments.length, remainingArguments = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      remainingArguments[_key - 1] = arguments[_key];
    }

    return _possibleConstructorReturn(this, (SynchronousTask.__proto__ || Object.getPrototypeOf(SynchronousTask)).call(this, synchronous, method, remainingArguments));
  }

  _createClass(SynchronousTask, [{
    key: 'execute',
    value: function execute() {
      var method = this.getMethod(),
          synchronousMethod = method,
          ///
      remainingArguments = this.getRemainingArguments();

      synchronousMethod.call.apply(synchronousMethod, [null].concat(_toConsumableArray(remainingArguments)));
    }
  }]);

  return SynchronousTask;
}(Task);

module.exports = SynchronousTask;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi90YXNrL3N5bmNocm9ub3VzLmpzIl0sIm5hbWVzIjpbIlRhc2siLCJyZXF1aXJlIiwiU3luY2hyb25vdXNUYXNrIiwic3luY2hyb25vdXNNZXRob2QiLCJzeW5jaHJvbm91cyIsIm1ldGhvZCIsInJlbWFpbmluZ0FyZ3VtZW50cyIsImdldE1ldGhvZCIsImdldFJlbWFpbmluZ0FyZ3VtZW50cyIsImNhbGwiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxTQUFSLENBQWI7O0lBRU1DLGU7OztBQUNKLDJCQUFZQyxpQkFBWixFQUFzRDtBQUFBOztBQUNwRCxRQUFNQyxjQUFjLElBQXBCO0FBQUEsUUFDTUMsU0FBU0YsaUJBRGYsQ0FEb0QsQ0FFbEI7O0FBRmtCLHNDQUFwQkcsa0JBQW9CO0FBQXBCQSx3QkFBb0I7QUFBQTs7QUFBQSw2SEFJOUNGLFdBSjhDLEVBSWpDQyxNQUppQyxFQUl6QkMsa0JBSnlCO0FBS3JEOzs7OzhCQUVTO0FBQ1IsVUFBTUQsU0FBUyxLQUFLRSxTQUFMLEVBQWY7QUFBQSxVQUNNSixvQkFBb0JFLE1BRDFCO0FBQUEsVUFDa0M7QUFDNUJDLDJCQUFxQixLQUFLRSxxQkFBTCxFQUYzQjs7QUFJQUwsd0JBQWtCTSxJQUFsQiwyQkFBdUIsSUFBdkIsNEJBQWdDSCxrQkFBaEM7QUFDRDs7OztFQWQyQk4sSTs7QUFpQjlCVSxPQUFPQyxPQUFQLEdBQWlCVCxlQUFqQiIsImZpbGUiOiJzeW5jaHJvbm91cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IFRhc2sgPSByZXF1aXJlKCcuLi90YXNrJyk7XHJcblxyXG5jbGFzcyBTeW5jaHJvbm91c1Rhc2sgZXh0ZW5kcyBUYXNrIHtcclxuICBjb25zdHJ1Y3RvcihzeW5jaHJvbm91c01ldGhvZCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XHJcbiAgICBjb25zdCBzeW5jaHJvbm91cyA9IHRydWUsXHJcbiAgICAgICAgICBtZXRob2QgPSBzeW5jaHJvbm91c01ldGhvZDsgLy8vXHJcbiAgICBcclxuICAgIHN1cGVyKHN5bmNocm9ub3VzLCBtZXRob2QsIHJlbWFpbmluZ0FyZ3VtZW50cyk7XHJcbiAgfVxyXG5cclxuICBleGVjdXRlKCkge1xyXG4gICAgY29uc3QgbWV0aG9kID0gdGhpcy5nZXRNZXRob2QoKSxcclxuICAgICAgICAgIHN5bmNocm9ub3VzTWV0aG9kID0gbWV0aG9kLCAvLy9cclxuICAgICAgICAgIHJlbWFpbmluZ0FyZ3VtZW50cyA9IHRoaXMuZ2V0UmVtYWluaW5nQXJndW1lbnRzKCk7XHJcblxyXG4gICAgc3luY2hyb25vdXNNZXRob2QuY2FsbChudWxsLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBTeW5jaHJvbm91c1Rhc2s7XHJcbiJdfQ==