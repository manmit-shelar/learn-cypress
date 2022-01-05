// run cmd = node 07_datatypes.js

// String
console.log("\nDatatype - String");
let name = 'Manmit'
console.log(name);
console.log(typeof name);

// Number
console.log("\nDatatype - Number");
let num = 0
console.log(num);
console.log(typeof num);

let weight = 65.6
console.log(weight);
console.log(typeof weight);

// Boolean
console.log("\nDatatype - Boolean");
let b = false
console.log(b);
console.log(typeof b);

// Undefined
console.log("\nDatatype - Undefined");
let a
console.log(a);

// Null
console.log("\nDatatype - Null");
let c = ''
console.log(c);
console.log(typeof c);
c = null;
console.log(c);
console.log(typeof c);

// Object
console.log("\nDatatype - Object");
let browser = {
    "name": "chrome",
    "version": 80,
    "vendor": "Google",
    fun: () => {
        console.log('I am inside browser');
    }
}
console.log(typeof browser);
console.log(browser);
browser.fun();
console.log(browser.name);

let browsers = [
    {
        "name": "chrome",
        "version": 80
    },
    {
        "name": "firefox",
        "version": 75
    }
]
console.log(browsers[1].name);
console.table(browsers)

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