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

                                                           
document.getElementById('inputAp').addEventListener('input', function(event) {                         // VALIDACION CAMPO APELLIDO2, formulario contacto
    var Apellido2 = event.target.value.trim(); // Eliminar espacios en blanco al principio y al final
    var ApPattern2 = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/; // Expresión regular para validar caracteres
    
    var apellidoError = document.getElementById('apellidoError');
    
    if (!ApPattern2.test(Apellido2)) { // Si el apellido no coincide con el patrón
        apellidoError.style.display = 'inline'; // Mostrar el mensaje de error
    } else {
        apellidoError.style.display = 'none'; // Ocultar el mensaje de error si el apellido es válido
    }
});

document.getElementById('inputDireccion').addEventListener('input', function(event) {                         // VALIDACION CAMPO DIRECCIÓN, formulario contacto
    var inputDireccion = event.target.value.trim(); // Eliminar espacios en blanco al principio y al final
    var direccion2 = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/; // Expresión regular para validar caracteres
    
    var direccionError = document.getElementById('direccionError');
    
    if (!direccion2.test(inputDireccion)) { // Si el direcciión no coincide con el patrón
        direccionError.style.display = 'inline'; // Mostrar el mensaje de error
    } else {
        direccionError.style.display = 'none'; // Ocultar el mensaje de error si la direccion es válido
    }
});

document.getElementById('inputCuidad').addEventListener('input', function(event) {                         // VALIDACION CAMPO CIUDAD, formulario contacto
    var inputCuidad = event.target.value.trim(); // Eliminar espacios en blanco al principio y al final
    var ciudad2 = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/; // Expresión regular para validar caracteres
    
    var ciudadError = document.getElementById('ciudadError');
    
    if (!ciudad2.test(inputCuidad)) { // Si la CIUDAD no coincide con el patrón
        ciudadError.style.display = 'inline'; // Mostrar el mensaje de error
    } else {
        ciudadError.style.display = 'none'; // Ocultar el mensaje de error si la CIUDAD es válido
    }
});
