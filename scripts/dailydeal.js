import navbar from "../components/navbar.js"
console.log('navbar:', navbar())

let navbar_div = document.getElementById("navbar_con")
navbar_div.innerHTML = navbar();

import footer from "../components/footer.js"
let footer_div = document.getElementById("foot")
footer_div.innerHTML = footer();








 let dailydeals = [
     {img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/cream_255x255.png?v=1642405569",
    name:"boAt Airdopes 131 - Wireless Earbuds",
    price:"Rs. 1,089.00",
    },
    {img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_15634ca0-9f81-4d11-b891-9a1496f709b1_255x255.png?v=1641801688",
    name:"boAt Rockerz 330",
    price:"Rs. 1,200.00",
    },
    {img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/ce5655c3-e83f-47ad-8f9f-6db17f896a1b_255x255.png?v=1625045737",
    name:"Stone 260",
    price:"Rs. 1,390.00",
    },
    {img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/eb8e0fbd-c412-48b3-9c91-5b49ddf35800_255x255.png?v=1625045744",
    name:"Rockerz 450",
    price:"Rs. 1,299.00",
    },
    {img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/463af1f7-e428-4399-9452-47e044cfb4cb_255x255.png?v=1625046507",
    name:"Rockerz 255",
    price:"Rs. 1,499.00",
    },
    {img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/e57bbbe7-5e99-4c43-8cf8-0ddd42caf3d3_255x255.png?v=1633518105",
    name:"Stone 1200",
    price:"Rs. 3,999.00",
    },
    {img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/756866f0-25e4-4b5d-8b7c-546c2111da69_255x255.png?v=1625045615",
    name:"boAt Rockerz 255 Pro",
    price:"Rs. 1,299.00",
    },

    {img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/0cfa4417-0213-4b49-b78e-0ae68aeb7057_255x255.png?v=1625046144",
    name:"boAt Rockerz 550",
    price:"Rs. 1,899.00",
    },

    {img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/eab9128d-65cf-42ce-83a1-03492ec6157d_255x255.png?v=1625046386",
    name:"boAt BassHeads 242",
    price:"Rs. 499.00",
    },

    {img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/2e056443-6505-46ef-aa88-e20e2778b0a9_255x255.png?v=1625046016",
    name:"BOAT Airdopes 441 - Wireless Earbuds",
    price:"Rs. 1,999.00",
    },

    {img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/8a80ebca-13b6-4329-b8dd-e2e152bdcf6b_255x255.png?v=1625046023",
    name:"boAt BassHeads 225",
    price:"Rs. 499.00",
    },

    {img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/245v2_main_1_255x255.png?v=1627276362",
    name:"boAt Rockerz 245 V2",
    price:"Rs. 899.00",
    },

    {img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/boat-bassheads-102-red_255x255.png?v=1633152280",
    name:"boAt BassHeads 102",
    price:"Rs. 349.00",
    },

    {img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/8ec58553-3255-48ec-929e-4838215b640c_255x255.png?v=1625046271",
    name:"boAt BassHeads 900",
    price:"Rs. 699.00",
    },

    {img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/5d5377dc-d3dd-48ba-8ec9-2a1630146d8d_255x255.png?v=1625045983",
    name:"boAt Rockerz 510",
    price:"Rs. 1,999.00",
    },

    
 ]
 console.log('dailydeals:', dailydeals)
 console.log(dailydeals.length)

 let container3 = document.getElementById("dailydeal")
container3.innerHTML="";

// for (var i = 0; i< dailydeals.length;i++){
    dailydeals.forEach(function (prod) {
    let datacard = document.createElement("div");
 
let image = document.createElement("img");
image.src = prod.img


let name = document.createElement("p")
name.innerText = prod.name;

let price = document.createElement("p")
price.innerText = prod.price;

// let mrp = document.createElement("p")
// mrp.innerText = bestseller[i].mrp;



let addtocart = document.createElement("button")
addtocart.onclick = function (event) {
    // add to cart --> items should get added to cart --> cart count should change in navbar;
    addtocartt(prod);
  };
addtocart.innerText="Add To Cart"
addtocart.className = "addtokart"
function addtocartt(prod){
    let cart = localStorage.getItem("cart");
    if (!cart) {
      // if cart is null/undefined;
      cart = []; // initialize it with empty array;
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    cart = JSON.parse(localStorage.getItem("cart")); 

    cart.push(prod); 

    localStorage.setItem("cart", JSON.stringify(cart));

};


datacard.append(image,name,price,addtocart);
container3.append(datacard);
})


