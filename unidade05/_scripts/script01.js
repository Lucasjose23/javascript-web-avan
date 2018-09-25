///mudando css com o 
function mudaCor(corp){
    janela.style.backgroundColor=corp;
    
}
function iniciar() {
    botao1.addEventListener("click",function(){
        mudaCor("yellow");
    });
     botao2.addEventListener("click",function(){
        mudaCor("red");
    });
}
window.onload=iniciar;