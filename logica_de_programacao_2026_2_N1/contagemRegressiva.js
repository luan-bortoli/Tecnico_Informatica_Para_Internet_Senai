//1. Contagem regressiva - Peça um número inteiro positivo ao usuário 
// e use while para exibir a contagem regressiva até 1, 
// terminando com a mensagem "Fim!".
// Exemplo: entrada 5 → saída 5, 4, 3, 2, 1, Fim!
let numero = Number(prompt("Digite um número"));
while (numero >= 1){
    console.log(numero);
    numero--;
}
console.log("Fim");