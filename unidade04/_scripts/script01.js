function atribuirTexto() {
    nome.value = "ander";
}
function iniciar () {
    botao.addEventListener("click",atribuirTexto);//chamou um evento oelo id
    
}
window.onload=iniciar;
