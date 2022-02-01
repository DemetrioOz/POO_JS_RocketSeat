class Veiculo {
  rodas = 4;
  mover(direcao) {}
  virar(direcao) {}
}

class Moto extends Veiculo {
  constructor() {
    // super = puxa atributos e metodos da classe pai
    super();
    this.rodas = 2;
  }
}

let veiculo = new Veiculo();
console.log(veiculo);

let moto = new Moto();
console.log(moto);
