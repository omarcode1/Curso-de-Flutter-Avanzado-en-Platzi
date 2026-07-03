/**
 * Programación I — Laboratorio de Lógica de Programación
 * Ejercicios L1 a L15
 *
 * Ejecutar: node ejercicios-logica-programacion.js
 */

// =============================================================================
// NIVEL 1 — Fundamentos con bucles
// =============================================================================

// L1 — Suma acumulada del 1 al N
//
// ENUNCIADO
// Escribe un programa que reciba un número entero positivo n e imprima la suma
// 1 + 2 + 3 + ... + n.
//
// Ejemplo: n = 5 → 15  (porque 1 + 2 + 3 + 4 + 5 = 15)
//
// ---------------------------------------------------------------------------
// ¿QUÉ PROBLEMA RESOLVEMOS?
// ---------------------------------------------------------------------------
// Imagina que tienes que sumar todos los números desde 1 hasta n.
// Si n = 5, vas sumando de uno en uno: 1, luego 1+2, luego 1+2+3, etc.
// No conviene escribir la suma a mano para cada n; usamos un bucle.
//
// ---------------------------------------------------------------------------
// METÁFORA DE LA RECETA (análisis antes de codificar)
// ---------------------------------------------------------------------------
// 1. Objetivo: obtener un solo número — la suma total del 1 al n.
// 2. Ingredientes (variables):
//    - n        → el límite (entrada del usuario o parámetro)
//    - i        → contador del bucle (1, 2, 3, ..., n)
//    - suma     → acumulador; empieza en 0 y va guardando el total parcial
// 3. Pasos (bucle):
//    - Repetir desde i = 1 hasta i = n
//    - En cada vuelta: suma = suma + i
// 4. Prueba: con n = 5 debe dar 15; con n = 1 debe dar 1; con n = 100 → 5050
//
// ---------------------------------------------------------------------------
// ¿QUÉ ES UN ACUMULADOR?
// ---------------------------------------------------------------------------
// Un acumulador es una variable que "va guardando" un resultado que crece.
// Empieza en 0. Cada vez que el bucle avanza, le sumas el número actual.
//
//   Vuelta | i | suma antes | suma después (suma + i)
//   -------|---|------------|------------------------
//     1    | 1 |     0      | 1
//     2    | 2 |     1      | 3
//     3    | 3 |     3      | 6
//     4    | 4 |     6      | 10
//     5    | 5 |    10      | 15  ← resultado final
//
// ---------------------------------------------------------------------------
// PSEUDOCÓDIGO (lógica en español, sin sintaxis estricta)
// ---------------------------------------------------------------------------
//   suma ← 0
//   PARA i DESDE 1 HASTA n HACER
//     suma ← suma + i
//   FIN PARA
//   DEVOLVER suma
//
// ---------------------------------------------------------------------------
// PISTAS DE CÓDIGO EN JAVASCRIPT
// ---------------------------------------------------------------------------
// - Declara suma con let y valor inicial 0
// - Usa for (let i = 1; i <= n; i++) { ... }
// - Dentro del bucle: suma = suma + i  (o suma += i)
// - Al terminar el bucle, return suma
//
function sumaHastaN(n) {}

// L2 — Tabla de multiplicar
//
// ENUNCIADO
// Dado un número n, imprime su tabla de multiplicar del 1 al 10.
//
// Ejemplo con n = 7:
// 7 x 1 = 7
// 7 x 2 = 14
// 7 x 3 = 21
// ...
// 7 x 10 = 70
//
// ---------------------------------------------------------------------------
// ¿QUÉ PROBLEMA RESOLVEMOS?
// ---------------------------------------------------------------------------
// Queremos mostrar 10 líneas en pantalla: n×1, n×2, ..., n×10.
// El número n se repite en cada línea; lo que cambia es el multiplicador (1 al 10).
// Aquí no acumulamos un total: en cada vuelta solo imprimimos una línea.
//
// ---------------------------------------------------------------------------
// METÁFORA DE LA RECETA (análisis antes de codificar)
// ---------------------------------------------------------------------------
// 1. Objetivo: mostrar 10 resultados en consola, uno por línea.
// 2. Ingredientes (variables):
//    - n        → el número del que hacemos la tabla (ej. 7)
//    - i        → contador de 1 a 10 (el multiplicador que cambia)
//    - resultado → n * i (opcional; puedes calcularlo directo al imprimir)
// 3. Pasos (bucle):
//    - Repetir i desde 1 hasta 10
//    - En cada vuelta: calcular n * i e imprimir el texto formateado
// 4. Prueba: tabla del 7 debe tener 10 líneas; la última debe ser "7 x 10 = 70"
//
// ---------------------------------------------------------------------------
// DIFERENCIA CON L1 (importante)
// ---------------------------------------------------------------------------
// En L1 usamos un ACUMULADOR (suma) porque juntamos muchos valores en uno solo.
// En L2 usamos un bucle para REPETIR UNA ACCIÓN (imprimir), no para acumular.
// El resultado de cada vuelta se muestra y no se guarda para el final.
//
// ---------------------------------------------------------------------------
// ¿CÓMO SE VE CADA VUELTA DEL BUCLE? (n = 7)
// ---------------------------------------------------------------------------
//   i | n * i | lo que imprimes
//   --|-------|------------------
//   1 |   7   | 7 x 1 = 7
//   2 |  14   | 7 x 2 = 14
//   3 |  21   | 7 x 3 = 21
//   ... (hasta i = 10)
//
// ---------------------------------------------------------------------------
// PSEUDOCÓDIGO (lógica en español, sin sintaxis estricta)
// ---------------------------------------------------------------------------
//   PARA i DESDE 1 HASTA 10 HACER
//     resultado ← n * i
//     IMPRIMIR n, " x ", i, " = ", resultado
//   FIN PARA
//
// ---------------------------------------------------------------------------
// PISTAS DE CÓDIGO EN JAVASCRIPT
// ---------------------------------------------------------------------------
// - Usa for (let i = 1; i <= 10; i++) { ... }
// - Dentro: console.log(n + " x " + i + " = " + (n * i))
// - Los paréntesis en (n * i) evitan errores si concatenas texto y números
// - Esta función no necesita return: su efecto es imprimir en consola
//
function tablaMultiplicar(n) {}

// L3 — Contador de pares e impares
//
// Dado un entero positivo n, cuenta cuántos números entre 1 y n son pares
// y cuántos impares.
//
// Ejemplo: n = 10 → pares: 5, impares: 5
function contarParesImpares(n) {}

// =============================================================================
// NIVEL 2 — Condicionales + bucles (lógica clásica)
// =============================================================================

// L4 — FizzBuzz
//
// Imprime los números del 1 al 100 con estas reglas:
// - Múltiplo de 3 y 5 → "fizzbuzz"
// - Múltiplo de 3 → "fizz"
// - Múltiplo de 5 → "buzz"
// - Si no → el número
//
// Además, cuenta cuántas veces se imprimió un número (no texto) y muestra
// ese total al final.
function fizzBuzz() {}

// L5 — Factorial de N
//
// Calcula el factorial de un entero no negativo n.
// Definición: n! = 1 × 2 × 3 × ... × n, y 0! = 1.
//
// Ejemplos: 5! = 120, 0! = 1
function factorial(n) {}

// L6 — ¿Es número primo?
//
// Crea una función esPrimo(n) que devuelva true si n es primo y false en
// caso contrario.
//
// Recordatorio: un primo solo es divisible entre 1 y sí mismo.
// Casos especiales: números menores que 2 no son primos.
//
// Pruebas: 2 → true, 9 → false, 17 → true, 1 → false
function esPrimo(n) {}

// =============================================================================
// NIVEL 3 — Series numéricas
// =============================================================================

// L7 — Serie de Fibonacci (los N primeros términos)
//
// Imprime los primeros n términos de la serie de Fibonacci.
//
// Definición:
// - F(0) = 0, F(1) = 1
// - F(k) = F(k-1) + F(k-2)
//
// Ejemplo: n = 8 → 0, 1, 1, 2, 3, 5, 8, 13
function fibonacci(n) {}

// L8 — Progresión aritmética
//
// Genera los primeros n términos de una progresión aritmética dado:
// - primer término a1
// - diferencia común d
//
// Fórmula: a(k) = a1 + (k - 1) × d
//
// Ejemplo: a1 = 3, d = 4, n = 5 → 3, 7, 11, 15, 19
function progresionAritmetica(a1, d, n) {}

// L9 — Progresión geométrica
//
// Genera los primeros n términos de una progresión geométrica dado:
// - primer término a1
// - razón r
//
// Fórmula: a(k) = a1 × r^(k-1)
//
// Ejemplo: a1 = 2, r = 3, n = 5 → 2, 6, 18, 54, 162
function progresionGeometrica(a1, r, n) {}

// L10 — Primeros N números primos
//
// Escribe un programa que imprima los primeros n números primos.
//
// Ejemplo: n = 6 → 2, 3, 5, 7, 11, 13
//
// Pista: reutiliza esPrimo del ejercicio L6.
function primerosNPrimos(n) {}

// =============================================================================
// NIVEL 4 — Patrones y razonamiento
// =============================================================================

// L11 — Triángulo de números
//
// Imprime un triángulo de números de n filas:
//
// n = 4
//
// 1
// 1 2
// 1 2 3
// 1 2 3 4
function trianguloNumeros(n) {}

// L12 — Números perfectos hasta N
//
// Un número es perfecto si es igual a la suma de sus divisores propios
// (excluyendo él mismo).
//
// Ejemplo: 6 = 1 + 2 + 3 → 6 es perfecto.
//
// Imprime todos los números perfectos entre 1 y n.
//
// Ejemplo: n = 30 → 6, 28
function perfectosHastaN(n) {}

// L13 — Palíndromo numérico
//
// Determina si un número entero se lee igual al derecho y al revés.
//
// Ejemplos: 121 → true, 123 → false, 7 → true
//
// Restricción: resolver con lógica de bucles (sin convertir a string).
function esPalindromo(numero) {}

// =============================================================================
// NIVEL 5 — Desafíos integradores
// =============================================================================

// L14 — Serie combinada (Collatz simplificado)
//
// Dado un entero positivo n, genera la secuencia:
// - Si n es par → divide entre 2
// - Si n es impar → multiplica por 3 y suma 1
// - Repite hasta llegar a 1
//
// Ejemplo: n = 6 → 6, 3, 10, 5, 16, 8, 4, 2, 1
//
// Imprime la secuencia y el total de pasos.
function secuenciaCollatz(n) {}

// L15 — Menú de series (proyecto modular)
//
// Construye un programa con funciones separadas (modularización) que permita
// generar:
// 1. Fibonacci (n términos)
// 2. Progresión aritmética (a1, d, n)
// 3. Progresión geométrica (a1, r, n)
// 4. Primeros n primos
// 5. FizzBuzz (1 a n)
//
// Usa una función mostrarSerie(nombre, datos) para imprimir resultados con
// formato uniforme.
//
// Datos de prueba fijos (sin menú interactivo obligatorio):
// mostrarSerie("Fibonacci", fibonacci(10));
// mostrarSerie("Aritmética", progresionAritmetica(2, 5, 8));
// mostrarSerie("Geométrica", progresionGeometrica(3, 2, 6));
// mostrarSerie("Primos", primerosNPrimos(8));
function mostrarSerie(nombre, datos) {}

// =============================================================================
// Pruebas (descomenta conforme vayas resolviendo cada ejercicio)
// =============================================================================

console.log("Ejercicios de lógica de programación — L1 a L15");
console.log("Implementa cada función y descomenta las pruebas correspondientes.");

// console.log("L1:", sumaHastaN(5)); // 15
// tablaMultiplicar(7);
// console.log("L3:", contarParesImpares(10)); // { pares: 5, impares: 5 }
// fizzBuzz();
// console.log("L5:", factorial(5)); // 120
// console.log("L6:", esPrimo(17)); // true
// console.log("L7:", fibonacci(8));
// console.log("L8:", progresionAritmetica(3, 4, 5));
// console.log("L9:", progresionGeometrica(2, 3, 5));
// console.log("L10:", primerosNPrimos(6));
// trianguloNumeros(4);
// console.log("L12:", perfectosHastaN(30));
// console.log("L13:", esPalindromo(121)); // true
// console.log("L14:", secuenciaCollatz(6));
// mostrarSerie("Fibonacci", fibonacci(10));
// mostrarSerie("Aritmética", progresionAritmetica(2, 5, 8));
// mostrarSerie("Geométrica", progresionGeometrica(3, 2, 6));
// mostrarSerie("Primos", primerosNPrimos(8));
