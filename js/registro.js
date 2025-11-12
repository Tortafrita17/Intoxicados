const formulario = document.querySelector('form');

formulario.addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const fechaNacimiento = document.getElementById('fecha-nacimiento').value;
    const nombre = document.getElementById('nombre').value;
    
    // Contraseña igual
    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden. Por favor, verificá que sean iguales.');
        return;
    }
    
    // Longitud de contra
    if (password.length < 8) {
        alert('La contraseña debe tener al menos 8 caracteres.');
        return;
    }
    
    // Edad mayor a 13
    if (fechaNacimiento) {
        const hoy = new Date();
        const nacimiento = new Date(fechaNacimiento);
        let edad = hoy.getFullYear() - nacimiento.getFullYear();
        const mes = hoy.getMonth() - nacimiento.getMonth();
        
        if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
            edad--;
        }
        
        if (edad < 13) {
            alert('Debes tener al menos 13 años para registrarte.');
            return;
        }
    }
    
    alert(`Bienvenido ${nombre} a pipi y los inconsientes`);
});
