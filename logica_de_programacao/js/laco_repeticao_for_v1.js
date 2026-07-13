// let i;
// console.log("Incremento");
// for(i = 0; i <= 5; i++){
//     console.log("Iteração: ", i);
// }
// console.log("\n");
// console.log("Decremento");
// for(i = 5 ; i >= 0 ; i--){
//     console.log("Iteração: ", i);
// }
// console.log("Números Pares 0 até 100");
// for(i = 0; i <= 100; i += 2){
//     console.log(i);
// }
// //OU
// for(i = 0; i <= 100; i++){
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }
// console.log("Tabuada");
// let numero = 7;
// let resultado;
// for (i = 0; i <= 10; i++) {
//     resultado =  numero * i;
//     console.log(numero, "x", i, "=", resultado);
// }
// console.log("Fatorial 1 até infinito");
// let n = 10;
// let fatorial = 1;
// for (i = 2; i <= n; i++) {
//     fatorial = fatorial * i;
// }
// console.log(`Fatorial de ${n} = ${fatorial}`);
// //console.log("Fatorial de ", n, "=", fatorial);
// console.log("\n");
// console.log("Soma e Média de N números");
// let num = 3;
// let soma = 0;
// let media = 0;
// for (i = 1; i <= num; i++) {
//     let valor = Number(prompt(`Digite o ${i}º número:`));
//     soma += valor;
//     //soma = soma + valor;
// }
// media = soma / num;
// console.log(`O resultado da soma é: ${soma}`);
// console.log(`A média é ${media.toFixed(2)}`);

//1. Exiba todos os números ímpares entre 1 e 50 usando for.
let i;
for(i = 1; i <= 50; i++) {
    if (i % 2 !== 0) {
        console.log(`Número Ímpar: ${i}`)
    }
}
//2. Calcule a soma de todos os múltiplos de 3 entre 1 e 100.
let i;
let soma = 0;
for (i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        console.log(`Múltiplos de 3: ${i}`);
        soma = soma + i; //soma += i;
    }
}
console.log(`Soma dos múltiplos de 3 é: ${soma}`);
//3. Leia N notas e calcule a média, a maior nota e a menor nota.
let n = 4, soma = 0, media = 0, menor, maior, i;
for (i = 1; i <= n; i++) {
    let nota = Number(prompt(`Digite a ${i}º nota:`));
    soma = soma + nota;
    if (i === 1) {
        menor = nota;
        maior = nota;
    } else if (nota > maior) {
        maior = nota;
    } else if (nota < menor) {
        menor = nota;
    }
}
media = soma / n;
console.log(`A média é ${media.toFixed(2)}`);
console.log(`Menor nota: ${menor}`);
console.log(`Maior nota: ${maior}`);

//4. Crie um contador regressivo de 10 a 0 e exiba 'LANÇAMENTO!' ao final.


