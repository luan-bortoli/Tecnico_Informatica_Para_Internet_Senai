// // let frase = " Olá Mundo ";
// // console.log(frase.toLowerCase());// olá mundo 
// // console.log(frase.toUpperCase());// OLÁ MUNDO 
// // console.log(frase.trim());//Olá Mundo
// // console.log(frase.trimStart());//Olá Mundo 
// // console.log(frase.trimEnd());// Olá Mundo
// // console.log(frase.repeat(100));
// // console.log(frase.trim().repeat(100));
// let frase2 = "Olá Mundo";
// console.log(frase2.length); //9
// console.log(frase2[0]);// O
// console.log(frase2[9]);// undefined
// console.log(frase2.at(-1));// d

// let texto = 'Lógica de Programação em Javascript';
// let includeTexto = texto.includes('Javascript');
// console.log(includeTexto);
// let a = texto.startsWith("Lógica");
// console.log(a);
// let b = texto.endsWith('script');
// console.log(b);

let frase3 = "O gato viu o gato";
console.log(frase3.replace('gato', 'cachorro'));
//O cachorro viu o gato
console.log(frase3.replaceAll('gato', 'cachorro'));
//O cachorro viu o cachorro

//SPLIT
let csv = 'Ana;Bruno;Carla;Diego';
let nomes = csv.split(';');
console.log(nomes);//[ 'Ana', 'Bruno', 'Carla', 'Diego' ]
let apenas2Nomes = csv.split(';', 2);
console.log(apenas2Nomes); //[ 'Ana', 'Bruno' ]
console.log('hello'.split(''));
//[ 'h', 'e', 'l', 'l', 'o' ]

//padStart | padEnd
console.log('50'.padStart(5, '0'));//00050
console.log('olá'.padEnd(10, '.'));
// olá.......
// olá.......