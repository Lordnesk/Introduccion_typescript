/* // Ejemplo de TypeScript con buenas prácticas

function add(a: number, b: number): number {
    return a + b; // El compilador de TypeScript vereficará que a y b sean números
}

let age: number = 30; // El tipo de dato es consistente, evitando errores en cálculos posteriores

console.log(add(10, 20)); // Resultado esperado: 30
// console.log(add(10, "20")); // Error de compilación: Argumento de tipo 'string' no es asignable a parámetro de tipo 'number'
// console.log(add("10", "20")); // Error de compilación: Argumento de tipo 'string' no es asignable a parámetro de tipo 'number' */
function rotarMatriz90Grados(matriz) {
    var n = matriz.length;
    // Crear una nueva matriz para el resultado
    var matrizRotada = Array.from({ length: n }, function () { return Array(n).fill(0); });
    // Rotar la matriz 90 grados en sentido horario
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            matrizRotada[j][n - 1 - i] = matriz[i][j];
        }
    }
    return matrizRotada;
}
// Ejemplo de uso
var matrizOriginal = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
var matrizRotada = rotarMatriz90Grados(matrizOriginal);
console.log(matrizRotada);
/*
Imprime:
[
  [7, 4, 1],
  [8, 5, 2],
  [9, 6, 3]
]
*/
