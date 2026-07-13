// //CONCAT
// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];

// let arraysUnidos = array1.concat(array2);
// console.log(arraysUnidos); //[1, 2, 3, 4, 5, 6]

// let arraysUnidos2 = array2.concat(array1);
// console.log(arraysUnidos2); // [4, 5, 6, 1, 2, 3]

// //JOIN
// console.log(arraysUnidos.join());//1,2,3,4,5,6
// console.log(arraysUnidos.join(' | '));//1 | 2 | 3 | 4 | 5 | 6
// console.log(arraysUnidos.join(', '));//1, 2, 3, 4, 5, 6
// console.log(arraysUnidos.join(''));//123456

//MAP
let numeros = [1, 2, 3, 4, 5, 6];
let dobro = numeros.map(num => num * 2);
console.log(numeros); //[1, 2, 3, 4, 5, 6]
console.log(dobro);   //[2, 4, 6, 8, 10, 12]

let alunos = [
    {nome: 'Ana', nota: 6.5}, // 0
    {nome: 'Bruna', nota: 5.0}, // 1
    {nome: 'Jorge', nota: 7.0} // 2
];

let nomeAlunos = alunos.map(aluno => aluno.nome);
console.log(nomeAlunos); //[ 'Ana', 'Bruna', 'Jorge' ]

//Filter
let pares = numeros.filter(num => num % 2 === 0);
console.log(pares); //[ 2, 4, 6 ]
let maioresQue5 = numeros.filter(num => num > 5);
console.log(maioresQue5);//[ 6 ]
let impares = numeros.filter(num => num % 2 !== 0);
console.log(impares);//[ 1, 3, 5 ]
let alunosComMediaMaiorQue6 = alunos
    .filter(aluno => aluno.nota > 6)
console.log(alunosComMediaMaiorQue6);
//[ { nome: 'Ana', nota: 6.5 }, { nome: 'Jorge', nota: 7 } ]
let nomeDosAlunosComMediaMaiorQue6 = 
    alunosComMediaMaiorQue6.map(aluno => aluno.nome);
console.log(nomeDosAlunosComMediaMaiorQue6);
//[ 'Ana', 'Jorge' ]

//SOME e EVERY
let temImpar = numeros.some(num => num % 2 !== 0);
console.log(temImpar); //TRUE
let todosPares = numeros.every(num => num % 2 === 0);
console.log(todosPares);//False