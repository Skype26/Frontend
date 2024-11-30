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
