function iniciar() {
    escolhercidade.onclick= function(){
        if(escolhercidade.checked){
            cidade.style.display="block";            
        }else{
                  cidade.style.display="none";
            
        }
    }
    cidade.style.display="none";//some com as cidades
    
}






window.onload=iniciar;
