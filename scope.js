// console.log("hello");

// global scope
let a=12;


// function scope or local scope
function hello(){
    let a=20;
    console.log(a)
    {
        // let a=45;
        console.log(a)
    }
}
console.log(a)
hello()