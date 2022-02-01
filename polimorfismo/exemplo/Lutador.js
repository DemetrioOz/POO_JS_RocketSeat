const Atleta = require("./Atleta");

class Lutador extends Atleta {
  constructor(peso) {
    super(peso);
  }

  definirCategoria() {
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

module.exports = Lutador;
