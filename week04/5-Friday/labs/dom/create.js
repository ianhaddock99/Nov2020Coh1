// create new element
var div = document.createElement("div");
div.textContent = "Hello World"
//first element
var anchor = document.createElement('a');
anchor.textContent = "Google";
anchor.setAttribute('href','http://google.com');

div.appendChild(anchor);


//addign div to body
var body = document.querySelector("body");

body.appendChild(div);

///remove paragraph tag
var p = document.querySelector('p');
document.body.removeChild(p);