function atualizaCampo() {
    var selectPagamento = document.getElementById("pagamento");
    var campoPagamento = document.getElementById("campo-pagamento");
    campoPagamento.value = selectPagamento.options[selectPagamento.selectedIndex].text;
  }