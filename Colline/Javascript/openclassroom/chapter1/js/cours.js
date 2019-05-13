let h = document.head; //La variable h contient l'objet head du DOM
console.log(h); //On fait un console.log pour vérifier si la variable existe

let b = document.body; //La variable b contient l'objet body du DOM
console.log(b);

//-------La variable document correspond à l'élément html

if(document.body.nodeType === document.ELEMENT_NODE){
    console.log("Body est un noeud élément");
} else {
    console.log("Body est un noeud textuel");
}

// Accès au premier enfant du noeud body
console.log(document.body.childNodes[1]);

/*-------Chaque objet du DOM a une propriété nodeType qui indique son type. 
La valeur de cette propriété est document.ELEMENT_NODE pour un nœud "élément" 
(balise HTML) et document.TEXT_NODE pour un nœud textuel.

Seuls les nœuds de type élément peuvent avoir des sous-nœuds (appelés enfants).
*/

/*-----Parcourir la liste des nœuds enfants-------

Pour parcourir la liste des nœuds enfants, vous pouvez recourir à une boucle for, 
comme dans l'exemple ci-dessous.*/

for(let i = 0; i < document.body.childNodes.length; i++){
    console.log(document.body.childNodes[i]);
}