// Funcion para poner las notas 
function obtenerNotas() {
    const notas = [6, 8, 9, 2, 5, 10];
    return notas;
}

// función para la suma de las notas
function sumarNotas(notas) {
    let suma = 0;
    // debido que aun no se pasan ciclos for, se hace la suma de forma manual
    suma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4] + notas[5];
    console.log("La suma de los valores es: ", suma);
    return suma;
}

// Función principal
function main() {
    let notas = obtenerNotas();
    let suma = sumarNotas(notas);
}

// Ejecutar la función principal
main();
