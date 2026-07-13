let i; //Variável Contador
console.log("Incremento");
for(i = 0; i <= 5; i++) { // i++ -> i = i + 1
    console.log("Iteração:", i);
}
console.log("Decremento");
for(i = 5; i >= 0; i--) { // i-- -> i = i - 1
    console.log("Iteração:", i);
}
console.log("Números Pares");
for(i = 0; i <= 100; i += 2) { // i += 2 -> i = i + 2
    console.log(i);
}
//Ou
for(i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
console.log("Tabuada");
let numero = 7;
let resultado;
for(i = 0; i <= 10; i++){
    resultado = numero * i; // resultado = 7 * i
    console.log(numero, 'x', i, '=', resultado); 
    // 7 x 0 = 0
}
console.log("Fatorial a partir do 1");
let num = 5; //Fatorial de 5
let fatorial = 1; //Resultado do Fatorial
for (i = 2; i <= num; i++) {
    fatorial = fatorial * i;
}
console.log(`Fatorial de ${num} = ${fatorial}`);
//console.log("Fatorial de", num, "=", fatorial);
console.log("Soma e Média de N números");
let n = 4;
let soma = 0;
let media = 0;
for(i = 0; i < n; i++) {
    let valor = Number(prompt(`Digite o ${i}º número:`));
    soma += valor; //soma = soma + valor
}
media = soma / n;
console.log(`O resultado da soma é: ${soma}`);
console.log(`A média é ${media.toFixed(2)}`);