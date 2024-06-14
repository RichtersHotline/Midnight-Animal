// Javascript 
let itemID = document.getElementById("ItemID")
let itemName = document.getElementById("productName")
let itemCategory = document.getElementById("selectCategory")
let itemDes = document.getElementById("ItemDescription")
let itemAmount = document.getElementById("ItemPrice")
let itemImg = document.getElementById("ItemImage")
let itemUpdaterID = document.getElementById("IDUpdate")
let itemUpdaterName = document.getElementById("productNameUpdate")
let itemUpdaterCategory = document.getElementById("productCategoryUpdate")
let itemUpdaterDes = document.getElementById("productCategoryDes")
let itemUpdaterAmount = document.getElementById("productCategoryAmount")
let itemUpdaterImg = document.getElementById("productCategoryImg")

let displayProducts = document.querySelector("[ProductPage]")
let merchandise = JSON.parse(localStorage.getItem("merchandise")) ? JSON.parse(localStorage.getItem("merchandise")) : localStorage.setItem("merchandise", JSON.stringify(
    [{
            id: 1,

            productName: "VIP TICKET",
            Category: "Tickets",
            Description: "Buy a Vip ticket to get access to exclusive benefits that only you the holder can benefit from.",
            Amount: 4000.00,
            img_url: "https://richtershotline.github.io/Pimages/Images/Concert4.jpg"
        },
        {
            id: 2,

            productName: "BACKSTAGE PASS",
            Category: "Tickets",
            Description: "Buy a backstage pass to get exclusive access to the backstage area, meet the bands and DJs and make some new friends.",
            Amount: 2000.00,
            img_url: "https://richtershotline.github.io/Pimages/Images/Concert4.jpg"
        },
        {
            id: 3,

            productName: "MIDNIGHT TICKET",
            Category: "Tickets",
            Description: "This will allow you access to the club main floor, bar and dance floor (one night only).",
            Amount: 1000.00,
            img_url: "https://richtershotline.github.io/Pimages/Images/Concert4.jpg"
        },
        {
            id: 4,

            productName: "VISITOR PASS",
            Category: "Tickets",
            Description: `Gift this pass to a friend and have them join you in the vip area for a night.`,
            Amount: 800.00,
            img_url: "https://richtershotline.github.io/Pimages/Images/Concert4.jpg"
        },
        {
            id: 5,

            productName: "MIDNIGHT SUBSCRIPTION",
            Category: "Subscription",
            Description: "Become a part of us with this subscription. A monthly fee will be needed allows access to main floor, dance floor and bar with no need to buy tickets every night.",
            Amount: 1200.00,
            img_url: "https://richtershotline.github.io/Pimages/Images/Concert4.jpg"




        },
        {
            id: 6,

            productName: "DRINKS PASS",
            Category: "Tickets",
            Description: `Buy this ticket to get every drink you and your partners order on the house. You would do the same for us right? (NOTE: YOU STILL NEED A MIDNIGHT TICKET).`,
            Amount: 2500.00,
            img_url: "https://richtershotline.github.io/Pimages/Images/Concert4.jpg"




        },
        {
            id: 7,

            productName: "SECURITY DETAIL",
            Category: "Service",
            Description: `Your selected club will have their head of security  assign a personal security detail for you to protect you and yours. (Note while we do offer on-club security these will be YOUR personal security assign them to your booth to keep people away from you do whatever you want with them their ears are closed to secrets and their eyes are open to danger)`,
            Amount: 1500.00,
            img_url: "https://richtershotline.github.io/Pimages/Images/Concert4.jpg"




        },
        {
            id: 8,

            productName: "LIMO SERVICE",
            Category: "Service",
            Description: "Arrive at the club in style in a limo. Enough to fit 8 of your selected partners (no need to pay for them all) All eyes will be on you as you step out of one of our pristine limos. Includes a drive to the club and back home or your desired location.",
            Amount: 4500.00,
            img_url: "https://richtershotline.github.io/Pimages/Images/Concert4.jpg"




        },
        {
            id: 9,

            productName: "RENT-A-CLUB",
            Category: "Service",
            Description: `Want to have the club all to yourself? Or your closest allies? This is the package for you. You will get your choice of which club you would like to rent out. And who to let in for the night. Be it a birthday, a bachelor party or you just feel like being alone for the nonce.`,
            Amount: 95000.00,
            img_url: "https://richtershotline.github.io/Pimages/Images/Concert4.jpg"




        },
        {
            id: 10,

            productName: "MIDNIGHT ANIMAL",
            Category: "Subscription",
            Description: `This is what we all strive for. This is the ultimate offer we can give to you. Once you are in there is no turning back. Get unlimited VIP access forever, unlimited club access, unlimited drink access, your own personal driver on us. Skip the queues, get your own security detail assigned to you (if you would like). Get backstage access. And finally a personal hotline to The Boss himself. Maybe you might even meet him.`,
            Amount: 1000000.00,
            img_url: "https://richtershotline.github.io/Pimages/Images/Concert4.jpg"




        },
        {
            id: 11,

            productName: "SECURITY DETAIL THIS",
            Category: "Service",
            Description: `Your selected club will have their head of security  assign a personal security detail for you to protect you and yours. (Note while we do offer on-club security these will be YOUR personal security assign them to your booth to keep people away from you do whatever you want with them their ears are closed to secrets and their eyes are open to danger)`,
            Amount: 1500.00,
            img_url: "https://richtershotline.github.io/Pimages/Images/Concert4.jpg"




        },

    ]))

function showMerchandise(args) {
    let itemsTable = `
    <div class="table-responsive">
    <table class="table" id="CartID">
    <thead>
    <tr>
    <th scope="col">Product Name:</th>
    <th scope="col">Category:</th>
    <th scope="col">Amount</th>
    <th scope="col">Item ID</th>

    <th scope="col">Image</th>
    </tr>
    </thead>
    </div>
    <tbody>

    `
    try {
        args.forEach(Item => {
            itemsTable += `
        <tr>
        <th scope = "row">${Item.productName}</th>
        <td>${Item.Category}</td>
        <td>${Item.Amount}</td>
        <td>${Item.id}</td>

        <td><img src = "${Item.img_url}" id="adminImg"</td>

        </tr>
        `;
        });
        itemsTable += '</tbody></table>'
        displayProducts.innerHTML = itemsTable;


    } catch (e) {

        displayProducts.innerHTML += `
        
        <div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
        `
        setTimeout(() => {
            location.reload()
        }, 2000);
    }


}

function Delete(id) {
    let merchandise = JSON.parse(localStorage.getItem("merchandise"));
    merchandise = merchandise.filter(merchItem => merchItem.id !== id);
    localStorage.setItem("merchandise", JSON.stringify(merchandise));
    showMerchandise(merchandise);
}

function deleteViaId() {
    let id = document.getElementById('InputDel').value;
    id = Number(id);
    Delete(id);
}


showMerchandise(merchandise)

showMerchandise(merchandise)

function editItems(id, productName, Category, Description, Amount, img_url) {
    this.id = id;
    this.productName = productName;
    this.Category = Category;
    this.Description = Description;
    this.Amount = Amount;
    this.img_url = img_url;
}

editItems.prototype.itemNameEdit = function(newitemName) {
    this.productName = newitemName;
    let itemJson = JSON.stringify(this)
    localStorage.setItem('merchandise' + this.id, itemJson);
}

editItems.prototype.editName = function(newitemName) {
    this.productName = newitemName;
    let itemJson = JSON.stringify(this)
    localStorage.setItem('merchandise' + this.id, itemJson);
}




function addItem(id, productName, Category, Description, Amount, img_url) {
    let merchandise = JSON.parse(localStorage.getItem("merchandise"));
    let prevID = merchandise[merchandise.length - 1].id
    let newItemID = prevID + 1
    let newItemAdd = new editItems(newItemID, productName, Category, Description, Amount, img_url);
    merchandise.push(newItemAdd);
    localStorage.setItem("merchandise", JSON.stringify(merchandise));
    showMerchandise(merchandise);


}

function addNewItem() {
    let prevID = merchandise[merchandise.length - 1].id
    let newItemID = prevID + 1
    addItem(newItemID, itemName.value, itemCategory.value, itemDes.value, itemAmount.value, itemImg.value)


}

function itemUpdater() {
    let ID = itemUpdaterID.value;
    let merchandise = JSON.parse(localStorage.getItem("merchandise"));
    let itemGetter = merchandise.find(item => item.id == ID);

    if (itemGetter === null) {
        alert("No item exists with that ID");
        return;
    } else {
        itemGetter.productName = itemUpdaterName.value;
        itemGetter.Category = itemUpdaterCategory.value;
        itemGetter.Description = itemUpdaterDes.value;
        itemGetter.Amount = itemUpdaterAmount.value;
        itemGetter.img_url = itemUpdaterImg.value;
        localStorage.setItem('merchandise', JSON.stringify(merchandise));
        setTimeout(() => {
            location.reload()
        }, 2000);
    }


}




//Footer Copyright
let Copyright = document.getElementById("Foot3r")

let currentyear = new Date

Copyright.innerHTML = "Midnight Animal" + "   " + "Copyright" + "      " + "&#169;" + "        " + currentyear.getUTCFullYear()
/*
<div class="card m-4 mx-auto" style="width: 18rem;">
<img src="https://richtershotline.github.io/Pimages/Images/Concert4.jpg" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title ProductCardTxt text-center">${Item.productName}</h5>
  <p class="card-text ProductCardTxt text-center">$${Item.Amount}.00</p>
  <p class="card-text ProductCardTxt text-center">${Item.Category}</p>
  <p class="card-text ProductCardTxt text-center">${Item.id}</p>

  <button id="ProductBtn" class="mt-4"onclick='cartAdder(${JSON.stringify(Item)})'>Edit Product</button>

</div>
</div> */