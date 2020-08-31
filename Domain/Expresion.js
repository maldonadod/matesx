const Literal = require("./Literal");

const OPERADOR_RESTA = "-"
const OPERADOR_SUMA = "+"
const OPERADOR_MULTIPLICACION = "*"
const OPERADOR_DIVISION = "/"

const omit = {
  add(expresion) {
    return expresion
  },
  multiply(expresion) {
    return expresion
  },
  subtract(expresion) {
    return expresion
  },
  divide(expresion) {
    return expresion
  }
}

class Expresion {
  static desde(expresion) {
    if (expresion.includes(OPERADOR_SUMA)) {
      return expresion
        .split(OPERADOR_SUMA)
        .reduce((expresion1, expresion2) => {
          return expresion1.add(Expresion.desde(expresion2))
        }, omit)
    }
    if (expresion.includes(OPERADOR_RESTA)) {
      return expresion
        .split(OPERADOR_RESTA)
        .reduce((expresion1, expresion2) => {
          return expresion1.subtract(Expresion.desde(expresion2))
        }, omit)
    }
    if (expresion.includes(OPERADOR_MULTIPLICACION)) {
      return expresion
        .split(OPERADOR_MULTIPLICACION)
        .reduce((expresion1, expresion2) => {
          return expresion1.multiply(Expresion.desde(expresion2))
        }, omit)
    }
    if (expresion.includes(OPERADOR_DIVISION)) {
      return expresion
        .split(OPERADOR_DIVISION)
        .reduce((expresion1, expresion2) => {
          return expresion1.divide(Expresion.desde(expresion2))
        }, omit)
    }
    return new Literal(parseInt(expresion))
  }
}

module.exports = Expresion;