let cartas = [
    `<div class="carta"><img src="./images/bobrossparrot.gif"></div>`,
    `<div class="carta"><img src="./images/bobrossparrot.gif"></div>`,
    `<div class="carta"><img src="./images/explodyparrot.gif"></div>`,
    `<div class="carta"><img src="./images/explodyparrot.gif"></div>`,
    `<div class="carta"><img src="./images/fiestaparrot.gif"></div>`,
    `<div class="carta"><img src="./images/fiestaparrot.gif"></div>`,
    `<div class="carta"><img src="./images/metalparrot.gif"></div>`,
    `<div class="carta"><img src="./images/metalparrot.gif"></div>`,
    `<div class="carta"><img src="./images/revertitparrot.gif"></div>`,
    `<div class="carta"><img src="./images/revertitparrot.gif"></div>`,
    `<div class="carta"><img src="./images/tripletsparrot.gif"></div>`,
    `<div class="carta"><img src="./images/tripletsparrot.gif"></div>`,
    `<div class="carta"><img src="./images/unicornparrot.gif"></div>`,
    `<div class="carta"><img src="./images/unicornparrot.gif"></div>`
];
let selecionadas =[]
let quant = Number (prompt("Quantas cartas quer jogar? (Número par de 4 a 14)"))
while ((quant < 4) | (quant >14) | (quant%2!==0)){
    quant = prompt("Incorreto, tente novamente! (Número par de 4 a 14)")
}
for (let i = 0; i < quant; i++){
    selecionadas[i]=cartas[i];
}
function comparador() { 
	return Math.random() - 0.5; 
}
comparador ()
selecionadas.sort(comparador);  
for (let i = 0; i < quant; i++) {
    document.querySelector(".jogo").innerHTML += `${selecionadas[i]}`
}