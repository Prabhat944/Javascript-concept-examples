/* 
Synchronous
   Execute line by line
   Blocking nature
*/

/*
Asynchronous
   Execute multi task in parallel
   Non blocking nature
*/

//Example 1
console.log("A1");

setTimeout(()=>{
    console.log("B1");
},2000);

console.log("C1");

// result : 
// A1
// C1
// B1


//Example 2
console.log("A2");
const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(console.log("B2"));
    },2000);
})
promise.then(()=>{
    console.log("C2")
});
console.log("D2")
// result : 
// A2
// D2
// B2
// C2

//Example 3
console.log("A3");
async function showMeSequence(){
    await fetch('https://example.com/api').then(()=>console.log("B3"))
    await fetch('https://example.com/api').then(()=>console.log("C3"))
    await fetch('https://example.com/api').then(()=>console.log("D3"))
    console.log("E3")
}

showMeSequence();
console.log("F3")
// result : 
// A3
// F3
// B3
// C3
// D3
// E3