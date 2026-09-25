console.log("\n===== EXERCÍCIO 11 =====");

function testeDebug(x) {

    const y = x * 2;

    debugger;

    return y;
}

console.log(testeDebug(5));

console.log("Relatório:");
console.log("Quando o código chega ao debugger, a execução é pausada se o DevTools estiver aberto.");
console.log("Nesse momento é possível visualizar as variáveis e avançar passo a passo pelo código.");
