console.log(value1);   // undefined
console.log(value2);   // Reference error : cannot access before initialization
console.log(value3);   // Reference error : cannot access before initialization

var value1 = 5;
let value2 = 5;
const value3 = 5;

console.log(value1);   // 5
console.log(value2);   // 5
console.log(value3);   // 5






sayMyName("mohan")  //My name is mohan

function sayMyName(name){
    console.log('My name is ' + name);
};


sayMyName2("mohan")  //typeError: sayMyName2 is not a function

var sayMyName2 =  function(name){
    console.log('My name is ' + name);
};

