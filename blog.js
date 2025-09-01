function showSection(sectionId, linkElement) {
    // Oculta todas las secciones
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.classList.remove('active'));

    // Muestra la sección seleccionada
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }

    // Actualiza el menú activo
    const links = document.querySelectorAll('nav a');
    links.forEach(link => link.classList.remove('active'));
    linkElement.classList.add('active');
}

function toggleMenu() {
    const nav = document.getElementById('main-nav');
    nav.classList.toggle('show');
}