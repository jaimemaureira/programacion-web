
        document.getElementById('inputname').addEventListener('input', function(event) {                         // VALIDACION CAMPO NOMBRE
            var name = event.target.value.trim(); // Eliminar espacios en blanco al principio y al final
            var namePattern = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/; // Expresión regular para validar nombres

            var nameError = document.getElementById('nameError');

            if (!namePattern.test(name)) { // Si el nombre no coincide con el patrón
                nameError.style.display = 'inline'; // Mostrar el mensaje de error
            } else {
                nameError.style.display = 'none'; // Ocultar el mensaje de error si el nombre es válido
            }
        });
    

    
        document.getElementById('inputAp').addEventListener('input', function(event) {                                 // VALIDACION CAMPO APELLIDO
            var apellido = event.target.value.trim(); // Eliminar espacios en blanco al principio y al final
            var apellidoPattern = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/; // Expresión regular para validar apellidos

            var apellError = document.getElementById('apellError');

            if (!apellidoPattern.test(apellido)) { // Si el apellido no coincide con el patrón
                apellError.style.display = 'inline'; // Mostrar el mensaje de error
            } else {
                apellError.style.display = 'none'; // Ocultar el mensaje de error si el apellido es válido
            }
        });
    
        document.getElementById('inputRut').addEventListener('input', function(event) {                                                 // cambio VALIDACIÓN RUT ******************
            var rut = event.target.value.trim(); // Eliminar espacios en blanco al principio y al final
            var rutPattern = /^[0-9]{1,2}\.?[0-9]{3}\.?[0-9]{3}-?[0-9kK]{1}$/; // Expresión regular para validar RUT

            var rutError = document.getElementById('rutError');

            if (!rutPattern.test(rut)) { // Si el RUT no coincide con el patrón
                rutError.style.display = 'inline'; // Mostrar el mensaje de error
            } else {
                rutError.style.display = 'none'; // Ocultar el mensaje de error si el RUT es válido
            }
        });

            document.getElementById('inputNac').addEventListener('blur', function(event) {                                                   // validacion fecha de nacimiento
            var fechaNacimiento = event.target.value.trim(); // Eliminar espacios en blanco al principio y al final
            var errorNac = document.getElementById('errorNac');
    
            // Verificar si la fecha tiene el formato correcto (DD/MM/AAAA)
            var fechaPartes = fechaNacimiento.split('/');
            if (fechaPartes.length !== 3) {
                errorNac.style.display = 'inline';
                return;
            }
    
            var dia = parseInt(fechaPartes[0], 10);
            var mes = parseInt(fechaPartes[1], 10);
            var anio = parseInt(fechaPartes[2], 10);
    
            // Verificar si el día está entre 1 y 31
            if (dia < 1 || dia > 31) {
                errorNac.style.display = 'inline';
                return;
            }
    
            // Verificar si el mes está entre 1 y 12
            if (mes < 1 || mes > 12) {
                errorNac.style.display = 'inline';
                return;
            }
    
            // Obtener el año actual
            var anioActual = new Date().getFullYear();
    
            // Verificar si el año está entre 1900 y el año actual
            if (anio < 1900 || anio > anioActual) {
                errorNac.style.display = 'inline';
                return;
            }
    
            // Si la fecha pasa todas las validaciones, ocultar el mensaje de error
            errorNac.style.display = 'none';
        });
                                                                                                                 //               VALIDACION RUT  

        
        //Validación del dígito verificador del RUT
        //rut = rut.replace('.', '').replace('-', ''); // Eliminar puntos y guion del RUT
        //var rutDigits = rut.slice(0, -1); // Obtener los dígitos del RUT
        //var dv = rut.slice(-1).toUpperCase(); // Obtener el dígito verificador del RUT (DV)
        
        //Cálculo del dígito verificador esperado
        //var total = 0;
        //var multiplier = 2;
        //for (var i = rutDigits.length - 1; i >= 0; i--) {
            //total += parseInt(rutDigits.charAt(i)) * multiplier;
            //multiplier = multiplier === 7 ? 2 : multiplier + 1;
        //}
        //var expectedDV = 11 - (total % 11);
        //expectedDV = expectedDV === 11 ? 0 : expectedDV === 10 ? 'K' : expectedDV.toString();
        
         //Comparar el dígito verificador ingresado con el dígito verificador esperado
        //if (dv !== expectedDV) {
           // alert('El RUT ingresado no es válido.');
           // return;
        //}
        
        // Si llegamos hasta aquí, el RUT es válido
        //alert('El RUT ingresado es válido.');
    //});

           document.getElementById('inputDireccion').addEventListener('blur', function(event) {                                             // VALIDACIÓN CAMPO DIRECCION
            var direccion = event.target.value.trim(); // Eliminar espacios en blanco al principio y al final

            var direccionError = document.getElementById('direccionError');

            if (direccion.length < 3) { // Si la longitud de la dirección es menor que 3
                direccionError.style.display = 'inline'; // Mostrar el mensaje de error
            } else {
                direccionError.style.display = 'none'; // Ocultar el mensaje de error si la dirección tiene al menos 3 caracteres
            }
        });

        document.getElementById('inputCiudad').addEventListener('blur', function(event) {                                             // VALIDACIÓN CAMPO CIUDAD
        var ciudad = event.target.value.trim(); // Eliminar espacios en blanco al principio y al final

        var ciudadError = document.getElementById('ciudadError');
        var regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/; // Expresión regular para validar caracteres alfabéticos

        if (ciudad.length < 3 || !regex.test(ciudad)) { // Si la longitud de la ciudad es menor que 3
        ciudadError.style.display = 'inline'; // Mostrar el mensaje de error
        } else {
        ciudadError.style.display = 'none'; // Ocultar el mensaje de error si la Ciudad tiene al 3 un caracteres
    }
});

        document.getElementById('inputComuna').addEventListener('blur', function(event) {                                             // VALIDACIÓN CAMPO COMUNA
    var comuna = event.target.value.trim(); // Eliminar espacios en blanco al principio y al final

    var comunaError = document.getElementById('comunaError');
    var regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/; // Expresión regular para validar caracteres alfabéticos


    if (comuna.length < 3 || !regex.test(comuna)) { // Si la longitud de la comuna es menor que 3 o caracteres no permitidos
    comunaError.style.display = 'inline'; // Mostrar el mensaje de error
    } else {
    comunaError.style.display = 'none'; // Ocultar el mensaje de error si la comuna tiene al 3 un caracteres
}
});

        document.getElementById('inputPhone').addEventListener('input', function(event) { // Se cambió 'inputphone' por 'inputPhone'        // VALIDACION TELEFONO 1
            var phoneNumber = event.target.value;
            var phonePattern = /^\+569[0-9]{8}$/; // Expresión regular para el formato del número de teléfono
            var phoneError = document.getElementById('phoneError');
    
            if (!phonePattern.test(phoneNumber)) { // Si el número de teléfono no coincide con el patrón
                phoneError.style.display = 'inline'; // Mostrar el mensaje de error
            } else {
                phoneError.style.display = 'none'; // Ocultar el mensaje de error si el número es válido
            }
        });
    

    
        document.getElementById('inputphone2').addEventListener('input', function(event) {                                  //      ACA EMPIEZA LA VALIDACIÓN DEL CAMPO NÚMERO DE TELEFONO 2, CON JS
            var phoneNumber = event.target.value;
            var phonePattern = /^\+569[0-9]{8}$/; // Expresión regular para el formato del número de teléfono
            var phoneError = document.getElementById('phone2Error');
    
            if (!phonePattern.test(phoneNumber)) { // Si el número de teléfono no coincide con el patrón
                phoneError.style.display = 'inline'; // Mostrar el mensaje de error
            } else {
                phoneError.style.display = 'none'; // Ocultar el mensaje de error si el número es válido
            }
        });

        document.getElementById('inputMail').addEventListener('blur', function(event) {                               // VALIDACIÓN MAIL
            var mail = event.target.value.trim(); // Eliminar espacios en blanco al principio y al final
            var mailError = document.getElementById('mailError');
        
            // Validación adicional con expresión regular
            var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar correo electrónico
        
            if (!regex.test(mail)) { // Si el correo electrónico no coincide con el patrón
                mailError.style.display = 'inline'; // Mostrar el mensaje de error
            } else {
                mailError.style.display = 'none'; // Ocultar el mensaje de error si el correo electrónico es válido
            }
        });
