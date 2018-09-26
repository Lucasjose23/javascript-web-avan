function pegarPosicao(e){
 
   
    if(e.clientY<10){
        var minhajanela=document.querySelector("#janela");
        minhajanela.style.display="block";
    }
}



//quando passar o mouse por cima
document.addEventListener("mousemove",pegarPosicao);