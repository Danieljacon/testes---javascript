/* 
Escreva um programa que receba duas palavras a e b e dá um destes 3 diagnósticos:
a - As palavras a e b são iguais

b - As palavras a e b tem o mesmo tamanho, mas alguns caracteres são diferentes (dizer quantos)

c - A palavra a inclui a palavra b (dizer quantas vezes)

d - A palavra b inclui a palavra a (dizer quantas vezes)
*/

class ChecarPalavra {
  constructor() {
    this.palavra1 = document.querySelector(".palavra1");
    this.palavra2 = document.querySelector(".palavra2");
    this.result = document.querySelector(".result");
    this.button = document.querySelector(".button");
  }

  checar() {
    this.button.addEventListener("click", () => {
      this.result.innerHTML = "";

      let palavraUm = this.palavra1.value.toLowerCase();
      let palavraDois = this.palavra2.value.toLowerCase();

      if (palavraUm === palavraDois) {
        this.result.innerHTML = "As palavras são iguais";
      } else if (palavraUm.length === palavraDois.length) {
        let count = 0;
        for (let i = 0; i < palavraUm.length; i++) {
          if (palavraUm[i] != palavraDois[i]) {
            count++;
          }
        }
        this.result.innerHTML = `As palavras tem o mesmo tamanho, mas ${count} caracteres são diferentes`;
      } else if (palavraUm.includes(palavraDois)) {
        this.result.innerHTML = `A palavra ${palavraUm} inclui a palavra ${palavraDois}`;
      } else if (palavraDois.includes(palavraUm)) {
        this.result.innerHTML = `A palavra ${palavraDois} inclui a palavra ${palavraUm}`;
      } else {
        this.result.innerHTML = "As palavras não são iguais";
      }
    });
  }
}

const checarPalavra = new ChecarPalavra();
checarPalavra.checar();
