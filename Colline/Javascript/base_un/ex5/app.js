//Première méthode via variables

/*let nbrUn = prompt('Inscrivez un premier nombre décimal');
let nbrDeux = prompt('Inscrivez un deuxième nombre décimal');
let result = Math.trunc(nbrUn) * nbrDeux;
alert(result);*/

//Deuxième méthode via fonction

function calcul(){
    alert(Math.trunc(document.getElementById("premier_nombre").value) * document.getElementById("deuxieme_nombre").value);
}

