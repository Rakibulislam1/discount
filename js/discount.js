document.getElementById('30%DiscountButton').addEventListener('click', function(){
    const originalPrice = 1000;
    const discount = 30;
    const afterDiscount = (discount / 100) * originalPrice;

    const HaveToPay = originalPrice - afterDiscount;

    const pay = document.getElementById('innerText-pay');
    const payText = pay.innerText;
    const payString = parseFloat(payText);

    pay.innerText = HaveToPay;

})



document.getElementById('button-Discount').addEventListener('click', function(){
    const mainPrice = document.getElementById('product-price');
    const mainPriceString = mainPrice.innerText;
    const main = parseFloat(mainPriceString);

    // input
    const discountInput = document.getElementById('discount-input');
    const inputValue = discountInput.value;
    
    // pay
    const pay = document.getElementById('pay-innerText');
    const payInnerText = pay.innerText;

    const productCost = 0.3;
    if(inputValue === 'disc30'){
        const productDiscount = main - (main * productCost);
        pay.innerText = productDiscount;
        discountInput.value = '';
    }
    else if(inputValue === ''){
        pay.innerText = main;
        alert ('Invalid Coupon Code');
        discountInput.value = '';
    }
    else if(inputValue != 'disc30'){
        pay.innerText = main;
        alert ('Wrong Coupon Code');
        discountInput.value = '';
    }
    
})




