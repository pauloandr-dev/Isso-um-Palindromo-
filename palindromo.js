function verificarPalindromo() {
    var palavra = document.getElementById("inputPalavra").value.trim();

    // Verificador de campo vazio
    if (palavra === "") {
        mostrarMensagem("Por favor, digite uma palavra.", false);
        return;
    }

    // Remover espaços e converter palavra para minuscula
    var palavraInvertida = palavra.split("").reverse().join("");

    // Compara a palavra original com a invertida
    if (palavra.toLowerCase() === palavraInvertida.toLowerCase()) {
        mostrarMensagem(`A palavra "${palavra}" é um palíndromo!`, true);
    } else {
        mostrarMensagem(`A palavra "${palavra}" não é um palíndromo.`, false);
    }
}

function mostrarMensagem(mensagem, isPalindromo) {
    var resultadoElement = document.getElementById("resultado");

    // Texto
    resultadoElement.innerText = mensagem;
    resultadoElement.style.color = isPalindromo ? "green" : "red";
    resultadoElement.style.opacity = 1;

    // Fade do Texto
    setTimeout(function() {
        resultadoElement.style.opacity = 0;
    }, 3000);
}
