function detectarTecla(e) {
    console.log(e.keyCode);//codigo da tabela
    console.log(e.key);//e a letra referente
    
    var tecla=e.keyCode;
    var meuParagrafo=document.querySelector("p");
    switch(tecla){
        case 37:
                meuParagrafo.innerHTML=  "esquerda";
                break;
        case 39:
                meuParagrafo.innerHTML=  "direita";
                break;       
         case 38:
                meuParagrafo.innerHTML=  "Up";
                break;
        case 40:
                meuParagrafo.innerHTML=  "down";
                break;
    }
    
}


document.addEventListener("keydown",detectarTecla);///quando chama esse evento ele gera um parametro altomativo