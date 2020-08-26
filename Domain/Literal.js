class Literal {
  constructor(numero) {
    this.numero = Number.isNaN(numero)
      ? 0
      : numero;
  }
  equivale(otraExpresion) {
    return otraExpresion.numero === this.numero
  }
  add(otroLiteral) {
    return new Literal(this.numero + otroLiteral.numero)
  }
  subtract(otroLiteral) {
    return new Literal(this.numero - otroLiteral.numero)
  }
}

module.exports = Literal;