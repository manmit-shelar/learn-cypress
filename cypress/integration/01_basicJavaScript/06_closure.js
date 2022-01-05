// run cmd = node 06_closure.js

//Closure and Lexical enviornment
//    01. Declaring a function inside a function is called Closure.

//Calling directly getStep function
function getSteps() {
    let start = 0;
    return ++start;
}
console.log("Calling directly getAge function");
console.log(getSteps());
console.log(getSteps());

//Calling inner function
function getAge() { // outer function
    let age = 0;
    return () => { // anonymous inner function
        return ++age;
    }
}
console.log("Calling inner function");
let a = getAge()
console.log(a());
console.log(a());
console.log(a());

//Calling outer function
console.log(getAge()());
console.log(getAge()());

/**********************************
    Console Output:
        Comparing values of literal and object = true
        Comparing literal and object = false
        Comparing values of number and string = true
        Comparing number and string = false
        Manmit Shelar
        true
        true
        true
**********************************/