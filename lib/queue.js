'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var array = necessary.array,
    first = array.first;

var Queue = function () {
  function Queue() {
    _classCallCheck(this, Queue);

    this.tasks = [];
  }

  _createClass(Queue, [{
    key: 'addTask',
    value: function addTask(task) {
      var empty = this.isEmpty();

      this.tasks.push(task);

      if (empty) {
        task.execute(this.intermediateCallback.bind(this));
      }
    }
  }, {
    key: 'intermediateCallback',
    value: function intermediateCallback() {
      var firstTask = first(this.tasks);

      if (firstTask.callback) {
        firstTask.callback.apply(firstTask, arguments);
      }

      this.tasks.shift();

      this.next();
    }
  }, {
    key: 'next',
    value: function next() {
      var empty = this.isEmpty();

      if (!empty) {
        var firstTask = first(this.tasks);

        firstTask.execute(this.intermediateCallback.bind(this));
      }
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      var tasksLength = this.tasks.length,
          empty = tasksLength === 0;

      return empty;
    }
  }]);

  return Queue;
}();

module.exports = Queue;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9xdWV1ZS5qcyJdLCJuYW1lcyI6WyJuZWNlc3NhcnkiLCJyZXF1aXJlIiwiYXJyYXkiLCJmaXJzdCIsIlF1ZXVlIiwidGFza3MiLCJ0YXNrIiwiZW1wdHkiLCJpc0VtcHR5IiwicHVzaCIsImV4ZWN1dGUiLCJpbnRlcm1lZGlhdGVDYWxsYmFjayIsImJpbmQiLCJmaXJzdFRhc2siLCJjYWxsYmFjayIsImFwcGx5IiwiYXJndW1lbnRzIiwic2hpZnQiLCJuZXh0IiwidGFza3NMZW5ndGgiLCJsZW5ndGgiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxXQUFSLENBQWxCOztBQUVNLElBQUVDLEtBQUYsR0FBWUYsU0FBWixDQUFFRSxLQUFGO0FBQUEsSUFDRUMsS0FERixHQUNZRCxLQURaLENBQ0VDLEtBREY7O0lBR0FDLEs7QUFDSixtQkFBYztBQUFBOztBQUNaLFNBQUtDLEtBQUwsR0FBYSxFQUFiO0FBQ0Q7Ozs7NEJBRU9DLEksRUFBTTtBQUNaLFVBQU1DLFFBQVEsS0FBS0MsT0FBTCxFQUFkOztBQUVBLFdBQUtILEtBQUwsQ0FBV0ksSUFBWCxDQUFnQkgsSUFBaEI7O0FBRUEsVUFBSUMsS0FBSixFQUFXO0FBQ1RELGFBQUtJLE9BQUwsQ0FBYSxLQUFLQyxvQkFBTCxDQUEwQkMsSUFBMUIsQ0FBK0IsSUFBL0IsQ0FBYjtBQUNEO0FBQ0Y7OzsyQ0FFc0I7QUFDckIsVUFBTUMsWUFBWVYsTUFBTSxLQUFLRSxLQUFYLENBQWxCOztBQUVBLFVBQUlRLFVBQVVDLFFBQWQsRUFBd0I7QUFDdEJELGtCQUFVQyxRQUFWLENBQW1CQyxLQUFuQixDQUF5QkYsU0FBekIsRUFBb0NHLFNBQXBDO0FBQ0Q7O0FBRUQsV0FBS1gsS0FBTCxDQUFXWSxLQUFYOztBQUVBLFdBQUtDLElBQUw7QUFDRDs7OzJCQUVNO0FBQ0wsVUFBTVgsUUFBUSxLQUFLQyxPQUFMLEVBQWQ7O0FBRUEsVUFBSSxDQUFDRCxLQUFMLEVBQVk7QUFDVixZQUFNTSxZQUFZVixNQUFNLEtBQUtFLEtBQVgsQ0FBbEI7O0FBRUFRLGtCQUFVSCxPQUFWLENBQWtCLEtBQUtDLG9CQUFMLENBQTBCQyxJQUExQixDQUErQixJQUEvQixDQUFsQjtBQUNEO0FBQ0Y7Ozs4QkFFUztBQUNSLFVBQU1PLGNBQWMsS0FBS2QsS0FBTCxDQUFXZSxNQUEvQjtBQUFBLFVBQ01iLFFBQVNZLGdCQUFnQixDQUQvQjs7QUFHQSxhQUFPWixLQUFQO0FBQ0Q7Ozs7OztBQUdIYyxPQUFPQyxPQUFQLEdBQWlCbEIsS0FBakIiLCJmaWxlIjoicXVldWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcclxuXHJcbmNvbnN0IHsgYXJyYXkgfSA9IG5lY2Vzc2FyeSxcclxuICAgICAgeyBmaXJzdCB9ID0gYXJyYXk7XHJcblxyXG5jbGFzcyBRdWV1ZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnRhc2tzID0gW107XHJcbiAgfVxyXG5cclxuICBhZGRUYXNrKHRhc2spIHtcclxuICAgIGNvbnN0IGVtcHR5ID0gdGhpcy5pc0VtcHR5KCk7XHJcblxyXG4gICAgdGhpcy50YXNrcy5wdXNoKHRhc2spO1xyXG5cclxuICAgIGlmIChlbXB0eSkge1xyXG4gICAgICB0YXNrLmV4ZWN1dGUodGhpcy5pbnRlcm1lZGlhdGVDYWxsYmFjay5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGludGVybWVkaWF0ZUNhbGxiYWNrKCkge1xyXG4gICAgY29uc3QgZmlyc3RUYXNrID0gZmlyc3QodGhpcy50YXNrcyk7XHJcblxyXG4gICAgaWYgKGZpcnN0VGFzay5jYWxsYmFjaykge1xyXG4gICAgICBmaXJzdFRhc2suY2FsbGJhY2suYXBwbHkoZmlyc3RUYXNrLCBhcmd1bWVudHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudGFza3Muc2hpZnQoKTtcclxuXHJcbiAgICB0aGlzLm5leHQoKTtcclxuICB9XHJcblxyXG4gIG5leHQoKSB7XHJcbiAgICBjb25zdCBlbXB0eSA9IHRoaXMuaXNFbXB0eSgpO1xyXG5cclxuICAgIGlmICghZW1wdHkpIHtcclxuICAgICAgY29uc3QgZmlyc3RUYXNrID0gZmlyc3QodGhpcy50YXNrcyk7XHJcblxyXG4gICAgICBmaXJzdFRhc2suZXhlY3V0ZSh0aGlzLmludGVybWVkaWF0ZUNhbGxiYWNrLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaXNFbXB0eSgpIHtcclxuICAgIGNvbnN0IHRhc2tzTGVuZ3RoID0gdGhpcy50YXNrcy5sZW5ndGgsXHJcbiAgICAgICAgICBlbXB0eSA9ICh0YXNrc0xlbmd0aCA9PT0gMCk7XHJcblxyXG4gICAgcmV0dXJuIGVtcHR5O1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBRdWV1ZTtcclxuIl19