
// filter function expects a TRUE or FLASE value to decide whether an item should be included in the new array.
// filter function returns a new array as shown here,(b)


// use to fat arrow with item
// item can be thought as arr[i] as we use in array

// let arr=[1,2,3,4,5,6,7,8,9]
// let b=arr.filter(item=>item<6)
// console.log(b)

// without using fat arrow

// let p=arr.filter(function(item){
//     return item<6
// })
// console.log(p)



// class Question :
let a = [
    {
        name: "Nill",
        address: "Narak",
    },

    {
        name: "Sagar",
        address: "Kolkata",
    },

    {
        name: "Rupam",
        address: "Jalpaiguri",
    },
]

// solution 1:

let j=a.filter(item=>item.address.length>5)
console.log(j)


// solution 2:

// let j=a.filter(function(item){
//     return item.name.length===5
// })
// console.log(j)


// let j = a.filter(function (item) {
//     return item.address.length === 7
// })
// console.log(j)



