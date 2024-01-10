const prompt = require('prompt-sync')();

console.log("bem vindo herói!\nPara calculamos seu Rank "+ 
"precisaremos que voce informe alguns dados!");
let vitorias = 0;
let derrotas = 0;
let laco = 0;
let nivel = "";
let saldo = 0;

do{
    vitorias = prompt("Informe o numero de vitoria: ");
    derrotas = prompt("Informe o numero de derrotas: ");
    saldo = SaldoVitorias(vitorias,derrotas);
    nivel = verificadorRank(saldo);
    console.log("O Herói tem de saldo de vitórias " + saldo + " e está no nível de " + nivel);
    let decisao = prompt("Deseja recalcular seu rank?\nDigite s para recalcular e n para encerrar o programa: ");
    switch(decisao){
        case "s":
            break;
        case "n":
            laco = 1;
            break;
    }
}while(laco != 1)

function SaldoVitorias(vitoria, derrota){
    return vitoria - derrota;
}
function verificadorRank(saldo){
    let rank = "";
    if(saldo<=10){
        rank = "Ferro";
    }else if(saldo>=11 && saldo<=20){
        rank = "Bronze";
    }else if(saldo>=21 && saldo<=50){
        rank = "Prata";
    }else if(saldo>=51 && saldo<=80){
        rank = "Ouro";
    }else if(saldo>=81 && saldo<=90){
        rank = "Diamante";
    }else if(saldo>=91 && saldo<=100){
        rank = "Lendário";
    }else if(saldo>=101){
        rank = "Imortal"
    }
    return rank;
}