// Javascript 
let cartShower = document.getElementById("CheckoutItems")
let cartitem = JSON.parse(localStorage.getItem("cartCheckout")) ? JSON.parse(localStorage.getItem("cartCheckout")) : [

    
]



function showCart(args) {
 

    let ItemsTable = `
    <table class="table" id="CartID">
    <thead>
    <tr>
    <th scope="col">Product Name:</th>
    <th scope="col">Category:</th>
    <th scope="col">Quantity</th>
    <th scope="col">Amount</th>
    </tr>
    </thead>
    <tbody>








    `
     cartShower.innerHTML = ""

    
    try {

        args.forEach(item => {
            ItemsTable += `
            <tr>
            <th scope = "row">${item.productName}</th>
            <td>${item.Category}</td>
            <td>${item.Amount}</td>
            <td>${item.Amount}</td>

            </tr>
            
            
         
            
            
            
            
            `
        
        });

        ItemsTable += `
        </tbody>
        </table>
        
        
        
        `
cartShower.innerHTML = ItemsTable

    } catch (e) {

        cartShower.innerHTML += `
        
        <div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
        `
        setTimeout( ()=>{
            location.reload()
        }, 2000)
    }

 }
 function clearAsDay() {

    let cartClearer = document.getElementById("CartID")
    cartClearer.remove();
   cartShower.innerHTML = "Cart Cleared"
   localStorage.removeItem("cartCheckout")
   setTimeout( ()=>{
    location.reload()
}, 1000)
 }

 function purchase() {
    let cartClearer = document.getElementById("CartID")
    cartClearer.remove();
   cartShower.innerHTML = "Cart Cleared"
   localStorage.removeItem("cartCheckout")
   cartShower.innerHTML = "Purchase successful. Thank you for your continued loyalty to our brand. Have a good night. And have fun."
   setTimeout( ()=>{
    location.reload()
}, 5000)



 }
 showCart(cartitem)
 





















let Copyright = document.getElementById("Foot3r")
 
let currentyear = new Date

Copyright.innerHTML = "Midnight Animal"  + "   " + "Copyright" + "      " + "&#169;" +  "        " + currentyear.getUTCFullYear()