'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Task = /*#__PURE__*/function () {
  function Task(synchronous, method, remainingArguments) {
    _classCallCheck(this, Task);

    this.synchronous = synchronous;
    this.method = method;
    this.remainingArguments = remainingArguments;
  }

  _createClass(Task, [{
    key: "isSynchronous",
    value: function isSynchronous() {
      return this.synchronous;
    }
  }, {
    key: "getMethod",
    value: function getMethod() {
      return this.method;
    }
  }, {
    key: "getRemainingArguments",
    value: function getRemainingArguments() {
      return this.remainingArguments;
    }
  }]);

  return Task;
}();

module.exports = Task;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhc2suanMiXSwibmFtZXMiOlsiVGFzayIsInN5bmNocm9ub3VzIiwibWV0aG9kIiwicmVtYWluaW5nQXJndW1lbnRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0lBRU1BLEk7QUFDSixnQkFBWUMsV0FBWixFQUF5QkMsTUFBekIsRUFBaUNDLGtCQUFqQyxFQUFxRDtBQUFBOztBQUNuRCxTQUFLRixXQUFMLEdBQW1CQSxXQUFuQjtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLGtCQUFMLEdBQTBCQSxrQkFBMUI7QUFDRDs7OztvQ0FFZTtBQUNkLGFBQU8sS0FBS0YsV0FBWjtBQUNEOzs7Z0NBRVc7QUFDVixhQUFPLEtBQUtDLE1BQVo7QUFDRDs7OzRDQUV1QjtBQUN0QixhQUFPLEtBQUtDLGtCQUFaO0FBQ0Q7Ozs7OztBQUdIQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJMLElBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY2xhc3MgVGFzayB7XHJcbiAgY29uc3RydWN0b3Ioc3luY2hyb25vdXMsIG1ldGhvZCwgcmVtYWluaW5nQXJndW1lbnRzKSB7XHJcbiAgICB0aGlzLnN5bmNocm9ub3VzID0gc3luY2hyb25vdXM7ICAgIFxyXG4gICAgdGhpcy5tZXRob2QgPSBtZXRob2Q7XHJcbiAgICB0aGlzLnJlbWFpbmluZ0FyZ3VtZW50cyA9IHJlbWFpbmluZ0FyZ3VtZW50czsgICAgXHJcbiAgfVxyXG4gIFxyXG4gIGlzU3luY2hyb25vdXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zeW5jaHJvbm91cztcclxuICB9XHJcbiAgXHJcbiAgZ2V0TWV0aG9kKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubWV0aG9kO1xyXG4gIH1cclxuICBcclxuICBnZXRSZW1haW5pbmdBcmd1bWVudHMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZW1haW5pbmdBcmd1bWVudHM7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFRhc2s7XHJcbiJdfQ==