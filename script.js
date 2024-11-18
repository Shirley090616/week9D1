document.addEventListener("DOMContentLoaded", function() {
    // Fonctionnalités à ajouter ici
      

    // 1ère fonctionnalité : clic num
    let footerClickCount = 1;
    document.querySelector("footer").addEventListener("click", function() {
        //méthode DOM pr selectionner   .méthode DOM pour ecouter  fonction anonyme
      console.log("clic numéro " + footerClickCount);
      footerClickCount++;//operateur d'incrémentation
    });
  
    // 2ème fonctionnalité : navbar
    document.querySelector(".navbar-toggler").addEventListener("click", function() {
      document.querySelector("#navbarHeader").classList.toggle("collapse");//hamburger
    });
  
    // 3ème fonctionnalité : texte rouge card 1
    document.querySelector(".card:nth-of-type(1) .btn-outline-secondary").addEventListener("click", function() {
      document.querySelector(".card:nth-of-type(1)").style.color = "red";
    });
  
    // 4ème fonctionnalité : toggle
    /*document.querySelector(".card:nth-of-type(2) .btn-edit").addEventListener("click", function() {
      const secondCard = document.querySelector(".card:nth-of-type(2)");
        if (secondCard.style.color === "green") {
          secondCard.style.color = "";
        } else {
          secondCard.style.color = "green";
        }
    // 4éme fonctionalité 2éme méthode    
    //const button = document.querySelector(".card:nth-of-type(2) .btn-outline-secondary").addEventListener("click", function() {
      
      if (button) {
        console.log(button); 
        button.addEventListener("click", function() {
          const secondCard = document.querySelector(".card:nth-of-type(2)");
          if (secondCard.style.color === "green") {
            secondCard.style.color = "";
          } else {
            secondCard.style.color = "green";
          }
        });
      } else {
        console.log("Le bouton n'a pas été trouvé !");
      }
    
    });*/
 
    // 5ème fonctionnalité : double clic navbar
    let bootstrapDisabled = false;
    document.querySelector(".navbar").addEventListener("dblclick", function() {
      const link = document.querySelector("link[href*='bootstrap']");
      if (bootstrapDisabled) {
        link.removeAttribute("disabled");
      } else {
        link.setAttribute("disabled", "true");
      }
      bootstrapDisabled = !bootstrapDisabled;  // Déplacer l'inversion ici pour que ça fonctionne correctement.
    });
  
    // 6ème fonctionnalité : réduction des cards
    document.querySelectorAll(".card").forEach(function(card) {
      card.querySelector(".btn-view").addEventListener("mouseover", function() {
        const img = card.querySelector("img");
        img.style.width = "20%";
        card.querySelectorAll(".btn").forEach(function(button) {
          button.style.display = "block";
        });
      });
  
      card.querySelector(".btn-view").addEventListener("mouseout", function() {
        const img = card.querySelector("img");
        img.style.width = "";
        card.querySelectorAll(".btn").forEach(function(button) {
          button.style.display = "";  // Réinitialiser l'affichage des boutons.
        });
      });
    });
  
    // 7ème fonctionnalité : dernière card au début
    document.querySelector(".btn-move-right").addEventListener("click", function() {
      const parent = document.querySelector(".cards-container");
      const lastCard = parent.lastElementChild;
      parent.insertBefore(lastCard, parent.firstElementChild);
    });
  
    // 8ème fonctionnalité : première card à la fin
    document.querySelector(".btn-move-left").addEventListener("click", function(event) {
      event.preventDefault(); // Empêche le comportement par défaut du lien
      const parent = document.querySelector(".cards-container");
      const firstCard = parent.firstElementChild;
      parent.appendChild(firstCard);
    });
  
    // 9ème fonctionnalité : logo et clavier
    document.querySelector(".logo").addEventListener("keydown", function(event) {  // Remplacer keypress par keydown
      const body = document.querySelector("body");
      body.classList.remove("col-4", "offset-md-4", "offset-md-8"); // Réinitialiser les classes
  
      switch (event.key) {
        case "a":
          body.classList.add("col-4", "offset-md-0");
          break;
        case "y":
          body.classList.add("col-4", "offset-md-4");
          break;
        case "p":
          body.classList.add("col-4", "offset-md-8");
          break;
        case "b":
          body.classList.add("col-12");
          break;
      }
    });
  });
  