/*Les boucles permettent de repéter des actions simplement et rapidement.
Une boucle peut être vue comme une version informatique de "copier N lignes"ou de faire "X fois quelque chose" par exemple :
En JS on peut traduire "fair 5 pas vers l'est" avec cette boucle */
//var pas;
//for(pas=0; pas < 5; pas++){
    //Ceci sera executé 5 fois
    //A chaque éxécution, la variable "pas" augementera de 1
    //Lorsqu'elle sera arrivée à 5, la boucle se terminera.
   // console.log("Fair un pas vers l'Est");

/*Il y a differrents types de boucles mais elles se ressemble toutes au sens ou elle répètent une action un certain nombre de fois ( ce nombre peut être 0)
Les différents type de boucles permettent d'utiliser différentes façon de commencer et de terminer une boucle .
Chaque boucle pourra être utilisiée en fonction de la situation et du problème que l'on cherche à résoudre.
/*-----Les Boucles-----*/
/*-----La boucle FOR -----*/
//for(3arguemnts) (l'objet argument est un objet , semblable à un tableu correspondant aux arguments passés à une fonction)//

/*
1.Initialise un compteur à partir du mon point de comptage 
2.la condition à verfifier qui doit donc être vrai (TRUE)
3.Le pas d'incrementation ( combien j'ajoute à chaque tour, generalement 1 donc I++)
*/
/*
for(var i=1; i<=10; i+=2){
    document.write("<p>Instructionexécutée : "+i+"</p>")
}*/

//--Boucle wihle--//
//tés utilisée quand on ne connait pas le nombre de tours de boucles à l'avance
//*var j = 1;
//while(j<=10){
//document.write("<hr/><p>Instruction exécutée : "+j+"</p>")
//j++;


/*-----EXERCICE-----*/
// J'ai 1000€ sur mon compte chaque mois +50€ //
//Combien de temps il faudrait pour avoir 2000€ sur mon compte //
//Avec la boucle while//
var monCompte = 1000;
var temps = 0;
while(monCompte<2000){
    monCompte +=50;
    temps++;
}
document.write("<h3>Sous sur mon compte : "+ monCompte +"</h3>");
document.write("<h3>2000€ :" +temps + "mois</h3>");

//Avec la boucle FOR//
var tps = 0;
for(var mesSous = 1000; mesSous< 2000; mesSous+=50){
    document.write("<h3>Ce moi ci j'ai :" + mesSous +"</h3>");
    tps++;
}
document.write("<h3>Il aura fallu " +tps + "mois</h3>");