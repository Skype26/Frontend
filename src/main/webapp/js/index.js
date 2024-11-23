function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.querySelector('.input-icon-eye');

    if (passwordInput.classList.contains('masked')) {
        // Muestra el texto en claro
        passwordInput.classList.remove('masked');
        passwordInput.classList.add('unmasked');
        eyeIcon.src = 'img/visible.png'; // Cambia al ícono de ojo abierto
    } else {
        // Oculta el texto como puntos
        passwordInput.classList.remove('unmasked');
        passwordInput.classList.add('masked');
        eyeIcon.src = 'img/ojo.png'; // Cambia al ícono de ojo cerrado
    }
}

// Asegura que el campo esté siempre enmascarado al escribir
document.getElementById('password').addEventListener('input', function () {
    const passwordInput = document.getElementById('password');
    if (!passwordInput.classList.contains('unmasked')) {
        passwordInput.classList.add('masked'); // Aplica enmascaramiento mientras escribe
    }
});

// Función para validar el formulario
function validateForm() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!username || !password) {
        alert('Por favor, rellena ambos campos: Usuario y Contraseña. ' + password);
        return false; // Detiene el envío del formulario
    }
    return true; // Permite enviar el formulario si todo está bien
}

