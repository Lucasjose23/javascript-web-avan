//op 1
var meuElemento= document.querySelector("#opcoesPizza");
var novaPizza =document.createElement("li");
meuElemento.appendChild(novaPizza);
novaPizza.innerHTML="quatro queijo";

//op2
meuElemento.appendChild(document.createElement("li")).innerHTML="6 queijos";

//forma mais otimizada
document.querySelector("#opcoesPizza").appendChild(document.createElement("li")).innerHTML="6 queijos";