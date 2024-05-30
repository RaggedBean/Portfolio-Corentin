const image = document.getElementById('fs');


window.onload = function() {
  setTimeout(() => {
    image.style.opacity = 0.03; //opacite max
  }, 1000); // délai de demarrage
};



const doc = document.querySelector("#hidden-text");

doc.addEventListener("mouseenter", () => {doc.innerHTML="la production et la consommation de viande de meilleure qualité"});
doc.addEventListener("mouseleave", () => {doc.innerHTML="la diminution de la consommation de viande"});


const doc2 = document.querySelector("#hidden-text2");

doc2.addEventListener("mouseenter", () => {doc2.innerHTML="l'augmentation du nucléaire"});
doc2.addEventListener("mouseleave", () => {doc2.innerHTML="la sortie du nucléaire"});

const doc3 = document.querySelector("#hidden-text3");

doc3.addEventListener("mouseenter", () => {doc3.innerHTML="proposer des repas locaux et de qualité aux élèves dans les écoles"});
doc3.addEventListener("mouseleave", () => {doc3.innerHTML="proposer un repas végan par semaine aux élèves dans les écoles"});

const doc4 = document.querySelector("#hidden-text4");

doc4.addEventListener("mouseenter", () => {doc4.innerHTML="Pour ma part, en tant que ministre de l'agriculture, j'ai proposé de limiter les taxes environementales imposées aux agriculteurs, proposition qui n'est malheureusement pas proposée dans l'atelier..."});
doc4.addEventListener("mouseleave", () => {doc4.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"});

const doc5 = document.querySelector("#hidden-text5");

doc5.addEventListener("mouseenter", () => {doc5.innerHTML='Source : <a href="https://www.unige.ch/batiment/campus-durable/projets-durabilite/actualites/">www.unige.ch</a>'});
doc5.addEventListener("mouseleave", () => {doc5.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"});

const doc6 = document.querySelector("#hidden-text6");

doc6.addEventListener("mouseenter", () => {doc6.innerHTML="En fait, il s'agit juste de coder en respectant les normes établies depuis des décennies, en dépit de l'écologie..."});
doc6.addEventListener("mouseleave", () => {doc6.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"});










