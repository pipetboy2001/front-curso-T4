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

// función para el cálculo del promedio
function calcularPromedio(suma, notas) {
    let promedio = 0;
    promedio = suma / notas.length;
    console.log("El promedio de los valores es: ", promedio);
    return promedio;
}

// Función principal
function main() {
    let notas = obtenerNotas();
    let suma = sumarNotas(notas);
    let promedio = calcularPromedio(suma, notas);

    alert("El promedio de los valores [6, 8, 9, 2, 5, 10] es: " + promedio);
}

// Ejecutar la función principal
main();
