async function getData(){
   setTimeout(function(){
    console. log("Data received")
   }, 2000);
    
}

console.log("Start fetching data");
getData();
console.log("End fetching data");