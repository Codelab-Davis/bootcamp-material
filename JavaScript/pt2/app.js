doSomething();

function doSomething() { 
    console.log("I'm doing something!");
}; 

arrowFunction = () => { // can optionally include empty parameters 
    console.log("I'm doing something as an arrow function!"); 
}; 

arrowFunctionWithParameters = (someParam1, someParam2) => { 
    console.log("Arrow function with parameters:", someParam1, someParam2); 
};

arrowFunction();
arrowFunctionWithParameters(3, "Yo"); 