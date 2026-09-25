console.log("\n===== EXERCÍCIO 7 =====");

function safeParseFinally(jsonString) {

    try {
        return JSON.parse(jsonString);

    } catch (erro) {

        if (erro instanceof SyntaxError) {
            return null;
        } else {
            throw erro;
        }

    } finally {
        console.log("Parse attempt finished");
    }
}

console.log(safeParseFinally('{"nome": "Leandromeda"}'));

console.log(safeParseFinally('texto inválido'));
