const formulario = document.querySelector('form');

formulario.addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const fechaNacimiento = document.getElementById('fecha-nacimiento').value;
    const nombre = document.getElementById('nombre').value;
    
    if (password !== confirmPassword) {
        alert('no me coinciden las contras bro');
        return;
    }
    
    if (password.length < 8) {
        alert('Tu contra tiene q ser más larga pa');
        return;
    }
    
    if (fechaNacimiento) {
        const hoy = new Date();
        const nacimiento = new Date(fechaNacimiento);
        let edad = hoy.getFullYear() - nacimiento.getFullYear();
        const mes = hoy.getMonth() - nacimiento.getMonth();
        
        if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
            edad--;
        }
        
        if (edad < 13) {
            alert('Sos muy pibe para ser una vieja loca');
            return;
        }
    }
    
    alert(`Bienvenido ${nombre} a pipi y los inconsientes`);
});
