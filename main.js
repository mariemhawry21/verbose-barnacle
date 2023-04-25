let btn = document.querySelector("button");
let img1 = document.querySelector(".first img");
let p1 = document.querySelector(".first p");

let img2 = document.querySelector(".last img");
let p2 = document.querySelector(".last p");

let img3 = document.querySelector(".email img");
let p3 = document.querySelector(".email p");

let img4 = document.querySelector(".password img");
let p4 = document.querySelector(".password p");

let exp = "^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$";

  btn.addEventListener("click", check);

function check(e) {
  let fname = document.querySelector("#fname");
  let lname = document.querySelector("#lname");
  let em = document.querySelector("#email");
  let pass = document.querySelector("#pass");
  if (fname.value == "") {
    console.log("empty");
    e.preventDefault();
    fname.classList.add("active");
    img1.style.display = "block";
    p1.style.display = "block";
  }else{
    fname.classList.remove("active");
    img1.style.display = "none";
    p1.style.display = "none";
  }
  if (lname.value == "") {
    e.preventDefault();
    lname.classList.add("active");
    img2.style.display = "block";
    p2.style.display = "block";
  }else{
    lname.classList.remove("active");
    img2.style.display = "none";
    p2.style.display = "none";
  }
  if (exp.match(em.value) == false) {
    e.preventDefault();
    em.classList.add("active");
    em.setAttribute("placeholder","email@example.com");
    img3.style.display = "block";
    p3.style.display = "block";
  }else{
    em.classList.remove("active");
    em.setAttribute("placeholder","Email Address");
    img3.style.display = "none";
    p3.style.display = "none";
  }
  if( pass.value ==""){
    e.preventDefault();
    pass.classList.add("active");
    img4.style.display = "block";
    p4.style.display = "block";
  }else {
    pass.classList.remove("active");
    img4.style.display = "none";
    p4.style.display = "none";
  }

}
