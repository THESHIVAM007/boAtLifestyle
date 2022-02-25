import navbar from "../components/navbar.js"
console.log('navbar:', navbar())
let navbar_div = document.getElementById("navbar_con")
navbar_div.innerHTML = navbar();
import footer from "../components/footer.js"
let footer_div = document.getElementById("foot")
footer_div.innerHTML = footer();

let cart = localStorage.getItem("cart");
if (!cart) {
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
} else {
  cart = JSON.parse(cart);
}

let container = document.getElementById("container");
// create table and table head;
let table = document.createElement("table");
let thead = document.createElement("thead");
let theadRow = document.createElement("tr");
let th1 = document.createElement("th");
th1.textContent = "Image";
let th2 = document.createElement("th");
th2.textContent = "Name";
let th3 = document.createElement("th");
th3.textContent = "Price";

theadRow.append(th1, th2, th3);
thead.append(theadRow);
let tbody = document.createElement("tbody");

cart.forEach(function (prod) {
  // {id:1, title:1, ...}
  //  go through each of the item in the cart and append it to table one in each row;
  let tr = document.createElement("tr");

  let td1 = document.createElement("td");
  let prodImg = document.createElement("img");
  prodImg.src = prod.img;
  td1.append(prodImg);
  let td2 = document.createElement("td");
  td2.textContent = prod.name;
  let td3 = document.createElement("td");
  td3.textContent = prod.price;

  tr.append(td1, td2, td3);
  tbody.append(tr);
});
table.append(thead, tbody);
container.append(table);
