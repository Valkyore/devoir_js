let form = document.querySelector('form');

form.addEventListener("submit",(event) => {
    event.preventDefault();
})

function NewCom(){
    let form = document.querySelector("form")
    let ListeCommentaire = document.getElementById('comment-list');
    let nouveauCommentaire = document.getElementById('nouveau-com');

    let nom = document.getElementById('last-name');
    let prenom = document.getElementById('first-name');
    let texte = document.getElementById('message');
    console.log(nom.value,prenom.value,message.value);

    nom.prenom = document.createElement('h3');
    texte = document.createElement('p');

    nouveauCommentaire.appendChild(texte,nom.prenom);

    ListeCommentaire.appendChild(nouveauCommentaire)


 }