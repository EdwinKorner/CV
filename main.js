window.onload = main;

function main(){
    addEventListeners();
}


function addEventListeners(){
    const menuButton = document.getElementById("hamburger-checkbox");
    menuButton.onclick = hamburgerToggle;
}

function hamburgerToggle(){
    const menuList = document.getElementById("menu-list");
    const fadedBackground = document.getElementById("menu-opacity");

    if (menuList.style.width === "30rem"){
        fadedBackground.style.width = null;
        menuList.style.width = null;
    } else {
        menuList.style.width = "30rem";
        fadedBackground.style.width="100%";
    }
}