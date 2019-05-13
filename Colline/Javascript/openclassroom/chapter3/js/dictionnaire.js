// Liste des mots du dictionnaire
let mots = [
    {
        terme: "Procrastination",
        definition: "Tendance pathologique à remettre systématiquement au lendemain"
    },
    {
        terme: "Tautologie",
        definition: "Phrase dont la formulation ne peut être que vraie"
    },
    {
        terme: "Oxymore",
        definition: "Figure de style qui réunit dans un même syntagme deux termes sémantiquement opposés"
    }
];

// TODO : créer le dictionnaire sur la page web, dans la div "contenu"
console.log(mots[1].terme);
//Créer la balise dl
let dl = document.createElement("dl");
//Créer une boucle forEach ---Une boucle for n'aurait pas fonctionné
mots.forEach(function(mot){
    let dtElt = document.createElement("dt");
    let strong = document.createElement("strong");
    strong.textContent = mot.terme;

    let ddElt = document.createElement("dd");
    ddElt.textContent = mot.definition;

    dtElt.appendChild(strong);
    ddElt.appendChild(dtElt);
    dl.appendChild(dtElt);
    dl.appendChild(ddElt);
});

document.getElementById("contenu").appendChild(dl);