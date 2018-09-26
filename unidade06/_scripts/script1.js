//varias maneira de detectar a largura
function detectarResulucao(){
    var largura;
    var arquivoCSS=document.querySelector("#meuCSS");
    if(window.innerWidth){
        
        largura=window.innerWidth;
        
    }else if ( document.documentElement && document.documentElement.clientWidth){
        largura=document.documentElement.clientWidth;
        
    }else if(document.body){
                largura=document.body;
        
    }
    ///altera para mobile
    if(largura < 400){
        arquivoCSS.setAttribute("href","_css/css_smartphone.css");
        
        
        
    }else {
         arquivoCSS.setAttribute("href","_css/css_desktop.css");
        
    }
    
}



//quando muda o tamanho da janela
window.onload =window.onresize= detectarResulucao;