// script.js

document.getElementById('menuIcon').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    var mainContent = document.getElementById('main-content');
    if (menu.classList.contains('open')) {
        menu.classList.remove('open');
        mainContent.classList.remove('menu-open');
    } else {
        menu.classList.add('open');
        mainContent.classList.add('menu-open');
    }
});

document.querySelectorAll('.menu a').forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        var sectionId = this.getAttribute('data-section');
        var section = document.getElementById(sectionId);

        // Verificar si la sección ya está activa
        if (section.classList.contains('active')) {
            // Si ya está activa, ocultar el menú y salir de la función
            var menu = document.getElementById('menu');
            menu.classList.remove('open');
            var mainContent = document.getElementById('main-content');
            mainContent.classList.remove('menu-open');
            return;
        }

        // Ocultar todas las secciones
        document.querySelectorAll('.section').forEach(function(section) {
            section.style.display = 'none';
            section.classList.remove('active');
        });

        // Mostrar la sección correspondiente
        section.style.display = 'block';
        section.classList.add('active');

        // Ocultar el menú después de hacer clic en una opción
        var menu = document.getElementById('menu');
        menu.classList.remove('open');
        var mainContent = document.getElementById('main-content');
        mainContent.classList.remove('menu-open');
    });
});

// Mostrar la sección de perfil por defecto
document.getElementById('perfil').style.display = 'block';
document.getElementById('perfil').classList.add('active');

// Manejar el envío del formulario de registro
document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Validaciones simples
    if (nombre === '' || email === '' || password === '') {
        alert('Todos los campos son obligatorios.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Por favor, introduce un correo electrónico válido.');
        return;
    }

    // Si pasa las validaciones, mostrar mensaje de éxito
    alert('¡Registro exitoso!');

    // Aquí puedes agregar código para enviar los datos al servidor
});

// Manejar el envío del formulario de inicio de sesión
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    var email = document.getElementById('loginEmail').value;
    var password = document.getElementById('loginPassword').value;

    // Validaciones simples
    if (email === '' || password === '') {
        alert('Todos los campos son obligatorios.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Por favor, introduce un correo electrónico válido.');
        return;
    }

    // Si pasa las validaciones, mostrar mensaje de éxito
    alert('¡Inicio de sesión exitoso!');

    // Aquí puedes agregar código para enviar los datos al servidor
});

// Manejar el envío del formulario de edición de perfil
document.getElementById('editProfileForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    var fullName = document.getElementById('editFullName').value;
    var username = document.getElementById('editUsername').value;
    var password = document.getElementById('editPassword').value;
    var age = document.getElementById('editAge').value;
    var city = document.getElementById('editCity').value;
    var country = document.getElementById('editCountry').value;
    var bio = document.getElementById('editBio').value;

    // Validaciones simples
    if (fullName === '' || username === '' || password === '') {
        alert('Todos los campos son obligatorios.');
        return;
    }

    // Si pasa las validaciones, mostrar mensaje de éxito
    alert('¡Perfil actualizado!');

    // Aquí puedes agregar código para enviar los datos al servidor
});

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}