let nickName = "GoldenN9";


function subtrair (vitoria, derrota){
    return vitoria - derrota;
}
let resultado = subtrair(392, 248);

let elos = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"];
let limites = [10, 20, 50, 80, 90, 100, Infinity];

for(let i = 0; i < limites.length; i++){
    if(resultado <=limites[i]){
        console.log("O herói " + nickName + " tem de saldo de " + resultado + " e está no Elo " + elos[i] + ".");
        break;
    }
}