var modal1 = document.getElementById("meuModal");
var modal2 = document.getElementById("meuModal2");
var modal3 = document.getElementById("meuModal3");

var btn1 = document.getElementById("botao-tri");
var btn2 = document.getElementById("botao-anual");
var btn3 = document.getElementById("botao-se");

var closeBtn1 = document.getElementsByClassName("close2")[0];
var closeBtn2 = document.getElementsByClassName("close3")[0];
var closeBtn3 = document.getElementsByClassName("close4")[0];

btn1.onclick = function() {
    modal1.style.display = "block";
}
btn2.onclick = function() {
    modal2.style.display = "block";
}
btn3.onclick = function() {
    modal3.style.display = "block";
}

closeBtn1.onclick = function() {
    modal1.style.display = "none";
}
closeBtn2.onclick = function() {
    modal2.style.display = "none";
}
closeBtn3.onclick = function() {
    modal3.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal1) {
      modal1.style.display = "none";
    }else if(event.target == modal2) {
        modal2.style.display = "none";
      } else if (event.target == modal3) {
        modal3.style.display = "none";
      }else if (event.target == modal) {
        modal.style.display = "none";
      } 
}
