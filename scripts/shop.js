import navbar from "../components/navbar.js"
console.log('navbar:', navbar());

let navbar_div = document.getElementById("navbar_con")
navbar_div.innerHTML = navbar();
