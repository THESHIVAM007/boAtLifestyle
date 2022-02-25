import navbar from "../components/navbar.js"


let navbar_div = document.getElementById("navbar_con")
navbar_div.innerHTML = navbar();

import footer from "../components/footer.js"
let footer_div = document.getElementById("foot")
footer_div.innerHTML = footer();

function storeimages(){
    let images = [];
    images.push("https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt_sunburn_wbanner_2048x.jpg?v=1645258239");
    images.push("https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AB1750_wbanner_aeb06726-6b4d-40dc-9f46-2d0ce87a9bf8_2048x.jpg?v=1645440174");
    images.push("https://cdn.shopify.com/s/files/1/0057/8938/4802/files/BOB-Web_db63201b-7441-4fd3-ae66-5020c16a2c05_2048x.jpg?v=1645077525");
    images.push("https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Blaze_wbanner_1_2048x.jpg?v=1645157819");
    localStorage.setItem("images",JSON.stringify(images))
}
storeimages();

function start (){
    let images_arr = JSON.parse(localStorage.getItem('images'))
    console.log('images_arr:', images_arr)
let slideshow_img = document.getElementById('slideshow_image')

let i = 0 
setInterval(function(){
    if (i===3){
        i=0
    }
    slideshow_img.src = images_arr[i]
    i = i+1
  
},3000)
}
start();

function bestsellers(){
    let bestseller = [
        {
            img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/cream_720x.png?v=1642405569",
     name:"boAt Airdopes 131 - Wireless Earbuds",
     price:"Rs. 1299.00",
    //  mrp:"<del>Hello World!</del>",
     description:"lightwieght for portability"
     
    
    },
     {
        img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-img-R333_300x.png?v=1641801662",
        name:"boAt Rockerz 333",
      price:"Rs. 1499.00",
    //   mrp:"Rs. 3,990.00",
      description:"color variant for every style"
             },
     {
        img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/merucry-3_300x.png?v=1639400858",
        name:"boAt Watch Mercury",
      price:"Rs. 2499.00",
    //   mrp:"Rs. 6,990.00",
      description:"1.54in display "
        
     }
               ]
    console.log('bestseller:', bestseller);
   
    let container = document.getElementById("bestproducts")
    container.innerHTML="";
    
    for (var i = 0; i< bestseller.length;i++){
        let datacard = document.createElement("div");
     
    let image = document.createElement("img");
    image.src = bestseller[i].img
    

    let name = document.createElement("p")
    name.innerText = bestseller[i].name;

    let price = document.createElement("p")
    price.innerText = bestseller[i].price;

    // let mrp = document.createElement("p")
    // mrp.innerText = bestseller[i].mrp;

    let description = document.createElement("p")
    description.innerText=bestseller[i].description;

    let addtocart = document.createElement("button")
    addtocart.onclick = addtocartt()
    addtocart.innerText="Add To Cart"
    function addtocartt(){
    //     let cart = []
    //     cart.push(bestseller[i]);
              
    //           localStorage.setItem("cart", JSON.stringify(cart));

    };


 datacard.append(image,name,price,description,addtocart);
 container.append(datacard);
    } 
}
bestsellers();



function justlaunch(){
let justlaunched = [ {
    img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_affc1a7f-f714-4952-9c58-3de269539350_720x.png?v=1645099233",
name:"boAt Aavante Bar 1750",
price:"Rs. 11,990.00",
description:"color variant for every style"


},
{
    img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_b6563f96-f1a1-4915-b686-d4e37232ec3c_300x.png?v=1644301638",
name:"boAt Nirvanaa 751 ANC",
price:"Rs. 3,999.00",
description:"Fast Charge in 15 min"


},
{
    img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_6370be21-3c2f-48a8-bb18-edc49a667081_300x.png?v=1643619646",
name:"boAt Bassheads 950v2",
price:"Rs. 899.00",
description:"crystal clear audio with great bass for music"

}
];
console.log('justlaunched:', justlaunched)

let container1 = document.getElementById("justlaunches")
    container1.innerHTML="";
    
    for (var i = 0; i< justlaunched.length;i++){
        let datacard = document.createElement("div");
     
    let image = document.createElement("img");
    image.src = justlaunched[i].img
    

    let name = document.createElement("p")
    name.innerText = justlaunched[i].name;

    let price = document.createElement("p")
    price.innerText = justlaunched[i].price;

    // let mrp = document.createElement("p")
    // mrp.innerText = bestseller[i].mrp;

    let description = document.createElement("p")
    description.innerText=justlaunched[i].description;

    let addtocart = document.createElement("button")
    addtocart.onclick = addtocart2()
    addtocart.innerText="Add To Cart"
    function addtocart2(){
    //     let cart = []
    //     cart.push(bestseller[i]);
              
    //           localStorage.setItem("cart", JSON.stringify(cart));

    };


 datacard.append(image,name,price,description,addtocart);
 container1.append(datacard);


}}
justlaunch();

// {img:"",
//     name:"",
//     price:"",
//     description:""
//     },
function smartwatch(){
    let smartwatches = [ {img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/merucry-3_300x.png?v=1639400858",
    name:"boAt Watch Mercury",
    price:"Rs. 2,499.00",
    description:"1.54 inch display"
    },
    {img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_529ecf13-c993-4fe7-a2d6-9357f1a47db4_300x.png?v=1645164257",
    name:"boAt Watch Xtend",
    price:"Rs. 2,999.00",
    description:"color variant for every style"
    },
    {img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/e7910a39-186a-41f6-ac57-fc3e84108104_300x.png?v=1625045106",
    name:"boAt Storm",
    price:"Rs. 2,999.00",
    description:"Track and transform your health"
    },]
    console.log('smartwatches:', smartwatches)

    let container2 = document.getElementById("smart")
    container2.innerHTML="";
    
    for (var i = 0; i< smartwatches.length;i++){
        let datacard = document.createElement("div");
     
    let image = document.createElement("img");
    image.src = smartwatches[i].img
    

    let name = document.createElement("p")
    name.innerText = smartwatches[i].name;

    let price = document.createElement("p")
    price.innerText = smartwatches[i].price;

    // let mrp = document.createElement("p")
    // mrp.innerText = bestseller[i].mrp;

    let description = document.createElement("p")
    description.innerText=smartwatches[i].description;

    let addtocart = document.createElement("button")
    addtocart.onclick = addtocart2()
    addtocart.innerText="Add To Cart"
    function addtocart2(){
    //     let cart = []
    //     cart.push(bestseller[i]);
              
    //           localStorage.setItem("cart", JSON.stringify(cart));

    };


 datacard.append(image,name,price,description,addtocart);
 container2.append(datacard);
    }


}
smartwatch()

function topwireless(){
    let wireless = [
        {img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/35ca6350-d6f3-4bc2-a742-01b2c88d80c4_300x.png?v=1625552657",
    name:"BOAT Rockerz 255 Pro+",
    price:"Rs. 1,499.00",
    description:"40hrs non-stop playback"
    },
    {
        img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/cream_720x.png?v=1642405569",
 name:"boAt Airdopes 131 - Wireless Earbuds",
 price:"Rs. 1299.00",
//  mrp:"<del>Hello World!</del>",
 description:"lightwieght for portability"
 

},
{img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/eb8e0fbd-c412-48b3-9c91-5b49ddf35800_300x.png?v=1625045744",
name:"BOAT Rockerz 450",
price:"Rs. 1,399.00",
description:"immersive,wireless audio experience"
}
]
console.log('wireless:', wireless)


let container3 = document.getElementById("topwireless")
container3.innerHTML="";

for (var i = 0; i< wireless.length;i++){
    let datacard = document.createElement("div");
 
let image = document.createElement("img");
image.src = wireless[i].img


let name = document.createElement("p")
name.innerText = wireless[i].name;

let price = document.createElement("p")
price.innerText = wireless[i].price;

// let mrp = document.createElement("p")
// mrp.innerText = bestseller[i].mrp;

let description = document.createElement("p")
description.innerText=wireless[i].description;

let addtocart = document.createElement("button")
addtocart.onclick = addtocart2()
addtocart.innerText="Add To Cart"
function addtocart2(){
//     let cart = []
//     cart.push(bestseller[i]);
          
//           localStorage.setItem("cart", JSON.stringify(cart));

};


datacard.append(image,name,price,description,addtocart);
container3.append(datacard);
}

}
topwireless()


function topwired(){
    let topwire = [{img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/553af994-244a-4b81-9d9e-9967a1b966b3_300x.png?v=1625046259",
       name:"boAt BassHeads 100",
        price:"Rs. 399.00",
       description:"Hawk designed in vibrant color"
        },
        {img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/103_300x.png?v=1574927262",
       name:"boAt BassHeads 103",
        price:"Rs. 399.00",
       description:"hooking immersive audio"
        },
        {img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/8ec58553-3255-48ec-929e-4838215b640c_300x.png?v=1625046271",
       name:"boAt BassHeads 900",
        price:"Rs. 699.00",
       description:"Dynamic Sound"
        },
    ]
    console.log('topwire:', topwire);

    let container4 = document.getElementById("topwire")
container4.innerHTML="";

for (var i = 0; i< topwire.length;i++){
    let datacard = document.createElement("div");
 
let image = document.createElement("img");
image.src = topwire[i].img


let name = document.createElement("p")
name.innerText = topwire[i].name;

let price = document.createElement("p")
price.innerText = topwire[i].price;

// let mrp = document.createElement("p")
// mrp.innerText = bestseller[i].mrp;

let description = document.createElement("p")
description.innerText=topwire[i].description;

let addtocart = document.createElement("button")
addtocart.onclick = addtocart2()
addtocart.innerText="Add To Cart"
function addtocart2(){
//     let cart = []
//     cart.push(bestseller[i]);
          
//           localStorage.setItem("cart", JSON.stringify(cart));

};


datacard.append(image,name,price,description,addtocart);
container4.append(datacard);
}

}
topwired()

