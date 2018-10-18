/** Learning array manipulations */

const myArray = [1,3,4,5,6,7,8];

const newArray = myArray.map( (item, index) => item + index );

console.log('My new array:', newArray);

const sum = myArray.reduce( (total, current) =>  total += current, 0);

console.log('Array sum is: ', sum);



const filteredOdd = myArray.filter( item => item % 2);


console.log('Odd numbers:', filteredOdd)

const found = myArray.find( item => item === 4 );


console.log("Item found:", found);


const returningObjects = () => ({ name: 'Douglas Haubert'});

console.log('returnedObject:', returningObjects());

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