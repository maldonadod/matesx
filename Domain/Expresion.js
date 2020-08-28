const Literal = require("./Literal");

const SUBTRACT_OPERATOR = "-"
const ADITION_OPERATOR = "+"
const MULTIPLY_OPERATOR = "*"
const DIVISOR_OPERATOR = "/"

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
    if (expresion.includes(ADITION_OPERATOR)) {
      return expresion
        .split(ADITION_OPERATOR)
        .reduce((expresion1, expresion2) => {
          return expresion1.add(Expresion.desde(expresion2))
        }, omit)
    }
    if (expresion.includes(SUBTRACT_OPERATOR)) {
      return expresion
        .split(SUBTRACT_OPERATOR)
        .reduce((expresion1, expresion2) => {
          return expresion1.subtract(Expresion.desde(expresion2))
        }, omit)
    }
    if (expresion.includes(MULTIPLY_OPERATOR)) {
      return expresion
        .split(MULTIPLY_OPERATOR)
        .reduce((expresion1, expresion2) => {
          return expresion1.multiply(Expresion.desde(expresion2))
        }, omit)
    }
    if (expresion.includes(DIVISOR_OPERATOR)) {
      return expresion
        .split(DIVISOR_OPERATOR)
        .reduce((expresion1, expresion2) => {
          return expresion1.divide(Expresion.desde(expresion2))
        }, omit)
    }
    return new Literal(parseInt(expresion))
  }
}

module.exports = Expresion;