//Syntaxe de base
// commentaire sur une seule ligne
/*
Ici , je fais un commentaire
sur plusieurs lignes*/

//-- 1: déclarer une variable en JS
// var Prenom;
//--2: Affecter une valeur à une variable.
//Prenom ="Sandra";
 //var Prenom="Sandra";
// --3: Une instruction se termine TOUJOURS par un point virgule,
//aussi il est possible d'écrire plusieurs instructions en
//une seule ligne.
//inst_1;
//inst_2; inst_3;
//--4: Afficher une boîte de dialogue (2 façons)
//alert("Super, tu es arrivé sur mon site!");
//window.alert("Super, tu encore arrivé sur mon site!!");
//--5: Afficher dans la console(ici, la valeur de ma variable
//Prenom)
//console.log("sandra");
//--6: Afficher dans la page Web
//document.write("A la pause vous aurez des haribos Pik !");
//--7: demander à l'utilisateur une valeur (2 façons)
//window.prompt("Question: quel jour sommes nous?",
//"jour de la semaine");
//prompt("Question:Quel jour sommes nous?",
//"Jour de la semaine");
//---> et pour manipuler cette valeur, je n'oublie pas de la
//stocker.
//var jour = prompt("Question: Quel jour sommes nous?",
//"Jour de la semaine");
//consol.log(jour);
//-- 8: Attention /!\le JS est sensible à la casse 'case sensitive'
//mavariable=/= maVariable =/= ma_variable
//               camel case     snake case
//-- 9: Une variable ne peut pas commencer par un
// chiffre, elle ne doit contenir que des caractères
//ALPHANUMERIQUES, et ne peut pas être un mot réservé (var
//,for....des éléments natifs du langage JS)

// --10: Une variable peut être déclarée de façon explicite:
//var fruit;
//var fruit ="fraise";
// ou implicite :
//var fruit_2 ="coco";
//haribo = "tagada";
/*-----------------------------------
~~~~~~~~~~~~~LES TYPES DE VARIABLES~~~
-------------------------------------*/
// -- 1. Chaîne de caractères (string)
// L'objet global "string" est un constructeur de chaîne
//de caractères.
//var vacances = "2017";
//var destination = "Australie";
// -- 2. Un nombre entier (integer ou int)
//var annee = 2017;
// --3. Un nombre décimal (float)
//var nombre_a_virgule = -5.32;
// --4. Un Booléen (boolean = VRAI/FAUX = TRUE/FALSE)
//L'objet BOOLEAN est un objet permettant de représenter
//une valeur Booléenne.
// var unBooleen = false; // -- TRUE
// --5. Les Constantes
/*La déclaration de const permet de créer une constante
accessible uniquement en lecture. Contrairement à une variable
sa valeur ne peut plus être modifiée par réaffectation plus bas
dans le code.
Une constante ne peut pas être déclarée à nouveau dans le
même script*/
/*--par CONVENTION les constantes sont en MAJUSCULES.
const PAYS = "France"; //string
const AN = '2020'; //string
const BIRTH = 2020; //nombre
*/
//-- 6. TYPEOF permet de connaître le type de ma VARIABLE
/*console.log('vacances');
console.log(typeof "vacances");
console.log('annee');
console.log(typeof 2019);*/
// En JS les variables sont auto-typées
// on peut convertir une variable de type NUMBER en STRING
//et aussi  STRING en NUMBER avec les fonctions natives
//de JS
// -- la fonction parseInt() renvoie un entier à partir d
//une chaîne de caractères.(la fonction parseInt analyse
//une chaîne de caractère fournie en argument et renvoie
// un entier dans une base de données).
var unChiffre ="12";
console.log(unChiffre);
console.log(typeof "unChiffre");
// STRING => NUMBER
unChiffre = parseInt(unChiffre);
console.log(unChiffre);
console.log(typeof unChiffre);
//Je ré-affecte une valeur
unChiffre = "12.22";
console.log(unChiffre);
console.log(typeof unChiffre);
// STRING => FLOAT
/*la fonction parseFloat permet de transformer une chaîne
de caractères en un nombre flottant après avoir analysé
celle-ci(parsing).*/
/*Un nombre flottant obtenu à partir de l'analyse de la
chaîne de caractères. Si le premier caractère ne permet
pas d'obtenir un nombre, ce sera la cvaleur NAN qui sera
renvoyée.*/
unChiffre = parseFloat(unChiffre);
console.log(unChiffre);
console.log(typeof unChiffre);
// NUMBER => STRING
var nb_en_lettres = 258;
console.log(nb_en_lettres);
console.log(typeof nb_en_lettres);

var nb_en_lettres = nb_en_lettres.toString();
console.log(nb_en_lettres);
console.log(typeof nb_en_lettres);
/*La méthode toString() en JS permet de donner un aperçu d'un objet
instancié. C'est à dire que cette méthode va te
retourner une chaîne de caractères représentant ton
objet: affichage de la valeur des propriétés par exemple.
*/
