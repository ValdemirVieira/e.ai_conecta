let pegandoValor = document.getElementById('metros');

function receberValor(){
   var emMetros = document.getElementById("metros").value;
   console.log(emMetros)
   var calc = Number(emMetros) * Number(3.5)

   //enviar dados para arquivo utilizando ID
   document.getElementById("valor_metros").innerHTML = calc
}

function tempoValor(){
   var minutos = document.getElementById("metros").value;
   
   var calc = Number(minutos) * Number(2)
   //enviar dados para arquivo utilizando ID
   document.getElementById("valor_metros").innerHTML = calc
}
