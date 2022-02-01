const Veiculo = require("./Veiculo");

class Moto extends Veiculo {
  constructor() {
    // super = puxa atributos e metodos da classe pai
    super();
    this.rodas = 2;
  }
}

module.exports = Moto;
