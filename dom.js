// document.getElementById("bio").innerHTML="Mila Soyaker : 2022"

var intro1 = document.getElementById("intro1")

var message = document.getElementById("message")

message.innerHTML = intro1.innerHTML

var allLists = document.getElementsByTagName("ul")

var cities = allLists[0]

allItems = cities.getElementsByTagName("li")

for (let i = 0; i < allItems.length; i++) {
    alert(allItems[i].innerHTML)
}