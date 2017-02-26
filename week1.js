let person = {
  fullName: 'Bob Loblaw',
  sayHi: () => {
    console.log(this);
    console.log(`Hi ${this.fullName}`);
  },
  sayHello: function() {
    console.log(this);
    console.log(`Hello ${this.fullName}!`);
  }
};

//person.sayHi() logs Window and undefined because arrow function do not change
// the scope, and objects do not move us out of the global scope.

//person.sayHello() logs the person object and 'Hello Bob Loblaw!'.
//This is written as a function declaration, which does create a new scope.
//Since sayHello is in the person object, the new scope is person, and it has
// access to the variables in this object.
