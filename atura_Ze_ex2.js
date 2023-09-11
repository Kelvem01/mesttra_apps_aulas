
let chico = 150 // cresce 2 cm por ano 
let ze = 110 // cresce 3 cm por nao 

const taxaCrescimentoChico = 2;
const taxaCrescimentoZe = 3;

let anos = 0;

while (ze <= chico ){
    
    chico += taxaCrescimentoChico;
    ze += taxaCrescimentoZe;
    anos ++;
}

console.log(`Ze gastara ${anos} anos para passa a altura de chico  `);