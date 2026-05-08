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
        const firstTask = first(this.tasks), task = firstTask; ///
        this.executeTask(task);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9xdWV1ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xyXG5cclxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRdWV1ZSB7XHJcbiAgY29uc3RydWN0b3IodGFza3MpIHtcclxuICAgIHRoaXMudGFza3MgPSB0YXNrcztcclxuICB9XHJcblxyXG4gIGdldFRhc2tzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudGFza3M7XHJcbiAgfVxyXG5cclxuICBhZGRUYXNrKHRhc2spIHtcclxuICAgIGNvbnN0IGVtcHR5ID0gdGhpcy5pc0VtcHR5KCk7XHJcblxyXG4gICAgdGhpcy50YXNrcy5wdXNoKHRhc2spO1xyXG5cclxuICAgIGlmIChlbXB0eSkge1xyXG4gICAgICB0aGlzLmV4ZWN1dGVGaXJzdFRhc2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV4ZWN1dGVGaXJzdFRhc2soKSB7XHJcbiAgICBjb25zdCBmaXJzdFRhc2sgPSBmaXJzdCh0aGlzLnRhc2tzKSxcclxuICAgICAgICAgIHRhc2sgPSBmaXJzdFRhc2s7ICAvLy9cclxuXHJcbiAgICB0aGlzLmV4ZWN1dGVUYXNrKHRhc2spO1xyXG4gIH1cclxuXHJcbiAgZXhlY3V0ZVRhc2sodGFzaykge1xyXG4gICAgY29uc3QgbmV4dCA9IHRoaXMubmV4dC5iaW5kKHRoaXMpO1xyXG5cclxuICAgIHRhc2suZXhlY3V0ZShmdW5jdGlvbigpIHsgLy8vXHJcbiAgICAgIGNvbnN0IGNhbGxiYWNrID0gdGFzay5nZXRDYWxsYmFjaygpO1xyXG4gICAgICBcclxuICAgICAgY2FsbGJhY2suYXBwbHkodGFzaywgYXJndW1lbnRzKTtcclxuICAgICAgXHJcbiAgICAgIG5leHQoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmV4dCgpIHtcclxuICAgIHRoaXMudGFza3Muc2hpZnQoKTtcclxuXHJcbiAgICBjb25zdCBlbXB0eSA9IHRoaXMuaXNFbXB0eSgpO1xyXG5cclxuICAgIGlmICghZW1wdHkpIHtcclxuICAgICAgdGhpcy5leGVjdXRlRmlyc3RUYXNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpc0VtcHR5KCkge1xyXG4gICAgY29uc3QgdGFza3NMZW5ndGggPSB0aGlzLnRhc2tzLmxlbmd0aCxcclxuICAgICAgICAgIGVtcHR5ID0gKHRhc2tzTGVuZ3RoID09PSAwKTtcclxuXHJcbiAgICByZXR1cm4gZW1wdHk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XHJcbiAgICBjb25zdCB0YXNrcyA9IFtdLFxyXG4gICAgICAgICAgcXVldWUgPSBuZXcgUXVldWUodGFza3MpO1xyXG5cclxuICAgIHJldHVybiBxdWV1ZTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIlF1ZXVlIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsInRhc2tzIiwiZ2V0VGFza3MiLCJhZGRUYXNrIiwidGFzayIsImVtcHR5IiwiaXNFbXB0eSIsInB1c2giLCJleGVjdXRlRmlyc3RUYXNrIiwiZmlyc3RUYXNrIiwiZXhlY3V0ZVRhc2siLCJuZXh0IiwiYmluZCIsImV4ZWN1dGUiLCJjYWxsYmFjayIsImdldENhbGxiYWNrIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJzaGlmdCIsInRhc2tzTGVuZ3RoIiwibGVuZ3RoIiwiZnJvbU5vdGhpbmciLCJxdWV1ZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFxQkE7OzsyQkFKVTtBQUUvQixNQUFNLEVBQUVDLEtBQUssRUFBRSxHQUFHQyx5QkFBYztBQUVqQixNQUFNRjtJQUNuQixZQUFZRyxLQUFLLENBQUU7UUFDakIsSUFBSSxDQUFDQSxLQUFLLEdBQUdBO0lBQ2Y7SUFFQUMsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDRCxLQUFLO0lBQ25CO0lBRUFFLFFBQVFDLElBQUksRUFBRTtRQUNaLE1BQU1DLFFBQVEsSUFBSSxDQUFDQyxPQUFPO1FBRTFCLElBQUksQ0FBQ0wsS0FBSyxDQUFDTSxJQUFJLENBQUNIO1FBRWhCLElBQUlDLE9BQU87WUFDVCxJQUFJLENBQUNHLGdCQUFnQjtRQUN2QjtJQUNGO0lBRUFBLG1CQUFtQjtRQUNqQixNQUFNQyxZQUFZVixNQUFNLElBQUksQ0FBQ0UsS0FBSyxHQUM1QkcsT0FBT0ssV0FBWSxHQUFHO1FBRTVCLElBQUksQ0FBQ0MsV0FBVyxDQUFDTjtJQUNuQjtJQUVBTSxZQUFZTixJQUFJLEVBQUU7UUFDaEIsTUFBTU8sT0FBTyxJQUFJLENBQUNBLElBQUksQ0FBQ0MsSUFBSSxDQUFDLElBQUk7UUFFaENSLEtBQUtTLE9BQU8sQ0FBQztZQUNYLE1BQU1DLFdBQVdWLEtBQUtXLFdBQVc7WUFFakNELFNBQVNFLEtBQUssQ0FBQ1osTUFBTWE7WUFFckJOO1FBQ0Y7SUFDRjtJQUVBQSxPQUFPO1FBQ0wsSUFBSSxDQUFDVixLQUFLLENBQUNpQixLQUFLO1FBRWhCLE1BQU1iLFFBQVEsSUFBSSxDQUFDQyxPQUFPO1FBRTFCLElBQUksQ0FBQ0QsT0FBTztZQUNWLElBQUksQ0FBQ0csZ0JBQWdCO1FBQ3ZCO0lBQ0Y7SUFFQUYsVUFBVTtRQUNSLE1BQU1hLGNBQWMsSUFBSSxDQUFDbEIsS0FBSyxDQUFDbUIsTUFBTSxFQUMvQmYsUUFBU2MsZ0JBQWdCO1FBRS9CLE9BQU9kO0lBQ1Q7SUFFQSxPQUFPZ0IsY0FBYztRQUNuQixNQUFNcEIsUUFBUSxFQUFFLEVBQ1ZxQixRQUFRLElBQUl4QixNQUFNRztRQUV4QixPQUFPcUI7SUFDVDtBQUNGIn0=