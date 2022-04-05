
function updateProductInfo(isIncreasing,product,priceOfProduct) {
    const Input=document.getElementById( product+'-number');
    let numberOfProduct=Input.value;
   if (isIncreasing==true) {
    numberOfProduct=parseInt(numberOfProduct)+1;
   }
   else if(numberOfProduct>0){
    numberOfProduct=parseInt(numberOfProduct)-1;
   }
    Input.value=numberOfProduct
   let total=document.getElementById(product +'-total');
   total.innerText=numberOfProduct*priceOfProduct;
   calculateTotal();
}

// update total
function getInputValue(product) {
     const productInput=document.getElementById(product +'-number')
    const productNumber= parseInt(productInput.value);
    return productNumber;

}
function calculateTotal() {
    const phoneTotalPrice=getInputValue('phone')*1219;
    const caseTotalPrice=getInputValue('case')*59;
    const subTotal=phoneTotalPrice+caseTotalPrice;
    const tax=subTotal/10;
    const totalPrice=subTotal+tax;
    // update on the html
    document.getElementById("sub-total").innerText=subTotal;
    document.getElementById("tax-amount").innerText=tax;
    document.getElementById("total").innerText=totalPrice;

}





// phone increase decrease event
    document.getElementById('phone-plus').addEventListener('click',function () {
        updateProductInfo(true,'phone',1219)
    })
document.getElementById('phone-minus').addEventListener('click',function () {
    updateProductInfo(false,'phone',1219)
})

// case increase decrease event
document.getElementById('case-plus').addEventListener('click',function 
() {
    updateProductInfo(true,'case',59);

  
})
document.getElementById('case-minus').addEventListener('click',function 
() {
    
    updateProductInfo(false,'case',59);
   
})

// checkoout page
document.getElementById('checkout-button').addEventListener('click',function(){
    window.location.href='succes.html';
})