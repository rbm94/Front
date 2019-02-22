/*
Script changer_style()
*/
// bonne pratique : Ici en j'appelle mes éléments :
// bonne pratique : var p = document.getElementById('parag1');
// bonne pratique : var bouton = getElementById('btn');
function changer_style() {
    var p = document.getElementById('parag1');
    /*Je récupère ma balise p#parag1 */
    // bonne pratique : j'applique les modifications de style css;

    /*Ici je vais changer le style CSS de ma balise avec la methode style à laquelle j'applique les propriétés CSS 
    exemple = style.color => change la couleur des lettres
    */
    p.style.color = "white";
    p.style.backgroundColor = "rosyBrown";
    p.style.border = "6px dotted teal";
    p.style.padding = "30px";
    p.style.width = "60%";
    p.style.margin = "0 auto";
}

// bonne pratique : J'agis sur le DOM
//bonne pratique : bouton.addEventListener('onClick',changer_style());
// bonne pratique : changer_style();