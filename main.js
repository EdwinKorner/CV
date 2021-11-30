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
//Hamburger-meny
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
        document.querySelector("body").onclick = hamburgerToggle;
    }
     
}

//Animationer onScroll

const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -250px 0px"
  };
  
  const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add('appear');
        appearOnScroll.unobserve(entry.target);
      }
    });
  },
  appearOptions);
  
  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
  
  sliders.forEach(slider => {
    appearOnScroll.observe(slider);
  });

  //Formulär animationer

  
    const submitbutton = document.getElementById("button");
    const form = document.querySelector("form");
    const kontaktH2 = document.getElementById("kontakt-h2");
    submitbutton.onclick = submit;
    
    
    

    
    function submit(){
        form.style.display="none";
        kontaktH2.style.display="block";
        let förnamn = document.getElementById("förnamn").value;
        document.getElementById("name").innerHTML = förnamn;
    }