// Criar um objeto XMLHttpRequest
var xhr = new XMLHttpRequest();

// Definir o tipo de resposta como JSON
xhr.responseType = "json";

// Abrir uma conexão com o arquivo .php
xhr.open("GET", "dados.usuario.php");

// Enviar a requisição
xhr.send();

// Esperar pela resposta
xhr.onload = function() {
    // Verificar se a resposta foi bem sucedida
    if (xhr.status == 200) {
        // Obter os dados da resposta
        var data = xhr.response;

        // Criar elementos HTML com os dados
        var container = document.getElementById("container");
        for (var i = 0; i < data.length; i++) {
            var item = document.createElement("div");
            item.className = "item";
            item.textContent = data[i].name + ": " + data[i].value;
            container.appendChild(item);
        }
    }
};
