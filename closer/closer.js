// Example 1: Simple nested function

function outerFunction() {
    function innerFunction() {
        console.log("Example 1: Hello from the inner function!");
    }
    innerFunction();
}
outerFunction();

// Example 2: Closure with variable access

function outerFunction() {
    let data = "Example 2: Hello from the outer function!";

    function innerFunction() {
        console.log(data);
    }
    innerFunction();
}
outerFunction();

// Example 3: Returning a function (closure)

function outerFunction() {
    let count = 0;

    return function innerFunction() {
        count++;
        console.log("Example 3: Count is " + count);
    }
}
const counter = outerFunction();
counter(); // Count is 1
counter(); // Count is 2
counter(); // Count is 3   

// Example 4: Closure with parameters

function outerFunction(greeting) {
    return function innerFunction(name) {
        console.log(greeting + ", " + name + "!");
    }       
}
const sayHello = outerFunction("Example 4: Hello");
sayHello("Alice"); // Hello, Alice!
sayHello("Bob");   // Hello, Bob!