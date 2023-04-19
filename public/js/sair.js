var modal = document.getElementById("myModal");
var btn1 = document.getElementById("saindo");
var closeBtn = document.getElementsByClassName("btn-nao")[0];
var closeBtn1 = document.getElementsByClassName("close")[0];

btn1.onclick = function() {
    modal.style.display = "block";
}
// Quando o usuário clicar no botão de fechar, o modal será fechado
closeBtn.onclick = function() {
    modal.style.display = "none";
}
closeBtn1.onclick = function() {
    modal.style.display = "none";
}

// Quando o usuário clicar em qualquer lugar fora do modal, o modal será fechado
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}