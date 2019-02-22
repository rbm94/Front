// 1 - selectionne l'element textarea et element p#counterBlock
var tweetText = document.querySelector('#tweetContent');
var tweetCount = document.getElementById('counterBlock');


// 2 - we make a function to make the count of letters

function decompte() {
    // la fonction calcule la longeur de la chaine
    // caractère contenue dans la textarea
    var decompte = (140 - (tweetText.value.length));
    // et afficher cette valeur dans la balise
    // p#counterBlock grace à innerHTML
    tweetCount.innerHTML = decompte;

    // si le countdescend sosu 0 on ajoute la classz red à la balise p#TweetCount
    if (decompte < 0) {
        tweetCount.classList.add('red');
    } else if (decompte >= 0) {
        blockCount.classList.remove('red');
    }
}

tweetText.addEventListener('keyup', decompte);
decompte();