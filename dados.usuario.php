<?php
// Criar um array associativo com os dados
$data = array(
    array("name" => "Nome", "value" => "João"),
    array("name" => "Idade", "value" => "25"),
    array("name" => "Cidade", "value" => "Piracicaba")
);

// Enviar o cabeçalho com o tipo de conteúdo JSON
header("Content-Type: application/json");

// Enviar os dados em formato JSON
echo json_encode($data);
?>
