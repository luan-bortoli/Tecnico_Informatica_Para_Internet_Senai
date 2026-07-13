// // let opcao = -1;
// // while (opcao != 0) { 
// //     opcao = Number(prompt("MENU:\n1- Saudação\n 2-Data\n0-Sair"));
// //     if (opcao === 1) {
// //         console.log("Olá Mundo");
// //     } else if (opcao === 2) {
// //         console.log(new Date().toLocaleDateString('pt-BR'));
// //     } else if (opcao != 0) {
// //         console.log("Opção Inválida");
// //     }
// // }
// // console.log("Fim do Programa");
// // const numeroSecreto = Math.floor(Math.random() * 100) + 1;
// // let chute = 0;
// // let tentativas = 0;
// // while (chute !== numeroSecreto) {
// //     chute = Number(prompt("Adivinhe o número de 1 até 100:"));
// //     tentativas++;
// //     if (chute < numeroSecreto) {
// //         console.log("Número muito baixo");
// //         alert("Número muito baixo");
// //     } else if (chute > numeroSecreto) {
// //         console.log("Número muito alto");
// //         alert("Número muito alto");
// //     }
// // }
// // console.log("Acertou em", tentativas, "tentativas");
// // let saldo = 100;
// // while (saldo > 0) {
// //    let saque = Number(prompt(`Saldo: ${saldo.toFixed(2)}.\n
// //         Digite um valor para saque: `));
// //     if (saque <= 0) {
// //         console.log("Valor do saque inválido");
// //     } else if (saque > saldo) {
// //         console.log("Saldo insuficiente");
// //     } else {
// //         saldo = saldo - saque;
// //         //saldo -= saque;
// //         console.log(`Saldo atual: R$${saldo.toFixed(2)}`);
// //     }
// // }
// // console.log("Saldo zerado. Conta encerrada");


// //Crie um menu com while: 1-Celsius para Fahrenheit, 
// // 2-Fahrenheit para Celsius, 0-Sair. 
// // Repita até o usuário escolher 0.
// // CF => (C * 1,8) + 32
// // FC => (F - 32) * 1,8
// let opcao = -1;
// let temperatura = 0;
// let temperaturaFinal = 0;
// while (opcao !== 0) {
//     opcao = Number(prompt("Digite uma opção"));
//     temperatura = Number(prompt("Digite a temperatura"));
//     if (opcao === 1) {
//         temperaturaFinal = (temperatura * 1.8) + 32;
//     } else if (opcao === 2) {
//         temperaturaFinal = (temperatura - 32) * 1.8;
//     } else if (opcao !== 0) {
//         console.log("Opção Inválida");
//     }
// }
// console.log("A temperatura convertida é:", temperaturaFinal);

// //Sistema de depósitos: comece com saldo zero, peça depósitos 
// // enquanto o saldo for menor que R$5.000. Exiba o saldo final 
// // e quantos depósitos foram feitos.
// let saldo = 0;
// let contadorDepositos = 0;
// while(saldo < 5000) {
//     let deposito = Number(prompt(`Saldo atual: R$ ${saldo.toFixed(2)}
//         \n Digite o valor do depósito:`));
//     if (deposito <= 0) {
//         console.log("Depósito inválido");
//     } else {
//         saldo = saldo + deposito; //saldo += deposito;
//         contadorDepositos++;
//     }
// }
// console.log(`Saldo Final: R$ ${saldo.toFixed(2)}.
//  Foram realizados ${contadorDepositos} depósito(s)`);

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