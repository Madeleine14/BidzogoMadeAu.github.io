function navigateTo(sectionId) {
    // Cacher toutes les sections
    const sections = document.querySelectorAll('.container');
    sections.forEach(section => section.classList.add('hidden'));

    // Afficher la section demandée
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.remove('hidden');
    }
}
