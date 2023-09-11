let prompt = require('prompt-sync')();

let alturaZe = parseFloat(prompt("Digite a altura de Zé em centímetros:"));
let alturaChico = parseFloat(prompt("Digite a altura de Chico em centímetros:"));

let taxaCrescimentoChico = parseFloat(prompt("Digite a taxa de crescimento anual de Chico (em centímetros por ano):"));
let taxaCrescimentoZe = parseFloat(prompt("Digite a taxa de crescimento anual de Zé (em centímetros por ano):"));

let anos = 0;

while (alturaZe <= alturaChico) {
  alturaChico += taxaCrescimentoChico;
  alturaZe += taxaCrescimentoZe;
  anos++;
}

if (alturaChico > alturaZe) {
  console.log(`Chico gastará ${anos} anos para passar a altura de Zé.`);
} else {
  console.log(`Zé gastará ${anos} anos para passar a altura de Chico.`);
}
