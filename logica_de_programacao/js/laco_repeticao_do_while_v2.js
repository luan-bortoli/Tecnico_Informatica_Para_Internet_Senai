let vitorias = 0, derrotas = 0, jogarNovamente;
do {
    let numeroSecreto = Math.floor(Math.random() * 10) + 1;
    let chute = Number(prompt("Adivinhe o número de 1 a 10"));
    if (chute === numeroSecreto) {
        console.log("Você acertou!");
        vitorias++
    } else {
        console.log(`Você errou! O número secreto 
            era ${numeroSecreto}`);
        derrotas++;
    }
    jogarNovamente = prompt("Deseja jogar novamente? (sim/não)");
} while (jogarNovamente.toLowerCase() === 'sim');
console.log(`Fim! Total de vitórias: ${vitorias}.\n
    Total de derrotas: ${derrotas}`);