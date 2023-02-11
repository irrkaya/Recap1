// document.getElementById("bio").innerHTML="Mila Soyaker : 2022"

// var intro1 = document.getElementById("intro1")

// var message = document.getElementById("message")

// message.innerHTML = intro1.innerHTML

// var allLists = document.getElementsByTagName("ul")

// var cities = allLists[0]

// allItems = cities.getElementsByTagName("li")

// for (let i = 0; i < allItems.length; i++) {
//     alert(allItems[i].innerHTML)
// }

//  var classElements = document.getElementsByClassName("intro1")

//   alert(classElements[1].innerHTML)
//   alert(classElements.length)

// var queryElements = document.querySelectorAll("p.intro1")

// alert(queryElements.length)

// var nameElements= document.getElementsByName("clientName")

// alert(nameElements[0].value)

// dom events
// var mila = document.getElementById("mila").addEventListener("mouseover",changeColor)

// function changeColor()
// {
//     document.getElementById("div1").style.color="red"
//     var nameElements= document.getElementsByName("clientName")
//     nameElements[0].value="Mila"
// }

// var node = document.getElementById("tree");
// alert(node.childNodes[0].nodeValue)

var heading = document.createElement("h2")
var node = document.createTextNode("Hello JavaScript")
heading.appendChild(node)

var div1 = document.getElementById("div1")
var p2= document.getElementById("p2")
div1.insertBefore(heading,p2)

alert("P2 Deleting...")
div1.removeChild(p2)

alert("Changing..")
var p1 = document.getElementById("p1")
div1.replaceChild(heading,p1)