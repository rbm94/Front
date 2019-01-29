var nb = 21;
var nb2 = 12;
if(nb && nb2 > 18){
    document.write(nb + " && " + nb2 + " sont plus grand que 18");
    document.write( "<hr> ");
}
else if (nb || nb2 == 12) {
    document.write(nb2 + "est egale a 12");
    document.write("<hr> ");
}
else if (nb || nb2 !== 12) {
    document.write(nb  + "est different de 12");
}
