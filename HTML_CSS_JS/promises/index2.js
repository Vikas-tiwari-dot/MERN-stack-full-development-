//then block example with promise creation
const myPromise = new Promise((resolve, reject) => {
    // Simulating an asynchronous operation using setTimeout
    setTimeout(() => {
        const success = true; // Change this to false to simulate an error
        if (success) {
            resolve("Operation completed successfully");
        } else {
            reject("An error occurred");
        }
    }, 1000); // 1 second delay
});

myPromise
    .then((result) => {
        console.log(result); // Operation completed successfully
        return anotherPromise();
    })
    .catch((error) => {
        console.error(error); // Handle errors
    });

function anotherPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Another operation completed");
        }, 1000);
    });
}