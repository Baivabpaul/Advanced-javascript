// if-else

// if(true){
//     console.log("ok")
// }
// else{
//     console.log("not ok")
// }



// let x="12"
// checks the value (==)
// if(x==12){
//     console.log("true")
// }
// else{
//     console.log("not ok")
// }


// let x="12"
// checks the value and the data type (===)
// if(x === 12){
//     console.log("true")
// }
// else{
//     console.log("not ok")
// }



// let x=13
//     // not equal to (!==)
// if(x !== 13){
//     console.log("ok")
// }
// else{
//     console.log("not ok")
// }


// let a = "Nill"
// if(a.length === 9){
//     console.log("true1")
// } else if(typeof(a)=="string"){
//     console.log("true")
// }else{
//     console.log("baje")
// }




// even-odd number checking
// let a=10
// if(a%2==0){
//     console.log("even")
// }else{
//     console.log("odd")
// }



// prime number checking
let p = 12
if (p < 2) {
    console.log("no prime no composite")
} else if (p > 2) {
    for (let i = 2; i <= p; i++) {
        let t = p % i
        if (p % p == 0 && t !== 0) {
            console.log("prime no.")
        }
        else{
            console.log("not prime")
        }
    }
}