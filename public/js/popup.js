// Seleciona o modal
var modal = document.getElementById("myModal");

// Seleciona o botão 1
var btn1 = document.getElementById("btn1");

// Seleciona o botão 2
var btn2 = document.getElementById("btn2");

// Seleciona o botão de fechar
var closeBtn = document.getElementsByClassName("close")[0];

// Adiciona evento de clique ao botão 1 e ao botão 2
btn1.onclick = function() {
  modal.style.display = "block";
}

btn2.onclick = function() {
  modal.style.display = "block";
}

// Quando o usuário clicar no botão de fechar, o modal será fechado
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// a função que fecha o popup esta em assinatura.js