const array = [1, 2, 3, 4]

const squareArray = []

array.forEach(nums => {
    console.log(nums)
    squareArray.push(nums * nums)
})

console.log(squareArray)

// map

const mapArray = array.map(nums => nums * 3)

console.log(mapArray)

// filter

const filterArray = array.filter(nums=>nums>2)
console.log(filterArray)

//reduce
//acc=0

const sum=array.reduce((acc,nums)=>{
    return acc+nums
},2)

console.log(sum)