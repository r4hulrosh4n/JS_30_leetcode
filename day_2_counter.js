// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

function createCounter(n) {
    let currentValue = n;
    return function(){
    let result = currentValue;
    currentValue++;
    return result;}
    
}

const counter = createCounter(10);
const result = []; 


result.push(counter());
result.push(counter());
result.push(counter());

console.log(result);
