//mudando o classe name
function mudaCor(corp){
   document.querySelector("#janela").className=corp;
    
}


function iniciar() {
    botao1.addEventListener("click",function(){
        mudaCor("amarelo");
    });
     botao2.addEventListener("click",function(){
        mudaCor("vermelho");
    });
}
window.onload=iniciar;