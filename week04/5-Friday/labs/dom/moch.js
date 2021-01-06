//create 2 anchor tags
var a1 = document.createElement('a');
a1.textContent = "HighOnCoding";
a1.setAttribute('class', 'nav-item nav-link text-white display-4')
a1.setAttribute('href', '#')
var a2 = document.createElement('a');
a2.textContent = "Home";
a2.setAttribute('class', 'nav-item nav-link active text-white ml-5 mt-4');
a2.setAttribute('href', '#')
var a3 = document.createElement('a');
a3.textContent = "Categories";
a3.setAttribute('class', 'nav-item nav-link text-white ml-5 mt-4');
a3.setAttribute('href', '#')
//create div tag
var div = document.createElement('div');
div.setAttribute('class','nav navbar-nav');
//append 2 anchors to our div
div.appendChild(a1);
div.appendChild(a2);
div.appendChild(a3);
//create nav element
var nav = document.createElement('nav');
nav.setAttribute('class', 'navbar navbar-expand navbar-light bg-primary ml-5 mr-5');
//append div to nav element
nav.appendChild(div);
//find body element
var body = document.querySelector('body');

//append nav element to body
body.appendChild(nav);
/////////////////////////////////////////////////////////////////

//create 2 anchor tags
var h1 = document.createElement('h1');
h1.textContent = "Curse of the current reviews";
h1.setAttribute('class', 'text-dark pb-4 pt-1 ')

var p1 = document.createElement('p');
p1.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
p1.setAttribute('class', 'text-dark');


//create div tag
var div2 = document.createElement('div');
div2.setAttribute('class','container bg-secondary mt-3 bg-secondary pb-1');
//append 2 anchors to our div
div2.appendChild(h1);
div2.appendChild(p1);

//apend div to body
body.appendChild(div2);

/////////////////////////////////////////////////////////////////

//create 2 anchor tags
var h2 = document.createElement('h1');
h2.textContent = "Hello WatchKit";
h2.setAttribute('class', 'text-primary')

var p2 = document.createElement('p');
p2.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
p2.setAttribute('class', 'text-dark');


//create div tag
var div3 = document.createElement('div');
div3.setAttribute('class','container mt-3');
//append 2 anchors to our div
div3.appendChild(h2);
div3.appendChild(p2);

//apend div to body
body.appendChild(div3);

///////////////////////////////////////

var a4 = document.createElement('a');
a4.textContent = "12 Comments";
a4.setAttribute('class', 'nav-item nav-link active text-white ');
a4.setAttribute('href', '#')
var a5 = document.createElement('a');
a5.textContent = "124 Likes";
a5.setAttribute('class', 'nav-item nav-link text-white ');
a5.setAttribute('href', '#')
//create div tag
var div4 = document.createElement('div');
div4.setAttribute('class','nav navbar-nav');
//append 2 anchors to our div
div4.appendChild(a4);
div4.appendChild(a5);
//create nav element
var nav2 = document.createElement('nav');
nav2.setAttribute('class', 'navbar navbar-expand navbar-light bg-orange ml-5 mr-5 mx-auto');
nav2.setAttribute('style', "width: 1100px")
//append div to nav element
nav2.appendChild(div4);
//find body element
var body = document.querySelector('body');

//append nav element to body
body.appendChild(nav2);

////////////////////////////////////////////////////

//create 2 anchor tags
var h3 = document.createElement('h1');
h3.textContent = "Introduction to Swift";
h3.setAttribute('class', 'text-primary')

var p3 = document.createElement('p');
p3.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
p3.setAttribute('class', 'text-dark');


//create div tag
var div5 = document.createElement('div');
div5.setAttribute('class','container mt-3');
//append 2 anchors to our div
div5.appendChild(h3);
div5.appendChild(p3);

//apend div to body
body.appendChild(div5);

/////////////////////////////////////////////////

var a5 = document.createElement('a');
a5.textContent = "15 Comments";
a5.setAttribute('class', 'nav-item nav-link active text-white ');
a5.setAttribute('href', '#')
var a6 = document.createElement('a');
a6.textContent = "40 Likes";
a6.setAttribute('class', 'nav-item nav-link text-white ');
a6.setAttribute('href', '#')
//create div tag
var div6 = document.createElement('div');
div6.setAttribute('class','nav navbar-nav');
//append 2 anchors to our div
div6.appendChild(a5);
div6.appendChild(a6);
//create nav element
var nav3 = document.createElement('nav');
nav3.setAttribute('class', 'navbar navbar-expand navbar-light bg-orange ml-5 mr-5 mx-auto');
nav3.setAttribute('style', "width: 1100px")
//append div to nav element
nav3.appendChild(div6);
//find body element
var body = document.querySelector('body');

//append nav element to body
body.appendChild(nav3);