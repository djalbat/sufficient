"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

exports["default"] = Task;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhc2suanMiXSwibmFtZXMiOlsiVGFzayIsInN5bmNocm9ub3VzIiwibWV0aG9kIiwicmVtYWluaW5nQXJndW1lbnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7OztJQUVxQkEsSTtBQUNuQixnQkFBWUMsV0FBWixFQUF5QkMsTUFBekIsRUFBaUNDLGtCQUFqQyxFQUFxRDtBQUFBOztBQUNuRCxTQUFLRixXQUFMLEdBQW1CQSxXQUFuQjtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLGtCQUFMLEdBQTBCQSxrQkFBMUI7QUFDRDs7OztvQ0FFZTtBQUNkLGFBQU8sS0FBS0YsV0FBWjtBQUNEOzs7Z0NBRVc7QUFDVixhQUFPLEtBQUtDLE1BQVo7QUFDRDs7OzRDQUV1QjtBQUN0QixhQUFPLEtBQUtDLGtCQUFaO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xyXG4gIGNvbnN0cnVjdG9yKHN5bmNocm9ub3VzLCBtZXRob2QsIHJlbWFpbmluZ0FyZ3VtZW50cykge1xyXG4gICAgdGhpcy5zeW5jaHJvbm91cyA9IHN5bmNocm9ub3VzOyAgICBcclxuICAgIHRoaXMubWV0aG9kID0gbWV0aG9kO1xyXG4gICAgdGhpcy5yZW1haW5pbmdBcmd1bWVudHMgPSByZW1haW5pbmdBcmd1bWVudHM7ICAgIFxyXG4gIH1cclxuICBcclxuICBpc1N5bmNocm9ub3VzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3luY2hyb25vdXM7XHJcbiAgfVxyXG4gIFxyXG4gIGdldE1ldGhvZCgpIHtcclxuICAgIHJldHVybiB0aGlzLm1ldGhvZDtcclxuICB9XHJcbiAgXHJcbiAgZ2V0UmVtYWluaW5nQXJndW1lbnRzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVtYWluaW5nQXJndW1lbnRzO1xyXG4gIH1cclxufVxyXG4iXX0=