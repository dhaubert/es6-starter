/** REST - SPREAD */

const superuser = {
    supername: 'Douglas',
    superage: 25,
    address : {
        city: 'Santa Maria',
        state: 'RS',
        country: 'Brazil',
    },
    
};

let { supername, ...rest} = superuser;

const arr = [1,2,3,4];

const [a, b, ... c] = arr;

console.log('a', a, 'b', b, 'c', c);

let arr1 = [1,2,3];
let arr2 = [4,5,6];

let arr3 = [...arr1, ...arr2];

console.log('merged array: ', arr3);


/** Learning object destructuring */

const user = {
    name: 'Douglas',
    age: 25,
    address : {
        city: 'Santa Maria',
        state: 'RS',
        country: 'Brazil',
    },
    
};

console.log('user', user);

// old way 
//const name = user.name;
//const country = user.address.country;

//es6 way
const { name, address : { country } } = user;

console.log('The user ' + name + ' currently lives in ', country)

const displayUserInfo = ({name, age}) => console.log('User name is '+ name + " and he is " + age + ' years old');

displayUserInfo(user);

/** Learning array manipulations, arrow functions, default values */

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


const defaultParams = (a = 1, b = 43) => a + b;

console.log('Default parameters (expecting 44): ', defaultParams());
console.log('Default parameters (expecting 2): ', defaultParams(1,1));

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