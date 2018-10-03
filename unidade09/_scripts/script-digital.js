var intervalo,agora;
function mostrarHora() {
    agora=new Date();
    var hora=agora.getHours();
    var minuto=agora.getMinutes();
    var segundos=agora.getSeconds();
    
    relogio.innerHTML=hora+":"+minuto+":"+segundos;
    
}

function iniciar() {
    intervalo=setInterval(mostrarHora,1000);
    
}
    window.onload=iniciar;