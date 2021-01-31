"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _necessary = require("necessary");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var first = _necessary.arrayUtilities.first;

var Queue = /*#__PURE__*/function () {
  function Queue(tasks) {
    _classCallCheck(this, Queue);

    this.tasks = tasks;
  }

  _createClass(Queue, [{
    key: "addTask",
    value: function addTask(task) {
      var empty = this.isEmpty();
      this.tasks.push(task);

      if (empty) {
        this.executeFirstTask();
      }
    }
  }, {
    key: "executeFirstTask",
    value: function executeFirstTask() {
      var _this = this;

      var firstTask = first(this.tasks),
          firstTaskSynchronous = firstTask.isSynchronous();
      setTimeout(function () {
        if (firstTaskSynchronous) {
          ///
          var synchronousTask = firstTask; ///

          _this.executeSynchronousTask(synchronousTask);
        } else {
          var asynchronousTask = firstTask; ///

          _this.executeAsynchronousTask(asynchronousTask);
        }
      }, 0);
    }
  }, {
    key: "executeSynchronousTask",
    value: function executeSynchronousTask(synchronousTask) {
      synchronousTask.execute();
      this.next();
    }
  }, {
    key: "executeAsynchronousTask",
    value: function executeAsynchronousTask(asynchronousTask) {
      var next = this.next.bind(this);
      asynchronousTask.execute(function () {
        ///
        var callback = asynchronousTask.getCallback();
        callback.apply(asynchronousTask, arguments);
        next();
      });
    }
  }, {
    key: "next",
    value: function next() {
      this.tasks.shift();
      var empty = this.isEmpty();

      if (!empty) {
        this.executeFirstTask();
      }
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      var tasksLength = this.tasks.length,
          empty = tasksLength === 0;
      return empty;
    }
  }], [{
    key: "fromNothing",
    value: function fromNothing() {
      var tasks = [],
          queue = new Queue(tasks);
      return queue;
    }
  }]);

  return Queue;
}();

exports["default"] = Queue;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZXVlLmpzIl0sIm5hbWVzIjpbImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJRdWV1ZSIsInRhc2tzIiwidGFzayIsImVtcHR5IiwiaXNFbXB0eSIsInB1c2giLCJleGVjdXRlRmlyc3RUYXNrIiwiZmlyc3RUYXNrIiwiZmlyc3RUYXNrU3luY2hyb25vdXMiLCJpc1N5bmNocm9ub3VzIiwic2V0VGltZW91dCIsInN5bmNocm9ub3VzVGFzayIsImV4ZWN1dGVTeW5jaHJvbm91c1Rhc2siLCJhc3luY2hyb25vdXNUYXNrIiwiZXhlY3V0ZUFzeW5jaHJvbm91c1Rhc2siLCJleGVjdXRlIiwibmV4dCIsImJpbmQiLCJjYWxsYmFjayIsImdldENhbGxiYWNrIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJzaGlmdCIsInRhc2tzTGVuZ3RoIiwibGVuZ3RoIiwicXVldWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7Ozs7Ozs7O0lBRVFBLEssR0FBVUMseUIsQ0FBVkQsSzs7SUFFYUUsSztBQUNuQixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7Ozs0QkFFT0MsSSxFQUFNO0FBQ1osVUFBTUMsS0FBSyxHQUFHLEtBQUtDLE9BQUwsRUFBZDtBQUVBLFdBQUtILEtBQUwsQ0FBV0ksSUFBWCxDQUFnQkgsSUFBaEI7O0FBRUEsVUFBSUMsS0FBSixFQUFXO0FBQ1QsYUFBS0csZ0JBQUw7QUFDRDtBQUNGOzs7dUNBRWtCO0FBQUE7O0FBQ2pCLFVBQU1DLFNBQVMsR0FBR1QsS0FBSyxDQUFDLEtBQUtHLEtBQU4sQ0FBdkI7QUFBQSxVQUNNTyxvQkFBb0IsR0FBR0QsU0FBUyxDQUFDRSxhQUFWLEVBRDdCO0FBR0FDLE1BQUFBLFVBQVUsQ0FBQyxZQUFNO0FBQ2YsWUFBSUYsb0JBQUosRUFBMEI7QUFBRTtBQUMxQixjQUFNRyxlQUFlLEdBQUdKLFNBQXhCLENBRHdCLENBQ1k7O0FBRXBDLFVBQUEsS0FBSSxDQUFDSyxzQkFBTCxDQUE0QkQsZUFBNUI7QUFDRCxTQUpELE1BSU87QUFDTCxjQUFNRSxnQkFBZ0IsR0FBR04sU0FBekIsQ0FESyxDQUNnQzs7QUFFckMsVUFBQSxLQUFJLENBQUNPLHVCQUFMLENBQTZCRCxnQkFBN0I7QUFDRDtBQUNGLE9BVlMsRUFVUCxDQVZPLENBQVY7QUFXRDs7OzJDQUVzQkYsZSxFQUFpQjtBQUN0Q0EsTUFBQUEsZUFBZSxDQUFDSSxPQUFoQjtBQUVBLFdBQUtDLElBQUw7QUFDRDs7OzRDQUV1QkgsZ0IsRUFBa0I7QUFDeEMsVUFBTUcsSUFBSSxHQUFHLEtBQUtBLElBQUwsQ0FBVUMsSUFBVixDQUFlLElBQWYsQ0FBYjtBQUVBSixNQUFBQSxnQkFBZ0IsQ0FBQ0UsT0FBakIsQ0FBeUIsWUFBVztBQUFFO0FBQ3BDLFlBQU1HLFFBQVEsR0FBR0wsZ0JBQWdCLENBQUNNLFdBQWpCLEVBQWpCO0FBRUFELFFBQUFBLFFBQVEsQ0FBQ0UsS0FBVCxDQUFlUCxnQkFBZixFQUFpQ1EsU0FBakM7QUFFQUwsUUFBQUEsSUFBSTtBQUNMLE9BTkQ7QUFPRDs7OzJCQUVNO0FBQ0wsV0FBS2YsS0FBTCxDQUFXcUIsS0FBWDtBQUVBLFVBQU1uQixLQUFLLEdBQUcsS0FBS0MsT0FBTCxFQUFkOztBQUVBLFVBQUksQ0FBQ0QsS0FBTCxFQUFZO0FBQ1YsYUFBS0csZ0JBQUw7QUFDRDtBQUNGOzs7OEJBRVM7QUFDUixVQUFNaUIsV0FBVyxHQUFHLEtBQUt0QixLQUFMLENBQVd1QixNQUEvQjtBQUFBLFVBQ01yQixLQUFLLEdBQUlvQixXQUFXLEtBQUssQ0FEL0I7QUFHQSxhQUFPcEIsS0FBUDtBQUNEOzs7a0NBRW9CO0FBQ25CLFVBQU1GLEtBQUssR0FBRyxFQUFkO0FBQUEsVUFDTXdCLEtBQUssR0FBRyxJQUFJekIsS0FBSixDQUFVQyxLQUFWLENBRGQ7QUFHQSxhQUFPd0IsS0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcclxuXHJcbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVldWUge1xyXG4gIGNvbnN0cnVjdG9yKHRhc2tzKSB7XHJcbiAgICB0aGlzLnRhc2tzID0gdGFza3M7XHJcbiAgfVxyXG5cclxuICBhZGRUYXNrKHRhc2spIHtcclxuICAgIGNvbnN0IGVtcHR5ID0gdGhpcy5pc0VtcHR5KCk7XHJcblxyXG4gICAgdGhpcy50YXNrcy5wdXNoKHRhc2spO1xyXG5cclxuICAgIGlmIChlbXB0eSkge1xyXG4gICAgICB0aGlzLmV4ZWN1dGVGaXJzdFRhc2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV4ZWN1dGVGaXJzdFRhc2soKSB7XHJcbiAgICBjb25zdCBmaXJzdFRhc2sgPSBmaXJzdCh0aGlzLnRhc2tzKSxcclxuICAgICAgICAgIGZpcnN0VGFza1N5bmNocm9ub3VzID0gZmlyc3RUYXNrLmlzU3luY2hyb25vdXMoKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKGZpcnN0VGFza1N5bmNocm9ub3VzKSB7IC8vL1xyXG4gICAgICAgIGNvbnN0IHN5bmNocm9ub3VzVGFzayA9IGZpcnN0VGFzazsgIC8vL1xyXG5cclxuICAgICAgICB0aGlzLmV4ZWN1dGVTeW5jaHJvbm91c1Rhc2soc3luY2hyb25vdXNUYXNrKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBhc3luY2hyb25vdXNUYXNrID0gZmlyc3RUYXNrOyAgLy8vXHJcblxyXG4gICAgICAgIHRoaXMuZXhlY3V0ZUFzeW5jaHJvbm91c1Rhc2soYXN5bmNocm9ub3VzVGFzayk7XHJcbiAgICAgIH1cclxuICAgIH0sIDApO1xyXG4gIH1cclxuXHJcbiAgZXhlY3V0ZVN5bmNocm9ub3VzVGFzayhzeW5jaHJvbm91c1Rhc2spIHtcclxuICAgIHN5bmNocm9ub3VzVGFzay5leGVjdXRlKCk7XHJcblxyXG4gICAgdGhpcy5uZXh0KCk7XHJcbiAgfVxyXG5cclxuICBleGVjdXRlQXN5bmNocm9ub3VzVGFzayhhc3luY2hyb25vdXNUYXNrKSB7XHJcbiAgICBjb25zdCBuZXh0ID0gdGhpcy5uZXh0LmJpbmQodGhpcyk7XHJcblxyXG4gICAgYXN5bmNocm9ub3VzVGFzay5leGVjdXRlKGZ1bmN0aW9uKCkgeyAvLy9cclxuICAgICAgY29uc3QgY2FsbGJhY2sgPSBhc3luY2hyb25vdXNUYXNrLmdldENhbGxiYWNrKCk7XHJcbiAgICAgIFxyXG4gICAgICBjYWxsYmFjay5hcHBseShhc3luY2hyb25vdXNUYXNrLCBhcmd1bWVudHMpO1xyXG4gICAgICBcclxuICAgICAgbmV4dCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZXh0KCkge1xyXG4gICAgdGhpcy50YXNrcy5zaGlmdCgpO1xyXG5cclxuICAgIGNvbnN0IGVtcHR5ID0gdGhpcy5pc0VtcHR5KCk7XHJcblxyXG4gICAgaWYgKCFlbXB0eSkge1xyXG4gICAgICB0aGlzLmV4ZWN1dGVGaXJzdFRhc2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlzRW1wdHkoKSB7XHJcbiAgICBjb25zdCB0YXNrc0xlbmd0aCA9IHRoaXMudGFza3MubGVuZ3RoLFxyXG4gICAgICAgICAgZW1wdHkgPSAodGFza3NMZW5ndGggPT09IDApO1xyXG5cclxuICAgIHJldHVybiBlbXB0eTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcclxuICAgIGNvbnN0IHRhc2tzID0gW10sXHJcbiAgICAgICAgICBxdWV1ZSA9IG5ldyBRdWV1ZSh0YXNrcyk7XHJcblxyXG4gICAgcmV0dXJuIHF1ZXVlO1xyXG4gIH1cclxufVxyXG4iXX0=