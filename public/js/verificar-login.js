
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
verificalogin.addEventListener('click', () => {
  if (email && password) {
    // Verifica se os dados de login e senha estão corretos
    if (db[email] === password) {
      // Redireciona o usuário para a nova página
      window.location.href = "/";
    } else {
      // Mostra mensagem de erro
      alert("Dados de login incorretos. Por favor, tente novamente.");
    }
  } else {
    // Mostra mensagem de erro se os campos não estiverem preenchidos
    alert("Por favor, preencha todos os campos.");
  }
});




