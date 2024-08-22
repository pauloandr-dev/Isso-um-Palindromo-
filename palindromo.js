essaPalavraEUmPalindromo();

function essaPalavraEUmPalindromo () {
    var palavra = prompt("Escolha uma palavra para verificar se e um palindromo:");
    var seprandoAsLetrasDaPalavra = palavra.split("");
    var palavraInvertida = seprandoAsLetrasDaPalavra.reverse("");
    palavraInvertida = palavraInvertida.join("");
        if (palavra == palavraInvertida){
            console.log(`A palavra ${palavra} é um palindromo!`);
        } else {
            console.log(`A palavra ${palavra} não é um palindromo!`)
        }
}

