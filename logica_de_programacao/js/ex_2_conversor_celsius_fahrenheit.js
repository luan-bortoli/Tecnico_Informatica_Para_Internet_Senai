// Crie um algoritmo que receba uma temperatura 
// em graus Celsius. Converta esse valor 
// para Fahrenheit utilizando a fórmula 
// Fahrenheit  = (Celsius * 1.8) + 32. 
// Utilize constantes para os fatores fixos da equação.
const fatorA = 1.8;
const fatorB = 32;
let celsius = Number(prompt("Digite uma temperadura"));
let fahrenheit;
fahrenheit = (celsius * fatorA) + fatorB;
console.log("Celsius para Fahrenheit:", fahrenheit);