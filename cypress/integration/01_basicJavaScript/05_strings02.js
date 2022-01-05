// run cmd = node 05_stirngs02.js

// String Comparison
//    01. == : Use double equals to compare the values.
//    02. === : It is used to compare objects.
let one = "apple"; // literal
let two = new String("apple"); //object
let doubleEquals = one == two ;
let tripleEquals = one === two ;
console.log("Comparing values of literal and object = " + doubleEquals);
console.log("Comparing literal and object = " + tripleEquals);

let num = 1; // number
let numStr = "1"; // string
doubleEquals = num == numStr ;
tripleEquals = num === numStr  ;
console.log("Comparing values of number and string = " +  doubleEquals);
console.log("Comparing number and string = " + tripleEquals);


// String Concatination
let firstName = "Manmit";
let lastName = " Shelar";
console.log(firstName.concat(lastName));

// String Check
let now = 'Stay home, Stay safe'
console.log(now.startsWith('Stay'));
console.log(now.endsWith('e'));
console.log(now.includes('h'));

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