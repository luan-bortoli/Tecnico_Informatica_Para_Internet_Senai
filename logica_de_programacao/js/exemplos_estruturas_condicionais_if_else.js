//Crie um programa que lê uma temperatura e exibe 
//'Alerta de calor extremo!' se a temperatura for maior que 40°C.
const temperatura = Number(60);
if (temperatura > 40) {
    console.log("Alerta de calor extremo");
} else {
    console.log("Alerta de calor moderado");
}
console.log("Fim");

// Crie um programa que lê a velocidade de um veículo 
// e exibe 'Multa aplicada!' se a velocidade for maior que 80 km/h, 
// junto com o valor da multa: R$150 se entre 81 e 100, 
// R$300 se acima de 100
let velocidade = 180;
let valorMulta;
if (velocidade >= 100) {
    console.log("Multa Aplicada");
    valorMulta = 300.00;
    console.log("Valor da Multa é: ", valorMulta);
} else if (velocidade >= 81 && velocidade < 100) {
    console.log("Multa Aplicada");
    valorMulta = 150.00;
    console.log("Valor da Multa é: ", valorMulta);
}  else if (velocidade >= 80) {
    console.log("Multa Aplicada");
}