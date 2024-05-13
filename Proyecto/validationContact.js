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

document.getElementById('inputComuna').addEventListener('input', function(event) {                         // VALIDACION CAMPO COMUNA, formulario contacto
    var inputComuna = event.target.value.trim(); // Eliminar espacios en blanco al principio y al final
    var comuna2 = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/; // Expresión regular para validar caracteres letras
    
    var comunaError = document.getElementById('comunaError');
    
    if (!comuna2.test(inputComuna)) { // Si la comuna no coincide con el patrón
        comunaError.style.display = 'inline'; // Mostrar el mensaje de error
    } else {
        comunaError.style.display = 'none'; // Ocultar el mensaje de error si la comuna es válido
    }
});

document.getElementById('inputPhone1').addEventListener('input', function(event) {                                        // VALIDACION TELEFONO 1, FORM. CONTACT
    var inputPhone1 = event.target.value;
    var phonePattern = /^\+569[0-9]{8}$/; // Expresión regular para el formato del número de teléfono
    var telefonoError = document.getElementById('telefonoError');

    if (!phonePattern.test(inputPhone1)) { // Si el número de teléfono no coincide con el patrón
        telefonoError.style.display = 'inline'; // Mostrar el mensaje de error
    } else {
        telefonoError.style.display = 'none'; // Ocultar el mensaje de error si el número es válido
    }
}); 

document.getElementById('inputPhone2').addEventListener('input', function(event) { // Se cambió 'inputphone' por 'inputPhone'        // VALIDACION TELEFONO 2, FORM. CONTACT
    var inputPhone2 = event.target.value;
    var phonePattern = /^\+569[0-9]{8}$/; // Expresión regular para el formato del número de teléfono
    var telefono2Error = document.getElementById('telefono2Error');

    if (!phonePattern.test(inputPhone2)) { // Si el número de teléfono no coincide con el patrón
        telefono2Error.style.display = 'inline'; // Mostrar el mensaje de error
    } else {
        telefono2Error.style.display = 'none'; // Ocultar el mensaje de error si el número es válido
    }
});

document.getElementById('inputMail1').addEventListener('blur', function(event) {                               // VALIDACIÓN MAIL
    var mail = event.target.value.trim(); // Eliminar espacios en blanco al principio y al final
    var mail1Error = document.getElementById('mail1Error');

    // Validación adicional con expresión regular
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar correo electrónico

    if (!regex.test(mail)) { // Si el correo electrónico no coincide con el patrón
        mail1Error.style.display = 'inline'; // Mostrar el mensaje de error
    } else {
        mail1Error.style.display = 'none'; // Ocultar el mensaje de error si el correo electrónico es válido
    }
});

document.getElementById('comentarios').addEventListener('input', function(event) {                                     //   VALIDACIÓN MAIL
    var comentarios = event.target.value.trim(); // Eliminar espacios en blanco al principio y al final
    var comentariosError = document.getElementById('comentariosError');

    // Validación adicional con expresión regular
    var regex = /[a-zA-Z]{3,}/; // Expresión regular para validar al menos 3 letras

    if (!regex.test(comentarios)) { // Si los comentarios no cumplen con el patrón
        comentariosError.style.display = 'inline'; // Mostrar el mensaje de error
    } else {
        comentariosError.style.display = 'none'; // Ocultar el mensaje de error si los comentarios son válidos
    }
});

