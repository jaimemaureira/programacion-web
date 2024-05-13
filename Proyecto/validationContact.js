document.getElementById('inputname2').addEventListener('input', function(event) {                         // VALIDACION CAMPO NOMBRE2, formulario contacto
    var name2 = event.target.value.trim(); // Eliminar espacios en blanco al principio y al final
    var namePattern2 = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/; // Expresión regular para validar nombres
    
    var nameError2 = document.getElementById('nameError2');
    
    if (!namePattern2.test(name2)) { // Si el nombre no coincide con el patrón
        nameError2.style.display = 'inline'; // Mostrar el mensaje de error
    } else {
        nameError2.style.display = 'none'; // Ocultar el mensaje de error si el nombre es válido
    }
});


