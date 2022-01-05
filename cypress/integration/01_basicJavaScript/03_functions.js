// run cmd = node 03_function.js

/* Function
    01. This is same as 'method' in Java. 
    02. Function should be used to avoid repetative steps.
    03. Write logic once and keep calling it as and when needed.
    04. Function overloading is not possible in JavaScript.
    05. In case of normat function javascript it is ok to call function first and then delcare the function.
*/

// 01. Function Declaration
console.log("Function called before declaration :");
add();
function add() {
    let sum = 2 + 3;
    console.log("2 + 3 = "+sum);
    console.log("\n");
}
console.log("Function called after declaration :");
add();



// 02. Function Declaration with parameters
function multiplication(num1, num2){
    multiplication = num1 * num2;
    console.log(""+num1+" * "+num2+" = "+multiplication);
    console.log("\n");
}
console.log("Parameterized Function :");
multiplication(2, 5);



// 03. Named Function/ Function Expression
let addition = function () {
    let sum = 5 + 3;
    console.log("5 + 3 = "+sum);
    console.log("\n");
}
console.log("Named Function :");
addition()



// 04. Arrow Expression Function
let subtraction = () => {
    let sum = 5 - 3;
    console.log("5 - 3 = "+sum);
    console.log("\n");
}
console.log("Arrow Expression Function :");
subtraction()

/**********************************
    Console Output:
        Function called before declaration :
        2 + 3 = 5

        Function called after declaration :
        2 + 3 = 5

        Parameterized Function :
        2 * 5 = 10

        Named Function :
        5 + 3 = 8

        Arrow Expression Function :
        5 - 3 = 2
**********************************/