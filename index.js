
// for(let i=1;i<=10;i++)
// {console.log("vikas")}

// function add(a,b){
//     return a+b;
// }

// console.log(add(5,10));
// console.log(add(20,30));
// console.log(add(100,200));
// console.log(add(7,3));
// console.log(add(0,0));

// function multiply(x,y){
//     return x*y;
// }

// console.log(multiply(5,10));
// console.log(multiply(20,30));
// console.log(multiply(100,200));
// console.log(multiply(7,3));
// console.log(multiply(0,0));

// let arr =[1,2,'vikas',true,5.6];

// let ans = arr.map(function(element){
//     return element;
// });

// console.log(ans);

// let filteredArr = arr.filter(function(element){
//     return typeof element === 'string';
// });

// console.log(filteredArr);

// let sum = arr.reduce(function(accumulator,element){
//     if(typeof element === 'number'){
//         return accumulator + element;
//     }
//     return accumulator;
// },0);

// console.log(sum);
// //accumulator is the value which is being carried forward after each iteration

// let foundElement = arr.find(function(element){
//     return element === 'vikas';
// });

// console.log(foundElement);

// //find returns the first matching element

// let hasBoolean = arr.some(function(element){
//     return typeof element === 'boolean';
// });

// console.log(hasBoolean);
// //some returns true if at least one element matches the condition

// let allNumbers = arr.every(function(element){
//     return typeof element === 'number';
// });

// console.log(allNumbers);
// //every returns true only if all elements match the condition   
// // Arrow Functions

// let squaredArr = arr.map(element => {
//     if(typeof element === 'number'){
//         return element * element;
//     }
//     return element;
// });

// console.log(squaredArr);


// let arr = [1,5,3,8,2,7,4,6];

// arr.sort(function(a,b){
//     return a - b; // Ascending order
//     // return b - a; // Descending order
// });

// console.log(arr);

// //sort method sorts the array in place and returns the sorted array
// // By default, sort method sorts elements as strings
// // Hence, for numbers we need to provide a compare function
// // The compare function should return a negative value if a < b
// // zero if a == b
// // positive value if a > b
// // This way, sort method can determine the order of elements

// // Example of sorting strings

// let stringArr = ['banana', 'apple', 'orange', 'mango'];

// stringArr.sort(); // Default sort for strings is in ascending order

// console.log(stringArr);

// let arr = [1,5,3,8,20,7,4,6];
// arr.sort();
// console.log(arr);
// // This will not sort numbers correctly
// // Output will be: [1, 2, 3, 4, 5, 6, 7, 8]
// // But if we have numbers like [10, 2, 1], the output will be [1, 10, 2]

// //Correct way to sort numbers
// arr.sort(function(a,b){
//     return a - b; // Ascending order
// });

// console.log(arr);
// // Output will be: [1, 2, 3, 4, 5, 6, 7, 8]

// // For descending order
// arr.sort(function(a,b){
//     return b - a; // Descending order
// });

// console.log(arr);
// // Output will be: [8, 7, 6, 5, 4, 3, 2, 1]

// let value = Math.PI;
// console.log("Value of PI:", value);

// value = Math.E;
// console.log("Value of Euler's number:", value);

// value = Math.SQRT2;
// console.log("Square root of 2:", value);

// value = Math.abs(-10);
// console.log("Absolute value of -10:", value);

// value = Math.ceil(7.3);
// console.log("Ceiling of 7.3:", value);

// value = Math.floor(7.7);
// console.log("Floor of 7.7:", value);

// value = Math.round(7.5);
// console.log("Round of 7.5:", value);

// value = Math.max(10, 20, 5, 15);
// console.log("Maximum value among (10, 20, 5, 15):", value);

// value = Math.min(10, 20, 5, 15);
// console.log("Minimum value among (10, 20, 5, 15):", value);

// value = Math.pow(2, 3);
// console.log("2 raised to the power 3:", value);

// value = Math.sqrt(16);
// console.log("Square root of 16:", value);


// class Person {
//     // Constructor
//     name = "vikas";
//     age = 25;

//     // Method
//     greet() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }
// }

// // Creating an object of the Person class
// let person1 = new Person();

// // Accessing properties
// console.log(person1.name); // Output: vikas
// console.log(person1.age);  // Output: 25

// // Calling method
// person1.greet(); // Output: Hello, my name is vikas and I am 25 years old.


// let curr = new Date();
// console.log("Current Date and Time:", curr.toString());
// // Creating a specific date: 25th December 2025, 10:30 AM
// let specificDate = new Date('2025-12-25T10:30:00');
// console.log("Specific Date and Time:", specificDate.toString());
// // Getting individual components
// let year = curr.getFullYear();
// let month = curr.getMonth() + 1; // Months are zero-based
// let day = curr.getDate();
// console.log(`Current Date: ${day}/${month}/${year}`);
// // Getting time components
// let hours = curr.getHours();
// let minutes = curr.getMinutes();
// let seconds = curr.getSeconds();
// console.log(`Current Time: ${hours}:${minutes}:${seconds}`);


//let create custom error classes

class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

function riskyFunction() {
    throw new CustomError("Something went wrong in riskyFunction!");
}

try {
    riskyFunction();
} catch (error) {
    if (error instanceof CustomError) {
        console.log(`Caught a custom error: ${error.message}`);
    } else {
        console.log(`Caught an unexpected error: ${error.message}`);
    }
}   
