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

function validateForm() {
    let delivery = document.querySelector('input[name="deliveryType"]:checked');
    let deliveryLocation = document.querySelector('input[name="location"]:checked');
    let address = document.forms["myForm"]["address"].value;

    if (delivery == null) {
        alert("Select delivery type");
        return false;
    }

    else if(deliveryLocation == null) {
        alert("Select your location");
        return false;
    }

    else if (address == "") {
        alert("Enter a Proper Address");
        return false;
    }

    
}