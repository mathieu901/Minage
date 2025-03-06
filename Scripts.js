document.getElementById("signup-form").addEventListener("submit", function(e) {
    e.preventDefault();

    // Récupérer les informations du formulaire
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Vérifier si les champs sont remplis
    if (name && email && password) {
        // Enregistrer l'utilisateur (dans le localStorage pour le moment)
        const user = { name, email, password };
        let users = JSON.parse(localStorage.getItem("users")) || [];
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));

        alert("Inscription réussie !");
        
        // Réinitialiser le formulaire
        document.getElementById("signup-form").reset();

        // Rediriger vers la page de services (ou tableau de bord)
        window.location.href = "dashboard.html"; // Remplace par ton fichier de tableau de bord
    } else {
        alert("Veuillez remplir tous les champs !");
    }
});
