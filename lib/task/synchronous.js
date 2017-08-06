'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Task = require('../task');

var SynchronousTask = function (_Task) {
  _inherits(SynchronousTask, _Task);

  function SynchronousTask(method, model, view) {
    _classCallCheck(this, SynchronousTask);

    var synchronous = true;

    for (var _len = arguments.length, remainingArguments = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      remainingArguments[_key - 3] = arguments[_key];
    }

    return _possibleConstructorReturn(this, (SynchronousTask.__proto__ || Object.getPrototypeOf(SynchronousTask)).call(this, synchronous, method, model, view, remainingArguments));
  }

  _createClass(SynchronousTask, [{
    key: 'execute',
    value: function execute() {
      var method = this.getMethod(),
          model = this.getModel(),
          view = this.getView(),
          remainingArguments = this.getRemainingArguments();

      method.call.apply(method, [null, model, view].concat(_toConsumableArray(remainingArguments)));
    }
  }]);

  return SynchronousTask;
}(Task);

module.exports = SynchronousTask;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi90YXNrL3N5bmNocm9ub3VzLmpzIl0sIm5hbWVzIjpbIlRhc2siLCJyZXF1aXJlIiwiU3luY2hyb25vdXNUYXNrIiwibWV0aG9kIiwibW9kZWwiLCJ2aWV3Iiwic3luY2hyb25vdXMiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJnZXRNZXRob2QiLCJnZXRNb2RlbCIsImdldFZpZXciLCJnZXRSZW1haW5pbmdBcmd1bWVudHMiLCJjYWxsIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsU0FBUixDQUFiOztJQUVNQyxlOzs7QUFDSiwyQkFBWUMsTUFBWixFQUFvQkMsS0FBcEIsRUFBMkJDLElBQTNCLEVBQXdEO0FBQUE7O0FBQ3RELFFBQU1DLGNBQWMsSUFBcEI7O0FBRHNELHNDQUFwQkMsa0JBQW9CO0FBQXBCQSx3QkFBb0I7QUFBQTs7QUFBQSw2SEFHaERELFdBSGdELEVBR25DSCxNQUhtQyxFQUczQkMsS0FIMkIsRUFHcEJDLElBSG9CLEVBR2RFLGtCQUhjO0FBSXZEOzs7OzhCQUVTO0FBQ1IsVUFBTUosU0FBUyxLQUFLSyxTQUFMLEVBQWY7QUFBQSxVQUNNSixRQUFRLEtBQUtLLFFBQUwsRUFEZDtBQUFBLFVBRU1KLE9BQU8sS0FBS0ssT0FBTCxFQUZiO0FBQUEsVUFHTUgscUJBQXFCLEtBQUtJLHFCQUFMLEVBSDNCOztBQUtBUixhQUFPUyxJQUFQLGdCQUFZLElBQVosRUFBa0JSLEtBQWxCLEVBQXlCQyxJQUF6Qiw0QkFBa0NFLGtCQUFsQztBQUNEOzs7O0VBZDJCUCxJOztBQWlCOUJhLE9BQU9DLE9BQVAsR0FBaUJaLGVBQWpCIiwiZmlsZSI6InN5bmNocm9ub3VzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgVGFzayA9IHJlcXVpcmUoJy4uL3Rhc2snKTtcclxuXHJcbmNsYXNzIFN5bmNocm9ub3VzVGFzayBleHRlbmRzIFRhc2sge1xyXG4gIGNvbnN0cnVjdG9yKG1ldGhvZCwgbW9kZWwsIHZpZXcsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xyXG4gICAgY29uc3Qgc3luY2hyb25vdXMgPSB0cnVlO1xyXG4gICAgXHJcbiAgICBzdXBlcihzeW5jaHJvbm91cywgbWV0aG9kLCBtb2RlbCwgdmlldywgcmVtYWluaW5nQXJndW1lbnRzKTtcclxuICB9XHJcblxyXG4gIGV4ZWN1dGUoKSB7XHJcbiAgICBjb25zdCBtZXRob2QgPSB0aGlzLmdldE1ldGhvZCgpLFxyXG4gICAgICAgICAgbW9kZWwgPSB0aGlzLmdldE1vZGVsKCksXHJcbiAgICAgICAgICB2aWV3ID0gdGhpcy5nZXRWaWV3KCksXHJcbiAgICAgICAgICByZW1haW5pbmdBcmd1bWVudHMgPSB0aGlzLmdldFJlbWFpbmluZ0FyZ3VtZW50cygpO1xyXG4gICAgXHJcbiAgICBtZXRob2QuY2FsbChudWxsLCBtb2RlbCwgdmlldywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gU3luY2hyb25vdXNUYXNrO1xyXG4iXX0=