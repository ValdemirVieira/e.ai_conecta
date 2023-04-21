//verificando login
const loginBtn = document.getElementById('login-button');

loginBtn.addEventListener('click', () => {
  localStorage.setItem('loggedIn', true);
});

//alterando menu de navegação
const loggedIn = localStorage.getItem('loggedIn');
var deslogado = document.getElementById("deslogado");
var logado = document.getElementById("logado");
if (loggedIn) {
    logado.style.display= "block"
    deslogado.style.display = "none"
} else {
 logado.style.siplay = none
}