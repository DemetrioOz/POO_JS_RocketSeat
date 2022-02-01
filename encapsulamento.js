class Poligono {
  constructor(altura, largura) {
    this.altura = altura;
    this.largura = largura;
  }

  get area() {
    return this.#calcularArea();
  }

  // metodo privado
  #calcularArea() {
    return this.altura * this.altura;
  }
}

let poligono = new Poligono(50, 60);

console.log(poligono);
console.log(poligono.area);
