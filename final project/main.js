//cart
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");


// open chart
cartIcon.onclick = () => {
    cart.classList.add("active");
};
//close chart
closeCart.onclick = () => {
    // alert("clicked")
    cart.classList.remove("active");
};


// cart working js 
if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}
//making function
function ready() {
    //remove item from cart
    var removeCartButtons = document.getElementsByClassName("cart-remove");
    console.log(removeCartButtons);
    for (var i = 0; i < removeCartButtons.length; i++) {
        var button = removeCartButtons[i];
        button.addEventListener("click", removeCartItem);
    }

    //quantity change 
    var quantityInputs = document.getElementsByClassName("cart-quantity");
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);
    }






    //add to cart
    var addCart = document.getElementsByClassName("add-cart");
    for (var i = 0; i < addCart.length; i++) {
        var button = addCart[i];
        button.addEventListener("click", addCartClicked);
    }
























    //print button work
    document
        .getElementsByClassName("btn-buy")[0]
        .addEventListener("click", buyButtonClicked);
}

//buy button 
function buyButtonClicked(){
    alert("your order is placed : ");
    var cartContent = document.getElementsByClassName("cart-content")[0];
    while(cartContent.hasChildNodes()){
        cartContent.removeChild(cartContent.firstChild);
    }

    updatetotoal();

}

//remove item from cart

function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();

    updatetotoal();
}

//quantity changes
function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updatetotoal(); //err
}

// add to cart

// function addCartClicked(event) {
//     var button = event.target;
//     var shopProducts = button.parentElement;
//     var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
//     var price = shopProducts.getElementsByClassName("price")[0].innerText;
//     var productImg = shopProducts.getElementsByClassName("product-img")[0].src;

//     // console.log(title,price,productImg);
//     addPrductToCart(title, price, productImg);
//     updatetotoal();
// }

// function addPrductToCart(title, price, productImg) {
//     var cartShpoBox = document.createElement("div");
//     cartShpoBox.classList.add("cart-box");
//     var cartItems = document.getElementsByClassName("cart-content")[0];
//     var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
//     for (var i = 0; i < cartItemsNames.length; i++) {
//         if (cartItemsNames[i].innerText == title) {
//             alert("you have already add this item to cart");
//             return;

//         }
//     }

//     var cartBoxContent = `
// <img src="${productImg}" alt="" class="cart-img">
// <div class="detail-box">
//     <div class="cart-product-title">${title}</div>
//     <div class="cart-price">${price}</div>
//     <input type="number" value="1" class="cart-quantity">
// </div>

// <!-- remove cart -->
// <i class='bx bxs-trash-alt cart-remove'></i>`;

//     cartShpoBox.innerHTML = cartBoxContent;
//     cartItems.append(cartShpoBox);
//     cartShpoBox
//         .getElementsByClassName("cart-remove")[0]
//         .addEventListener("click", removeCartItem);
//     cartShpoBox
//         .getElementsByClassName("cart-quantity")[0]
//         .addEventListener("change", quantityChanged);

// }








// // edittino of cart
// function addCartClicked(event) {
//     var button = event.target;
//     var shopProducts = button.parentElement;
//     var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
//     var price = shopProducts.getElementsByClassName("price")[0].innerText;
//     var produq = shopProducts.getElementsByClassName("valued")[0].value;

//     // console.log(title,price,productImg);
//     addPrductToCart(title, price, produq);
//     updatetotoal();
// }




// edittino of cart
function addCartClicked(event) {
    var button = event.target;
    var shopProducts = button.parentElement;
    var title1 = shopProducts.getElementsByClassName("product-title1").innerText;
    var title2 = shopProducts.getElementsByClassName("product-title2").innerText;
    var title3 = shopProducts.getElementsByClassName("product-title3").innerText;
    var det1 = shopProducts.getElementsByClassName("value1").innerText;
    var det2 = shopProducts.getElementsByClassName("value2").innerText;
    var det3 = shopProducts.getElementsByClassName("value3").innerTex
    var opt1 = shopProducts.getElementsByClassName("op1").innerText;
    var opt2 = shopProducts.getElementsByClassName("op2").innerText;
    var opt3 = shopProducts.getElementsByClassName("op3").innerText;

    
    var produq1 = shopProducts.getElementsByClassName("valued")[0].value;

    // console.log(title,price,productImg);
    addPrductToCart(title1,title2,title3, det1,det2,det3,opt1,opt2,opt3);
  
}



function addPrductToCart(title1,title2,title3, det1,det2,det3,opt1,opt2,opt3) {
    var cartShpoBox = document.createElement("div");
    cartShpoBox.classList.add("cart-box");
    var cartItems = document.getElementsByClassName("cart-content")[0];
    var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
    // for (var i = 0; i < cartItemsNames.length; i++) {
    //     if (cartItemsNames[i].innerText == title) {
    //         alert("you have already add this item to cart");
    //         return;

    //     }
    // }

    var cartBoxContent = `

<div class="detail-box">
    <div class="cart-product-title">${title1} ${title2} ${title3} ${det1} ${det2} ${det3} ${opt1} ${opt2} ${opt3}</div>
   

</div>

<!-- remove cart -->
<i class='bx bxs-trash-alt cart-remove'></i>`;

    cartShpoBox.innerHTML = cartBoxContent;
    cartItems.append(cartShpoBox);
    cartShpoBox
        .getElementsByClassName("cart-remove")[0]
        .addEventListener("click", removeCartItem);
    cartShpoBox
        .getElementsByClassName("cart-quantity")[0]
        .addEventListener("change", quantityChanged);

}





//update total 
function updatetotoal() {
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");

    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName("cart-price")[0];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];

        var price = parseFloat(priceElement.innerText.replce("$",""));
        var quantity = quantityElement.value;
        total = total + price * quantity;
      }
        //if price contain some cents value
        total = Math.round(total * 100) / 100;

        document.getElementsByClassName("total-price")[0].innerText = "$" + total;

    
}

function pr() {
    var divContents = document.getElementById("c").innerHTML;
    var a = window.open('', '', 'height=500, width=500');
    a.document.write('<html>');
    a.document.write('<body > ');
    a.document.write(divContents);
    a.document.write('</body></html>');
    a.document.close();
    a.print();
}





// form fill
function addToCarttt(){
    // alert("sads");
  
    var id=document.getElementById("id").value;
    var dat=document.getElementById("dat").value;
    var nam=document.getElementById("name").value;
    var boyos=document.getElementById("byos").value;
    var sex =document.getElementById("sex").value;
    var height=document.getElementById("height").value;

    var wet=document.getElementById("wet").value;
    var bwet=document.getElementById("bwet").value;

    var ewet=document.getElementById("ewet").value;
    var prob=document.getElementById("prob").value;
     
    var terget=document.getElementById("terget").value;
    var week=document.getElementById("week").value;


    var proba=document.getElementById("proba").value;
    var probb=document.getElementById("probb").value;

    var nirdes=document.getElementById("nirdes").value;
    var nirdesa=document.getElementById("nirdesa").value;

    var nirdesb=document.getElementById("nirdesb").value;
    var sokti=document.getElementById("sokti").value;

    var sdate=document.getElementById("sdate").value;
    var edate=document.getElementById("edate").value;

    var dailyf=document.getElementById("dailyf").value;
    var  bmi=document.getElementById("bmi").value;

    var sp = `${" ".repeat(3)}`;
   


    var html=`
     <div>
     
     <h3  style=" text-align: center;">রুগীর তথ্য</h3>
     <pre>
     <h4>
     ID no : ${id}   Date : ${dat}  <br> 
     নামঃ ${nam}   বয়সঃ ${boyos}    সেক্স: ${sex}<br>
     উচ্চতাঃ ${height}(সেমি)  বর্তমান ওজনঃ ${wet}(কেজি)  আদর্শ ওজনঃ ${bwet}(কেজি )  অতিরিক্ত ওজনঃ ${ewet}(কেজি)  <br>
     target : ${terget} kg in next  ${week} week<br>
     সমস্যাঃ ${prob}  ${proba}  ${probb} <br>
     জীবন ধারা ও নির্দেশিকা : ${nirdes}  ${nirdesa}  ${nirdesb}   <br>
     শক্তি : ${sokti} (কিলোক্যালোরি)+   Starting Diet:${sdate}   Next Visit: ${edate} <br>
     BMI : ${bmi} দৈনিক খাদ্য তালিকা : ${dailyf} সপ্তাহ
     

      </pre>
        
     </div>
    `;

    var cartShpoBox = document.createElement("div");
    cartShpoBox.classList.add("cart-box");
    var cartItems = document.getElementsByClassName("cart-content")[0];
    cartShpoBox.innerHTML = html;
    cartItems.append(cartShpoBox);


  
   


}


// print the extend data 

function printnirdesika(){
    var print_div = document.getElementById("nir");
var print_area = window.open();
print_area.document.write(print_div.innerHTML);
print_area.document.close();
print_area.focus();
print_area.print();
print_area.close();
  }

//   bayam nirrdesika

function bamm(){
    var print_div = document.getElementById("bnir");
var print_area = window.open();
print_area.document.write(print_div.innerHTML);
print_area.document.close();
print_area.focus();
print_area.print();
print_area.close();
// This is the code print a particular div element
  }



































          // Get all checkboxes with the class 'product-checkbox'
          const checkboxes = document.querySelectorAll('.product-checkbox');

          checkboxes.forEach((checkbox) => {
              checkbox.addEventListener('change', () => {
                  // Get the closest table row to the clicked checkbox
                  const row = checkbox.closest('tr');
  
                  if (checkbox.checked) {
                      // If the checkbox is checked, extract and add specific values to the cart
                      const productName = row.querySelector('.product-title1').textContent;
                      const value1 = row.querySelector('.value1').value;
                      const value2 = row.querySelector('.value2').value;
                      const op1 = row.querySelector('.op1').value;
                      const op2 = row.querySelector('.op2').value;
                      const value3 = row.querySelector('.value3').value;
                      const op3 = row.querySelector('.op3').value;
                      const value4 = row.querySelector('.value4').value;
                      const op4 = row.querySelector('.op4').value;
                      const value5 = row.querySelector('.value5').value;
                      const op5 = row.querySelector('.op5').value;
                    
                       const u1=row.querySelector('.unit').value;
                       const u2=row.querySelector('.unit2').value;
                       const u3=row.querySelector('.unit3').value;
                       const u4=row.querySelector('.unit4').value;
                       const u5=row.querySelector('.unit5').value;
                     
                      
                      const productTitle2 = row.querySelector('.product-title2').value;
                      const productTitle4 = row.querySelector('.product-title4').value;
                      const productTitle3 = row.querySelector('.product-title3').value;
                      const productTitle5 = row.querySelector('.product-title5').value;
  
                      const cartContent = document.querySelector('.cart-content');
                      cartContent.innerHTML += `
                          <div>
                              * ${productName}  ${value1} ${u1} ${op1} ${productTitle2} ${value2} ${u2} ${op2} ${productTitle3} ${value3} ${u3} ${op3} ${productTitle4} ${value4} ${u4} ${op4} ${productTitle5} ${value5} ${u5} ${op5}
    
                          </div>
                      `;
                  } else {
                      // If the checkbox is unchecked, remove the corresponding data from the cart
                      const cartContent = document.querySelector('.cart-content');
                      const productDetails = cartContent.querySelector(`p:contains("${productName}")`).closest('div');
                      cartContent.removeChild(productDetails);
                  }
              });
          });