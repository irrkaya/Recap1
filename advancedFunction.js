var hiFunction = function hi(){
    console.log("Hello")
}

const hiFunction2 = () => {
    console.log("Hello Mate!")
}

const hiFunction3 = (message,number) => {
    console.log(message,number)
}

var sum = (num1,num2) =>{
    return num1+num2
}
let sumIs = sum(3,4)
console.log(sum)
console.log(sumIs)

hiFunction()
hiFunction2()
hiFunction3("mila",4)

