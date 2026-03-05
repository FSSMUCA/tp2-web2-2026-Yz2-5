let nom = "   Fatima   "
let age = "23"
let email = "fatima@example"
let scoreJeu = "150pts"
let estAdmin = "false"
let derniereConnexion = null
let nombreConnexions = "0"

console.log("===== RAPPORT UTILISATEUR =====")

let nomCorrige = nom.trim()
if (nomCorrige === "") {
    nomCorrige = "Inconnu"
}
console.log('nom              : "' + nomCorrige + '" (corrigé : espaces supprimés)')

let ageConverti = parseInt(age)
if (Number.isNaN(ageConverti) || ageConverti <= 0) {
    console.log("age              : valeur invalide")
} else {
    console.log("age              : " + ageConverti + " (valide)")
}
let positionAt = email.indexOf("@")
let emailValide = false
if (positionAt !== -1) {
    let partieApresAt = email.slice(positionAt + 1)
    if (partieApresAt.indexOf(".") !== -1) {
        emailValide = true
    }
}
if (emailValide) {
    console.log('email            : "' + email + '" (valide)')
} else {
    console.log('email            : "' + email + '" (invalide : pas de point après @)')
}
let scoreConverti = parseInt(scoreJeu)
if (Number.isNaN(scoreConverti)) {
    scoreConverti = 0
}
console.log('scoreJeu         : ' + scoreConverti + ' (extrait depuis "' + scoreJeu + '")')
let estAdminBool = false
if (estAdmin === "true") {
    estAdminBool = true
} else if (estAdmin === "false") {
    estAdminBool = false
}
console.log('estAdmin         : ' + estAdminBool + ' (attention : Boolean("false") = true, conversion manuelle requise)')
let derniereConnexionFinale = derniereConnexion ?? "Jamais connecté"
console.log('derniereConnexion: "' + derniereConnexionFinale + '" (valeur par défaut via ??)')
let connexionsConverties = parseInt(nombreConnexions)
if (Number.isNaN(connexionsConverties)) {
    connexionsConverties = 0
}
if (connexionsConverties === 0) {
    console.log('nombreConnexions : "Aucune connexion" (0 après conversion)')
} else {
    console.log("nombreConnexions : " + connexionsConverties)
}
console.log("================================")