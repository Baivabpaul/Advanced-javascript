// question : find all the prime numbers of the array using filter function


let arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
let arr2 = []
let b = arr.filter(item => {
    if (item <=1) {
        return false
    }else if(item===2){
        arr2.push(item)
        return true
    }
    else {

        // checks each item of the array with a loop of natural numbers from 2 to item
        for (let i = 2; i < item; i++) {

            // ex- 
            // for arr[3]=4,it is checked by 2,3
            // for arr[5]=6,it is checked by 2,3,4,5
            // for arr[9]=10,it is checked by 2,3,4,5,6,7,8

            if (item % i === 0) {
                return false
            } else {
                arr2.push(item)
            }
        }
        return true
    }
})

console.log(b)
