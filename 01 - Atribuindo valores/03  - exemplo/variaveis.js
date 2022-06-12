
console.log("Test de hoistling");

numberOne = 1;
console.log(numberOne+2);
var numberOne; // funciona

/*
numberOne = 1;

console.log(numberOne+2);

let numberOne; // da erro
*/
console.log("");
console.log("Teste de escopo");
var firstName = 'João'; // escopo global
var lastName = 'Fernando'; // escopo global

if (firstName === 'João') {
    var firstName = 'Pedro '
    let lastName = 'Silva' // escopo de bloco
}
console.log(firstName, lastName);
console.log("");
console.log("Teste de reatribuição e redeclaração");
console.log("");
var firstName2 = 'João'; // escopo global
let lastName2 = 'Fernando'; // escopo bloco

if (firstName2 === 'João') {
    let lastName2 = 'nao eh possivel redaclarar um let, somente o var'
    lastName2 = 'reatribuição no let';
    var firstName2 = 'Pedro '
    console.log(lastName2);
}
console.log(firstName2, lastName2);
console.log("");