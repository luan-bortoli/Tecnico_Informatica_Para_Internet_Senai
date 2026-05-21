let dia = Number(prompt('Digite o número do dia (1=Dom, 2=Seg...7=Sáb):'));
let nomeDia;
 
switch (dia) {
    case 1: 
        nomeDia = 'Domingo';
    break;
    case 2: 
        nomeDia = 'Segunda-feira'; 
    break;
    case 3: 
        nomeDia = 'Terça-feira';   
    break;
    case 4: 
        nomeDia = 'Quarta-feira'; 
    break;
    case 5: 
        nomeDia = 'Quinta-feira';  
    break;
    case 6: 
        nomeDia = 'Sexta-feira';   
        break;
    case 7: 
        nomeDia = 'Sábado';        
        break;
    default: 
        nomeDia = 'Número inválido';  
    break;
}
 
console.log("Dia: " + nomeDia);
