class Atleta {
  peso;
  categoria;
  constructor(peso) {
    this.peso = peso;
    // inicializa para registar categoria junto ao objeto
    this.init();
  }

  init() {
    if (this.peso <= 50) {
      this.categoria = "infantil";
    } else if (this.peso <= 65) {
      this.categoria = "juvenil";
    } else {
      this.categoria = "adulto";
    }
  }
}

class Lutador extends Atleta {
  constructor(peso) {
    super(peso);
    this.init();
  }

  init() {
    if (this.peso <= 54) {
      this.categoria = "pluma";
    } else if (this.peso <= 60) {
      this.categoria = "leve";
    } else if (this.peso <= 75) {
      this.categoria = "meio leve";
    } else {
      this.categoria = "pesado";
    }
  }
}

const corredor = new Atleta(60);
console.log(corredor);

const mma = new Lutador(110);
console.log(mma);
