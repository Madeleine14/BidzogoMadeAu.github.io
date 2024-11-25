// Fonction pour naviguer entre les pages
function navigateTo(page) {
    // Masquer toutes les pages
    const pages = document.querySelectorAll('.container');
    pages.forEach(pageElement => {
        pageElement.classList.add('hidden');
    });

    // Afficher la page correspondante
    const currentPage = document.getElementById(page);
    if (currentPage) {
        currentPage.classList.remove('hidden');
    }
}
