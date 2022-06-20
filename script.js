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
    let cronometro=0
    let stop=setInterval(relogio,1000)
function relogio(){
    cronometro++
    document.querySelector(".relogio").innerHTML=`${cronometro}`
}
let lista=[];
let jogadas=0
let cartasviradas=0
function virarcarta (elemento) { 
    if (cartasviradas!==2){     
    let valor= elemento.classList.contains("flip")
    if (!valor){
    cartasviradas++
    lista.push(elemento);
    elemento.classList.add("flip"); 
    elemento.classList.remove("desflip");
    elemento.querySelector(".back").classList.add("show");
    elemento.querySelector(".front").classList.remove("show");       
    jogadas++
        if (lista.length%2 ==0){            
        if (elemento.innerHTML!==lista[lista.length-2].innerHTML){
            setTimeout(diferente,1800)                             
            } else
            cartasviradas=0
             if (lista.length==quant) { 
                setTimeout(fimdejogo,500);
                clearInterval(stop);
            } 
    }
}
}
}
function diferente (){
    lista[lista.length-1].querySelector(".back").classList.remove("show");
    lista[lista.length-1].querySelector(".front").classList.add("show");
    lista[lista.length-2].querySelector(".back").classList.remove("show");
    lista[lista.length-2].querySelector(".front").classList.add("show");
    lista[lista.length-2].querySelector(".front").parentNode.classList.add("desflip");
    lista[lista.length-1].querySelector(".back").parentNode.classList.add("desflip");
    lista[lista.length-2].querySelector(".front").parentNode.classList.remove("flip");
    lista[lista.length-1].querySelector(".back").parentNode.classList.remove("flip");
    lista.splice(lista.length-1,1);
    lista.splice(lista.length-1,1);
    cartasviradas=0
}

function fimdejogo (){
    alert (`Parabéns, você ganhou em ${jogadas} jogadas e em ${document.querySelector(".relogio").innerHTML} segundos! `)
    }