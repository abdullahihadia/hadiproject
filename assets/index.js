var a;
document.querySelector('#dropdown').addEventListener("click", show);


function show() {
    if (a == 1) { 
        document.getElementById('categories').style.display = "block";
        document.getElementById('dropdown').style.backgroundColor = "white";
        document.getElementById('dropdown').style.color = "black";
        document.getElementById('dropdown').style.borderRadius = "0.4rem";
        document.getElementById('dropdown').style.padding = "0.8rem";
        document.getElementById('dropdown').style.paddingright = "0.3rem";
        document.getElementById('downarrow').style.transform = "rotate(90deg)";
        return a=0;
    }
    else {
        document.getElementById('categories').style.display = "none";
        document.getElementById('dropdown').style.backgroundColor = "rgb(44, 175, 252)";
        document.getElementById('dropdown').style.color = "white";
        document.getElementById('downarrow').style.transform = "rotate(360deg)";

        return a=1;

    }
    
}


