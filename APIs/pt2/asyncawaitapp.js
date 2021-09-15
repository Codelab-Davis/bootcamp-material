import axios from "axios";

let response = await getCall();
console.log(response.data);
console.log("This should print out after the console log in the function call!");  


async function getCall() { 
    let response = axios.get('https://jsonplaceholder.typicode.com/posts/1'); 
    console.log("in the function call!"); 
    return response; 
}; 