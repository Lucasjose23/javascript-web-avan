/*function controleFormulario(e) {
    e.preventDefault();
    
    var caixa_nome = nome.value;
    if ( caixa_nome == "") {
        mensagem.innerHTML = "Por favor, preencha este campo.";   
    }
}

function limparCaixa() {
    mensagem.innerHTML = "";   
}

function iniciar() {
    formViagem.onsubmit = controleFormulario;
    nome.onfocus = limparCaixa;
}

window.onload = iniciar;*/
function controleFormulario(e) {
    //controla o envio
    e.preventDefault();//para o envio
    var caixa_nome=nome.value;
    if(caixa_nome==""){
        mensagem.innerHTML="Por favor preencha";//é uma divi
        
    }
    
}
function limparCaixa(){
    mensagem.innerHTML="";//quando dar focu no input ja tira a mensagem
}

function iniciar(){
    //verificar se o formulario foi submetido
    formViagem.onsubmit=  controleFormulario; //onsubmit tem um parametro 
    nome.onfocus=limparCaixa;
}



window.onload = iniciar;