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