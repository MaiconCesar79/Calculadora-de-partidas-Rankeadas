const prompt = require('prompt-sync')();

console.log("bem vindo herói!\nPara calculamos seu Rank"+ 
"precisaremos que voce informe alguns dados!");
let vitorias = 0;
let derrotas = 0;
let laco = 0;

do{
    vitorias = prompt("Informe o numeros de vitoria: ");
    laco =1;
}while(laco != 1)