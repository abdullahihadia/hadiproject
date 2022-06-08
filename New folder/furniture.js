let products = [
    {
        name: "Taryn rolled sofa",
        tag: "sofiaskinnyjeans",
        price: 333.00,
        inCart: 0
    },
    {
        name: "three drawer storage bed",
        tag: "timeandtrujeans",
        price: 297.00,
        inCart: 0
    },
    {
        name: "ACME queen bed",
        tag: "pufferjacket",
        price: 84.00,
        inCart: 0
    },
    {
        name: "five shelf bookcase",
        tag: "fleecejersey",
        price: 43.00,
        inCart: 0
    },
    {
        name: "floor storage cabinet",
        tag: "fleecejoggers",
        price: 110.00,
        inCart: 0
    },
    {
        name: "Talon coffe table",
        tag: "levissneakers",
        price: 390.00,
        inCart: 0
    },
    {
        name: "home traditional guest chair",
        tag: "levisshorts",
        price: 167.00,
        inCart: 0
    },
    {
        name: "five piece round dining table",
        tag: "levisbootcutjeans",
        price: 1042.00,
        inCart: 0
    },
    {
        name: "Kitchen Cabinet",
        tag: "starwarstshirt",
        price: 150.00,
        inCart: 0
    },
    {
        name: "Wooden buffet cabinet",
        tag: "championshirts",
        price: 160.00,
        inCart: 0
    },
    {
        name: "six drawer console table",
        tag: "longsleeveshirt",
        price: 295.00,
        inCart: 0
    },
    {
        name: "four tier shoe storage cabinet",
        tag: "tracksuit",
        price: 156.00,
        inCart: 0
    },
]
var b;
document.querySelector('#dropdownclothing').addEventListener("click", showclothing);


function showclothing() {
    if (b == 1) { 
        document.getElementById('categoriesclothing').style.display = "block";
        document.getElementById('dropdownclothing').style.backgroundColor = "white";
        document.getElementById('dropdownclothing').style.color = "black";
        document.getElementById('dropdownclothing').style.borderRadius = "0.4rem";
        document.getElementById('dropdownclothing').style.padding = "0.7rem";
        document.getElementById('dropdownclothing').style.paddingright = "0.3rem";
        document.getElementById('downarrow').style.transform = "rotate(90deg)";
        return b=0;
    }
    else {
        document.getElementById('categoriesclothing').style.display = "none";
        document.getElementById('dropdownclothing').style.backgroundColor = "rgb(44, 175, 252)";
        document.getElementById('dropdownclothing').style.color = "white";
        document.getElementById('downarrow').style.transform = "rotate(360deg)";
        return b=1;

    }
    
}

var c;
document.querySelector('#dropdowncart').addEventListener("click", showCart);

function showCart() {
    if (c == 1) { 
        document.querySelector('.cartsection').style.display = "block";
        document.querySelector('#dropdowncart').style.backgroundColor = "white";
        document.querySelector('#dropdowncart').style.color = "black";
        document.querySelector('#dropdowncart').style.borderRadius = "0.4rem";
        document.querySelector('#dropdowncart').style.padding = "0.7rem";
        document.querySelector('#dropdowncart').style.paddingright = "0.3rem";
        return c=0;
    }
    else {
        document.querySelector('.cartsection').style.display = "none";
        document.querySelector('#dropdowncart').style.backgroundColor = "rgb(44, 175, 252)";
        document.querySelector('#dropdowncart').style.color = "white";
        return c=1;

    }
    
}

const carts = document.querySelectorAll(".itemcartbutton");
for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        location.reload()
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers) {
        document.querySelector('#cartnotification').textContent = productNumbers;
    }
}

function cartNumbers(product) {
     
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    if(productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('#cartnotification').textContent = productNumbers + 1;

    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('#cartnotification').textContent = 1;
    }

    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null) {

        if(cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        } 
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }
    
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost');

    console.log("the total price is", cartCost);

    if(cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem('totalCost', cartCost + product.price);
    } else {
        localStorage.setItem('totalCost', product.price);

    }
};

function displayCart() {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem('totalCost')

    if(cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="product"> 
                <img src="../images/icon-icon.png" height="50" width="50">
                <span>${item.name}</span>
                
            </div><hr>
            <div style="position: relative; top: -3.8rem; left: 18rem;">$${item.price}</div>
                <div class="quantity" style="position: relative; top: -5.5rem; left: 24.5rem;">
            <span>${item.inCart}</span>
            </div>
            
            <div style="position: relative; top: -7.1rem; left: 31rem;" class="total">
                $${item.inCart * item.price}
            </div>
            `;
        });

        productContainer.innerHTML += `
            <div style="position: relative; top: -3.8rem;" class="basketTotalContainer">
                <h4 class="basketTotalTitle">
                    Basket Total :
                </h4>
                <h4 class="basketTotal">
                $${cartCost}
                </h4>
        `
    }
}

onLoadCartNumbers();
displayCart();