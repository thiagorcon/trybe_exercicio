
let aliquotaINSS;
let aliquotaIR;

let salario = 3000.00;

if (salario<= 1556.94) {
  aliquotaINSS = (salario / 100) *8;
} else if (salario <= 2594.92) {
  aliquotaINSS = (salario / 100) *9;
} else if (salario <= 5189.82) {
  aliquotaINSS = (salario /100) *11;
} else {
  aliquotaINSS = 570.88;
}

let baseSalario = salario - aliquotaINSS;

if (baseSalario <= 1903.98) {
  aliquotaIR = 0;
} else if (baseSalario <= 2826.65) {
  aliquotaIR = ((baseSalario /100) * 7.5) - 142.80;
} else if (baseSalario <= 3751.05) {
  aliquotaIR = ((baseSalario/100) * 15) - 354.80;
} else if (baseSalario <= 4664.68) {
  aliquotaIR = ((baseSalario/100) * 22) - 636.13;
} else {
  aliquotaIR = ((baseSalario/100) * 27) - 869.36;
};

console.log("Salário: " + (baseSalario- aliquotaIR));
