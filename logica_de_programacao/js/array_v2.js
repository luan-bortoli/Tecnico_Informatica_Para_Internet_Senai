// let alfabeto = ['a', 'b', 'c', 'd', 'e']; 
// //5 Elementos - Indices 0 a 4
// alfabeto.push('f', 'g');
// //['a', 'b', 'c', 'd', 'e', 'f', 'g'];
// alfabeto.pop();
// //['a', 'b', 'c', 'd', 'e', 'f'];
// alfabeto.unshift('z', 'y');
// //['z', 'y', 'a', 'b', 'c', 'd', 'e', 'f'];
// alfabeto.shift();
// //['y', 'a', 'b', 'c', 'd', 'e', 'f'];
// let elementoRemovido = alfabeto.shift();
// //console.log(elementoRemovido); // y
// //[ 0 ,  1 ,  2,   3,   4,   5 ]
// //['a', 'b', 'c', 'd', 'e', 'f'];
// alfabeto.splice(1, 2);
// //[ 'a', 'd', 'e', 'f' ]
// alfabeto.splice(1, 0, 'x', 'y', 'w');
// //[ 'a', 'x', 'y', 'w', 'd', 'e', 'f' ]
// alfabeto.splice(0, 2, 'r', 's');
// //[ 'r', 's', 'y', 'w', 'd', 'e','f']
// alfabeto.sort();
// //['d', 'e', 'f', 'r', 's', 'w','y']
// alfabeto.reverse();
// //[ 'y', 'w', 's', 'r', 'f', 'e', 'd']
// //console.log(alfabeto);

// let numeros = [42, 17, 88, 53, 64, 91, 1, 5];
// //numeros.sort((a,b) => a - b);
// //[ 1,  5, 17, 42, 53, 64, 88, 91]
// //numeros.sort((a,b) => b - a);
// //[ 91, 88, 64, 53, 42, 17,  5,  1]
// //console.log(numeros);

// //console.log(alfabeto); //[ 'y', 'w', 's', 'r', 'f', 'e', 'd']
// alfabeto.slice(1); //['w', 's', 'r', 'f', 'e', 'd']
// alfabeto.slice(1, 3); //['w', 's']
// alfabeto.slice(-2);//['e', 'd']
// //let alfabetoModificado = alfabeto.slice(-2);
// //console.log(alfabetoModificado); //[ 'e', 'd' ] 

// let frutas = ['maçã', 'banana', 'laranja', 'banana', 'uva'];
// // console.log(frutas.indexOf('banana')); // 1
// // console.log(frutas.indexOf('manga')); // -1
// // console.log(frutas.lastIndexOf('banana')); // 3
// // console.log(frutas.includes('laranja')); //True
// // console.log(frutas.includes('manga')); //False

// // if (frutas.includes('banana')) {
// //     console.log("Temos banana");
// // }

// let alunos = [
//     {id: 1, nome: 'Ana', nota: 6.0}, // 0
//     {id: 2, nome: 'Bruna', nota: 5.0}, // 1
//     {id: 3, nome: 'Jorge', nota: 7.0} // 2
// ];
// let elementoEncontrado = alunos.find(aluno => aluno.nota >= 7);
// console.log(elementoEncontrado); //{ id: 3, nome: 'Jorge', nota: 7 }
// let elementoEncontradoIndex = alunos.findIndex(aluno => aluno.nota >= 7);
// console.log(elementoEncontradoIndex); //2
