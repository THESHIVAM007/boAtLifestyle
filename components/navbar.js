function navbar(){
return `   <div id="navbar">
<img  onclick = "location.href = 'index.html';" width="90px" height="70px" src="https://gumlet.assettype.com/swarajya%2F2021-01%2F7a6e91f6-5862-4ac5-bb08-eb5bf2a3e20c%2FboAt_logo.jpg?q=75&auto=format%2Ccompress&w=1200" alt="boat.logo">
<a id="shopp" href="shop.html">Shop</a>
<h1>|</h1>
<a href="dailydeal.html">Daily Deals</a>
<h1>|</h1>
<label onmouseover="giveopt" for="more">More</label>

<!-- <select id="more">
  <option value="gifting">Gifting</option>
  <option value="offerzone">Offer Zone</option>
  <option value="floaturboat">Float Your Boat</option>
  <option value="boathead">Meet The Boathead</option>
  <option value="earn100">Earn ₹100</option>
</select> -->
<input  id="search"  placeholder="search" >  
<img onclick="location.href='sign.html';"  height = "25px" width = "25px" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/user_1.png?v=1606314823" alt="my account">
<img onclick="location.href='cart.html';" height = "25px" width = "25px"src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/cart.png?v=1606314839" alt="cart.img">



</div> `;
}
export default navbar;