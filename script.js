let menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

function toggleMenu() {
    if(menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "300px";
    }else {
        menuList.style.maxHeight = "0px";
    }
}



// Scroll infinity
const logo = document.querySelector(".scroll-item").cloneNode(true);

document.querySelector(".skill-item").appendChild(logo)