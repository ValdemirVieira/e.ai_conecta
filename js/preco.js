let pegandoValor = document.getElementById('metros');

function receberValor(){
   var emMetros = document.getElementById("metros").value;
   console.log(emMetros)
   var calc = Number(emMetros) * Number(3.5)

   //enviar dados para arquivo utilizando ID
   document.getElementById("valor_metros").innerHTML = calc
}