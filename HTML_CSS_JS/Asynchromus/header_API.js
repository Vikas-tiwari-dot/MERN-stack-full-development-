
const myHeaders = new Headers(); 
myHeaders.append("Content-Type", "application/json");

const url = 'https://jsonplaceholder.typicode.com/posts/6';

const options = {
    method: "POST",
    body : JSON.stringify({username: "example", password: "example123"}),
    headers : myHeaders,
};
async function getData() {
    const response = await fetch(url, {
        method: "GET",
        headers: myHeaders
    });
    const data = await response.json();
    console.log("Data received:", data);
}

async function postData(){
    const response = await fetch(url, options);
    let  data = await response.json();

    console.log("Data received:", data);
}


getData(); 
postData(); 