"use strict"; 

let number = 5; //число, number

console.log(4/0); // infinity
console.log(-4/0); // -infinity
console.log('strind' * 9); //Nan - not a number

 const persone = 'Ivan'; //string
 const bool = false;

 // object
 const obj ={
      name: " Jhon",
      age: 25,
      isMarried: false
 }

const lastName = 'lastName';

 obj[lastName] = 'Winston'; //create a new property
 console.log(obj['lastName']);
 console.log(obj["name"]);

 // array
 let arr = [1, 2 ];
 console.log(arr[1]);

 arr[11] = 5;
 console.log(arr);

 //alert('Hello world'); //using not often

 //const result = confirm('Are you here?'); // true or false
 //console.log(result);

// const unswer = prompt("you have 18 years old?", "18");
// console.log(typeof(unswer));

const answers =[];

// answers[0] = prompt('What is your name?', '');
// console.log(answers[0]);

// answers[1] = confirm('You are good?');
// console.log(answers[1]);

// answers[2] = prompt('How are you old?', '');
// console.log(answers[2]);

console.log(typeof(answers));
console.log(typeof(null));  

const category = 'toys';

console.log(`https://someurl.com/${category}/5`);
const user ='Ivan';
// alert(`Hello, ${user}`); // for simple using

console.log('arr' + 4);

let incr = 10,
    decr = 10;
// ++incr;
// --decr;

console.log(`Increment: ${incr++}, Decrement: ${decr--}`);
console.log(`Increment: ${incr++}, Decrement: ${decr--}`);

console.log(5%2); 
console.log(2*4 == 5);

console.log(2*4 == 8 && 2*3 == 6);
console.log(2*4 == 4 || 2*3 == 6);

