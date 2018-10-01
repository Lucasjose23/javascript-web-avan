//mudanca de imagem
function iniciar (){
    var minhafoto=document.querySelector("#espacofoto");
   setTimeout(mudarfoto,5000);
   function mudarfoto(){
            minhafoto.setAttribute("src","_img/basilica.jpg");
     }
    
}




window.onload=iniciar;