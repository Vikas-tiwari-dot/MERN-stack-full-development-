async function getData(){
//await async fetch API call
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/6');
/*await make async to sync
 synchronous code means code that runs in sequence, 
 one line after the other, waiting for each operation to 
 complete before moving on to the next.*/
    response = await response.json();

    console.log("Data received:", response);
    
}
getData();