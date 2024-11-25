// Fonction de navigation entre les pages
function navigateTo(pageId) {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.classList.add('hidden');
  });

  const targetSection = document.getElementById(pageId);
  if (targetSection) {
    targetSection.classList.remove('hidden');
  }
}

// Ajout d'un listener pour la connexion (exemple)
document.getElementById('login-form').addEventListener('submit', function (event) {
  event.preventDefault();
  alert('Connexion réussie !');
  navigateTo('catalog-page');
});
