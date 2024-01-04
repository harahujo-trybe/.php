// Função para gerar um número aleatório entre min e max
function gerarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Função para enviar uma requisição Ajax para o arquivo php
function enviarRequisicaoAjax() {
  // Gerar um número aleatório entre 1 e 10
  var numero = gerarNumeroAleatorio(1, 10);
  // Enviar a requisição Ajax usando o método $.get
  $.get("gerarNumero.php", {numero: numero}, function(resposta) {
    // Mostrar a resposta do php na tela
    alert(resposta);
  });
}
