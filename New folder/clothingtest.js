var products = [
    {
        name: "Sofia skinny jeans (women)",
        tag: "sofiaskinnyjeans",
        price: 18.37,
        inCart: 0
    },
    {
        name: "Time and Tru jeans",
        tag: "timeandtrujeans",
        price: 21.98,
        inCart: 0
    },
    {
        name: "Puffer Jacket",
        tag: "pufferjacket",
        price: 29.99,
        inCart: 0
    },
    {
        name: "Fleece jersey",
        tag: "fleecejersey",
        price: 13.00,
        inCart: 0
    },
    {
        name: "Fleece joggers",
        tag: "fleecejoggers",
        price: 27.00,
        inCart: 0
    },
    {
        name: "Levi's Sneakers",
        tag: "levissneakers",
        price: 29.95,
        inCart: 0
    },
    {
        name: "Levi's Shorts",
        tag: "levisshorts",
        price: 21.99,
        inCart: 0
    },
    {
        name: "Levi's Bootcut Jeans",
        tag: "levisbootcutjeans",
        price: 59.99,
        inCart: 0
    },
    {
        name: "Star Wars T-shirt",
        tag: "starwarstshirt",
        price: 12.99,
        inCart: 0
    },
    {
        name: "Champion Shorts",
        tag: "championshirts",
        price: 11.40,
        inCart: 0
    },
    {
        name: "Blue Long Sleeve shirt",
        tag: "longsleeveshirt",
        price: 4.50,
        inCart: 0
    },
    {
        name: "Maximos Tracksuit",
        tag: "tracksuit",
        price: 53.06,
        inCart: 0
    },
]
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready();
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i];
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('.itemcartbutton')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i];
        button.addEventListener('click', addToCartClicked)
        
    }
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
   var button = event.target;
   var shopItem = button.parentElement.parentElement;
   var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText;
   console.log(title)
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}