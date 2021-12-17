/* 
Escreva um programa que receba uma lista de inteiros como o que está abaixo
1  2  1  5  3  1
e produz o gráfico de barras ascendentes a seguir:
*/


const display = document.querySelector(".result");

function grafico() {

    const v1 = document.querySelector('.valor1').value;
    const v2 = document.querySelector('.valor2').value;
    const v3 = document.querySelector('.valor3').value;
    const v4 = document.querySelector('.valor4').value;
    const v5 = document.querySelector('.valor5').value;

    const numeros = [
        v1, v2, v3, v4, v5
    ];


  display.innerHTML = "";
  for (let i = 0; i < numeros.length; i++) {
    display.innerHTML += `
        <div class="barra">
        ${"*".repeat(numeros[i])}
        </div>`;
  }
}

grafico();
