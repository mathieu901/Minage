// Simulation de services proposés
const services = [
    { name: "Cours de programmation", description: "Apprenez à coder en Python", price: "1 heure = 1 service" },
    { name: "Design graphique", description: "Création de logos et bannières", price: "1 service = 1 heure" },
    { name: "Traduction", description: "Traduction anglais-français", price: "1 service = 1 document" }
];

// Fonction pour afficher les services sur la page
function displayServices() {
    const serviceListDiv = document.getElementById("services-list");
    services.forEach(service => {
        const serviceDiv = document.createElement("div");
        serviceDiv.classList.add("service");
        serviceDiv.innerHTML = `<h3>${service.name}</h3><p>${service.description}</p><p>Échange: ${service.price}</p>`;
        serviceListDiv.appendChild(serviceDiv);
    });
}

// Appeler la fonction pour afficher les services
displayServices();

// Fonction d'inscription
document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    alert(`Bienvenue ${name}! Vous êtes inscrit avec l'email: ${email}`);
});
