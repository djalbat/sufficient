"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Scheduler;
    }
});
const _queue = /*#__PURE__*/ _interop_require_default(require("./queue"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class Scheduler {
    constructor(queue){
        this.queue = queue;
    }
    getQueue() {
        return this.queue;
    }
    addTaskToQueue(task) {
        this.queue.addTask(task);
    }
    executeImmediately(callback) {
        let successful = false;
        const queueEmpty = this.queue.isEmpty();
        if (queueEmpty) {
            callback();
            successful = true;
        }
        return successful;
    }
    executeTaskImmediately(task) {
        let successful = false;
        const queueEmpty = this.queue.isEmpty();
        if (queueEmpty) {
            this.queue.addTask(task);
            successful = true;
        }
        return successful;
    }
    static fromNothing() {
        const queue = _queue.default.fromNothing(), scheduler = new Scheduler(queue);
        return scheduler;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zY2hlZHVsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgUXVldWUgZnJvbSBcIi4vcXVldWVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjaGVkdWxlciB7XHJcbiAgY29uc3RydWN0b3IocXVldWUpIHtcclxuICAgIHRoaXMucXVldWUgPSBxdWV1ZTtcclxuICB9XHJcblxyXG4gIGdldFF1ZXVlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucXVldWU7XHJcbiAgfVxyXG5cclxuICBhZGRUYXNrVG9RdWV1ZSh0YXNrKSB7XHJcbiAgICB0aGlzLnF1ZXVlLmFkZFRhc2sodGFzayk7XHJcbiAgfVxyXG5cclxuICBleGVjdXRlSW1tZWRpYXRlbHkoY2FsbGJhY2spIHtcclxuICAgIGxldCBzdWNjZXNzZnVsID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3QgcXVldWVFbXB0eSA9IHRoaXMucXVldWUuaXNFbXB0eSgpO1xyXG5cclxuICAgIGlmIChxdWV1ZUVtcHR5KSB7XHJcbiAgICAgIGNhbGxiYWNrKCk7XHJcblxyXG4gICAgICBzdWNjZXNzZnVsID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc3VjY2Vzc2Z1bDtcclxuICB9XHJcblxyXG4gIGV4ZWN1dGVUYXNrSW1tZWRpYXRlbHkodGFzaykge1xyXG4gICAgbGV0IHN1Y2Nlc3NmdWwgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdCBxdWV1ZUVtcHR5ID0gdGhpcy5xdWV1ZS5pc0VtcHR5KCk7XHJcblxyXG4gICAgaWYgKHF1ZXVlRW1wdHkpIHtcclxuICAgICAgdGhpcy5xdWV1ZS5hZGRUYXNrKHRhc2spO1xyXG5cclxuICAgICAgc3VjY2Vzc2Z1bCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHN1Y2Nlc3NmdWw7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XHJcbiAgICBjb25zdCBxdWV1ZSA9IFF1ZXVlLmZyb21Ob3RoaW5nKCksXHJcbiAgICAgICAgICBzY2hlZHVsZXIgPSBuZXcgU2NoZWR1bGVyKHF1ZXVlKTtcclxuXHJcbiAgICByZXR1cm4gc2NoZWR1bGVyO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiU2NoZWR1bGVyIiwicXVldWUiLCJnZXRRdWV1ZSIsImFkZFRhc2tUb1F1ZXVlIiwidGFzayIsImFkZFRhc2siLCJleGVjdXRlSW1tZWRpYXRlbHkiLCJjYWxsYmFjayIsInN1Y2Nlc3NmdWwiLCJxdWV1ZUVtcHR5IiwiaXNFbXB0eSIsImV4ZWN1dGVUYXNrSW1tZWRpYXRlbHkiLCJmcm9tTm90aGluZyIsIlF1ZXVlIiwic2NoZWR1bGVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXFCQTs7OzhEQUZIOzs7Ozs7QUFFSCxNQUFNQTtJQUNuQixZQUFZQyxLQUFLLENBQUU7UUFDakIsSUFBSSxDQUFDQSxLQUFLLEdBQUdBO0lBQ2Y7SUFFQUMsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDRCxLQUFLO0lBQ25CO0lBRUFFLGVBQWVDLElBQUksRUFBRTtRQUNuQixJQUFJLENBQUNILEtBQUssQ0FBQ0ksT0FBTyxDQUFDRDtJQUNyQjtJQUVBRSxtQkFBbUJDLFFBQVEsRUFBRTtRQUMzQixJQUFJQyxhQUFhO1FBRWpCLE1BQU1DLGFBQWEsSUFBSSxDQUFDUixLQUFLLENBQUNTLE9BQU87UUFFckMsSUFBSUQsWUFBWTtZQUNkRjtZQUVBQyxhQUFhO1FBQ2Y7UUFFQSxPQUFPQTtJQUNUO0lBRUFHLHVCQUF1QlAsSUFBSSxFQUFFO1FBQzNCLElBQUlJLGFBQWE7UUFFakIsTUFBTUMsYUFBYSxJQUFJLENBQUNSLEtBQUssQ0FBQ1MsT0FBTztRQUVyQyxJQUFJRCxZQUFZO1lBQ2QsSUFBSSxDQUFDUixLQUFLLENBQUNJLE9BQU8sQ0FBQ0Q7WUFFbkJJLGFBQWE7UUFDZjtRQUVBLE9BQU9BO0lBQ1Q7SUFFQSxPQUFPSSxjQUFjO1FBQ25CLE1BQU1YLFFBQVFZLGNBQUssQ0FBQ0QsV0FBVyxJQUN6QkUsWUFBWSxJQUFJZCxVQUFVQztRQUVoQyxPQUFPYTtJQUNUO0FBQ0YifQ==