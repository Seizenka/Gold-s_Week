

// TODO : ajouter la liste des journaux sur la page, dans la div "contenu"

//--------méthode longue------//

/*let leMondeLink = document.createElement("a"); //On créé un élément <a> => HTML
leMondeLink.setAttribute("href",journaux[0]); //On lui attribue un href et son lien qui est placé dans le tableau
leMondeLink.textContent = journaux[0]; //Sans oublier de le faire apparaître en lui donnant du contenu textuel, ici le lien
document.getElementById("contenu").appendChild(leMondeLink); //On l'ajoute dans la div contenu

let leFigaro = document.createElement("a");
leFigaro.setAttribute("href", journaux[1]);
leFigaro.textContent = journaux[1];
document.getElementById("contenu").appendChild(leFigaro);

let liberation = document.createElement("a");
liberation.setAttribute("href", journaux[2]);
liberation.textContent = journaux[2];
document.getElementById("contenu").appendChild(liberation);*/

//-------Méthode courte-------//

// Liste des journaux
let journaux = ["http://lemonde.fr", "http://lefigaro.fr", "http://liberation.fr"];

for(let i = 0; i < journaux.length; i++){
    let linkElt = document.createElement("a");
    linkElt.textContent = journaux[i];
    linkElt.setAttribute("href", journaux[i]);
    console.log(linkElt);

    document.getElementById("contenu").appendChild(linkElt);
    document.getElementById("contenu").appendChild(document.createElement("br"));
}