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

function isUserExist(email,password){
    for (let i = 0; i < users.length; i++) {
      if(email == users[i].email && password == users[i].password){
        return true;
      }   
    }
    return false;    
}

function login() {
    if (isUserExist(email,password)) {
            console.log(tweets)
    }else{
        console.log("Invalid email or password!")
    }
}

login(email,password)