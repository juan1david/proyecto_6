// Importa el módulo 'colors' para dar formato de colores a la consola.
const colors = require('colors');

// Imprime un encabezado con formato de colores en la consola.
console.log('************************************'.blue);
console.log('*'.blue  + '         funcion signo            '.red  +  '*'.blue);
console.log('************************************'.blue);

// Define una función llamada 'signo' que devuelve el tipo de número (positivo, negativo o cero).
function signo(numero) {
    if (numero > 0) {
        return "numero positivo";
    } else if (numero < 0) {
        return "numero negativo";
    } else {
        return "cero";
    }
}

// Llama a la función 'signo' con el argumento 5 e imprime el resultado en la consola.
console.log(signo(5)); 

// Imprime un encabezado para la siguiente función con formato de colores.
console.log('************************************'.blue);
console.log('*'.blue  + '     funcion buscar caracter      '.red  +  '*'.blue);
console.log('************************************'.blue);


// Define una función llamada 'encontroCaracter' que verifica si un caracter está en un array predefinido.
function encontroCaracter(caracter) {
    const caracteres = ["A", "B", "C", "D", "E"];
    if (caracteres.includes(caracter)) {
        return "acierto";
    } else {
        return "desacierto";
    }
}

// Llama a la función 'encontroCaracter' con el argumento "B" e imprime el resultado en la consola.
console.log(encontroCaracter("B")); 

// Imprime un encabezado para la siguiente función con formato de colores.
console.log('************************************'.blue);
console.log('*'.blue  + '     funcion buscar bebida        '.red  +  '*'.blue);
console.log('************************************'.blue);

// Define una función llamada 'busquedaBebida' que utiliza un switch para determinar la acción en función de la bebida.
function busquedaBebida(bebida) {
    switch (bebida) {
        case "vino":
        case "cerveza":
        case "gaseosa":
        case "agua":
            return "Ir a la barra.";
        default:
            return "Ir a la tienda.";
    }
}

// Llama a la función 'busquedaBebida' con el argumento "cerveza" e imprime el resultado en la consola.
console.log(busquedaBebida("cerveza")); 

// Imprime un encabezado para la siguiente función con formato de colores.
console.log('************************************'.blue);
console.log('*'.blue  + '     funcion medio transporte     '.red  +  '*'.blue);
console.log('************************************'.blue);

// Define una función llamada 'medioTransporte' que utiliza un switch para dar recomendaciones según el medio de transporte.
function medioTransporte(medio) {
    switch (medio) {
        case "avión":
        case "flota":
            return "Recuerda tener dinero para el pasaje.";
        case "carro":
        case "bicicleta":
            return "Recuerda llevar la ropa apropiada.";
        default:
            return "Medio de transporte no válido.";
    }
}

// Llama a la función 'medioTransporte' con el argumento "avión" e imprime el resultado en la consola.
console.log(medioTransporte("avión")); 

// Imprime un encabezado para la siguiente función con formato de colores.
console.log('************************************'.blue);
console.log('*'.blue  + '     funcion factura producto     '.red  +  '*'.blue);
console.log('************************************'.blue);

// Define una función llamada 'facturaProducto' que calcula el precio total con descuento de un producto.
function facturaProducto(cantidad, precio, descuento) {
    const precioTotal = cantidad * precio;
    const precioConDescuento = precioTotal - (precioTotal * (descuento / 100));
    return precioConDescuento;
}

// Llama a la función 'facturaProducto' con los argumentos 3, 100, 10 e imprime el resultado en la consola.
console.log(facturaProducto(3, 100, 10)); 

// Imprime un encabezado para la siguiente función con formato de colores.
console.log('************************************'.blue);
console.log('*'.blue  + '    funcion recomendar bebida     '.red  +  '*'.blue);
console.log('************************************'.blue);

// Define una función llamada 'bebidaComida' que utiliza un switch para dar recomendaciones de bebida según el menú.
function bebidaComida(menu) {
    switch (menu) {
        case "carne":
            return "Menu carne, Recomendación: vino tinto.";
        case "pescado":
            return "Menu pescado, Recomendación: vino blanco.";
        case "verdura":
            return "Menu verdura, Recomendación: agua.";
        default:
            return "Recomendación: agua.";
    }
}

// Llama a la función 'bebidaComida' con el argumento "carne" e imprime el resultado en la consola.
console.log(bebidaComida("carne")); 

// Imprime un encabezado para la siguiente función con formato de colores.
console.log('************************************'.blue);
console.log('*'.blue  + '        funcion sala juegos       '.red  +  '*'.blue);
console.log('************************************'.blue);

// Define una función llamada 'salaJuegos' que determina el acceso a los juegos según el monto de pago.
function salaJuegos(pago) {
    if (pago >= 4000) {
        return "Acceso a todos los juegos.";
    } else if (pago >= 3000) {
        return "Acceso a Consolas, Juegos 2D y Juegos 3D.";
    } else if (pago >= 2000) {
        return "Acceso a Consolas y Juegos 2D.";
    } else if (pago >= 1000) {
        return "Acceso a Consolas.";
    } else {
        return "Ingresa más dinero para acceder a los juegos.";
    }
}

// Llama a la función 'salaJuegos' con el argumento 2500 e imprime el resultado en la consola.
console.log(salaJuegos(2500)); 

// Imprime un encabezado para la siguiente función con formato de colores.
console.log('************************************'.blue);
console.log('*'.blue  + '      funcion contar numero       '.red  +  '*'.blue);
console.log('************************************'.blue);


// Define una función llamada 'contarNumero' que imprime números del 1 al número proporcionado.
function contarNumero(numero) {
    for (let i = 1; i <= numero; i++) {
        console.log(i);
    }
}

// Llama a la función 'contarNumero' con el argumento 10 e imprime los números en la consola.
contarNumero(10);

// Imprime un encabezado para la siguiente función con formato de colores.
console.log('************************************'.blue);
console.log('*'.blue  + '      funcion numeros pares       '.red  +  '*'.blue);
console.log('************************************'.blue);

// Define una función llamada 'numerosPares' que imprime números pares hasta el número proporcionado.
function numerosPares(numero) {
    for (let i = 2; i <= numero; i += 2) {
        console.log(i);
    }
}

// Llama a la función 'numerosPares' con el argumento 10 e imprime los números pares en la consola.
numerosPares(10); 

// Imprime un encabezado para la siguiente función con formato de colores.
console.log('************************************'.blue);
console.log('*'.blue  + '    funcion tabla multiplicar     '.red  +  '*'.blue);
console.log('************************************'.blue);

// Define una función llamada 'tablaMultiplicar' que imprime la tabla de multiplicar hasta 10 para el número proporcionado.
function tablaMultiplicar(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

// Llama a la función 'tablaMultiplicar' con el argumento 9 e imprime la tabla en la consola.
tablaMultiplicar(9); 

// Imprime un encabezado para la siguiente función con formato de colores.
console.log('************************************'.blue);
console.log('*'.blue  + '    funcion repetir caracter      '.red  +  '*'.blue);
console.log('************************************'.blue);

// Define una función llamada 'repetirCaracter' que devuelve un string repetido un número de veces.
function repetirCaracter(caracter, numero) {
    let resultado = '';
    for (let i = 0; i < numero; i++) {
        resultado += caracter;
    }
    return resultado;
}

// Llama a la función 'repetirCaracter' con los argumentos "*" y 8 e imprime el resultado en la consola.
console.log(repetirCaracter("*", 8)); 

// Imprime un encabezado para la siguiente función con formato de colores.
console.log('************************************'.blue);
console.log('*'.blue  + '       funcion contador base      '.red  +  '*'.blue);
console.log('************************************'.blue);

// Define una función llamada 'contadorBase' que imprime números en base a una base dada.
function contadorBase(base) {
    if (base < 2 || base > 10) {
        console.log("Base fuera de rango. Debe estar entre 2 y 10.");
        return;
    }

    for (let i = 0; i < base; i++) {
        console.log(i.toString(base));
    }
}

// Llama a la función 'contadorBase' con el argumento 9 e imprime los números en la consola en base 9.
contadorBase(9);

// Imprime un encabezado para la siguiente función con formato de colores.
console.log('************************************'.blue);
console.log('*'.blue  + '   funcion MinimoMaximoPromedio   '.red  +  '*'.blue);
console.log('************************************'.blue);

// Define una función llamada 'minimoMaximoPromedio' que calcula el mínimo, máximo y promedio de un arreglo de números.
function minimoMaximoPromedio(numeros) {
    if (numeros.length === 0) {
        return "El arreglo está vacío.";
    }

    let minimo = numeros[0];
    let maximo = numeros[0];
    let suma = 0;

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] < minimo) {
            minimo = numeros[i];
        }
        if (numeros[i] > maximo) {
            maximo = numeros[i];
        }
        suma += numeros[i];
    }

    const promedio = suma / numeros.length;
    return `Mínimo: ${minimo}, Máximo: ${maximo}, Promedio: ${promedio}`;
}

// Llama a la función 'minimoMaximoPromedio' con el argumento [5, 10, 2, 8, 15] e imprime el resultado en la consola.
console.log(minimoMaximoPromedio([5, 10, 2, 8, 15]));

// Imprime un encabezado para la siguiente función con formato de colores.
console.log('************************************'.blue);
console.log('*'.blue  + '    funcion contarNumerosPares    '.red  +  '*'.blue);
console.log('************************************'.blue);

// Define una función llamada 'contarNumerosPares' que cuenta la cantidad de números pares y los muestra.
function contarNumerosPares(numeros) {
    let cantidadPares = 0;
    let numerosPares = [];

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            cantidadPares++;
            numerosPares.push(numeros[i]);
        }
    }

    // Devuelve una cadena con la cantidad de números pares y los números pares.
    return `Cantidad de números pares: ${cantidadPares}, Números pares: [${numerosPares.join(', ')}]`;
}

// Llama a la función 'contarNumerosPares' con el argumento [2, 4, 7, 9, 10, 12] e imprime el resultado en la consola.
console.log(contarNumerosPares([2, 4, 7, 9, 10, 12])); 

// Imprime un encabezado para la siguiente función con formato de colores.
console.log('************************************'.blue);
console.log('*'.blue  + '        funcion clave acceso      '.red  +  '*'.blue);
console.log('************************************'.blue);

// Importa el módulo 'readline' para la entrada y salida interactiva en la consola.
const readline = require('readline');

// Define un array de claves de acceso.
const clavesAcceso = ['p123', 'p321', 'pepito'];
let intentos = 0;

// Crea una interfaz de lectura para la entrada de contraseña.
const contraseña = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Define una función llamada 'verificarAcceso' que valida la clave de acceso ingresada.
function verificarAcceso(clave) {
    // Verifica si la clave está en el array de claves de acceso.
    if (clavesAcceso.includes(clave)) {
        console.log("Acceso permitido. ¡Bienvenido!");
        // Cierra la interfaz de lectura de contraseña.
        contraseña.close();
    } else {
        // Incrementa el contador de intentos.
        intentos++;

        // Comprueba si hay más intentos disponibles.
        if (intentos < 3) {
            console.log(`Clave incorrecta. Intento ${intentos} de 3. Inténtalo nuevamente.`);
            // Solicita la clave nuevamente y llama a la función 'verificarAcceso'.
            contraseña.question("Ingresa la clave de acceso: ", verificarAcceso);
        } else {
            // Si se supera el límite de intentos, muestra un mensaje y cierra la interfaz de lectura.
            console.log("Intruso detectado. Alerta de seguridad activada.");
            contraseña.close();
        }
    }
}

// Inicia el proceso solicitando la clave de acceso y llamando a la función 'verificarAcceso'.
contraseña.question("Ingresa la clave de acceso: ", verificarAcceso);
