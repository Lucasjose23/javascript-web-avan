var agora;
function mostrarHora(){
    agora=new Date();
    var h=agora.getHours();
    var m=agora.getMinutes();
    var s=agora.getSeconds();
  
    
     var ph=    h*30 + m/2;
    var pm=     m*6 + (s*6)/60;
    var ps=     s*6;
    
    
    hora.style.transform="rotate("+ph+"deg)";
     minuto.style.transform="rotate("+pm+"deg)";
     segundo.style.transform="rotate("+ps+"deg)";
    
    
    
    
    
}
var intervalo=setInterval(mostrarHora,1000);
function iniciar() {
    
    
}
window.onload=iniciar;