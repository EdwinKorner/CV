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
const menuList = document.getElementById("menu-list");
const fadedBackground = document.getElementById("menu-opacity");
const header = document.querySelector("header");
function hamburgerToggle(){
    let line1 = document.getElementById("line1");
    let line2 = document.getElementById("line2");
    let line3 = document.getElementById("line3");

    if (menuList.style.width === "30rem"){
        fadedBackground.style.width = null;
        menuList.style.width = null;
        header.style.background="#141414";


        setTimeout(function(){line1.style.position="relative";}, 500);
        setTimeout(function(){line1.style.top="0";}, 500);
        setTimeout(function(){line1.style.transform="rotate(0)";}, 200);
        line1.style.opacity="0";
        setTimeout(function(){line1.style.opacity="1";}, 500);
        
        setTimeout(function(){line2.style.opacity="1";}, 500);
        setTimeout(function(){line2.style.position="relative";}, 500);
        setTimeout(function(){line2.style.top="0";}, 500);

        setTimeout(function(){line3.style.position="relative";}, 500);
        setTimeout(function(){line3.style.top="0";}, 500);
        setTimeout(function(){line3.style.transform="rotate(0)";}, 200);
        line3.style.opacity="0";
        setTimeout(function(){line3.style.opacity="1";}, 500);
    }else {
        menuList.style.width = "30rem";
        fadedBackground.style.width="100%";
        header.style.backgroundColor="rgba(0, 0, 0, 50%)";

        line1.style.position="absolute";
        line1.style.top="1rem";
        line1.style.transform="rotate(45deg)";

        line2.style.opacity="0";
        line2.style.position="absolute";
        line2.style.top="1rem";

        line3.style.position="absolute";
        line3.style.top="1rem";
        line3.style.transform="rotate(-45deg)";
    }
     
}

const mainClick = document.querySelector("main");
mainClick.onclick = hamburgerClose;

function hamburgerClose(){
  menuList.style.width=null;
  fadedBackground.style.width=null;
  setTimeout(function(){line1.style.position="relative";}, 500);
  setTimeout(function(){line1.style.top="0";}, 500);
  setTimeout(function(){line1.style.transform="rotate(0)";}, 200);
  line1.style.opacity="0";
  setTimeout(function(){line1.style.opacity="1";}, 500);
        
  setTimeout(function(){line2.style.opacity="1";}, 500);
  setTimeout(function(){line2.style.position="relative";}, 500);
  setTimeout(function(){line2.style.top="0";}, 500);

  setTimeout(function(){line3.style.position="relative";}, 500);
  setTimeout(function(){line3.style.top="0";}, 500);
  setTimeout(function(){line3.style.transform="rotate(0)";}, 200);
  line3.style.opacity="0";
  setTimeout(function(){line3.style.opacity="1";}, 500);

  header.style.background="#141414";
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
    const form = document.getElementById("form");
    const kontaktH2 = document.getElementById("kontakt-h2");
    submitbutton.onclick = submit;
    
    
    function submit(){
        form.style.display="none";
        kontaktH2.style.display="block";
        let förnamn = document.getElementById("förnamnValue").value;
        document.getElementById("name").innerHTML = förnamn;
        // alert(förnamn);
        submitbutton.style.display="none";
    }