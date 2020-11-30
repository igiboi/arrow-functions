// const sayHello = function() {
//   console.log("Hello");
// }

 // Arrow functions
// const sayHello = () => {
//   console.log('Arrow funcitons')
// }

// one line functions 
// const sayArrow = () => console.log("One line Hello"); 


// returning Object Literal
const sayHello = () => ({msg: 'Hola'});

console.log(sayHello());

// Single param does not need parenthesis
const sayBye = name => console.log(`Bye ${name}`);

sayBye('Luigi')

// multiple param you need (a, b) => 
const fullName = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`); 

fullName('Luigi', 'Matias');

// array functions
const users = ['Luigi', 'Ale', 'Mina'];

// Original 
// const nameLengths = users.map(function(name) {
//   return name.length; 
// }); 

// Shorter 
// const nameLengths = users.map((name) => {
//   return name.length;
// });

// shortest version
const nameLengths = users.map(name => name.length);

console.log(nameLengths);