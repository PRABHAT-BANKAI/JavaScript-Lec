// Math.min   Math.max  Math.floor   Math.round   Math.ceil 
// for loop of Array

const minResult = Math.min(1,22,3,44,4,77,87,5,6,8,9)
const maxResult = Math.max(1,22,3,44,4,77,87,5,6,8,9)

console.log(minResult)
console.log(maxResult)

const floorNum = Math.floor(12.6)
console.log(floorNum)

const ceilNum = Math.ceil(12.6)
console.log(ceilNum)

const roundNum = Math.round(0.4)
console.log(roundNum,"round")


const arr = [1,9,3,4,10,6,7,1,12,49,99]
// for(let i=0;i<=arr.length-1;i++){
//   console.log(arr[i])
// }

for(let key of arr){
  console.log(key)
  console.log(arr[key])
}

