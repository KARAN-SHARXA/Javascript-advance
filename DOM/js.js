//getelement by id
let p =  document.getElementById("h1");
console.dir(p);

//getelemet by class name
let t = document.getElementsByClassName("my");
console.log(t);

//query selector
let abcd = document.querySelector("h1");
console.log(abcd);

//query selectorAll
let d = document.querySelectorAll("my");
console.log(d);




// textcontent = best and fast
// innertext
// innerhtml = change innnerhtml
let q = document.querySelector("#q");
q.textContent="ram"


//set attribute and get attribute , removeaattribute
let w = document.querySelector("a");
w.setAttribute("href","https://www.google.com");
console.log(w.getAttribute("href"));


// crate element // append / prepend 
//prepend top of the body
// apend end of the body
let tt = document.createElement("h3");
tt.textContent="mukesh ji kaise ho";
document.querySelector("body").prepend(tt);

// style 
let c = document.querySelector("#p");
c.style.color="blue"

