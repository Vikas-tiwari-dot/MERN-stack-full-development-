
function sayHello() {
  console.log("Hello after 2 seconds!");
}

setTimeout(sayHello, 2000); // Call sayHello after 2 seconds (2000 milliseconds)

console.log("This will be printed immediately.");

// You can also use an anonymous function
setTimeout(function() {
  console.log("Hello from an anonymous function after 3 seconds!");
}, 3000);

// Or using an arrow function
setTimeout(() => {
  console.log("Hello from an arrow function after 4 seconds!");
}, 4000);