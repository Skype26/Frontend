// Función para alternar la visibilidad de la contraseña
function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.querySelector('.input-icon-eye');

    if (passwordInput.classList.contains('masked')) {
        showPassword(passwordInput, eyeIcon);
    } else {
        hidePassword(passwordInput, eyeIcon);
    }
}

// Función para mostrar la contraseña
function showPassword(passwordInput, eyeIcon) {
    passwordInput.classList.remove('masked');
    passwordInput.classList.add('unmasked');
    eyeIcon.src = 'img/visible.png';
}

// Función para ocultar la contraseña
function hidePassword(passwordInput, eyeIcon) {
    passwordInput.classList.remove('unmasked');
    passwordInput.classList.add('masked');
    eyeIcon.src = 'img/ojo.png';
}

// Función para garantizar que el campo esté siempre enmascarado al escribir
function ensureMaskedOnInput() {
    const passwordInput = document.getElementById('password');
    if (!passwordInput.classList.contains('unmasked')) {
        passwordInput.classList.add('masked');
    }
}

// Función para validar los campos del formulario
function validateForm() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!username || !password) {
        alert('Por favor, rellena ambos campos: Usuario y Contraseña.');
        return false;
    }
    return true;
}

// Función para manejar el envío del formulario con reCAPTCHA
function handleFormSubmit(event) {
    event.preventDefault();

    grecaptcha.ready(function () {
        grecaptcha.execute('6LdZP4IqAAAAAG2rlzTEZU_t4D6Y3xdTrH9XR89c', { action: 'login' }).then(function (token) {
            processForm(token);
        });
    });
}

// Función para procesar el formulario después de obtener el token reCAPTCHA
async function processForm(token) {
    document.getElementById('g-recaptcha-response').value = token;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    try {
        const response = await fetch('http://localhost:9090/citas-web-api/api/oauth/login', {
            method: 'POST',
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json',
                'User-Agent': 'insomnia/10.1.1'
            },
            body: JSON.stringify({
                usuario: username,
                password: password
            })
        });
        if (response.ok) {
            const data = await response.json();

            const userData = {
                usuario: data.usuario,
                rol: data.rol,
                nombre: data.nombre
            };
            sessionStorage.setItem('userData', JSON.stringify(userData));

            document.getElementById('username').value = "";
            document.getElementById('password').value = "";
            window.location.href = 'principal1.html';

        } else {
            throw new Error(`Error en la solicitud: ${response.status}`);
        }
    } catch (error) {
        console.error('Error al consumir la API:', error);
        alert('Los datos ingresados son incorrectos. Por favor, inténtalo de nuevo.');
    }
}

// Eventos
document.getElementById('password').addEventListener('input', ensureMaskedOnInput); // Garantiza el enmascaramiento
document.getElementById('loginForm').addEventListener('submit', handleFormSubmit); // Maneja el envío del formulario