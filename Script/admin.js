// Javascript 
let displayProducts = document.querySelector("[ProductPage]")
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
    Description: "This will allow you access to the club main floor, bar and dance floor (one night only).",
    Amount: 1000.00,
img_url: "https://richtershotline.github.io/Pimages/Images/ticket.webp"
  },
  {
    id:4,

    productName: "VISITOR PASS",
    Category: "Tickets",
    Description: `Gift this pass to a friend and have them join you in the vip area for a night.`,
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
    Description: `Buy this ticket to get every drink you and your partners order on the house. You would do the same for us right? (NOTE: YOU STILL NEED A MIDNIGHT TICKET).`,
    Amount: 2500.00,
    img_url: "https://richtershotline.github.io/Pimages/Images/ticket.webp"




  },
  {
    id:7,

    productName: "SECURITY DETAIL",
    Category: "Service",
    Description: `Your selected club will have their head of security  assign a personal security detail for you to protect you and yours. (Note while we do offer on-club security these will be YOUR personal security assign them to your booth to keep people away from you do whatever you want with them their ears are closed to secrets and their eyes are open to danger)`,
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
    Description: `Want to have the club all to yourself? Or your closest allies? This is the package for you. You will get your choice of which club you would like to rent out. And who to let in for the night. Be it a birthday, a bachelor party or you just feel like being alone for the nonce.`,
    Amount: 95000.00,
    img_url: "https://richtershotline.github.io/Pimages/Images/ticket.webp"




  },
  {
    id:10,

    productName: "MIDNIGHT ANIMAL",
    Category: "Subscription",
    Description: `This is what we all strive for. This is the ultimate offer we can give to you. Once you are in there is no turning back. Get unlimited VIP access forever, unlimited club access, unlimited drink access, your own personal driver on us. Skip the queues, get your own security detail assigned to you (if you would like). Get backstage access. And finally a personal hotline to The Boss himself. Maybe you might even meet him.`,
    Amount: 1000000.00,
    img_url: "https://richtershotline.github.io/Pimages/Images/ticket.webp"




  }

    
 ]) )
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
              <p class="card-text ProductCardTxt text-center">${Item.Category}</p>
              <button id="ProductBtn" class="mt-4" onclick='cartAdder(${JSON.stringify(Item)})'>Delete Product</button>
              <button id="ProductBtn" class="mt-4"onclick='cartAdder(${JSON.stringify(Item)})'>Edit Product</button>

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
        setTimeout( ()=>{
            location.reload()
        }, 2000)
    }

    
 }
 showMerchandise(merchandise)































//Footer Copyright
let Copyright = document.getElementById("Foot3r")
 
let currentyear = new Date

Copyright.innerHTML = "Midnight Animal"  + "   " + "Copyright" + "      " + "&#169;" +  "        " + currentyear.getUTCFullYear()