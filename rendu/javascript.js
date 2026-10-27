/* MEMO JS ***************************

    const = déclarer une variable qu'on ne va pas réaffecter / let = pouvoir changer sa valeur
    = -> donner une valeur / == -> comparer deux valeurs / === -> comparer aussi leur type
    true = vrai / false = faux -> des booléens

    document.querySelector(".contact-form") -> récupérer le premier élément avec cette classe
    .nom = classe / #nom = id / si aucun élément n'est trouvé -> null
    if (form) { ... } -> exécuter le code seulement si le formulaire existe
    if (isValid) { ... } -> exécuter le code si isValid vaut true

    addEventListener -> écouter un événement / "click" = clic / "submit" = envoi du formulaire
    bouton.addEventListener("click", () => { ... }) -> exécuter le code entre les accolades au clic
    event.preventDefault() -> empêcher l'action par défaut, ici le rechargement à l'envoi

    popupTitle.textContent = "Mon projet" -> changer le texte d'un élément
    nomInput.value -> récupérer le texte du champ / nomInput.value = "" -> vider le champ
    trim() -> retirer les espaces au début et à la fin du texte retourné
    nomInput.value.trim() == "" -> vérifier si le champ est vide ou rempli d'espaces

    classList.add("hidden") -> ajouter la classe hidden / ici, cacher l'élément grâce au CSS
    classList.remove("hidden") -> retirer la classe hidden / ici, afficher l'élément
    projectPopup.showModal() -> ouvrir la fenêtre et bloquer les clics sur le reste de la page
    projectPopup.close() -> fermer la fenêtre

**************************************/

// RÉCUPÉRER LES ÉLÉMENTS ***************************

// Fenêtre des projets
const projectPopup = document.querySelector(".project-popup")
const popupTitle = document.querySelector("#popup-title")
const popupText = document.querySelector("#popup-text")
const closePopup = document.querySelector("#close-popup")

//  Boutons des projets
const robotButton = document.querySelector("#robot-button")
const policeButton = document.querySelector("#police-button")
const youtubeButton = document.querySelector("#youtube-button")
const herobrineButton = document.querySelector("#herobrine-button")


const form = document.querySelector(".contact-form")

// Champs du formulaire
const nomInput = document.querySelector("#nom")
const prenomInput = document.querySelector("#prenom")
const raisonInput = document.querySelector("#raison")

// Les messages d'erreur et de succès
const nomError = document.querySelector(".nom-error")
const prenomError = document.querySelector(".prenom-error")
const raisonError = document.querySelector(".raison-error")
const formSuccess = document.querySelector(".form-success")

// FENÊTRE DES PROJETS ***************************


if (projectPopup) {
    // le même fichier JavaScript est utilisé sur les deux pages, la fenêtre existe seulement sur l'accueil
    robotButton.addEventListener("click", () => {
        // changer le titre et le texte de la fenêtre
        popupTitle.textContent = "Mecha Lego en 3D"
        popupText.textContent = "Réalisation d'un mécha Lego sur Blender en ayant un modèle de référence."
        // afficher la fenêtre
        projectPopup.showModal()
    })

    policeButton.addEventListener("click", () => {
        popupTitle.textContent = "Adobe Creative & Photographie"
        popupText.textContent = "Utilisation des logicielles d'adobe et d'appereils photos professionel, imitation d'une cover d'album populaire, photo prise en studio et montage avec les logicielles Adobe. "
        projectPopup.showModal()
    })

    youtubeButton.addEventListener("click", () => {
        popupTitle.textContent = "Chaîne YouTube"
        popupText.textContent = "Chaîne où je poste des sons qui sont en slowed ou qui sont looped sur la meilleure partie du son afin que tout le monde puisse trouver son bonheur et la version d'une musique qui lui plaît. (Actuellement 2.5K abonnés)"
        projectPopup.showModal()
    })

    herobrineButton.addEventListener("click", () => {
        popupTitle.textContent = "Render 3D Minecraft"
        popupText.textContent = "Création d'une scène avec un décors sur Blender pour mettre en avant le personnage de Herobrine de l'univers de Minecraft."
        projectPopup.showModal()
    })

    // écouter le clic sur le bouton Fermer
    closePopup.addEventListener("click", () => {
        // fermer la fenêtre
        projectPopup.close()
    })
}

// VALIDATION DU FORMULAIRE ***************************

if (form) {
    form.addEventListener("submit", (event) => {
        event.preventDefault()

        // déclarer un booléen
        let isValid = true
        // si un champ est vide, isValid passe à false pour ne pas afficher le message de succès

        // cacher les anciens messages avant la vérification
        nomError.classList.add("hidden")
        prenomError.classList.add("hidden")
        raisonError.classList.add("hidden")
        formSuccess.classList.add("hidden")

        // si le champ nom est vide
        if (nomInput.value.trim() == "") {
            nomError.classList.remove("hidden")
            isValid = false
        }

        // si le champ prénom est vide
        if (prenomInput.value.trim() == "") {
            prenomError.classList.remove("hidden")
            isValid = false
        }

        // si le champ raison est vide
        if (raisonInput.value.trim() == "") {
            raisonError.classList.remove("hidden")
            isValid = false
        }

        // si tous les champs sont remplis
        if (isValid) {
            formSuccess.classList.remove("hidden")

            // vider les champs
            nomInput.value = ""
            prenomInput.value = ""
            raisonInput.value = ""
        }
    })
}
