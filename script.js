document.addEventListener("DOMContentLoaded", function() {
  let form = document.querySelector('form');

  // Écoute l'événement de soumission du formulaire et empêche le comportement par défaut (rechargement de la page)
  form.addEventListener("submit", (event) => {
      event.preventDefault();
      NewCom(); // Appel de la fonction NewCom
  })});

function NewCom(){
    let ListeCommentaire = document.getElementById('comment-list');
    let messageAlert = document.getElementById('error-message');

    let nom = document.getElementById('last-name').value.trim();
    let prenom = document.getElementById('first-name').value.trim();
    let texte = document.getElementById('message').value.trim();
  
  	if(nom === '', prenom ==='', texte === ''){
        messageAlert.style.display ="block"

    }else {

    let nouveauCommentaire = document.createElement('div');
    nouveauCommentaire.className = 'flex space-x-4 text-sm text-gray-500';

    
    let titreNomPrenom = document.createElement('div');
    titreNomPrenom.className ='flex-1 py-10 border-t border-gray-200';

    let divPrenomElement = document.createElement('h3');
    divPrenomElement.className = 'font-medium text-gray-900';
    divPrenomElement.textContent = `${prenom} ${nom}`;

    let divTexte = document.createElement('div')
    divTexte.className = 'prose prose-sm mt-4 max-w-none text-gray-500'

    let contenuCommentaire = document.createElement('p');
    contenuCommentaire.textContent = `${texte}`;

    divTexte.appendChild(contenuCommentaire);
    titreNomPrenom.appendChild(divPrenomElement);
    titreNomPrenom.appendChild(divTexte)
    nouveauCommentaire.appendChild(titreNomPrenom);
    
    ListeCommentaire.appendChild(nouveauCommentaire);
 
  	document.querySelector('form').reset();
    }
   
}


