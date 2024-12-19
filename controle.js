const prenom = document.getElementById("firsName");
const nom = document.getElementById("lastname");
const email = document.getElementById("email");
const pw = document.getElementById("pw");
const cpw = document.getElementById("cpw");
const btn = document.getElementById("br");

btn.addEventListener("click", verif);

function verif() {
    clearErrors(); // Clear previous error messages
    let hasErrors = false; // Track whether any errors are found

    // Check for first name
    if (prenom.value.trim() === "") {
        showError(prenom, "Prénom requis");
        hasErrors = true;
    }

    // Check for last name
    if (nom.value.trim() === "") {
        showError(nom, "Nom requis");
        hasErrors = true;
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
        showError(email, "Erreur : Email invalide !");
        hasErrors = true;
    }

    // Check for password
    if (pw.value.trim() === "") {
        showError(pw, "Erreur : Mot de passe requis");
        hasErrors = true;
    }

    // Confirm password
    if (cpw.value.trim() === "") {
        showError(cpw, "Erreur : Confirmation du mot de passe requise");
        hasErrors = true;
    } else if (pw.value !== cpw.value) {
        showError(cpw, "Erreur : Les mots de passe ne correspondent pas");
        hasErrors = true;
    }

    // If no errors, show success message
    if (!hasErrors) {
        alert("Inscription réussie !");
    }
}

// Function to show error messages
function showError(inputField, message) {
    const errorMessage = document.createElement("p");
    errorMessage.style.color = "red";
    errorMessage.textContent = message;
    inputField.parentNode.insertBefore(errorMessage, inputField.nextSibling);
}

// Function to clear all error messages
function clearErrors() {
    const errorMessages = document.querySelectorAll("p");
    errorMessages.forEach((msg) => msg.remove());
}
