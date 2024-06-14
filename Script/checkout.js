// Javascript 
let cartShower = document.getElementById("CheckoutItems")
let totalCost = document.getElementById("ItemTotal")
let cartitem = JSON.parse(localStorage.getItem("cartCheckout")) ? JSON.parse(localStorage.getItem("cartCheckout")) : [

    
]



function showCart(args) {
 
    let uniqueArgs = [...new Set(args.map(item => item.productName))]
    let filteredArgs = args.filter((item, index) => uniqueArgs.indexOf(item.productName) === index)
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

        filteredArgs.forEach(item => {
            ItemsTable += `
          <tr>
         <th scope = "row">${item.productName}</th>
        <td>${item.Category}</td>
         <td><input type="number" id="Quantity${item.productName}" value="0"></td>
        <td id="PriceTotal${item.productName}">${item.Amount * 0}</td>
        
        </tr>
            
            
         
            
            
            
            
            `
        
        });
        cartShower.innerHTML = ItemsTable
        args.forEach(item => {
        let quantityInput = document.getElementById(`Quantity${item.productName}`)
        let PricingTotal = document.getElementById(`PriceTotal${item.productName}`)
        
        quantityInput.addEventListener('input', (event) => {
        let quantityValue = event.target.value
        PricingTotal.innerHTML = item.Amount * quantityValue;


            });
        });
  

            

    
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
   cartShower.innerHTML = "Purchase complete"
   localStorage.removeItem("cartCheckout")
    alert("Purchase successful. Thank you for your continued loyalty to our brand. Have a good night. And have fun.")
   setTimeout( ()=>{
    location.reload()
}, 5000)



 }
 function showTotal() {
    let checkoutCart = document.getElementById('CartID')
    let totalPrice = 0

    for (let i = 1; i < checkoutCart.rows.length; i++) {
        let chargedPrice = checkoutCart.rows[i].cells[3]

        let finalAmount = Number(chargedPrice.innerHTML)

        totalPrice += finalAmount
    }

    document.getElementById('ItemTotal').value = totalPrice.toFixed(2)
}


 showCart(cartitem)
 





















let Copyright = document.getElementById("Foot3r")
 
let currentyear = new Date

Copyright.innerHTML = "Midnight Animal"  + "   " + "Copyright" + "      " + "&#169;" +  "        " + currentyear.getUTCFullYear()