class Parafuso {
  // superclasse abstrata
  constructor() {
    if (this.constructor === Parafuso) {
      throw new Error(
        "Classe abstrata não instanciada não pode ser instanciada"
      );
    }
  }
  get tipo() {
    throw new Error("Metodo 'get tipo()' precisa ser implementado");
  }
}

class Fenda extends Parafuso {
  constructor() {
    super();
  }

  get tipo() {
    return "fenda";
  }
}

class Philiphs extends Parafuso {
  constructor() {
    super();
  }

  get tipo() {
    return "philiphs";
  }
}

class Allen extends Parafuso {}

// cria e usa
// new Parafuso(); // 'Classe abstrata não pode ser instanciada'
let fenda = new Fenda();
let philiphs = new Philiphs();
let allen = new Allen();

console.log(fenda.tipo, philiphs.tipo);
// console.log(allen.tipo); // precisa da implementação do get
