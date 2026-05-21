// // //1. Crie um programa que lê um número e exibe 'Número positivo' 
// se o número for maior que zero.
let numero = 7;
if (numero >= 0) {
    console.log("Número Positivo");
} else {
    console.log("Número Negativo");
}

// 2. Crie um programa que lê a média  de um aluno e exibe 'Aprovado' ou 'Reprovado'. 
// A média tem que ser maior ou igual que 7.0 para aprovação.
let media = 10;
if (media < 0 || media > 10) {
    console.log("Média Inválida")
} else if (media >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

// // //3. Par ou Impar (% 2 ser 0 para ser par)
let numeroOuI = 2;
if (numeroOuI % 2 === 0) {
    console.log("Número é par")
} else {
    console.log("Número é ímpar");
}


// 4. Crie um algoritmo que leia o peso e a altura  do usuário 
// e cálcule seu IMC e classifique quanto ao resultado do IMC: 
// Fórmula: imc = peso / altura**2
// - Se IMC é menor que 18,50: 
//     Imprima: "Magresa"
// - Se IMC for entre 18,50 a 24,99:
//     Imprima: "Normal"
// - Se IMC for entre 25 a 29,99:
//     Imprima: "Sobrepeso"
// - Se IMC for entre 30 a 34,99:
//     Imprima: "Obesidade Grau I"
// - Se IMC for entre 35 a 39,99:
//     Imprima: "Obesidade Grau II"
// - Se IMC for maior que 40:
//     Imprima: "Obesidade Grau III"
let peso = 98.5;
let altura = 1.80;
let imc;
imc = peso / (altura**2);
if (imc < 18.50) {
    console.log("Magresa");
} else if (imc >= 18.50 && imc <= 24.99) {
    console.log("Normal");
} else if (imc >= 25 && imc <= 29.99) {
    console.log("Sobrepeso");
} else if (imc >= 30 && imc <= 34.99) {
    console.log("Obesidade Grau I")
} else if (imc >= 35 && imc <= 39.99) {
    console.log("Obesidade Grau II")
} else if (imc >= 40) {
    console.log("Obesidade de Grau III");
}



// 5. Crie um programa que solicite ao usuário:
// - A UF (estado) de destino do pacote;
// - O peso do pacote em quilogramas.
// O sistema deve calcular o valor do frete de acordo 
// com as seguintes regras:
// - Para entregas em SC, o frete custa R$ 2,50 por kg;
// - Para entregas em SP, RS ou PR, o frete custa R$ 5,00 por kg;
// - Para entregas em AM, PA ou RR, o frete custa R$ 12,00 por kg;
// - Para os demais estados, o frete custa R$ 7,50 por kg.
// Ao final, o programa deve exibir o estado informado 
// e o valor total do frete formatado com duas casas decimais.
let uf = prompt("Digite a sigla do estado").toUpperCase();
let peso = Number(prompt("Digite o peso do pacote em KG"));
let valorDoFrete;
if (uf === 'SC') {
    valorDoFrete = 2.50 * peso;
} else if (uf === 'SP' || uf === 'RS' || uf === 'PR') {
    valorDoFrete = 5.00 * peso;
} else if (uf === 'AM' || uf === 'PA' || uf === 'RR') {
    valorDoFrete = 12.00 * peso;
} else {
    valorDoFrete = 7.50 * peso;
}
console.log("O Estado é:", uf, 
    "Valor total do frete é:", valorDoFrete.toFixed(2));


// 6. Crie um verificador de ano bissexto: 
// um ano é bissexto se for divisível por 4.
// Exiba 'Bissexto' ou 'Não bissexto'.
let ano = 2024;
if (ano % 4 === 0) {
    console.log("Ano bissexto");
} else {
    console.log("Ano Não Bissexto");
}

// 7. Implemente o algoritmo de pedágio: 
// um veículo paga R$4,50 (moto), 
// R$9,00 (carro), R$13,50 (caminhão leve) 
// ou R$18,00 (caminhão pesado). 
// Leia o tipo de veículo e calcule o pedágio.
let veiculo = 'CAMINHÃO PESADO'.toLowerCase();
if (veiculo === 'moto') {
    console.log("Valor do Pedágio: R$4,50");
} else if (veiculo === 'carro') {
    console.log("Valor do Pedágio: R$9,00");
} else if (veiculo === 'caminhão leve') {
    console.log("Valor do Pedágio: R$13,50");
} else if (veiculo === 'caminhão pesado') {
    console.log("Valor do Pedágio: R$18,00");
} else {
    console.log("Veículo Isento de Pagamento");
}
