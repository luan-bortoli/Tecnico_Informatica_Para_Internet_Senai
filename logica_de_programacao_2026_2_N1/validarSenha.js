//2. Validação de senha
// Defina uma senha fixa no código (por exemplo, "js123"). 
// Use while para pedir a senha repetidamente até que o usuário 
// acerte. Limite a 3 tentativas: se errar as 3 vezes, 
// exiba "Acesso bloqueado"; se acertar, exiba "Acesso liberado".
let tentativas = 0;
const senha = "js123";
let senhaDigitada = "";
while (senha !== senhaDigitada && tentativas < 3) {
    senhaDigitada = prompt("Digite uma senha");
    tentativas++;
    if (senha === senhaDigitada) {
        console.log("Acesso Liberado");
    } else if (tentativas === 3) {
        console.log("Acesso Negado");
    } else {
        console.log("Tente novamente");
    }
}