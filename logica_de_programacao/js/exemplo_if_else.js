let idade = Number(prompt('Informe sua idade:'));
 
if (idade < 0) {   // Verificação de Não possuir idade negativa
   console.log("Idade inválida.");
} else if (idade < 16) {
   console.log("Você NÃO vota.");
} else if (idade <= 17 || idade > 70) {
   console.log("Seu voto é FACULTATIVO.");   // 16-17 ou acima de 70
} else {
   console.log("Seu voto é OBRIGATÓRIO.");   // 18 a 70
}
