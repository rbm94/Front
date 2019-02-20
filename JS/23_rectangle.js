alert("coucou");
// *************************************1- VARIABLES****************************** //
//Recherche du bouton dans l'arbre de DOM
// Le DOM: Document Object Model est une interface de programmation d'application 
//(API) Pour des documents HTML valides et XML bien formés  . Il définit la structure 
//Logique d'un document et la manière  d'y acceder et de le manipuler //
var bouton = document.getElementById('toggle-rectangle');
// Recherche du rectangle dans l'arbre  DOM.
var rectangle= document.querySelector('.rectangle');


// *************************************2- FONCTIONS****************************** //
                   // 1- Fonction au click sur le bouton //
//La méthode toggle() va ajouter ou supprimer la class{ tel un intérrupteur}    
function surClicBouton(){
    rectangle.classList.toggle('hide');
}
                   // 2- Fonction au double-click sur le rectangle //

function surDoubleClicRectangle(){
rectangle.classList.toggle('good');
}

                   // 3- Au survol de la souris  //
//La méthode add() va ajouter la class CSS

function auSurvolSourisRectangle(){
    rectangle.classList.add('important');
}

                   // 4- Au la sorti du survol du rectangle //
//La méthode .remove() va ajouter la class CSS.

function aSortieSourisRectangle(){
    rectangle.classList.remove('good');
    rectangle.classList.remove('important');
}

// *************************************3- ECOUTEURS****************************** //
//Paramètre : -l'événement
//          : -la fontion a executer
                   // 1- Installation d'un  gestionnaire dévénement au click sur le buton //

bouton.addEventListener('click' , surClicBouton);
// La méthode ".addEventListener()" met en place une fonction à appeller chaque fois que l'événement est remis a la cible. les cibles courantes sont un "element" le "Document" lui même est une "window" ,mais elle peut être tous objet prenant en charge les évènement(comme XMLHttpRequest)   
                   // 2- Installation d'un  gestionnaire dévénement au double-click sur le rectangle //

rectangle.addEventListener('dblclick', auDoubleClickRectangle);

                   // 3- Installation d'un  gestionnaire dévénement au survol du rectangle //
rectangle.addEventListener("mouseover" , auSurvolSourisRectangle);

                   // 4- Installation d'un  gestionnaire dévénement a la sortie du survol sur le rectangle //
rectangle.addEventListener("mouseout", aSortieSourisRectangle);