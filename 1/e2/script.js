/* 
Escreva um programa que receba as coordenadas de dois retângulos (sempre dados por seus cantos superior esquerdo e inferior direito) e diz se eles tem uma intersecção. Se ela existir, o programa também deve informar sua área.
*/
class Canto {
  constructor(e) {
    this.x = e;
    this.y = e;
  }
}

let cd1 = new Canto(), ce1 = new Canto(),
    cd2 = new Canto(), ce2 = new Canto();
    cd1.x = 2; cd1.y = 10; 
    ce1.x = 10; ce1.y = 2;
    
    cd2.x = 2; cd2.y = 5; 
    ce2.x = 5; ce2.y = 2;

    /*  TESTES //

    Quando tem:
    cd1.x = 2; cd1.y = 10; 
    ce1.x = 10; ce1.y = 2;
    
    cd2.x = 2; cd2.y = 5; 
    ce2.x = 5; ce2.y = 2;

    Quando não tem:
    cd1.x = 10; cd1.y = 2; 
    ce1.x = 2; ce1.y = 10;
    
    cd2.x = 2; cd2.y = 5; 
    ce2.x = 5; ce2.y = 2;
    */

function interseccao(cd1, ce1, cd2, ce2) { // canto inferior direito, canto superior esquerdo / (cd1, ce1) e (cd2, ce2)

  if (cd1.x == ce1.x || cd1.y == ce1.y || cd2.x == ce2.x || cd2.y == ce2.y) {
    return false;
  } else if (cd1.x >= ce2.x || cd2.x >= ce1.x) {
    return false;
  } else if (ce1.y >= cd2.y || ce2.y >= cd1.y) {
    return false;
  }
  return true;
}

const result = document.querySelector(".result");
if (interseccao(cd1, ce1, cd2, ce2)) {
  
  const area1 = (ce1.x - cd1.x) * (ce1.y - cd1.y); // area do primeiro retangulo
  const area2 = (ce2.x - cd2.x) * (ce2.y - cd2.y); // area do segundo retangulo
  const resultado = parseInt(area1 / area2); // area da intersecção (mas não sei se é assim que deve ser)
  result.innerHTML = `Há uma intersecção entre esses dois retângulos. <br> A área da intersecção é: ${resultado}`;
} else {
  result.innerHTML = "Não há intersecção entre esses dois retângulos";
}
