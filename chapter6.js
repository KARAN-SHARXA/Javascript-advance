// selction of element
let abcd = document.getElementById("w");
console.dir(abcd);
let pp = document.getElementsByClassName("p");
console.log("jj");


let cc = document.querySelector("h1");
console.log(cc);

let dd = document.querySelectorAll("h1")

let h1 = document.querySelector("h1");
h1.innerHTML="<p>raju kha kajau</p>";



// set attribute
let a = document.querySelector("a");
// a.href="https://www.google.com";
a.setAttribute("href","https://www.google.com")
// getAttribute
console.log(a.getAttribute("href"));
//remove attribute



// create elemt 
// appent / prepend


let h2 =document.createElement("h2");
h2.textContent="raju khaju";
document.querySelector("body").prepend(h2)



// let h3 = document.querySelector("h3").style.backgroundColor="pink";

let h3 = document.querySelector("h3");
h3.classList.add("hullulu")

