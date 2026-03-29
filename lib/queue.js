"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Queue;
    }
});
const _necessary = require("necessary");
const { first } = _necessary.arrayUtilities;
class Queue {
    constructor(tasks){
        this.tasks = tasks;
    }
    getTasks() {
        return this.tasks;
    }
    addTask(task) {
        const empty = this.isEmpty();
        this.tasks.push(task);
        if (empty) {
            this.executeFirstTask();
        }
    }
    executeFirstTask() {
        const firstTask = first(this.tasks);
        defer(()=>{
            const task = firstTask; ///
            this.executeTask(task);
        });
    }
    executeTask(task) {
        const next = this.next.bind(this);
        task.execute(function() {
            const callback = task.getCallback();
            callback.apply(task, arguments);
            next();
        });
    }
    next() {
        this.tasks.shift();
        const empty = this.isEmpty();
        if (!empty) {
            this.executeFirstTask();
        }
    }
    isEmpty() {
        const tasksLength = this.tasks.length, empty = tasksLength === 0;
        return empty;
    }
    static fromNothing() {
        const tasks = [], queue = new Queue(tasks);
        return queue;
    }
}
function defer(func) {
    setTimeout(func, 0);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9xdWV1ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xyXG5cclxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRdWV1ZSB7XHJcbiAgY29uc3RydWN0b3IodGFza3MpIHtcclxuICAgIHRoaXMudGFza3MgPSB0YXNrcztcclxuICB9XHJcblxyXG4gIGdldFRhc2tzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudGFza3M7XHJcbiAgfVxyXG5cclxuICBhZGRUYXNrKHRhc2spIHtcclxuICAgIGNvbnN0IGVtcHR5ID0gdGhpcy5pc0VtcHR5KCk7XHJcblxyXG4gICAgdGhpcy50YXNrcy5wdXNoKHRhc2spO1xyXG5cclxuICAgIGlmIChlbXB0eSkge1xyXG4gICAgICB0aGlzLmV4ZWN1dGVGaXJzdFRhc2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV4ZWN1dGVGaXJzdFRhc2soKSB7XHJcbiAgICBjb25zdCBmaXJzdFRhc2sgPSBmaXJzdCh0aGlzLnRhc2tzKTtcclxuXHJcbiAgICBkZWZlcigoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHRhc2sgPSBmaXJzdFRhc2s7ICAvLy9cclxuXHJcbiAgICAgIHRoaXMuZXhlY3V0ZVRhc2sodGFzayk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGV4ZWN1dGVUYXNrKHRhc2spIHtcclxuICAgIGNvbnN0IG5leHQgPSB0aGlzLm5leHQuYmluZCh0aGlzKTtcclxuXHJcbiAgICB0YXNrLmV4ZWN1dGUoZnVuY3Rpb24oKSB7IC8vL1xyXG4gICAgICBjb25zdCBjYWxsYmFjayA9IHRhc2suZ2V0Q2FsbGJhY2soKTtcclxuICAgICAgXHJcbiAgICAgIGNhbGxiYWNrLmFwcGx5KHRhc2ssIGFyZ3VtZW50cyk7XHJcbiAgICAgIFxyXG4gICAgICBuZXh0KCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5leHQoKSB7XHJcbiAgICB0aGlzLnRhc2tzLnNoaWZ0KCk7XHJcblxyXG4gICAgY29uc3QgZW1wdHkgPSB0aGlzLmlzRW1wdHkoKTtcclxuXHJcbiAgICBpZiAoIWVtcHR5KSB7XHJcbiAgICAgIHRoaXMuZXhlY3V0ZUZpcnN0VGFzaygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaXNFbXB0eSgpIHtcclxuICAgIGNvbnN0IHRhc2tzTGVuZ3RoID0gdGhpcy50YXNrcy5sZW5ndGgsXHJcbiAgICAgICAgICBlbXB0eSA9ICh0YXNrc0xlbmd0aCA9PT0gMCk7XHJcblxyXG4gICAgcmV0dXJuIGVtcHR5O1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xyXG4gICAgY29uc3QgdGFza3MgPSBbXSxcclxuICAgICAgICAgIHF1ZXVlID0gbmV3IFF1ZXVlKHRhc2tzKTtcclxuXHJcbiAgICByZXR1cm4gcXVldWU7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBkZWZlcihmdW5jKSB7XHJcbiAgc2V0VGltZW91dChmdW5jLCAwKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUXVldWUiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwidGFza3MiLCJnZXRUYXNrcyIsImFkZFRhc2siLCJ0YXNrIiwiZW1wdHkiLCJpc0VtcHR5IiwicHVzaCIsImV4ZWN1dGVGaXJzdFRhc2siLCJmaXJzdFRhc2siLCJkZWZlciIsImV4ZWN1dGVUYXNrIiwibmV4dCIsImJpbmQiLCJleGVjdXRlIiwiY2FsbGJhY2siLCJnZXRDYWxsYmFjayIsImFwcGx5IiwiYXJndW1lbnRzIiwic2hpZnQiLCJ0YXNrc0xlbmd0aCIsImxlbmd0aCIsImZyb21Ob3RoaW5nIiwicXVldWUiLCJmdW5jIiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFxQkE7OzsyQkFKVTtBQUUvQixNQUFNLEVBQUVDLEtBQUssRUFBRSxHQUFHQyx5QkFBYztBQUVqQixNQUFNRjtJQUNuQixZQUFZRyxLQUFLLENBQUU7UUFDakIsSUFBSSxDQUFDQSxLQUFLLEdBQUdBO0lBQ2Y7SUFFQUMsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDRCxLQUFLO0lBQ25CO0lBRUFFLFFBQVFDLElBQUksRUFBRTtRQUNaLE1BQU1DLFFBQVEsSUFBSSxDQUFDQyxPQUFPO1FBRTFCLElBQUksQ0FBQ0wsS0FBSyxDQUFDTSxJQUFJLENBQUNIO1FBRWhCLElBQUlDLE9BQU87WUFDVCxJQUFJLENBQUNHLGdCQUFnQjtRQUN2QjtJQUNGO0lBRUFBLG1CQUFtQjtRQUNqQixNQUFNQyxZQUFZVixNQUFNLElBQUksQ0FBQ0UsS0FBSztRQUVsQ1MsTUFBTTtZQUNKLE1BQU1OLE9BQU9LLFdBQVksR0FBRztZQUU1QixJQUFJLENBQUNFLFdBQVcsQ0FBQ1A7UUFDbkI7SUFDRjtJQUVBTyxZQUFZUCxJQUFJLEVBQUU7UUFDaEIsTUFBTVEsT0FBTyxJQUFJLENBQUNBLElBQUksQ0FBQ0MsSUFBSSxDQUFDLElBQUk7UUFFaENULEtBQUtVLE9BQU8sQ0FBQztZQUNYLE1BQU1DLFdBQVdYLEtBQUtZLFdBQVc7WUFFakNELFNBQVNFLEtBQUssQ0FBQ2IsTUFBTWM7WUFFckJOO1FBQ0Y7SUFDRjtJQUVBQSxPQUFPO1FBQ0wsSUFBSSxDQUFDWCxLQUFLLENBQUNrQixLQUFLO1FBRWhCLE1BQU1kLFFBQVEsSUFBSSxDQUFDQyxPQUFPO1FBRTFCLElBQUksQ0FBQ0QsT0FBTztZQUNWLElBQUksQ0FBQ0csZ0JBQWdCO1FBQ3ZCO0lBQ0Y7SUFFQUYsVUFBVTtRQUNSLE1BQU1jLGNBQWMsSUFBSSxDQUFDbkIsS0FBSyxDQUFDb0IsTUFBTSxFQUMvQmhCLFFBQVNlLGdCQUFnQjtRQUUvQixPQUFPZjtJQUNUO0lBRUEsT0FBT2lCLGNBQWM7UUFDbkIsTUFBTXJCLFFBQVEsRUFBRSxFQUNWc0IsUUFBUSxJQUFJekIsTUFBTUc7UUFFeEIsT0FBT3NCO0lBQ1Q7QUFDRjtBQUVBLFNBQVNiLE1BQU1jLElBQUk7SUFDakJDLFdBQVdELE1BQU07QUFDbkIifQ==