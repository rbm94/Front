//alert("Coucou");
/*---------------
LA CONCATENATION
-----------------*/
/* Concaténer signifie mettre bout à bout deux chaînes de
caractères afin d'en former une troisième, nouvelle.
Concaténer c'est donc additionner des chaînes de caractères.
En javaScript, on va pouvoir concaténer grâce à l'opérateur
<< + >>.*/
var annee = 2017;
var futur = 3;
var calcul = annee + futur;
console.log(calcul);
document.write( calcul + "<br>");

var mois ="7";
var calcul2 = annee + " " + mois;
console.log(calcul2);
document.write(calcul2 + "<br>");

var DebutPhrase = "Aujourd'hui,";
var NbStagiaires = 9;
var SuitePhrase = "stagiaires";
var FinPhrase = "sont présents.";
// Afficher la phrase en un seul morceau avec la concaténation
//=> à vous de jouer!!
/*document.write(DebutPhrase + " " + NbStagiaires + " " + SuitePhrase +
" " + FinPhrase);*/
var phrase = DebutPhrase + " " + NbStagiaires + " " + SuitePhrase + " " + FinPhrase;
console.log(phrase);
document.write(phrase);
