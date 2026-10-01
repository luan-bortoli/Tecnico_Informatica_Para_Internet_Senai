let saldo = 100;
let valorSaque = -2;
while (valorSaque !== -1) {
    valorSaque = Number(prompt(`Saldo: ${saldo}\nDigite um valor 
        para saque ou -1 para sair`));
    if (valorSaque <= 0) {
        console.log("Valor do Saque Inválido");
    } else if (valorSaque > saldo) {
        console.log("Saldo Insuficiente");
    } else {
        saldo = saldo - valorSaque;
        console.log(`Saldo atual é ${saldo}`);
    }
}
console.log("Operação de Saque Finalizada");