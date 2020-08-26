const Literal = require("./Literal");

const SUBTRACT_OPERATOR = "-"
const ADITION_OPERATOR = "+"

const omit = {
  add(expresion) {
    return expresion
  },
  subtract(expresion) {
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
    return new Literal(parseInt(expresion))
  }
}

module.exports = Expresion;