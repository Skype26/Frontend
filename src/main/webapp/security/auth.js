const authModule = (() => {
    const apiUrl = './data.json'; 
    const recaptchaSiteKey = '6LdZP4IqAAAAAG2rlzTEZU_t4D6Y3xdTrH9XR89c'; 

    const handleLoginForm = () => {
        const loginForm = document.getElementById('loginForm');

        if (!loginForm) {
            console.error('Formulario de inicio de sesión no encontrado.');
            return;
        }

        loginForm.addEventListener('submit', (event) => {
            event.preventDefault(); 
            const user = document.getElementById('user').value;
            const pass = document.getElementById('pass').value;
            grecaptcha.ready(() => {
                grecaptcha.execute(recaptchaSiteKey, { action: 'login' }).then(() => {
                    fetch(apiUrl)
                        .then(response => {
                            if (!response.ok) {
                                throw new Error('Error al cargar el archivo JSON');
                            }
                            return response.json();
                        })
                        .then(usersDB => {
                            const isValidUser = usersDB.some(u => u.username === user && u.password === pass);
                            if (isValidUser) {
                                alert('Inicio de sesión exitoso');
                                window.location.href = 'principal1.html';
                            } else {
                                alert('Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.');
                            }
                        })
                        .catch(error => {
                            console.error('Error al cargar o procesar el archivo JSON:', error);
                            alert('Hubo un problema al procesar tu solicitud. Inténtalo más tarde.');
                        });
                });
            });
        });
    };

    return {
        init: handleLoginForm
    };
})();

export default authModule;
