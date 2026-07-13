// //Processador de lista de compras com cancelamento
// let produto = 0, precoDoProduto = 0, total = 0;
// while (true){
//     let entradaCompra = prompt(`Produto: ${produto+1}, 
//         Digite o preço do produto 
//         ou 'fim' para finalizar`);
//     if (entradaCompra.toLowerCase() === 'fim') {
//         break;
//     }
//     precoDoProduto = parseFloat(entradaCompra);
//     if (isNaN(precoDoProduto) || precoDoProduto < 0) {
//         console.log("Preço inválido");
//         continue;
//     }
//     total = total + precoDoProduto;
//     produto++;
//     console.log(`Subtotal da compra: ${total.toFixed(2)}.
//     Foram comprados ${produto} produtos`);
// }
// console.log(`Total final da compra: ${total.toFixed(2)}.
//     Foram comprados ${produto} produtos`);

//Exercícios: BREAK e CONTINUE
//1. Exiba os números de 1 a 100, pulando múltiplos de 4 (continue) 
// e parando no primeiro múltiplo de 17 maior que 50 (break).
let i;
for(i = 1; i <= 100; i++){
    if (i % 4 === 0) {
        continue;
    } else if (i % 17 === 0 && i > 50) {
        break;
    }
    console.log(i);
}
//2. Filtro de notas: leia 10 notas com for. Use continue para 
// ignorar notas inválidas (< 0 ou > 10) e calcule a média 
// apenas das válidas.
let i;
let contadorDeNotasValidas = 0;
let somaDeNotasValidas = 0;
let media = 0;
for (i = 0; i < 10; i++) {
    let nota = Number(prompt("Digite uma nota"));
    if (nota < 0 || nota > 10) {
        console.log("Nota Inválida");
        continue;
    }
    somaDeNotasValidas = somaDeNotasValidas + nota;
    contadorDeNotasValidas++;
}
media = somaDeNotasValidas / contadorDeNotasValidas;
console.log(`A média de notas válidas é: ${media}`);