/* 
Escreva um programa que receba as coordenadas de dois triângulos (sempre dados por seus cantos superior esquerdo e inferior direito) e diz se eles tem uma intersecção. Se ela existir, o programa também deve informar sua área.
*/

const retanguloUm = document.querySelector(".ret1");
const retanguloDois = document.querySelector(".ret2");

function changeColor1() {
  const altura = document.querySelector(".r1Height").value;
  const largura = document.querySelector(".r1Width").value;
  retanguloUm.style.width = `${altura}px`;
  retanguloUm.style.height = `${largura}px`;
}

function changeColor2() {
  const altura = document.querySelector(".r2Height").value;
  const largura = document.querySelector(".r2Width").value;
  retanguloDois.style.width = `${altura}px`;
  retanguloDois.style.height = `${largura}px`;
}
