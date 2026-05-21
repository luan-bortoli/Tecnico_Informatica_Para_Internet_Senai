//Calculadora: +, -, /, %, *, **
let numero1 = Number(prompt("Digite o primeiro número"));
let numero2 = Number(prompt("Digite o segundo número"));
let operador = prompt("Digite o operador aritmético");
let resultado;
switch (operador) {
    case '+':
        resultado = numero1 + numero2;
    break;
    case '-':
        resultado = numero1 - numero2;
    break;
    case '/':
        resultado = numero1 / numero2;
    break;
    case '%':
        resultado = numero1 % numero2;
    break;
    case '*':
        resultado = numero1 * numero2;
    break;
    case '**':
        resultado = numero1 ** numero2;
    break;
    default:
        console.log("Operador Inválido");
    break;
}
console.log(resultado);