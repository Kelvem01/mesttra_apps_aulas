let prompt = require('prompt-sync')();

const mesInicial = parseInt(prompt("Digite o mês inicial 1 a 12:"));
const mesFinal = parseInt(prompt("Digite o mês final 1 a 12:"));

// Variável para armazenar a quantidade de dias
let totalDias = 0;

// Verifica se o mês inicial é maior que o mês final
if (mesInicial > mesFinal) {
  console.log("Mês inicial não pode ser maior que o mês final.");
} else {
  // Loop que percorre os meses do mês inicial até o mês final
  for (let i = mesInicial; i <= mesFinal; i++) {
    // Verifica se o mês é par ou ímpar e adiciona os dias corretos
    if (i <= 7 && i % 2 === 1) {
      totalDias += 31; // Meses ímpares de 1 a 7 têm 31 dias
    } else if (i <= 7 && i !== 2) {
      totalDias += 30; // Meses pares de 1 a 7, exceto fevereiro, têm 30 dias
    } else if (i > 7 && i % 2 === 0) {
      totalDias += 31; // Meses pares de 8 a 12 têm 31 dias
    } else {
      totalDias += 30; // Meses ímpares de 8 a 12 têm 30 dias
    }
  }

  console.log(`A quantidade de dias entre os meses é: ${totalDias}`);
}
