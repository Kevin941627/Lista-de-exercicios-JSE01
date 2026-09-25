console.log("\n===== EXERCÍCIO 12 =====");

function interno(m) {
    return m * 3;
}

function externo(n) {
    return interno(n) + 1;
}

console.log("Resultado:", externo(4));

console.log("Step Over: executa a chamada da função sem entrar nela.");
console.log("Step Into: entra dentro da função interno para acompanhar sua execução.");
console.log("Step Out: sai da função atual e retorna para a função que fez a chamada.");

