"use strict";

/** Learning object destructuring */
var user = {
  name: 'Douglas',
  age: 25,
  address: {
    city: 'Santa Maria',
    state: 'RS',
    country: 'Brazil'
  }
};
console.log('user', user); // old way 
//const name = user.name;
//const country = user.address.country;
//es6 way

var name = user.name,
    country = user.address.country;
console.log('The user ' + name + ' currently lives in ', country);

var displayUserInfo = function displayUserInfo(_ref) {
  var name = _ref.name,
      age = _ref.age;
  return console.log('User name is ' + name + " and he is " + age + ' years old');
};

displayUserInfo(user);
/** Learning array manipulations, arrow functions, default values */

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

var returningObjects = function returningObjects() {
  return {
    name: 'Douglas Haubert'
  };
};

console.log('returnedObject:', returningObjects());

var defaultParams = function defaultParams() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 43;
  return a + b;
};

console.log('Default parameters (expecting 44): ', defaultParams());
console.log('Default parameters (expecting 2): ', defaultParams(1, 1));
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
