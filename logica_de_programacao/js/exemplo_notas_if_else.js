//Crie um programa que lê a nota de um aluno e exibe 'Aprovado' ou
//'Reprovado'. A nota tem que ser maior ou igual que 7.0 para aprovação.
let nota = Number(prompt("Digite a sua nota"));
if (nota < 0 || nota > 10) {
    console.log("Nota Inválida")
} else if (nota >= 7.0) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}