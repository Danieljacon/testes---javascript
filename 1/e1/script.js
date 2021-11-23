/* 
1 - Escreva um programa que seja capaz de escrever os dígitos de um número de até 3 dígitos. Por exemplo, ao receber 358 seu programa deve escrever "três cinco oito".
*/

const numbers = [
  {
    1: "um",
    2: "dois",
    3: "três",
    4: "quatro",
    5: "cinco",
    6: "seis",
    7: "sete",
    8: "oito",
    9: "nove",
    0: "zero",
  },
];

function readNumbers() {
  const numberHtml = document.querySelector(".number");
  const numberDisplay = document.querySelector(".display");

  if (numberHtml.value.length === 3) {
    numberDisplay.innerHTML = "";
    for (let i = 0; i < numberHtml.value.length; i++) {
      numberDisplay.innerHTML += numbers[0][numberHtml.value[i]] + " ";
    }
  } else {
    numberDisplay.innerHTML = "Você precisa digitar três números";
  }
}

readNumbers();
