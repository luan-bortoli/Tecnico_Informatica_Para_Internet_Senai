let produto = 0, precoDoProduto = 0, total = 0;
let comprarNovamente;
do {
    let entradaDeCompra = prompt(`Produto: ${produto+1}-
        Digite o preço do produto ou 
        'fim' para finalizar`);
    if (entradaDeCompra.toLowerCase() === 'fim') {
        break;
    }
    precoDoProduto = parseFloat(entradaDeCompra);
    if (isNaN(precoDoProduto) || precoDoProduto <= 0){
        console.log("Preço Inválido");
        continue;
    }
    total = total + precoDoProduto;
    produto++;
    console.log(`Subtotal de ${produto} produtos:
        R$${total.toFixed(2)}`);
    comprarNovamente = prompt(`Digite 'sim' para uma
        nova compra ou 'não' para finalizar`);
} while(comprarNovamente.toLowerCase() === 'sim');
console.log(`Total final da compra = R$${total.toFixed(2)}
foram comprados: ${produto} produtos`);