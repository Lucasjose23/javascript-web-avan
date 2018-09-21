function atribuirTexto(nomep) {
    nome.value = nomep;   
}

function iniciar() {
    botao.addEventListener("click",function() {
        atribuirTexto("fontineli");
        
    });
}

window.onload = iniciar;