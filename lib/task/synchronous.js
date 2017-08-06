'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SynchronousTask = function () {
    function SynchronousTask(method, model, view) {
        _classCallCheck(this, SynchronousTask);

        this.method = method;

        this.model = model;

        this.view = view;

        for (var _len = arguments.length, remainingArguments = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
            remainingArguments[_key - 3] = arguments[_key];
        }

        this.remainingArguments = remainingArguments;
    }

    _createClass(SynchronousTask, [{
        key: 'execute',
        value: function execute(done) {
            var _method;

            (_method = this.method).call.apply(_method, [null, this.model, this.view].concat(_toConsumableArray(this.remainingArguments)));

            done();
        }
    }]);

    return SynchronousTask;
}();

module.exports = SynchronousTask;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi90YXNrL3N5bmNocm9ub3VzLmpzIl0sIm5hbWVzIjpbIlN5bmNocm9ub3VzVGFzayIsIm1ldGhvZCIsIm1vZGVsIiwidmlldyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsImRvbmUiLCJjYWxsIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0lBRU1BLGU7QUFDSiw2QkFBWUMsTUFBWixFQUFvQkMsS0FBcEIsRUFBMkJDLElBQTNCLEVBQXdEO0FBQUE7O0FBR3RELGFBQUtGLE1BQUwsR0FBY0EsTUFBZDs7QUFFQSxhQUFLQyxLQUFMLEdBQWFBLEtBQWI7O0FBRUEsYUFBS0MsSUFBTCxHQUFZQSxJQUFaOztBQVBzRCwwQ0FBcEJDLGtCQUFvQjtBQUFwQkEsOEJBQW9CO0FBQUE7O0FBU3RELGFBQUtBLGtCQUFMLEdBQTBCQSxrQkFBMUI7QUFLRDs7OztnQ0FFT0MsSSxFQUFNO0FBQUE7O0FBQ1osNEJBQUtKLE1BQUwsRUFBWUssSUFBWixpQkFBaUIsSUFBakIsRUFBdUIsS0FBS0osS0FBNUIsRUFBbUMsS0FBS0MsSUFBeEMsNEJBQWlELEtBQUtDLGtCQUF0RDs7QUFFQUM7QUFDRDs7Ozs7O0FBR0hFLE9BQU9DLE9BQVAsR0FBaUJSLGVBQWpCIiwiZmlsZSI6InN5bmNocm9ub3VzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY2xhc3MgU3luY2hyb25vdXNUYXNrIHtcclxuICBjb25zdHJ1Y3RvcihtZXRob2QsIG1vZGVsLCB2aWV3LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcclxuXHJcbiAgICBcclxuICAgIHRoaXMubWV0aG9kID0gbWV0aG9kO1xyXG5cclxuICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcclxuXHJcbiAgICB0aGlzLnZpZXcgPSB2aWV3O1xyXG5cclxuICAgIHRoaXMucmVtYWluaW5nQXJndW1lbnRzID0gcmVtYWluaW5nQXJndW1lbnRzO1xyXG5cclxuXHJcbiAgICBcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgZXhlY3V0ZShkb25lKSB7XHJcbiAgICB0aGlzLm1ldGhvZC5jYWxsKG51bGwsIHRoaXMubW9kZWwsIHRoaXMudmlldywgLi4udGhpcy5yZW1haW5pbmdBcmd1bWVudHMpO1xyXG5cclxuICAgIGRvbmUoKTtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gU3luY2hyb25vdXNUYXNrO1xyXG4iXX0=