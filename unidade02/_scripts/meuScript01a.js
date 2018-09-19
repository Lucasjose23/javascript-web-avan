//var elemento=document.getElementById("opcoesPizza");
//jeito certo
var elemento=document.querySelector("#opcoesPizza");
//console.log(elemento.children);
//console.log(elemento.children[0].innerHTML);//retorna o elemento que esta na tag
//console.log(elemento.childElementCount);//numero de filhos
//console.log(elemento.firstElementChild.textContent);//mostra o primeiro
//console.log(elemento.firstChild);//mostra o elemento compreto
var tamanho=elemento.childElementCount;
for (var i=0;i<tamanho;i++)
    {
        console.log(elemento.children[i].innerHTML);
    }

