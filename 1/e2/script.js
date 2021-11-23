/* 
Escreva um programa que receba as coordenadas de dois triângulos (sempre dados por seus cantos superior esquerdo e inferior direito) e diz se eles tem uma intersecção. Se ela existir, o programa também deve informar sua área.
*/

function changeRet(e) {
  const retanguloUm = {
    altura: document.querySelector(".r1Height").value,
    largura: document.querySelector(".r1Width").value,
    esquerda: document.querySelector(".r1Esquerda").value,
    top: document.querySelector(".r1Top").value,
  };
  const retanguloDois = {
    altura: document.querySelector(".r2Height").value,
    largura: document.querySelector(".r2Width").value,
    esquerda: document.querySelector(".r2Esquerda").value,
    top: document.querySelector(".r2Top").value,
  };

  if (e === 1) {
    const ret = document.querySelector(".ret1");
    ret.style.width = `${retanguloUm.altura}px`;
    ret.style.height = `${retanguloUm.largura}px`;
    ret.style.left = `${retanguloUm.esquerda}%`;
    ret.style.top = `${retanguloUm.top}%`;
  } else if (e === 2) {
    const ret = document.querySelector(".ret2");
    ret.style.width = `${retanguloDois.altura}px`;
    ret.style.height = `${retanguloDois.largura}px`;
    ret.style.left = `${retanguloDois.esquerda}%`;
    ret.style.top = `${retanguloDois.top}%`;
  }
}
