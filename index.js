var setaDireita = window.document.getElementById("seta-direita")
var Leonardo = window.document.getElementById("leonardo")
var Samanta = window.document.getElementById("samanta")
var Bruna = window.document.getElementById("bruna")
var setaEsquerda = window.document.getElementById("seta-esquerda")

function RolarParaDireita(){
    Leonardo.style ="display:none"
    Bruna.style ="display:flex"
    setaDireita.style ="display:none"
    setaEsquerda.style ="display:flex; margin-top: 55px"
}

function RolarParaEsquerda(){
    setaDireita.style ="display:flex; margin-top: 55px"
    setaEsquerda.style ="display:none"
    Leonardo.style ="display:flex"
    Bruna.style ="display:none"
}




