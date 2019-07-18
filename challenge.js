// #1

class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
    
    isAdmin() {
        return this.admin;
    }
}

class Admin extends User {
    constructor(email, password) {
        super(email, password);
        this.admin = true;
    }
    
}

const user1 = new User('dhaubert.ti@gmail.com', 'fakePass921');
const adm1 = new Admin('dhaubert.ti@gmail.com', 'fakePass921');


console.log('User is admin?', user1.isAdmin());
console.log('Adm is admin?', adm1.isAdmin());

// #2
const users = [
    { name: 'Douglas', age: 23, company: 'Tesla' },
    { name: 'Henrique', age: 19, company: 'Google' },
    { name: 'Haubert', age: 16, company: 'Facebook' },
];

// #2.1
const ages = users.map( item => item.age);
console.log('Ages', ages);

// #2.2
const googler = users.filter( (user) => {
    return user.age >= 18 && user.company == 'Google';
});
console.log('Age and company: ', googler);


// #2.3
const found = users.find( user  => user.company == "Google");
console.log("Work on google: ", found);