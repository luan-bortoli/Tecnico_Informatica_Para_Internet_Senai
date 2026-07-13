let vitorias = 0, derrotas = 0, jogarNovamente;
do {
    let numeroSecreto = Math.floor(Math.random() * 10) + 1;
    let chute = Number(prompt("Adivinhe o número de 1 a 10"));
    if(chute === numeroSecreto) {
        console.log("Você acertou o número secreto");
        vitorias++;
    } else {
        console.log(`Você errou o número secreto\n
            O número secreto era ${numeroSecreto}`);
        derrotas++;
    }
    jogarNovamente = prompt("Deseja jogar novamente? (sim/não)(s/n)");
} while (jogarNovamente.toLowerCase() === 'sim' 
    || jogarNovamente.toLowerCase() === 's');

console.log(`Fim do jogo! Total de vitórias: ${vitorias}. 
    Total de derrotas: ${derrotas}`);
    