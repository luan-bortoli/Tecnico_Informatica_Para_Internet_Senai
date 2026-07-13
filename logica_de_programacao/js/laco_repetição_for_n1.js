// let i;
// console.log("Incremento");
// for (i = 0; i <= 5; i++){
//     console.log("Iteração", i);
// }
// console.log("Decremento");
// for (i = 5; i >= 0; i--){
//     console.log("Iteração", i);
// }
// console.log("Números Pares");
// for(i = 0; i <= 50; i += 2) {
//     console.log("Número Par:", i);
// }
// //OU
// for(i = 0; i <= 50; i++) {
//     if (i % 2 === 0) {
//        console.log("Número Par:", i); 
//     }
// }
// console.log("Tabuada");
// let num = 7; //Tabuada do 7
// for(i = 0; i <= 10; i++){
//     console.log(`${num} x ${i} = ${num * i}`);
// }
// console.log("Todas as tabuadas");
// for(i = 1; i <= 10; i++){
//     for(j = 0; j <= 10; j++){
//        console.log(`${i} x ${j} = ${i * j}`); 
//     }
// }

// let quantidadeDeNumeros = Number(prompt("Digite quantidade de números"));
// let soma = 0, media = 0, i;
// for(i = 1; i <= quantidadeDeNumeros; i++){
//     let numero = Number(prompt("Digite um número"));
//     soma = soma + numero; // soma +=numero
// }
// media = soma / quantidadeDeNumeros;
// console.log("Soma", soma);
// console.log("Média", media);
//Fatorial
let resultadoFatorial = 1, i;
let numero = Number(prompt("Digite um número para calcular o fatorial"));
for(i = numero; i >= 1; i--){
    resultadoFatorial = resultadoFatorial * i;
}
console.log("O resultado do fatorial de", numero, "é", resultadoFatorial);