/* var name="Irene"

alert("Welcome!")

var person = {
   firstName:"Irene",
   lastName:"Soyaker",
   age:27,
   email : "insoyaker@gmail.com",
   friends : ["Ozge", "Zeynep", "Ameni"],
   sayHi: function(){
       console.log("Hi!!");
   }
}

console.log(person.firstName)
console.log(person.lastName)
console.log(person.age)
console.log(person)

person.firstName="Mila"
console.log(person.firstName)
console.log(person.friends)
console.log(person.sayHi)
console.log(person.sayHi()) */


var users = [
    {
        email: "insoyaker@gmail.com",
        password: "12345"
    },
    {
        email: "milasoyaker@gmail.com",
        password: "12345"
    }
]

var tweets = [
    {
        email: "insoyaker@gmail.com",
        tweet: "Weather is so nice today"
    },
    {
        email: "insoyaker@gmail.com",
        tweet: "Weather is so nice today 1"
    },

    {
        email: "milasoyaker@gmail.com",
        tweet: "Weather is so nice today lets go!"
    }
]

var email = prompt("email?")
var password = prompt("password?")

function login() {
    if ((email == users[0].email && password == users[0].password) ||
        (email == users[1].email && password == users[1].password)) {
            console.log(tweets)
    }else{
        console.log("Invalid email or password!")
    }
}

login(email,password)

// tweets.forEach(function(i){
//     console.log(i)
// })