let newArr = JSON.parse(localStorage.getItem('basketArr'));

let column = document.querySelector('.column');
let totalPriceElem = document.querySelector('.total-price');
let basketArr = JSON.parse(localStorage.getItem('basketArr')) || [];

function displayBasketItems() {
    column.innerHTML = '';
    basketArr.forEach((item, index) => {
        column.innerHTML += `<div class="col-md-12">
                               <div class="card my-3">
                                 <img src="${item.image}" class="card-img-top mt-3" alt="...">
                                 <div class="card-body">
                                   <h6 class="card-title">${item.title}</h6>
                                   <p class="card-text">Price: <span class="item-price">${(item.price * (item.quantity || 1)).toFixed(2)} ₼</span></p>
                                   <div class="quantity-controls">
                                     <button onclick="changeQuantity(${index}, -1, this)">-</button>
                                     <span class="mx-2">${item.quantity || 1}</span>
                                     <button onclick="changeQuantity(${index}, 1, this)">+</button>
                                   </div>
                                   <button class="remove-btn" onclick="removeItem(${index})">X</button>
                                 </div>
                               </div>
                             </div>`;
    });
    updateTotalPrice();
}

function changeQuantity(index, change, btn) {
    if (!basketArr[index].quantity) {
        basketArr[index].quantity = 1;
    }
    basketArr[index].quantity += change;
    if (basketArr[index].quantity < 1) {
        basketArr[index].quantity = 1;
    }
    let itemPriceElem = btn.closest('.card-body').querySelector('.item-price');
    itemPriceElem.innerHTML = (basketArr[index].price * basketArr[index].quantity).toFixed(2) + ' ₼';
    btn.parentElement.querySelector('.mx-2').innerHTML = basketArr[index].quantity;
    localStorage.setItem('basketArr', JSON.stringify(basketArr));
    updateTotalPrice();
}

function removeItem(index) {
    basketArr.splice(index, 1);
    localStorage.setItem('basketArr', JSON.stringify(basketArr));
    displayBasketItems();
}

function updateTotalPrice() {
    let total = basketArr.reduce((sum, item) => {
        return sum + item.price * (item.quantity || 1);
    }, 0);
    totalPriceElem.textContent = `Total: ${total.toFixed(2)} ₼`;
}

displayBasketItems();