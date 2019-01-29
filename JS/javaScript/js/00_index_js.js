//alert('js okay') pour vérifier si mes fichier JV et HTML sont bien reliés
/* Syntaxe de base */
// deux slash pour fair un commentaire uniligne 

/*
   ici je peux fair des commentaire
   sur plusieurs lignes 
*/

// -- 1 : Déclaration d'une variable en JS

var prenom;

// -- 2 :Affecter une valeur

var prenom = "Le B ";

// -- 3 : Une instruction se termine /TJR\ par un ";" , aussi il est possible d'écrire plusieur instruction sur une même ligne 
var instruction_1;
var instruction_2, instruction_3;

// -- 4 : Afficher une boîte de dialogue 
alert("WOW ! tu es sur ma page");
window.alert("WOW ! tu es sur ma page");

// -- 5 : Afficher la console 
console.log(prenom);

// -- 6 : Afficher du contenus 
document.write("Bonjour à moi !"); 

// -- 7 : Demander a l'utilisateur une valeur (2 façons)
 var retournerValeur = window.prompt("question : on est quel jour ?");
var retourneValeur = prompt("question : on est quel jour ?");

// -- 8 :Attention le JS est sensible a la casse:
// mavariable=/=maVariable //

// -- 9:Une variable ne peut pas commencer par un chiffre  , ne doit contenir que des caractère alphanumériques, et ne peut être un mot réservé ( var , for... des élément natifs du language JS)

// -- 10: Une variable peut être déclarée de façon explicite :
var prenom = "Le B"; 
// -- ou implcite :
prenom ="Le B";

// -- 1. chaîne de caractère 
var vacances ="2017";
var destination ="guadaljara";

// -- 2.Un nombre entier (integrer)
var annee = 2017;

// -- 3.Un nombre décimal { float}
var nombre_a_virgule = -5.32;

// -- 4.Un booléan (boolean = VRAI/FAUX )
var boolean = false;

// -- 5. Les constantes 
/*La déclaration const permet de créer une constante accecible uniquement en lecture.
Contrairement à une variable , sa valeur ne peut être modifiée par réaffectation plus bas dans le code.
Une constante ne peut pas être déclarée à nouveau dans le même scripte.*/

//Par convention les constante sont en majuscules.
const PAYS ="France";

console.log(typeof "2017");
console.log(typeof "guadaljara")


/*=================================================*/

// Intro JAVA SCRIPTE & ALGO

                                                            /*=================================================*/
                                                                          // LA CONCATENATION \\
                                                            /*=================================================*/        

var x ="Bahou";
console.log("Bonjour " + x + "!!");
//La CONCATENATION c'est des ajouts d'élément les un à la suite des autres//


//Exemple 1 //
var annee = 1997;
var mois =10;
var jour =21;
console.log( jour + "/" + mois + "/" + annee );
document.write(jour + "/" + mois + "/" + annee ); 
//Exemple 2 //
var DebutDePhrase = "Aujourd'hui " ;
var NmbrDeStag = "9 ";
var SuiteDePhrase = "stagiaires " ;
var Fin = "sont présents <br>";

//Nous souhaitons maintenant , grâce à la concaténation, afficher tout ce petit monde, en un seul morceau!
document.write( DebutDePhrase + NmbrDeStag + SuiteDePhrase + Fin );

/*----------------
Exercice :
Créer une concaténation a partir des élément suivants : 
----------------*/

var phase1 ="Je m'appelle ";
var phrase2 ="Le B et j'ai ";
var age = 375 ;
var phrase3 ="ans";

console.log(phase1 + phrase2 + age + phrase3);
document.write(phase1 + phrase2 + age + phrase3);

/* ----------------------------------------------
         LES OPERATEURS ARITHMETIQUES
---------------------------------------------- */

var nb1, nb2, resultat;

nb1 = 15;
nb2 = 5;

resultat = nb1 + nb2;
console.log(resultat);
//###################### La Modulo ################//
//--Nombre: Le modulo retourne le reste d'une division //

//-- Le modulo de nb1 % nb2 avec l'opérateur "%3"
nb1 = 11;
resultat = nb1 % nb2;
resultat = nb1 % nb2;
console.log(resultat);

/*----------------------------------------------
           LES ECRITURES SIMPLIFIEES
----------------------------------------------*/

nb1 = 15;
nb1 =nb1 + 5;
console.log(nb1);

nb1 + 5; //-- ce qui équivaut à écrire nb1 = nb1 + 5; --//
//-- Ici , j'ai incrémenté et réaffecté--//
console.log(nb1);

//-- Je peux procéder de la même manière pour le sautres opérateurs arithmétique : "+","-","/","*"/"%" --//

/*----------------------------------------------
           INCREMENTATION 1 DECREMENTATION
----------------------------------------------*/

var nb1 = 1;
nb1 = nb1 + 1;
console.log(nb1);

nb1++;
/* Simplifié */
nb1--;
console.log(nb1);

/*----------------------------------------------
           LES CONDITIONS
----------------------------------------------*/
var MajoriteFR = 18;

if (MajoriteFR >= 18) { // si ma condition est vrai (boolean=TRUE/VRAI)}
    alert("Bienvenue");
} else {// sinon => ma condition est fausse (boolean = FALSE/FAUX)
    alert("Allez  voir ailleurs !");
}

/* -------------------------------
EXERCICE
Créer une fonction permettant de vérifier l'age d'un visiteur.
S'il a la majorité légale, alors je lui souhaite la bienvenue, sinon, je fait une redirection sur Google après lui
avoir signalé le soucis.
-------------------------------- */



var MajoFR = window.prompt("quel age a tu ?");

if (MajoFR >= 18) { // si ma condition est vrai (boolean=TRUE/VRAI)}
    alert("Bienvenue");
}
else {// sinon => ma condition est fausse (boolean = FALSE/FAUX)
    document.location.href = "http://www.Google.com";
}

4
5

    
        

