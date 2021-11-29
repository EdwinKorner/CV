window.onload = main;

function main(){
    addEventListeners();
}


function addEventListeners(){
    const menuButton = document.getElementById("hamburger-checkbox");
    menuButton.onclick = hamburgerToggle;
    let menuText = document.getElementById("list-text");
    menuText.onclick = hamburgerToggle;
}

function hamburgerToggle(){
    let line1 = document.getElementById("line1");
    let line2 = document.getElementById("line2");
    let line3 = document.getElementById("line3");
    const menuList = document.getElementById("menu-list");
    const fadedBackground = document.getElementById("menu-opacity");

    if (menuList.style.width === "30rem"){
        fadedBackground.style.width = null;
        menuList.style.width = null;
    }else {
        menuList.style.width = "30rem";
        fadedBackground.style.width="100%";
    }
     
}

const observer = new IntersectionObserver (entries => {

});

observer.observe(document.querySelector('#om-mig'));

entries.forEach( entry => {
    const div = entry.target.querySelector
    if(entry.isIntersecting) {
        entry.target.classList.add('enter-sight');
    }
});