/* 
Escreva um programa que recebe um número n e imprime na tela
1
2 2
3 3 3
4 4 4 4
...
n n n n n

Depois de fazer isso, altere seu programa para achar a soma de todos os números que foram impressos.

E depois disso, mude seu programa para imprimir a soma de cada linha depois dela ser impressa.
*/


class Teste {
  constructor() {
    this.inputText = document.querySelector(".inputText");
    this.result = document.querySelector(".result");
    this.total = document.querySelector(".total");
  }

  numeros() {
    this.total.innerHTML = "";
    this.result.innerHTML = "";

    let soma = 0;
    for (let i = 0; i < this.inputText.value; i++) {
      let valor = "";
      for (let index = 0; index <= i; index++) {
        valor += `${i + 1} `;
      }

      const somaPorItem = parseFloat(valor) * parseFloat(valor);
      soma += somaPorItem;

      this.result.innerHTML += ` ${valor}
            <br>
            <p> Soma por linha: ${somaPorItem}</p>
            `;
    }
    this.total.innerHTML += `<p>Soma total: ${soma}</p>`;
  }
}

const testando = new Teste();
