window.onload=function() {
    var caixa=document.querySelector("input#nome");
    caixa.onfocus=function(){
        console.log("focu");//da o focu
    }
    caixa.onblur =function(){
        console.log("tira ofocu");
    }
}