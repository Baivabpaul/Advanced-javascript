
// let a=[1,2,3,4,5,6,7,8,9,10]
// for(let i=0;i<a.length;i++){
//     console.log(a[i])
// }


let a=[1,2,3,4,5,6,7,8,9,10]

// p declared globally
// let p=[]   

// block scope
// for(let i=0;i<a.length;i++){        
//     p.push(a[i]*2)
// }
// console.log(p)


// for-in loop used to print index number(by default)
// putting index values of a in i
// for(let i in a){
//     // to print the values of a
//     // console.log(a[i])
//     // to print the index numbers of a
//     console.log(i)
// }




// for-of loop used only to print value not the index
// for(let i of a){
//     // only to print the values of a
//     console.log(i)
// }




// for-each loop to print values
// used for listing
a.forEach((item)=>{
    console.log(item)
})

