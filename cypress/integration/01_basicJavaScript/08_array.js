// run cmd = node 08_array.js

// Array
let fruits = ["apple", "mango", "grape", "cherry", "bannana", "pineapple"];
console.log(fruits.length);
console.log(fruits);
console.log(fruits[5]);
console.table(fruits);
fruits.forEach(eachFruit => {
    console.log(eachFruit);
});

const number = [4, 8, 2]
console.log(number);
number.push(0);
console.log(number);
number.push(5, 7);
console.log(number);


/**********************************
    Console Output:
        Datatype - String
        Manmit
        string

        Datatype - Number
        0
        number
        65.6
        number

        Datatype - Boolean
        false
        boolean

        Datatype - Undefined
        undefined

        Datatype - Null

        string
        null
        object

        Datatype - Object
        object
        { name: 'chrome', version: 80, vendor: 'Google', fun: [Function: fun] }
        I am inside browser
        chrome
        firefox
        ┌─────────┬───────────┬─────────┐
        │ (index) │   name    │ version │
        ├─────────┼───────────┼─────────┤
        │    0    │ 'chrome'  │   80    │
        │    1    │ 'firefox' │   75    │
        └─────────┴───────────┴─────────┘
**********************************/