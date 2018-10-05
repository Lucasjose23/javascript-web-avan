// JavaScript Document
window.onload = function() {
    var url         = "http://api.openweathermap.org/data/2.5/weather?";
    var minhaAPI    = "fb1a9d1a10d10ba2e4e650f6c470e857";
    var resultado;
    var cidade;
    var resultado;
    
    cidades.onchange  = function() {
        
		var ajax = null;
		if( window.XMLHttpRequest ) {   
			ajax = new XMLHttpRequest();
		} else if( window.ActiveXObject ) {
			ajax = new ActiveXObject('Msxml2.XMLHTTP');	
		}
        cidade=cidades.value
        ///sem a chave nao tem autorizaçao para pegar
        if ( cidade != 0 ) {
            ajax.open("GET", url + '&appid=' + minhaAPI + '&q=' + cidade ,true);
           ajax.send(null);
            ajax.onreadystatechange = function() { 
                if (ajax.readyState == 4) {
                    if( ajax.status == 200 ) {
                            resultado=JSON.parse(ajax.responseText);
                            temp_min.innerHTML="Tempo minimo="+resultado.main.temp_min;
                            temp_max.innerHTML="Tempo minimo="+resultado.main.temp_max;
                            nome.innerHTML="Cidade="+resultado.name;
                        
                    }
                }
            }
        }
	};
}