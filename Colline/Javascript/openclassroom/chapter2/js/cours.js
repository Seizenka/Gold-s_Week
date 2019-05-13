let titresElts = document.getElementsByTagName("h2"); //Tous les titres h2
console.log(titresElts[0]); //Affiche le premier h2
console.log(titresElts.length); //Affiche les 3

//Pour tous les éléments dont la classe se nomme "merveilles"
let merveillesElts = document.getElementsByClassName("merveilles");
for (let i = 0; i < merveillesElts.length; i++) {
  console.log(merveillesElts[i]);
} // La boucle affiche tous les éléments

//Element dont l'ID se nomme "nouvelles"
console.log(document.getElementById("nouvelles")); //Affiche la troisième liste <ul>

//Tous les paragraphes
console.log(document.querySelectorAll("p").length); //Affiche 3

//Tous les paragraphes à l'intérieur de l'élément identifié "contenu"
console.log(document.querySelectorAll("#contenu p").length); //Affiche 2

//Tous les éléments ayant la classe "existe"
console.log(document.querySelectorAll(".existe").length);

/*--------Obtenir des informations sur les éléments-----------
Le DOM permet également d'obtenir des informations sur des éléments sélectionnés.
---Le contenu HTML
La propriété innerHTML permet de récupérer tout le contenu HTML d'un élément du DOM. */

//Va récupérer tout ce qu'il se trouve dans la div "contenu"
console.log(document.getElementById("contenu").innerHTML);

//Renvoyer le contenu textuel sans l'éventuel balisage
console.log(document.getElementById("contenu").textContent);

//Renvoie la valeur de l'attribut passée en paramétre
console.log(document.querySelector("a").getAttribute("href")); // https://fr.wikipedia.org/wiki/Sept_merveilles_du_monde

//Certains attributs sont directement accessibles sous la forme de propriétés. C'est notamment le cas pour les attributs id, href et value.

// L'identifiant de la première liste
console.log(document.querySelector("ul").id);

// L'attribut href du premier lien
console.log(document.querySelector("a").href);

//On peut vérifier la présence d'un attribut grâce à la propriété hasAttribute
if(document.querySelector("a").hasAttribute("target")){
    console.log("Ce lien possède l'attribut target");
} else {
    console.log("Ce lien ne possède pas d'attribut target"); 
}
