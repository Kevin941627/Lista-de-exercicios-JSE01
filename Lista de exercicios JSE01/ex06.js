console.log("\n===== EXERCÍCIO 6 =====");

function safeParseCondicional(jsonString) {

    try {
        return JSON.parse(jsonString);

    } catch (erro) {

        if (erro instanceof SyntaxError) {
            return null;
        } else {
            throw erro;
        }
    }
}

console.log(safeParseCondicional('{"nome": "Leandromeda"}'));
console.log(safeParseCondicional('texto inválido'));