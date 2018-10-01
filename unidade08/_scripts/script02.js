var minhaFoto;
var albumFoto;
var indice;
var intervalo;
function mudaFoto() {
    minhaFoto.setAttribute("src",albumFoto[indice]);
        indice ++;
    if(indice>albumFoto.length-1)
        indice=0;
    
}


function iniciar (){
    minhaFoto=document.querySelector("#espacofoto");
    albumFoto=["_img/arco.jpg" , "_img/basilica.jpg" , "_img/coliseu.jpg"];
    indice =0;
    
  intervalo=setInterval( mudaFoto,2000);
    
    
    
    
    
}




window.onload=iniciar;