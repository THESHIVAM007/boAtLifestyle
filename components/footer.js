function footer(){
    return `
    <div id = "bgcolor">
    <div id="feature">
    <img  height="40px" width="40px" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/group_186_3x_4616a7a4-8c24-4065-a237-54e3d574bb94.png?v=1611132367" alt="">
    <h1>Free Shipping</h1>
    <img  height="40px" width="40px" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/vector_3x_50a1233e-95d9-4e18-9e8e-757b545e2c06.png?v=1611132367" alt="">
    <h1>Exclusive Deals</h1>
    <img height="40px" width="40px" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/vector_2_2x_9d5071e2-154a-4f06-b660-9d0430a18248.png?v=1611132367" alt="">
    <h1>Secure Checkout</h1>
    
    </div>
    
    <div id="pp">
        <p id="p">India's fastest growing audio & wearables brand. The most incredible range of wireless earphones, earbuds, headphones, smart watches, and home audio. From workouts to adventures, boAt will get you sailing!</p>
    </div>
    
    
    <div id="flexx">
    
        <div>
            <h4> Subscribe to email alerts. We promise not to spam your inbox.</h4>
            <label for="email"> Email</label>
            <input id="email" type="email">
            <button type="submit">Submit</button>
            
    
        </div>
        <div id="help">
         <div>
            
            <h1>shop</h1>
            
            <h2>True Wireless Earbuds</h2>
            <h2>Wireless Headphones</h2>
            <h2>Wired Headphones</h2>
            <h2>Wireless Speakers</h2>
            <h2>Home Audio</h2>
            <h2>Mobile Accessories</h2>
            <h2>Smart Watches</h2>
        </div>
        <div>
            <h1>Help</h1>
        
            <h2>Track Your Order</h2>
            <h2> Warranty & Support</h2>
            <h2>Return Policy</h2>
            <h2>Service Center</h2>
            <h2>FAQs</h2>
        </div>
        <div>
            <h1>Company</h1>
        
            <h2>About BoAt</h2>
            <h2>News</h2>
            <h2>Read Our Blog</h2>
            <h2>Security</h2>
            <h2>Terms of Services</h2>
            <h2>Privacy Policy</h2>
        </div>
    </div>
        </div>
        <div id="social">
            <img height="30px" width="40px" src="data:image/png;base64,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" alt="">
            <img height="30px" width="40px" src="https://www.freeiconspng.com/uploads/facebook-logo-png-white-facebook-logo-png-white-facebook-icon-png--32.png" alt="">
            <img height="30px" width="40px" src="data:image/png;base64,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" alt="">
            <img height="30px" width="40px" src="https://www.edigitalagency.com.au/wp-content/uploads/new-instagram-logo-white-border-icon-png-large.png" alt="">
            <img height="30px" width="40px" src="data:image/png;base64,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" alt="">
           
        </div>
        <div id="app">
            <h1>Download the app</h1>
            <img height="60px" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/google-play.png?v=1608620293" alt="">
            <img height="60px"src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/app-store.png?v=1608620293" alt="">
        </div>
        </div>`
}
export default footer