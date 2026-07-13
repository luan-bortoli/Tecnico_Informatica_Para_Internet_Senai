// let cores = ['azul', 'amarelo', 'rosa', 'vermelho'];
// //[  0   ,     1    ,   2   ,      3    ]
// //['azul', 'amarelo', 'rosa', 'vermelho']
// //push()-> Adicionar elementos ao final do vetor
// cores.push('roxo', 'ciano');
// //[ 'azul', 'amarelo', 'rosa', 'vermelho', 'roxo', 'ciano' ]
// //pop() -> Remove elementos do final do vetor
// cores.pop();
// //[ 'azul', 'amarelo', 'rosa', 'vermelho', 'roxo' ]
// //unshift -> Adiciona elementos no início do vetor
// cores.unshift("laranja", "bege", "preto");
// //[ 'laranja',  'bege', 'preto', 
// // 'azul', 'amarelo', 'rosa', 'vermelho', 'roxo']
// //shift() -> Remove elementos do Inicio do Vetor
// cores.shift();
// cores.shift();
// //[ 'preto', 'azul', 'amarelo', 'rosa', 'vermelho', 'roxo' ]
// cores.shift();
// //[  0    ,   1     ,   2    ,    3     ,    4   ]
// //['azul', 'amarelo', 'rosa', 'vermelho', 'roxo' ]
// //Splice -> Remove ou Inserir elementos em uma posição
// cores.splice(3, 1);
// //[ 'azul', 'amarelo', 'rosa', 'roxo' ]
// cores.splice(2, 0, "branco", "cinza");
// //[ 'azul', 'amarelo', 'branco', 'cinza', 'rosa', 'roxo' ]
// // SORT -> Ordenação Crescente
// cores.sort();
// //[ 'amarelo', 'azul', 'branco', 'cinza', 'rosa', 'roxo' ]
// // REVERSE -> Ordenação Decrescente
// cores.reverse();
// //[ 'roxo', 'rosa', 'cinza', 'branco', 'azul', 'amarelo' ]
// console.log(cores);

// let numeros = [10, 1, 21, 3, 100];
// numeros.sort();
// //[ 1, 10, 100, 21, 3 ]
// numeros.sort((a, b) => a - b);
// //[ 1, 3, 10, 21, 100 ]
// numeros.sort((a, b) => b - a);
// //[ 100, 21, 10, 3, 1 ]
// console.log(numeros); 
// //[    0       1        2       3         4         5   ]
// //[ 'roxo', 'rosa', 'cinza', 'branco', 'azul', 'amarelo' ]
// //SLICE
// cores.slice(2);
// console.log(cores.slice(2));
// //[ 'cinza', 'branco', 'azul', 'amarelo' ]
// console.log(cores.slice(2, 5));
// //[ 'cinza', 'branco', 'azul' ]
// console.log(cores.slice(-2));
// //[ 'azul', 'amarelo' ]
// let arrayFatiado = cores.slice(0, -1);
// console.log(arrayFatiado);
// //[ 'roxo', 'rosa', 'cinza', 'branco', 'azul' ]

// let frutas = ['maçã', 'banana', 'laranja', 'banana', 'uva'];
// //indexOf
// console.log(frutas.indexOf('banana')); // 1
// console.log(frutas.indexOf('limão')); // -1
// //lastIndexOf
// console.log(frutas.lastIndexOf('banana')); // 3
// //includes 
// console.log(frutas.includes('laranja')); // True
// console.log(frutas.includes('manga')); // False
// if (frutas.includes('laranja')) {
//     console.log("Temos laranjas");
// }

// let alunos = [
//     { id: 1, nome: 'João', nota: 8.5 }, //0
//     { id: 2, nome: 'Lucas', nota: 5.0 }, //1
//     { id: 3, nome: 'Nicole', nota: 7.0 }, //2
//     { id: 4, nome: 'Luis', nota: 3.2 }, //3
// ];
// let alunoEncontrado = alunos.find(aluno => 
//     aluno.nota >= 7.0);
// console.log(alunoEncontrado);
// //{ id: 1, nome: 'João', nota: 8.5 }
// let indiceAlunoEncontrado = alunos.findIndex(aluno => 
//     aluno.nota >= 7.0);
// console.log(indiceAlunoEncontrado); // 0
// let indiceAlunoEncontrado2 = alunos.findLastIndex(
//     aluno => aluno.nota >= 7.0);
// console.log(indiceAlunoEncontrado2); //2

//CONCAT
let vetor1 = [1, 2, 3];
let vetor2 = [4, 5, 6];
let vetorUnido = vetor1.concat(vetor2);
console.log(vetorUnido);//[ 1, 2, 3, 4, 5, 6 ]
let vetorUnido2 = vetor2.concat(vetor1);
console.log(vetorUnido2);//[ 4, 5, 6, 1, 2, 3 ]
//JOIN
console.log(vetor1.join());//1,2,3
console.log(vetor1.join(', '));//1, 2, 3
console.log(vetor1.join(' / '));//1 / 2 / 3
console.log(vetor1.join(' | '))//1 | 2 | 3
