let cartas = [
    `<div class="carta" onclick="virarcarta(this)" ><img class="back" src="./images/bobrossparrot.gif"> <img class="front show" src="./images/front.png"> </div>`,
    `<div class="carta" onclick="virarcarta(this)" ><img class="back" src="./images/bobrossparrot.gif"> <img class="front show" src="./images/front.png"> </div>`,
    `<div class="carta" onclick="virarcarta(this)" ><img class="back" src="./images/explodyparrot.gif"> <img class="front show" src="./images/front.png"> </div>`,
    `<div class="carta" onclick="virarcarta(this)" ><img class="back" src="./images/explodyparrot.gif"> <img class="front show" src="./images/front.png"> </div>`,
    `<div class="carta" onclick="virarcarta(this)" ><img class="back" src="./images/fiestaparrot.gif"> <img class="front show" src="./images/front.png"> </div>`,
    `<div class="carta" onclick="virarcarta(this)" ><img class="back" src="./images/fiestaparrot.gif"> <img class="front show" src="./images/front.png"> </div>`,
    `<div class="carta" onclick="virarcarta(this)" ><img class="back" src="./images/metalparrot.gif"> <img class="front show" src="./images/front.png"> </div>`,
    `<div class="carta" onclick="virarcarta(this)" ><img class="back" src="./images/metalparrot.gif"> <img class="front show" src="./images/front.png"> </div>`,
    `<div class="carta" onclick="virarcarta(this)" ><img class="back" src="./images/revertitparrot.gif"> <img class="front show" src="./images/front.png"> </div>`,
    `<div class="carta" onclick="virarcarta(this)" ><img class="back" src="./images/revertitparrot.gif"> <img class="front show" src="./images/front.png"> </div>`,
    `<div class="carta" onclick="virarcarta(this)" ><img class="back" src="./images/tripletsparrot.gif"> <img class="front show" src="./images/front.png"> </div>`,
    `<div class="carta" onclick="virarcarta(this)" ><img class="back" src="./images/tripletsparrot.gif"> <img class="front show" src="./images/front.png"> </div>`,
    `<div class="carta" onclick="virarcarta(this)" ><img class="back" src="./images/unicornparrot.gif"> <img class="front show" src="./images/front.png"> </div>`,
    `<div class="carta" onclick="virarcarta(this)" ><img class="back" src="./images/unicornparrot.gif"> <img class="front show" src="./images/front.png"> </div>`
];
let selecionadas =[]
let quant = Number (prompt("Quantas cartas quer jogar? (Número par de 4 a 14)"))
while ((quant < 4) | (quant >14) | (quant%2!==0)){
    quant = prompt("Incorreto, tente novamente! (Número par de 4 a 14)")
}
//Distribuição de cartas aleatoriamente
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
//Fim da distribuição
let lista=[];
let jogadas=0
function virarcarta (elemento) {    
    lista.push(elemento);
    elemento.classList.toggle("flip"); 
    elemento.classList.remove("desflip");
    elemento.querySelector(".back").classList.add("show");
    elemento.querySelector(".front").classList.remove("show");       
    jogadas++
        if (lista.length%2 ==0){
        if (elemento.innerHTML!==lista[lista.length-2].innerHTML){
            setTimeout(diferente,1800)                             
            } else if (lista.length==quant) { 
                setTimeout(fimdejogo,1800)
            } 
    }
}
function diferente (){
    lista[lista.length-1].querySelector(".back").classList.remove("show");
    lista[lista.length-1].querySelector(".front").classList.add("show");
    lista[lista.length-2].querySelector(".back").classList.remove("show");
    lista[lista.length-2].querySelector(".front").classList.add("show");
    lista[lista.length-2].querySelector(".front").parentNode.classList.toggle("desflip");
    lista[lista.length-1].querySelector(".back").parentNode.classList.toggle("desflip");
    lista[lista.length-2].querySelector(".front").parentNode.classList.remove("flip");
    lista[lista.length-1].querySelector(".back").parentNode.classList.remove("flip");
    lista.splice(lista.length-1,1);
    lista.splice(lista.length-1,1);
}

function fimdejogo (){
    alert (`Parabéns, você ganhou em ${jogadas} jogadas! `)
}

