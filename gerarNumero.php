// Arquivo php que recebe o número enviado pelo Ajax e retorna um número aleatório
// Verificar se o parâmetro numero foi enviado pelo Ajax
if (isset($_GET["numero"])) {
  // Pegar o valor do parâmetro numero
  $numero = $_GET["numero"];
  // Gerar um número aleatório entre 1 e 100
  $aleatorio = rand(1, 100);
  // Retornar uma mensagem com o número enviado e o número gerado
  echo "Você enviou o número $numero e eu gerei o número $aleatorio.";
}
