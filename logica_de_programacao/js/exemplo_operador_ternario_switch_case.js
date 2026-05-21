//Número Positivo e Negativo 
let numero = -12;
let resultado = (numero >= 0) ? 'Positivo' : 'Negativo';
console.log(resultado);

//Frete
let uf = 'Sp'.toUpperCase();
let peso = 50;
let valorDoFrete;
switch (uf) {
    case 'SC':
        valorDoFrete = 2.50 * peso;
        break;
    case 'SP':
    case 'RS':
    case 'PR':
        valorDoFrete = 5.00 * peso;
        break;
    case 'AM':
    case 'PA':
    case 'RR':
        valorDoFrete = 12.00 * peso;
        break;
    default:
        valorDoFrete = 7.50 * peso;
        break;
}
console.log("O Estado é:", uf, 
    "Valor total do frete é:", valorDoFrete.toFixed(2));