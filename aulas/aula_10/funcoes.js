function Soma () {
    return 2 + 5; 
};

console.log( Soma());

function SomaII (n1, n2){
    console.log("O resultado da soma de", n1, "+", n2, "é", n1 + n2);
};

SomaII(8, 3);
SomaII(80, 23);

function Subtracao (n1, n2){
    console.log("O resultado da soma de", n1, "-", n2, "é", n1 - n2);
};

Subtracao(80, 23);

function multiplicacao (n1, n2){
    console.log("O resultado da soma de", n1, "*", n2, "é", n1 * n2);
};

multiplicacao(80, 23);

function divisao (n1, n2){
    console.log("O resultado da soma de", n1, "/", n2, "é", n1 / n2);
};

divisao(80, 23);


const Potencia = (x,y) => {
    let result = x^y;
    return `${x} elevado a ${y} é igual a ${result}`
}
console.log(Potencia(2,3))