console.log("\n===== EXERCÍCIO 3 =====");

console.log("O programa não deve confiar totalmente em dados vindos do usuário, APIs ou arquivos.");

function validarIdade(idade) {

    if (typeof idade !== "number") {
        console.log("Erro: era esperado um número.");
        return false;
    }

    if (idade < 0 || idade > 120) {
        console.log("Erro: idade fora do intervalo permitido.");
        return false;
    }

    console.log("Idade válida.");
    return true;
}

validarIdade("30");
validarIdade(30);
validarIdade(150);