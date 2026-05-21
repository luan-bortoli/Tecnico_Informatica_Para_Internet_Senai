//Dois Números; Operadores Aritméticos (+ - / % * ** )
const numero1 = Number(prompt("Digite o primeiro número"));
const operador = prompt("Digite o operador aritmético");
const numero2 = Number(prompt("Digite o segundo número"));
let resultado;
switch (operador) {
    case '+': //Soma
        resultado = numero1 + numero2;
        break;
    case '-': //Subtração
        resultado = numero1 - numero2;
        break;
    case '/': //Divisão
        resultado = (numero2 === 0) 
            ? 'Erro: Não existe divisão por zero!' 
            : numero1 / numero2;
        break;
    case '%': //Resto da divisão
        resultado = (numero2 === 0) 
            ? 'Erro: Não existe divisão por zero!' 
            : numero1 % numero2;
        break;
    case '*': //Multiplicação
        resultado = numero1 * numero2;
        break;
    case '**': //Potenciação
    case '^':
        resultado = numero1 ** numero2;
        break;
    case 'raiz': //Raiz Quadrada
        resultado = numero1 ** (1/numero2);
        break;
}
console.log(resultado);