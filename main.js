//Kallar addEventListeners onload

window.onload = main;

function main(){
    addEventListeners();
    animations();
}

//Två onclick events så att hamburgermenyn kan öppnas och stängas
function addEventListeners(){
    const menuButton = document.getElementById("hamburger-checkbox");
    menuButton.onclick = hamburgerToggle;

    let menuText = document.getElementById("list-text");
    menuText.onclick = hamburgerToggle;
}
// Funktionen hamburgerToggle bestämmer vad som ska hända när man öppnar hamburgermenyn. Jag har gjort en animation med ikonen
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



// Funktionen hamburgerClose är en funktion som gör att hamburgermenyn stängs när man klickar utanför menyn så att man inte behöver klicka på krysset
const mainClick = document.querySelector("main");
mainClick.onclick = hamburgerClose;
function hamburgerClose(){
  
  menuList.style.width=null;
  fadedBackground.style.width=null;
  setTimeout(function(){
    line1.style.position="relative",
    line1.style.top="0",
    line1.style.opacity="1",
    line2.style.opacity="1",
    line2.style.position="relative",
    line2.style.top="0",
    line3.style.position="relative",
    line3.style.top="0",
    line3.style.opacity="1" ;}, 500);
  setTimeout(function(){line1.style.transform="rotate(0)", line3.style.transform="rotate(0)";}, 200);

  line1.style.opacity="0";
  line3.style.opacity="0";

  header.style.background="#141414";
}

//Här har jag använt mig av en IntersectionObserver. Om ett objekt syns på hemsidan så dras en animation igång på objektet

function animations(){
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
}

  /*
    Här ändras formulär sektionen efter man klickar på knappen. Det kommer upp en text som tackar personen som skickade meddelandet.
    Namnet som skrevs in i förnamn rutan skrivs ut i h2 texten som kommer fram på sidan*/

  
    const submitbutton = document.getElementById("button");
    const form = document.getElementById("form");
    const kontaktH2 = document.getElementById("kontakt-h2");
    submitbutton.onclick = submit;
    
    
    function submit(){
        form.style.display="none";
        kontaktH2.style.display="block";
        let förnamn = document.getElementById("förnamnValue").value;
        document.getElementById("name").innerHTML = förnamn;
        submitbutton.style.display="none";
    }