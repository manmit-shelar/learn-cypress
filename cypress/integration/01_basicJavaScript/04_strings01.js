// run cmd = node 04_stirngs01.js

//Literal string declaration
let str = "Welcome to JavaScript Basics"
console.log("Normal String = " + str);

//Object string declation (String Constructor)
let name = new String("Manmit")
console.log("String Constructor = " + name);

//Convert sting to Upper Case
console.log("Upper Case = " + str.toUpperCase());

//Convert sting to Lower Case
console.log("Lower Case = " + str.toLowerCase());

//Search characters in a string
console.log("to is present = " + str.includes("to"));

//Split words of a string
console.log("Words in a string = " + str.split(" "));

//Length of a string
console.log("Length of a string = " + str.length);

//Trim starting and ending spaces of a string
let spaces = " Successfully added  ";
console.log("Trim white spaces from a string = " + spaces.trim());

//Get substring
console.log("Sub string = " + str.substring(0,7));

//String replace
console.log("Replaced string = " + str.replace("JavaScript", "Coding"));

//Character at
console.log("Charater at = " + str.charAt(6));

/**********************************
    Console Output:
        Normal String = Welcome to JavaScript Basics
        String Constructor = Manmit
        Upper Case = WELCOME TO JAVASCRIPT BASICS
        Lower Case = welcome to javascript basics
        to is present = true
        Words in a string = Welcome,to,JavaScript,Basics
        Length of a string = 28
        Trim white spaces from a string = Successfully added
        Sub string = Welcome
        Replaced string = Welcome to Coding Basics
        Charater at = e
**********************************/