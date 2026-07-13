// let opcao = -1;
// while (opcao != 0) {
//     opcao = Number(prompt(`Digite uma opção
//         do menu:\n 1-Saudação\n2-Data\n
//         0-Sair`));
//     if (opcao === 1) {
//         console.log("Olá Mundo");
//     } else if (opcao === 2) {
//         console.log(new Date().toLocaleDateString('pt-BR'));
//     } else if (opcao != 0) {
//         console.log("Opção inválida");
//     }
// }
// //Criar um programa que leia o saldo inicial igual a 100 
// // e encerre a execução quando o saldo for igual ou menor que 0
// let saldo = 1000;
// while(saldo > 0){
//     let saque = Number(prompt(`Saldo: R$ ${saldo.toFixed(2)}\n
//         Digite um valor para saque`));
//     if (saque <= 0) {
//         console.log("Saque inválido");
//     } else if (saque > saldo) {
//         console.log("Saldo insuficiente");
//     } else {
//         saldo = saldo - saque; // saldo -= saque
//         console.log(`Saldo atual: R$ ${saldo.toFixed(2)}`);
//     }
// }
// console.log("Saldo zerado. Conta encerrada");

// //Adivinhar o número secreto
// const numeroSecreto = Math.floor(Math.random() * 100) + 1;
// let chute = 0;
// let tentativas = 0;
// while(numeroSecreto !== chute) {
//     chute = Number(prompt("Adivinhe o número de 1 até 100"));
//     tentativas++;
//     if (chute < numeroSecreto) {
//         console.log("Número muito abaixo");
//         alert("Número muito baixo");
//     } else if (chute > numeroSecreto) {
//         console.log("Número muito alto");
//         alert("Número muito alto");
//     }
// }
// console.log("Acertou em", tentativas, "tentativas");
// console.log(`Número secreto é: ${numeroSecreto}`);
//Sistema de depósitos: comece com saldo zero, peça depósitos 
// enquanto o saldo for menor que R$5.000. Exiba o saldo final 
// e quantos depósitos foram feitos.
let saldo = 0;
let contadorDepositos = 0;
while(saldo < 5000) {
    let deposito = Number(prompt(`Saldo atual: R$ ${saldo.toFixed(2)}
        \n Digite o valor do depósito:`));
    if (deposito <= 0) {
        console.log("Depósito inválido");
    } else {
        saldo = saldo + deposito; //saldo += deposito;
        contadorDepositos++;
    }
}
console.log(`Saldo Final: R$ ${saldo.toFixed(2)}.
 Foram realizados ${contadorDepositos} depósito(s)`);

//Implemente o jogo de adivinhação do exemplo 2.3, 
// mas com limite de 7 tentativas. Se errar todas, exiba 'Game over! 
// O número era X.'
const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let chute = 0;
let tentativas = 0;
while(numeroSecreto !== chute && tentativas < 7) {
    chute = Number(prompt("Adivinhe o número de 1 até 100"));
    tentativas++;
    if (chute < numeroSecreto) {
        console.log("Número muito abaixo");
        alert("Número muito baixo");
    } else if (chute > numeroSecreto) {
        console.log("Número muito alto");
        alert("Número muito alto");
    }
}
if (tentativas === 7){
    console.log("Game over!");
} else {
    console.log("Acertou em", tentativas, "tentativas");
}
console.log(`Número secreto é: ${numeroSecreto}`);

//Crie um menu com while: 1-Celsius para Fahrenheit, 
// 2-Fahrenheit para Celsius, 0-Sair. Repita até o usuário escolher 0.
let opcao = -1;
while(opcao !== 0){
    opcao = parseInt(prompt(`Digite a opção para conversão: 
        1- De Celsius para Fahrenheit \n
        2- De Fahrenheit para Celsius\n
        0- Para Sair`));
    let temperaturaAtual;
    let temperatura = parseFloat(prompt("Digite a temperatura"));
    if (opcao === 1) {
        temperaturaAtual = temperatura * 1.8 + 32;
    } else if (opcao === 2) {
        temperaturaAtual = (temperatura - 32) / 1.8;
    } else if (opcao !== 0) {
        temperaturaAtual = "Opção Inválida";
    }
    console.log("A temperatura atual é", temperaturaAtual);
}