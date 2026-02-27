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
    constructor(tasks1){
        this.tasks = tasks1;
    }
    getTasks() {
        return tasks;
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
        const tasks1 = [], queue = new Queue(tasks1);
        return queue;
    }
}
function defer(func) {
    setTimeout(func, 0);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9xdWV1ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xyXG5cclxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRdWV1ZSB7XHJcbiAgY29uc3RydWN0b3IodGFza3MpIHtcclxuICAgIHRoaXMudGFza3MgPSB0YXNrcztcclxuICB9XHJcblxyXG4gIGdldFRhc2tzKCkge1xyXG4gICAgcmV0dXJuIHRhc2tzO1xyXG4gIH1cclxuXHJcbiAgYWRkVGFzayh0YXNrKSB7XHJcbiAgICBjb25zdCBlbXB0eSA9IHRoaXMuaXNFbXB0eSgpO1xyXG5cclxuICAgIHRoaXMudGFza3MucHVzaCh0YXNrKTtcclxuXHJcbiAgICBpZiAoZW1wdHkpIHtcclxuICAgICAgdGhpcy5leGVjdXRlRmlyc3RUYXNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBleGVjdXRlRmlyc3RUYXNrKCkge1xyXG4gICAgY29uc3QgZmlyc3RUYXNrID0gZmlyc3QodGhpcy50YXNrcyk7XHJcblxyXG4gICAgZGVmZXIoKCkgPT4ge1xyXG4gICAgICBjb25zdCB0YXNrID0gZmlyc3RUYXNrOyAgLy8vXHJcblxyXG4gICAgICB0aGlzLmV4ZWN1dGVUYXNrKHRhc2spO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBleGVjdXRlVGFzayh0YXNrKSB7XHJcbiAgICBjb25zdCBuZXh0ID0gdGhpcy5uZXh0LmJpbmQodGhpcyk7XHJcblxyXG4gICAgdGFzay5leGVjdXRlKGZ1bmN0aW9uKCkgeyAvLy9cclxuICAgICAgY29uc3QgY2FsbGJhY2sgPSB0YXNrLmdldENhbGxiYWNrKCk7XHJcbiAgICAgIFxyXG4gICAgICBjYWxsYmFjay5hcHBseSh0YXNrLCBhcmd1bWVudHMpO1xyXG4gICAgICBcclxuICAgICAgbmV4dCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZXh0KCkge1xyXG4gICAgdGhpcy50YXNrcy5zaGlmdCgpO1xyXG5cclxuICAgIGNvbnN0IGVtcHR5ID0gdGhpcy5pc0VtcHR5KCk7XHJcblxyXG4gICAgaWYgKCFlbXB0eSkge1xyXG4gICAgICB0aGlzLmV4ZWN1dGVGaXJzdFRhc2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlzRW1wdHkoKSB7XHJcbiAgICBjb25zdCB0YXNrc0xlbmd0aCA9IHRoaXMudGFza3MubGVuZ3RoLFxyXG4gICAgICAgICAgZW1wdHkgPSAodGFza3NMZW5ndGggPT09IDApO1xyXG5cclxuICAgIHJldHVybiBlbXB0eTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcclxuICAgIGNvbnN0IHRhc2tzID0gW10sXHJcbiAgICAgICAgICBxdWV1ZSA9IG5ldyBRdWV1ZSh0YXNrcyk7XHJcblxyXG4gICAgcmV0dXJuIHF1ZXVlO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZGVmZXIoZnVuYykge1xyXG4gIHNldFRpbWVvdXQoZnVuYywgMCk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlF1ZXVlIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsInRhc2tzIiwiZ2V0VGFza3MiLCJhZGRUYXNrIiwidGFzayIsImVtcHR5IiwiaXNFbXB0eSIsInB1c2giLCJleGVjdXRlRmlyc3RUYXNrIiwiZmlyc3RUYXNrIiwiZGVmZXIiLCJleGVjdXRlVGFzayIsIm5leHQiLCJiaW5kIiwiZXhlY3V0ZSIsImNhbGxiYWNrIiwiZ2V0Q2FsbGJhY2siLCJhcHBseSIsImFyZ3VtZW50cyIsInNoaWZ0IiwidGFza3NMZW5ndGgiLCJsZW5ndGgiLCJmcm9tTm90aGluZyIsInF1ZXVlIiwiZnVuYyIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBcUJBOzs7MkJBSlU7QUFFL0IsTUFBTSxFQUFFQyxLQUFLLEVBQUUsR0FBR0MseUJBQWM7QUFFakIsTUFBTUY7SUFDbkIsWUFBWUcsTUFBSyxDQUFFO1FBQ2pCLElBQUksQ0FBQ0EsS0FBSyxHQUFHQTtJQUNmO0lBRUFDLFdBQVc7UUFDVCxPQUFPRDtJQUNUO0lBRUFFLFFBQVFDLElBQUksRUFBRTtRQUNaLE1BQU1DLFFBQVEsSUFBSSxDQUFDQyxPQUFPO1FBRTFCLElBQUksQ0FBQ0wsS0FBSyxDQUFDTSxJQUFJLENBQUNIO1FBRWhCLElBQUlDLE9BQU87WUFDVCxJQUFJLENBQUNHLGdCQUFnQjtRQUN2QjtJQUNGO0lBRUFBLG1CQUFtQjtRQUNqQixNQUFNQyxZQUFZVixNQUFNLElBQUksQ0FBQ0UsS0FBSztRQUVsQ1MsTUFBTTtZQUNKLE1BQU1OLE9BQU9LLFdBQVksR0FBRztZQUU1QixJQUFJLENBQUNFLFdBQVcsQ0FBQ1A7UUFDbkI7SUFDRjtJQUVBTyxZQUFZUCxJQUFJLEVBQUU7UUFDaEIsTUFBTVEsT0FBTyxJQUFJLENBQUNBLElBQUksQ0FBQ0MsSUFBSSxDQUFDLElBQUk7UUFFaENULEtBQUtVLE9BQU8sQ0FBQztZQUNYLE1BQU1DLFdBQVdYLEtBQUtZLFdBQVc7WUFFakNELFNBQVNFLEtBQUssQ0FBQ2IsTUFBTWM7WUFFckJOO1FBQ0Y7SUFDRjtJQUVBQSxPQUFPO1FBQ0wsSUFBSSxDQUFDWCxLQUFLLENBQUNrQixLQUFLO1FBRWhCLE1BQU1kLFFBQVEsSUFBSSxDQUFDQyxPQUFPO1FBRTFCLElBQUksQ0FBQ0QsT0FBTztZQUNWLElBQUksQ0FBQ0csZ0JBQWdCO1FBQ3ZCO0lBQ0Y7SUFFQUYsVUFBVTtRQUNSLE1BQU1jLGNBQWMsSUFBSSxDQUFDbkIsS0FBSyxDQUFDb0IsTUFBTSxFQUMvQmhCLFFBQVNlLGdCQUFnQjtRQUUvQixPQUFPZjtJQUNUO0lBRUEsT0FBT2lCLGNBQWM7UUFDbkIsTUFBTXJCLFNBQVEsRUFBRSxFQUNWc0IsUUFBUSxJQUFJekIsTUFBTUc7UUFFeEIsT0FBT3NCO0lBQ1Q7QUFDRjtBQUVBLFNBQVNiLE1BQU1jLElBQUk7SUFDakJDLFdBQVdELE1BQU07QUFDbkIifQ==