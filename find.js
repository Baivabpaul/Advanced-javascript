// .find() -- used to return (only one item) the first value of array/object based on the condition 
// it checks from the first index of the array & as the consition satisfies it returns the value

let a = [11, 1, 2, 3, 1, 5, 6, 7, 8, 9]

// returns 2 in this case
let b = a.find(item => item < 5)
console.log(b)


// find the first prime number using find function
const newArray = [10, 15, 3, 5, 7, 11];
const myPrimeArray = newArray.find(num => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return num >= 1;
});
console.log(myPrimeArray);


//find the first duplicate number using find function
let arr = [1,2,3,4,2,1,6,]
let k = arr.find((item, index) => {
    while(index<a.length){
        if(a.indexOf(item)!==index){
            return index
        }
        index++
    }
})
console.log(k)