"use strict";

/** Learning array manipulations */
var myArray = [1, 3, 4, 5, 6, 7, 8];
var newArray = myArray.map(function (item, index) {
  return item + index;
});
console.log('My new array:', newArray);
var sum = myArray.reduce(function (total, current) {
  return total += current;
}, 0);
console.log('Array sum is: ', sum);
var filteredOdd = myArray.filter(function (item) {
  return item % 2;
});
console.log('Odd numbers:', filteredOdd);
var found = myArray.find(function (item) {
  return item === 4;
});
console.log("Item found:", found);
/**
 * Learning class syntax
 *  class List {
    constructor() {
        this.data = [];
    }
    
    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List {
    constructor() {
        super();
        
        this.user = 'Douglas';
    }
    
    displayUser() {
        console.log(this.user)
    }
}

const myList = new TodoList();
document.getElementById("new-todo").onclick = function(){
    myList.addTodo();
}

**/
