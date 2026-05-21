// Desenvolva um sistema que armazene três notas  bimestrais de um aluno em variáveis. 
// Calcule a média aritmética e, utilizando operadores de comparação, determine 
// se o aluno atingiu a nota mínima de corte para aprovação, definida como uma constante.
// const MEDIA_CORTE = 7.0;
const mediaCorte = Number(7.0);
let nota1 = Number(prompt("Digite a nota 1"));
let nota2 = Number(0);
let nota3 = Number(0);
let media = Number(0);
let estaAprovado;

nota2 = Number(prompt("Digite a nota 2"));
nota3 = Number(prompt("Digite a nota 3"));
media = (nota1 + nota2 + nota3) / 3;
estaAprovado = media >= mediaCorte;
console.log("true = Aprovado");
console.log("false = Reprovado");
console.log("Media: ", media.toFixed(2));
console.log(estaAprovado);