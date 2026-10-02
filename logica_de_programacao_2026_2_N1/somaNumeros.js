//Leia números digitados pelo usuário e some todos eles. 
// O laço deve parar quando o usuário digitar 0. Ao final, 
// exiba a soma total e a quantidade de números informados 
// (sem contar o zero).
let numero = -1;
let soma = 0;
let quantidade = 0;
while (numero !== 0) {
    numero = Number(prompt("Digite um número ou 0 para sair"));
    if (numero !== 0) {
        soma = soma + numero;
        quantidade++;
    }
}
console.log("Soma: ", soma);
console.log("Quantidade: ", quantidade);