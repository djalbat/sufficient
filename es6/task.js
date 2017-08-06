'use strict';

class Task {
  constructor(synchronous, method, model, view, ...remainingArguments) {
    this.synchronous = synchronous;    
    this.method = method;
    this.model = model;
    this.view = view;
    this.remainingArguments = remainingArguments;    
  }
  
  isSynchronous() {
    return this.synchronous;
  }
  
  getMethod() {
    return this.method;
  }
  
  getModel() {
    return this.model;
  }
  
  getView() {
    return this.view;
  }
  
  getRemainingArguments() {
    return this.remainingArguments;
  }
}

module.exports = Task;
