/*Modifier un élément existant*/
//----Le contenu HTML innerHTML-----//
//On peut modifier le contenu HTML grâce à innerHTML Utilisation : petite modification
document.getElementById("langages").innerHTML += '<li id="c">C</li>'; //On ajoute un élément d'une liste avec l'opérateur +=

//innerHTML peut "vider" le contenu d'un élémenent
//document.getElementById("langages").innerHTML = ""; //Résultat la liste disparaît

//-----Le contenu textuel textContent------//
//On peut modifier le contenu textuel grâce à .textContent
document.querySelector("h1").textContent += " de programmation";

//-----Les attributs----//
//-setAttribute-//
//Cette méthode peut définir un attribut à un élément. Elle prend en paramètres le nom et la valeur de cet attribut.
document.querySelector("h1").setAttribute("id", "titre"); //h1 posséde maintenant un id="titre"

//Certains attributs comme id, href et value sont directement modifiables sous la forme de propriétés.
document.querySelector("h1").id = "titre"; //même méthode

//-Les classes-//
/*On peut utiliser la propriété classList pour ajouter ou supprimer des classes à un élément
du DOM. Pour cela, on emploie les méthodes add(ajout) et remove(suppression*/
let titreElt = document.querySelector("h1"); //On accède au premier titre h1
titreElt.classList.remove("debut"); //On retire la class debut
titreElt.classList.add("titre"); //on ajoute la class titre
console.log(titreElt);

//-------Ajouter un nouvel élément-------//
/*L'ajout d'un nouvel élément à une page web peut se décomposer en trois opérations :

    Création du nouvel élément.
                            => méthode createElement
    Définition des informations de l'élément.
                            =>variable.id
                            =>variable.textContent
                            =>variable.classList
    Insertion du nouvel élément dans le DOM.
                            =>appendChild

    Par exemple, imaginons que l'on souhaite ajouter le langage "Python" à la liste des langages de 
    notre page. */

let pythonElt = document.createElement("li"); //On crée un élément <li>
pythonElt.id = "python"; //On lui définit un id="pyhton"
pythonElt.textContent = "Python"; //On lui définit son contenu textuel "Python"
document.getElementById("langages").appendChild(pythonElt); //Insertion du nouvel élément

//On peut créer un noeud de type texte avec createTextNode au lieu de textContent :
let rubyElt = document.createElement("li");
rubyElt.id = "ruby";
rubyElt.appendChild(document.createTextNode("Ruby"));
document.getElementById("langages").appendChild(rubyElt); //Nouvel élément ajouté comme "dernier enfant"

//------Ajout d'un noeud avant un autre noeud-----//
/*On souhaite parfois insérer un nouvel élément ailleurs que comme dernier fils de son élément
parent. Dans notre exemple, on pourrait vouloir ajouter le langage Perl avant le langage PHP dans
la liste. Pour cela, il existe la méthode insertBefore. On l'appelle sur le futur élément parent et
on lui passe en paramètres le nouveau noeud ainsi que le noeud avant lequel le nouveau noeud sera
inséré. */

let perlElt = document.createElement("li");
perlElt.id = "perl";
perlElt.appendChild(document.createTextNode("Perl"));
document
  .getElementById("langages")
  .insertBefore(perlElt, document.getElementById("python")); //Perl sera avant Python dans la liste

//--------Choix de la position exacte du nouveau noeud------//
/*Il existe également une méthode plus récente qui permet de définir encore plus précisément
la position des éléments insérés :insertAdjacentHTML. On l'appelle sur un élément existant et
elle prend en paramètres une position et une chaîne de caractères HTML qui représente le nouveau
contenu à ajouter. La position du nouveau contenu doit être une valeur parmi :

    beforebegin: avant l'élément existant lui-même.

    afterbegin: juste à l'intérieur de l'élément existant, avant son premier enfant.

    beforeend: juste à l'intérieur de l'élément existant, après son dernier enfant.

    afterend: après l'élément existant lui-même. */

document
  .getElementById("langages")
  .insertAdjacentHTML("afterbegin", '<li id="js">Javascript</li>'); //Javascript est placé en début de la liste

//----------Remplacer un noeud existant---------//
/*On remplace un noeud courant par un autre noeud grâce à la méthode replaceChild.
Elle prend en paramètres (dans cet ordre) le nouveau noeud et celui qui est remplacé. */
let bashElt = document.createElement("li");
bashElt.id = "bash";
bashElt.textContent = "Bash";
document
  .getElementById("langages")
  .replaceChild(bashElt, document.getElementById("perl")); //Perl est remplacé par Bash

//-----Supprimer un noeud existant----//
/*Enfin, il est possible de supprimer un noeud à l'aide de la méthode removeChild.
Elle prend en paramètre le noeud à supprimer du DOM. */

document
  .getElementById("langages")
  .removeChild(document.getElementById("bash")); //On supprime l'élément bash de la liste

//-----Exercice du chapitre----ajouter un paragraphe//
document.getElementById("contenu").innerHTML += '<p>En voici une <a href="https://fr.wikipedia.org/wiki/Liste_des_langages_de_programmation">liste</a> plus complète</p>';
