function infosLiens(){
    let liensElts = document.getElementsByTagName("a"); //On créé une variable pour les éléments "a"
    let nombreLiens = liensElts.length; //Une variable qui stocke le nombre de lien dans un "tableau" grâce à length
    console.log(nombreLiens); //Renvoie le nombre de lien

    if(nombreLiens > 0){
        console.log(liensElts[0].getAttribute("href")); //On affiche le premier lien grâce à [0]
        console.log(liensElts[nombreLiens - 1].getAttribute("href")); //On affiche le dernier lien grâce à [nombreLiens - 1]
    }
    
}
//Affiche si un élément possède une classe
function possede(id, classes) {
    let instruments = document.getElementById(id);
    if(instruments !== null){
        console.log(instruments.classList.contains(classes));
    } else {
        console.log("Aucun élément de possède l'identifiant " + id);
    }
 
}

infosLiens();

possede("saxophone", "bois"); // Doit afficher true
possede("saxophone", "cuivre"); // Doit afficher false
possede("trompette", "cuivre"); // Doit afficher true
possede("contrebasse", "cordes"); // Doit afficher une erreur