const myPromise = new Promise((resolve, reject) => { myPromise
    .then((result) => {
        console.log(result); // Operation completed successfully
        return anotherPromise();
    })
    .then((anotherResult) => {
        console.log(anotherResult); // Another operation completed successfully
    })
    .catch((error) => {
        console.error(error); // Handle errors
    })
});