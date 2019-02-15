var compteur_minutes = 0;
var compteur_heures = 0;

function tourne() {
    heures = document.getElementById("aiguilleheure");
    minutes = document.getElementById("aiguilleminute");

    switch (compteur_minutes) {
        case 0: minutes.style.top = "123px"; minutes.style.left = "250px"; break;
        case 1: minutes.style.top = "160px"; minutes.style.left = "287px"; break;
        case 2: minutes.style.top = "210px"; minutes.style.left = "300px"; break;
        case 3: minutes.style.top = "260px"; minutes.style.left = "287px"; break;
        case 4: minutes.style.top = "297px"; minutes.style.left = "250px"; break;
        case 5: minutes.style.top = "310px"; minutes.style.left = "200px"; break;
        case 6: minutes.style.top = "297px"; minutes.style.left = "150px"; break;
        case 7: minutes.style.top = "260px"; minutes.style.left = "113px"; break;
        case 8: minutes.style.top = "210px"; minutes.style.left = "100px"; break;
        case 9: minutes.style.top = "160px"; minutes.style.left = "113px"; break;
        case 10: minutes.style.top = "123px"; minutes.style.left = "150px"; break;
        case 11: minutes.style.top = "110px"; minutes.style.left = "200px"; break
        default: alert("Y'a un bug!"); break;
    }

    compteur_minutes = (compteur_minutes + 1) % 12;

    if (compteur_minutes == 0) {
        switch (compteur_heures) {
            case 0: heures.style.top = "123px"; heures.style.left = "250px"; break;
            case 1: heures.style.top = "160px"; heures.style.left = "287px"; break;
            case 2: heures.style.top = "210px"; heures.style.left = "300px"; break;
            case 3: heures.style.top = "260px"; heures.style.left = "287px"; break;
            case 4: heures.style.top = "297px"; heures.style.left = "250px"; break;
            case 5: heures.style.top = "310px"; heures.style.left = "200px"; break;
            case 6: heures.style.top = "297px"; heures.style.left = "150px"; break;
            case 7: heures.style.top = "260px"; heures.style.left = "113px"; break;
            case 8: heures.style.top = "210px"; heures.style.left = "100px"; break;
            case 9: heures.style.top = "160px"; heures.style.left = "113px"; break;
            case 10: heures.style.top = "123px"; heures.style.left = "150px"; break;
            case 11: heures.style.top = "110px"; heures.style.left = "200px"; break
            default: alert("Y'a un bug!"); break;
        }

        compteur_heures = (compteur_heures + 1) % 12;
    }

    if (indic) window.setTimeout("tourne()", "1000");
}