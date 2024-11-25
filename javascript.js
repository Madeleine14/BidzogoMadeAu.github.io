function navigateTo(sectionId) {
    // Récupère toutes les sections et les masque
    const sections = document.querySelectorAll('.container');
    sections.forEach(section => section.classList.add('hidden'));

    // Affiche la section cible
    document.getElementById(sectionId).classList.remove('hidden');
}
