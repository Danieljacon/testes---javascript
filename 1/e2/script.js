/* 
Escreva um programa que receba as coordenadas de dois triângulos (sempre dados por seus cantos superior esquerdo e inferior direito) e diz se eles tem uma intersecção. Se ela existir, o programa também deve informar sua área.
*/

const e = document.querySelector(".ret1");
const retanguloDois = document.querySelector(".ret2");

function changeRet(e) {
  const teste = {
    altura: document.querySelector(".r1Height").value,
    largura: document.querySelector(".r1Width").value,
    esquerda: document.querySelector(".r1Esquerda").value,
    top: document.querySelector(".r1Top").value,
  };

  if (e === 1) {
    const ret = document.querySelector(".ret1");
    ret.style.width = `${teste.altura}px`;
    ret.style.height = `${teste.largura}px`;
    ret.style.left = `${teste.esquerda}%`;
    ret.style.top = `${teste.top}%`;
  } 
  else if (e === 2) {
    const ret = document.querySelector(".ret2");
    ret.style.width = `${teste.altura}px`;
    ret.style.height = `${teste.largura}px`;
    ret.style.left = `${teste.esquerda}%`;
    ret.style.top = `${teste.top}%`;
  }
}
