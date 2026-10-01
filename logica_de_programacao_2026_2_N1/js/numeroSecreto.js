const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let numeroQualquer = 0;
let tentativas = 0;
while (numeroQualquer !== numeroSecreto && tentativas < 7) {
    numeroQualquer = Number(prompt("Digite um número de 1 a 100"));
    tentativas++;
    if (numeroQualquer < numeroSecreto) {
        console.log("Número digitado é menor que o número secreto");
    } else if (numeroQualquer > numeroSecreto) {
        console.log("Número digitado é maior que o número secreto");
    }
}
console.log("O número secreto é", numeroSecreto);
if (numeroQualquer !== numeroSecreto) {
    console.log("Você Perdeu!");
} else {
    console.log("Acertou em", tentativas, "tentativas");
}