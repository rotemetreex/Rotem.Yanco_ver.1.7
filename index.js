var myCart = [];
var products = [];

function generateProducts() {
  fetch(
    "https://raw.githubusercontent.com/dotnet-presentations/ContosoCrafts/master/src/wwwroot/data/products.json"
  )
    .then((response) => response.json())
    .then((json) => {
      products = json;
      for (var i = 0; i < products.length; i++) {
        products[i].price = Math.floor(Math.random() * 100);
        products[i].availableAmount = Math.floor(Math.random() * 10);
      }
      createUIfromProducts();
    });
}

function createUIfromProducts() {
  var bodyTag = document.getElementsByTagName("body")[0];

  var sideNav = document.createElement("div");
  sideNav.classList.add("sideNav");
  bodyTag.appendChild(sideNav);

  var navLinks = [
    {
      id: "products",
      href: "#products",
      innerHTML: "Products",
    },
    {
      id: "about",
      href: "#about",
      innerHTML: "About Us",
    },
    {
      id: "contact",
      href: "#contact",
      innerHTML: "Contact",
    },
    {
      id: "myCart",
      href: "#myCart",
      innerHTML: "My Cart",
    },
  ];

  function getDataForNavLinks() {
    for (var i = 0; i < navLinks.length; i++) {
      var navLink = document.createElement("a");
      navLink.href = navLinks[i]["href"];
      navLink.innerHTML = navLinks[i]["innerHTML"];
      navLink.id = navLinks[i]["id"];
      navLink.classList.add("navLink");
      sideNav.appendChild(navLink);
    }
  }
  getDataForNavLinks();

  var cartDiv = document.createElement("div");
  cartDiv.classList.add("myCart");
  sideNav.appendChild(cartDiv);

  var cartTitle = document.createElement("div");
  cartTitle.classList.add("cartTitle");
  cartTitle.innerHTML = "My Cart";
  cartDiv.appendChild(cartTitle);

  var cartProductList = document.createElement("div");
  cartProductList.classList.add("cartProductList");
  cartDiv.appendChild(cartProductList);

  var navFooter = document.createElement("div");
  navFooter.classList.add("navFooter");
  sideNav.appendChild(navFooter);

  var hrefSrcAltData = [
    {
      href: "#paypal",
      src: "CSS/icons/1156732_logo_payment_paypal_finance_icon.png",
      alt: "Pay Pal icon",
    },
    {
      href: "#applePay",
      src: "CSS/icons/icons8-apple-pay-512.png",
      alt: "Pay Pal icon",
    },
    {
      href: "#whatsapp",
      src: "CSS/icons/3225179_app_logo_media_popular_social_icon.png",
      alt: "Pay Pal icon",
    },
  ];

  function getDataforBottomIcons() {
    for (var i = 0; i < hrefSrcAltData.length; i++) {
      var bottomNavIcon = document.createElement("a");
      bottomNavIcon.href = hrefSrcAltData[i]["href"];
      navFooter.appendChild(bottomNavIcon);

      var icon = document.createElement("img");
      icon.src = hrefSrcAltData[i]["src"];
      icon.alt = hrefSrcAltData[i]["alt"];
      icon.classList.add("bottomNavIcon");
      bottomNavIcon.appendChild(icon);
    }
  }
  getDataforBottomIcons();

  var cartIsHidden = true;
  var navLinkById = document.getElementById("myCart");

  navLinkById.addEventListener("click", () => {
    if (cartIsHidden == false) {
      cartIsHidden = true;
      cartDiv.style.visibility = "hidden";
    } else {
      cartDiv.style.visibility = "visible";
      cartIsHidden = false;
    }
  });

  var mainDiv = document.createElement("div");
  mainDiv.classList.add("main");
  bodyTag.appendChild(mainDiv);

  var mainTitle = document.createElement("div");
  mainTitle.classList.add("mainTitle");
  mainTitle.innerHTML = "My E-store";
  mainDiv.appendChild(mainTitle);

  var itemCategoryTiltleDiv = document.createElement("div");
  itemCategoryTiltleDiv.classList.add("itemCategoryTitleDiv");
  itemCategoryTiltleDiv.innerHTML = "*** Items' Category ***";
  mainDiv.appendChild(itemCategoryTiltleDiv);

  var mainProductList = document.createElement("div");
  mainProductList.classList.add("mainProductList");
  mainDiv.appendChild(mainProductList);

  for (i in products) {
    var productName = products[i]["Id"];
    var productImg = products[i]["img"];
    var productDesc = products[i]["Description"];
    var productMaker = products[i]["Maker"];
    var productUrl = products[i]["Url"];
    var productPrice = products[i]["price"];
    var productAvailableAmount = products[i]["availableAmount"];

    var smallItemInfo = document.createElement("div");
    smallItemInfo.classList.add("smallItemInfo");
    mainProductList.appendChild(smallItemInfo);

    var smallItemImg = document.createElement("img");
    smallItemImg.src = productImg;
    smallItemImg.alt = productName;
    smallItemImg.classList.add("img");
    smallItemInfo.appendChild(smallItemImg);

    var smallItemTitle = document.createElement("div");
    smallItemTitle.classList.add("smallItemTitle");
    smallItemTitle.innerHTML = productName.toUpperCase();
    smallItemInfo.appendChild(smallItemTitle);

    var smallItemPrice = document.createElement("div");
    smallItemPrice.classList.add("smallPriceTag");
    smallItemPrice.innerHTML = "Price: " + productPrice + "$";
    smallItemInfo.appendChild(smallItemPrice);

    var smallBtnsDiv = document.createElement("div");
    smallBtnsDiv.classList.add("smallBtnsDiv");
    smallBtnsDiv.id = "smallBtnsDiv";
    smallItemInfo.appendChild(smallBtnsDiv);

    var btnPlus = document.createElement("button");
    btnPlus.classList.add("plusMinusBtns");
    btnPlus.id = "btnPlus";
    btnPlus.innerHTML = "Add";
    smallBtnsDiv.appendChild(btnPlus);

    var amountDiv = document.createElement("div");
    amountDiv.classList.add("amountDiv");
    // amountDiv.id = "amountDiv";
    amountDiv.innerHTML = productAvailableAmount + " in stock";
    smallItemInfo.appendChild(amountDiv);
  }





  var numsArr = [];
  var amountsArrStr = [];

  function amountStrArrToNumsArr() {
    for (var i = 0; i < document.getElementsByClassName("smallItemInfo").length; i++) {
      var amount =document.getElementsByClassName("smallItemInfo")[i].children[4].innerHTML;
      amountsArrStr.push(amount);
      var amountToNum = Number(amountsArrStr[i][0] + amountsArrStr[i][1]);
      numsArr.push(amountToNum);
    }
    return numsArr;
  }
  amountStrArrToNumsArr();

  console.log(numsArr);



  var addBtnsArr = [];

  function addBtnsToArr() {
    let allBtnsArr = document.getElementsByClassName("plusMinusBtns");
    for(let i=0; i<allBtnsArr.length; i++) {
      if(allBtnsArr[i].innerHTML == 'Add') {
        addBtnsArr.push(allBtnsArr[i]);
      }
    }
  }
  addBtnsToArr();
  console.log(addBtnsArr);



  function addBtnsArrClickHandler() {
    for (var x = 0; x < addBtnsArr.length; x++) {
      addBtnsArr[x].addEventListener("click", (event) => {
        // console.log(numsArr[x]);

        var itemToCart = event.target.parentElement.parentElement.cloneNode(true);
        myCart.push(itemToCart);
        itemToCart.classList.add("itemInCart");
        itemToCart.classList.remove("smallItemInfo");
        itemToCart.children[3].remove();
        cartProductList.appendChild(itemToCart);
  
        var cartItemRemoveBtn = document.getElementById("btnPlus").cloneNode(true);
        itemToCart.appendChild(cartItemRemoveBtn);
        cartItemRemoveBtn.classList.remove("plusMinusBtns");
        // console.log(itemToCart);
        cartItemRemoveBtn.innerHTML = "Remove";
        cartItemRemoveBtn.classList.add("cartRemoveBtn");
      });
    }
  }
  addBtnsArrClickHandler();



}




    // for(let i=0; i<numsArr.length; i++) {
    //   if(numsArr[i] == 0) {
    //     console.log('out of stock');
    //   } else {
    //     console.log('push to cart');
    //   }
    // }





  // for (var i = 0; i < allBtnsArr.length; i++) {
  //   if (allBtnsArr[i].innerHTML == "Add") {
  //     addBtnsArr.push(allBtnsArr[i]);
  //   }





// var quantityInput = document.createElement('input');
// quantityInput.classList.add('quantityInput');
// smallBtnsDiv.appendChild(quantityInput);

// var btnMinus = document.createElement('button');
// btnMinus.classList.add('plusMinusBtns');
// btnMinus.id = 'btnMinus';
// btnMinus.innerHTML = 'Remove';
// smallBtnsDiv.appendChild(btnMinus);

// var itemInfo = document.createElement('div');
// itemInfo.classList.add('itemInfo');
// mainProductList.appendChild(itemInfo);

// var itemDescription = document.createElement('p');
// itemDescription.id = 'itemDesc';
// itemDescription.innerHTML = productDesc;
// itemInfo.appendChild(itemDescription);
