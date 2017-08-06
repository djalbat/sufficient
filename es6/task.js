'use strict';

class Task {
  constructor(synchronous, method, remainingArguments) {
    this.synchronous = synchronous;    
    this.method = method;
    this.remainingArguments = remainingArguments;    
  }
  
  isSynchronous() {
    return this.synchronous;
  }
  
  getMethod() {
    return this.method;
  }
  
  getRemainingArguments() {
    return this.remainingArguments;
  }
}

module.exports = Task;
