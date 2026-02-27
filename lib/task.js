"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Task;
    }
});
class Task {
    constructor(method, ...remainingArguments){
        const callback = remainingArguments.pop(); ///
        this.method = method;
        this.callback = callback;
        this.remainingArguments = remainingArguments;
    }
    getMethod() {
        return this.method;
    }
    getCallback() {
        return this.callback;
    }
    getRemainingArguments() {
        return this.remainingArguments;
    }
    execute(callback) {
        this.method.call(null, ...this.remainingArguments, callback);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90YXNrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayAge1xyXG4gIGNvbnN0cnVjdG9yKG1ldGhvZCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XHJcbiAgICBjb25zdCBjYWxsYmFjayA9IHJlbWFpbmluZ0FyZ3VtZW50cy5wb3AoKTsgLy8vXHJcblxyXG4gICAgdGhpcy5tZXRob2QgPSBtZXRob2Q7XHJcbiAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICB0aGlzLnJlbWFpbmluZ0FyZ3VtZW50cyA9IHJlbWFpbmluZ0FyZ3VtZW50cztcclxuICB9XHJcblxyXG4gIGdldE1ldGhvZCgpIHtcclxuICAgIHJldHVybiB0aGlzLm1ldGhvZDtcclxuICB9XHJcblxyXG4gIGdldENhbGxiYWNrKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY2FsbGJhY2s7XHJcbiAgfVxyXG5cclxuICBnZXRSZW1haW5pbmdBcmd1bWVudHMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZW1haW5pbmdBcmd1bWVudHM7XHJcbiAgfVxyXG5cclxuICBleGVjdXRlKGNhbGxiYWNrKSB7XHJcbiAgICB0aGlzLm1ldGhvZC5jYWxsKG51bGwsIC4uLnRoaXMucmVtYWluaW5nQXJndW1lbnRzLCBjYWxsYmFjayk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJUYXNrIiwibWV0aG9kIiwicmVtYWluaW5nQXJndW1lbnRzIiwiY2FsbGJhY2siLCJwb3AiLCJnZXRNZXRob2QiLCJnZXRDYWxsYmFjayIsImdldFJlbWFpbmluZ0FyZ3VtZW50cyIsImV4ZWN1dGUiLCJjYWxsIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFFQTs7O2VBQXFCQTs7O0FBQU4sTUFBTUE7SUFDbkIsWUFBWUMsTUFBTSxFQUFFLEdBQUdDLGtCQUFrQixDQUFFO1FBQ3pDLE1BQU1DLFdBQVdELG1CQUFtQkUsR0FBRyxJQUFJLEdBQUc7UUFFOUMsSUFBSSxDQUFDSCxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDRSxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0Qsa0JBQWtCLEdBQUdBO0lBQzVCO0lBRUFHLFlBQVk7UUFDVixPQUFPLElBQUksQ0FBQ0osTUFBTTtJQUNwQjtJQUVBSyxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUNILFFBQVE7SUFDdEI7SUFFQUksd0JBQXdCO1FBQ3RCLE9BQU8sSUFBSSxDQUFDTCxrQkFBa0I7SUFDaEM7SUFFQU0sUUFBUUwsUUFBUSxFQUFFO1FBQ2hCLElBQUksQ0FBQ0YsTUFBTSxDQUFDUSxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUNQLGtCQUFrQixFQUFFQztJQUNyRDtBQUNGIn0=