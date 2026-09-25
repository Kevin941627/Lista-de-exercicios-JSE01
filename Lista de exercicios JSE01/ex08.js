console.log("\n===== EXERCÍCIO 8 =====");

class InvalidAgeError extends Error {

    constructor(message) {
        super(message);
        this.name = "InvalidAgeError";
    }
}

function checkAge(age) {

    if (age < 0 || age > 120) {
        throw new InvalidAgeError("Idade fora do intervalo");
    }

    return "Idade válida";
}

try {
    console.log("Idade -5:", checkAge(-5));
} catch (erro) {
    console.log("Erro:", erro.message);
}

try {
    console.log("Idade 30:", checkAge(30));
} catch (erro) {
    console.log("Erro:", erro.message);
}

try {
    console.log("Idade 200:", checkAge(200));
} catch (erro) {
    console.log("Erro:", erro.message);
}
