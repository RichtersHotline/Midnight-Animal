// Javascript 
// Displaying the items
let displayProducts = document.querySelector("[ProductPage]")
// Sorting by price
let Sorter =  document.getElementById("ProductBtn2")
// Sorting alphabetically
let cateSorter = document.getElementById("ProductBtnAlph")
//Searching By name 
let searchBar = document.getElementById("Searcher")
// local storage here
let merchandise = JSON.parse(localStorage.getItem("merchandise")) ? JSON.parse(localStorage.getItem("merchandise")) : localStorage.setItem("merchandise", JSON.stringify(
    [
     {
        id:1,

    productName: "VIP TICKET",
    Category: "Tickets",
    Description: "Buy a Vip ticket to get access to exclusive benefits that only you the holder can benefit from.",
    Amount: 4000.00,
    img_url: "https://richtershotline.github.io/Pimages/Images/ticket.webp"
  },
  {
    id:2,

    productName: "BACKSTAGE PASS",
    Category: "Tickets",
    Description: "Buy a backstage pass to get exclusive access to the backstage area, meet the bands and DJs and make some new friends.",
    Amount: 2000.00,
    img_url: "https://richtershotline.github.io/Pimages/Images/ticket.webp"
  },
  {
    id:3,

    productName: "MIDNIGHT TICKET",
    Category: "Tickets",
    Description: "This will allow you access to the club's main floor, bar and dance floor (one night only)",
    Amount: 1000.00,
img_url: "https://richtershotline.github.io/Pimages/Images/ticket.webp"
  },
  
  {
    id:4,

    productName: "VISITOR'S PASS",
    Category: "Tickets",
    Description: "Gift this pass to a friend (only available if you're in our vip subscriber program) and they'll be able to join you in the vip area for a night.",
    Amount: 800.00,
    img_url: "https://richtershotline.github.io/Pimages/Images/ticket.webp"
  },
  {
    id:5,

    productName: "MIDNIGHT SUBSCRIPTION",
    Category: "Subscription",
    Description: "Become a part of us with this subscription. A monthly fee will be needed allows access to main floor, dance floor and bar with no need to buy tickets every night.",
    Amount: 1200.00,
    img_url: "https://richtershotline.github.io/Pimages/Images/ticket.webp"




  },
  {
    id:6,

    productName: "DRINKS PASS",
    Category: "Tickets",
    Description: "Buy this ticket to get every drink you and your partners order on the house. You'd do the same for us right? (NOTE: YOU STILL NEED A MIDNIGHT TICKET).",
    Amount: 2500.00,
    img_url: "https://richtershotline.github.io/Pimages/Images/ticket.webp"




  },
  {
    id:7,

    productName: "SECURITY DETAIL",
    Category: "Service",
    Description: "Your selected club's head of security will assign a personal security detail for you to protect you and yours. (Note while we do offer on-club security these will be YOUR personal security assign them to your booth to keep people away from you do whatever you want with them their ears are closed to secrets and their eyes are open to danger)",
    Amount: 1500.00,
    img_url: "https://richtershotline.github.io/Pimages/Images/ticket.webp"




  },
  {
    id:8,

    productName: "LIMO SERVICE",
    Category: "Service",
    Description: "Arrive at the club in style in a limo. Enough to fit 8 of your selected partners (no need to pay for them all) All eyes will be on you as you step out of one of our pristine limos. Includes a drive to the club and back home or your desired location.",
    Amount: 4500.00,
    img_url: "https://richtershotline.github.io/Pimages/Images/ticket.webp"




  },
  {
    id:9,

    productName: "RENT-A-CLUB",
    Category: "Service",
    Description: "Want to have the club all to yourself? Or your closest allies? This is the package for you. You'll get your choice of which club you'd like to rent out. And who to let in for the night. Be it a birthday, a bachelor party or you just feel like being alone for the nonce.",
    Amount: 95000.00,
    img_url: "https://richtershotline.github.io/Pimages/Images/ticket.webp"




  },
  {
    id:10,

    productName: "MIDNIGHT ANIMAL",
    Category: "Subscription",
    Description: "This is what we all strive for. This is the ultimate offer we can give to you. Once you're in there's no turning back. Get unlimited VIP access forever, unlimited club access, unlimited drink access, your own personal driver on us. Skip the queues, get your own security detail assigned to you (if you'd like). Get backstage access. And finally a personal hotline to The Boss himself. Maybe you'll even meet him.",
    Amount: 1000000.00,
    img_url: "https://richtershotline.github.io/Pimages/Images/ticket.webp"




  }

    
 ]) )


            //    <button id="CardBtn" onclick="placeholder()">Get Tickets</button>


 function showMerchandise(args) {
 
    displayProducts.innerHTML = ""

    try {

        args.forEach(Item => {
            
            displayProducts.innerHTML += `
            <div class="card m-4 mx-auto" style="width: 18rem;">
            <img src="https://richtershotline.github.io/Pimages/Images/Concert4.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title ProductCardTxt text-center">${Item.productName}</h5>
              <p class="card-text ProductCardTxt text-center">$${Item.Amount}.00</p>

              <button id="ProductBtn" onclick="placeholder()">Get Tickets</button>

            </div>
          </div>
            
            
            
            
            
            `
        });


    } catch (e) {

        displayProducts.innerHTML += `
        
        <div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
        `
    }

    
 }



 //Sorting By Price
let sorterOn = false  
Sorter.addEventListener("click", () => {
try {

if(!merchandise) throw new Error ("Cannot Sort")
    if(!sorterOn) {

     merchandise.sort((cheap,pricey) => pricey.Amount - cheap.Amount)
    sorterOn = true
    Sorter.innerHTML = "Sort by Lowest"
    }
else {
    merchandise.sort((cheap,pricey) => cheap.Amount - pricey.Amount) 
    sorterOn = false
    Sorter.innerHTML = "Sort by Highest"
}
showMerchandise(merchandise)
} catch(e) {

displayProducts.innerHTML = "Cannot sort at this time"

}


})



function sortCategory() {


}


 showMerchandise(merchandise)
searchBar.addEventListener("keyup", () => {
    try {
    if(searchBar.value.length < 1) {
     
        showMerchandise(merchandise)

    }
    
  let searchedProduct = merchandise.filter(Item => Item.productName.toUpperCase().includes(searchBar.value.toUpperCase()))
       
        showMerchandise(searchedProduct)
        if(!searchedProduct.length) throw new Error ("Not found please check your spelling.")

    
    }catch(e) {

        displayProducts.innerHTML = "Something went awry. The item might not exist, please check your spelling as well"

    }


})
// Footer Copyright
let Copyright = document.getElementById("Foot3r")
 
let currentyear = new Date

Copyright.innerHTML = "Midnight Animal"  + "   " + "Copyright" + "      " + "&#169;" +  "        " + currentyear.getUTCFullYear()