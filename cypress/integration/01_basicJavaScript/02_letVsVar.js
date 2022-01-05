// run cmd = node 02_letVsVar.js

/* Constant 
    01. This is same as 'final' in Java. 
    02. Value once assigned canot be changed.
    03. If the value of constant is changed then you will get error "TypeError: Assignment to  constant variable."
*/
const panNumber = "ABCD1234";
console.log(panNumber)

/* Let 
    01. Variable can be declared once but can be assigned multiple times. 
    02. Variable will have the last assigned value.
    03. If variable is redecalred inside a function then you will get error ""SyntaxError: Identifier 'user' has already been declared.
*/
let user = "Manmit";
user = "Shelar";
console.log("User name = " + user);


/* Var 
    01. Variable can be declared and assigned multiple times. 
    02. Variable will have the last assigned value.
*/
var car = 'Baleno';
var car = 'i10';
console.log("Car name = " + car);

/**********************************
    Console Output:
        ABCD1234
        User name = Shelar
        Car name = i10
**********************************/