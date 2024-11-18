document.addEventListener("DOMContentLoaded", function() {
    // Fonctionnalités à ajouter ici
    
    //1ere fonctionalite clic num
    let footerClickCount = 1;
        document.querySelector("footer").addEventListener("click", function() {
            console.log("clic numéro " + footerClickCount);
                footerClickCount++;})

    //2eme fonctionalite navbar
        document.querySelector("#navbarHeader").classList.toggle("collapse");

        document.querySelector(".navbar-toggler").addEventListener("click", 
        function() {
        document.querySelector("#navbarHeader").classList.toggle("collapse");})

    //3eme fonctionalite texte rouge card 1
        document.querySelector(".card:nth-of-type(1) .btn-edit").addEventListener
        ("click", function() {
        document.querySelector(".card:nth-of-type(1)").style.color = "red";})

    //4eme fonctionalite toggle
        document.querySelector(".card:nth-of-type(2) .btn-edit").addEventListener
        ("click", function() {
    const secondCard = document.querySelector(".card:nth-of-type(2)");
        if (secondCard.style.color === "green") {
          secondCard.style.color = "";
        } else {
          secondCard.style.color = "green";
        }
    })

    //5eme fonctionalite double clic navbar
    let bootstrapDisabled = false;

        document.querySelector(".navbar").addEventListener("dblclick", 
        function() {
    const link = document.querySelector("link[href*='bootstrap']");
  
        if (bootstrapDisabled) {
            link.removeAttribute("disabled");
        } else {
            link.setAttribute("disabled", "true");
        }
        })
        bootstrapDisabled = !bootstrapDisabled;

    //6eme fonctionalite reduction cards
        document.querySelectorAll(".card").forEach(function(card) {
        card.querySelector(".btn-view").addEventListener("mouseover", 
        function() {
    const img = card.querySelector("img");
          img.style.width = "20%";
        card.querySelectorAll(".btn").forEach(function(button) {
        button.style.display = "block";
          });
        });
      
        card.querySelector(".btn-view").addEventListener("mouseout", function() {
          const img = card.querySelector("img");
          img.style.width = "";
        });
        })

     //7eme derniere card au debut
        document.querySelector(".btn-move-right").addEventListener("click", 
        function() {
    const parent = document.querySelector(".cards-container");
    const lastCard = parent.lastElementChild;
        parent.insertBefore(lastCard, parent.firstElementChild);
      });

    //8eme premiere card a la fin
        document.querySelector(".btn-move-left").addEventListener("click", 
        function(event) {
        event.preventDefault(); // Empêche le comportement par défaut du lien
        
    const parent = document.querySelector(".cards-container");
    const firstCard = parent.firstElementChild;
        parent.appendChild(firstCard);
      });


      //9eme logo et clavier
        document.querySelector(".logo").addEventListener("keypress", function(event) {
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