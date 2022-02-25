// import navbar from "../components/navbar.js"


// let navbar_div = document.getElementById("navbar_con")
// navbar_div.innerHTML = navbar();



function login(){
    let Useremail = document.getElementById("email").value;

   let userpass = document.getElementById("password").value;

let x = JSON.parse( localStorage.getItem("user_data"))
console.log('x.password:', x.password)
console.log('x.email:', x.email)
if (x.email==Useremail && x.password==userpass){

alert("Login success")
location.href="index.html"
}
else{
    alert("Email Or Password Do Not Match")
}
}



   