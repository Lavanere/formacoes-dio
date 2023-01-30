const peso = 83.0;
const altura = 1.83;

const imc = peso / altura ** 2;

if (imc < 18.5) {
    condicao = 'Abaixo do peso';
} else if (imc >= 18.5 && imc < 25) {
    condicao = 'Peso normal';
} else if (imc >= 25 && imc < 30) {
    condicao = 'Acima do peso';
} else if (imc >= 30 && imc <= 40) {
    condicao = 'Acima do peso';
} else {
    condicao = 'Obesidade Grave';
} 

console.log(condicao);