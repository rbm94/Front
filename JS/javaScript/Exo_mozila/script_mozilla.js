alert("ok!");
// fonction qui vas switcher l'image 
var image = document.querySelector('img');
//on stock la première image du document 
console.log(image);
// addEventlistener 
image.addEventlistener('click', function(){});
// On vas utilier la méthode getAttribute(),
var maSrc = image.gatAttribute('src');
console.log(image);

// Si la valeur de la varibale maSrc est égale à mon img
    alert("je suis l'image une")
    alert(maSrc + "n'est pas l'img1")
// On change d'image avec setAttribute qui a besoin de 2 arguments;      donc la source et de quoi remplacer la source 


if (maSrc === 'images/logo_firefox_1.png') {
    alert("Je suis l'img1");
    image.setAttribute('src', 'image/logo_firefox_2.png');
}
else { 
    alert("je ne suis pas l'img 1 ma source est " + maSrc);
}

// dans le code précedant on a fait
// 1/ quandon clique sur l'image (dans la fonction addEventlistener)
// 2/ on a utilisé la structure conditionelle if else pour voir si la valeur de
// l'attribut src est bien egale au chemin de l'image original
// 3/ si c'est le cans, on change la valeur de cet attribut en lui indiquant, le
// chemin vers la seconde image
// 4/ Si ca n'est pas le cas (ce qui signifie que l'image a été changée)? la valeur
// 

// prochaine recette (fonction) : ajouter un message d'acceuil personnalisé
//on va changé le titre de la page pour inclure un message pour le visiteur du site
//Ce message sera consérvé quand l'utilisateur quittera le site et si il y revient plus tard
//on va conserver ce message dans le cache du navigateur  en utilisent l'API
//webstorage
// Au final, on ajoutera une option sur le bouton, pour pouvoir changer l'utilisateur et le message d'acceuil si besoin 

//1ere étape : récuperer dans une variable mon titre et l'afficher en console 

var monTitre = document.querySelector('h1');
console.log(monTitre);

//2eme étape : récuperer dans une variable monBouton la première balise bouton 

var monBouton = document.querySelector('buton');
console.log(monBouton);

//Message d'acceuil


function definirNomUtilisateur(){
    var monNom = prompt('Veuillez écrire votre prénom');
    localStorage.setItem('nameUser', monNom);
    monTitre.textContent = ' Welcomme ' + monNom + 'vieux loup';
}

// Explication de la fonction :
// Cette fonction utilise prompt() pour permettre à l'utilisateur de saisir des données 
// dans notres exemples on demande à l'utilisateur de saisir des données dans le navigateur pour les réutiliser.

//  La suite va être : testé si le nom n'est pas dans le cache. S'il ny est pas on demande avec prompt son nom a l'user.
// Si il y est on le récupère 


monBouton.addEventlistener('click', function(){
    definirNomUtilisateur();
})

if(!localStorage.getItem('nameUser')){
    definirNomUtilisateur();
}
else{
    var nomSave = localStorage.getItem('nameUser');
    monTitre.textContent = " yo " + nomSave + "swervin ? duh ";
 }

//  pour tester : vider localStorage
localStorage.clear();