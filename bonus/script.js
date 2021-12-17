/* 
Escreva um programa que entregue o número de moedas necessárias para formar um número *m*, imprimindo este número e quais moedas usadas. O seu programa deve receber:
*/

function moedas(m) {
  const valor = document.querySelector(".valor");
  m = valor.value;

  let moedas = [
    { nome: "Moeda de 1,00", valor: 1 },
    { nome: "Moeda de 0,50", valor: 0.5 },
    { nome: "Moeda de 0,25", valor: 0.25 },
    { nome: "Moeda de 0,10", valor: 0.1 },
    { nome: "Moeda de 0,05", valor: 0.05 },
    { nome: "Moeda de 0,01", valor: 0.01 },
  ];

  let moedasUsadas = [];

  for (let i = 0; i < moedas.length; i++) {
    let moeda = moedas[i];
    let quantidade = Math.floor(m / moeda.valor);
    m = m % moeda.valor;
    moedasUsadas.push({ nome: moeda.nome, quantidade: quantidade });
  }

  const display = document.querySelector(".teste");
  display.innerHTML = "";
  display.innerHTML += "A quantidade necessária será de: <br>";

  moedasUsadas.map((e) => {
    if (e.quantidade > 0) {
      display.innerHTML += `${e.nome} = ${e.quantidade}x <br>`;
    }
    if (valor.value <= 0) {
      display.innerHTML = "Não é possível checar se o valor for 0 ou menor";
    }
  });

  valor.value = "";
  return moedasUsadas;
}
