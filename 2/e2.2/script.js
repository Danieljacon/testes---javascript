/* 
Escreva um programa que recebe um valor inteiro n e diz se este valor é um número primo. Se não for, o programa apresenta uma lista dos números que dividem n.
*/

const inputNumber = document.querySelector(".inputNumber");

function primos(n) {
  for (let divisor = 2; divisor < n; divisor++)
    if (n % divisor == 0) return false;
  return true;
}

function testePrimo() {
    if (primos(inputNumber.value)) {
        alert("É primo");
    } else {
        alert("Não é primo");
        for (let i = 0; i <= inputNumber.value; i++) {
            if (inputNumber.value % i === 0) {
             alert(`Ele é divisivel por: ${i}`);
            }
          };
        
    }
}