// Crie um programa que lê dois números, exiba qual é o maior 
// ou a mensagem "são iguais" se forem iguais
let numero1 = Number(prompt("Digite o número 1"));
let numero2 = Number(prompt("Digite o número 2"));
if (numero1 > numero2) {
    console.log("Número 1 é maior que o número 2", numero1);
} else if (numero2 > numero1) {
    console.log("Número 2 é maior que o número 1", numero2);
} else {
    console.log("Número 1 é igual ao número 2", numero1, '===', numero2);
}


