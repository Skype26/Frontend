document.addEventListener('DOMContentLoaded', () => {
    const userData = sessionStorage.getItem('userData');
    if (userData) {
        const user = JSON.parse(userData);
        document.getElementById('user-name').innerHTML = `<strong>${user.nombre}</strong>`;
    }
});

function logout() {
    sessionStorage.clear();
    window.location.href = 'index.html';
}
//Collapse
function toggleCollapse() {
    const collapseContent = document.getElementById('collapse-content');
    //collapseContent.classList.toggle("hidden");
    const iconRight = document.querySelector('.icon-right');

    // Alterna la clase "open" en el contenido
    collapseContent.classList.toggle('open');

    // Alterna la clase "rotated" en el ícono derecho
    iconRight.classList.toggle('rotated');
}