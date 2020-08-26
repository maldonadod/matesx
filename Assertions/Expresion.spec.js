const Expresion = require("../Domain/Expresion");
const Literal = require("../Domain/Literal");

describe("Expresion", () => {
  it("debe equivaler a restando", () => {
    const expresion1 = Expresion.desde("-200");
    const expresion2 = new Literal(-200);
    assertTrue(expresion1.equivale(expresion2))
  })  
  it("debe ser equivalente a otro restando con mismo literal", () => {
    assertTrue(new Literal(200).equivale(new Literal(200)))
  })
  it("debe no ser equivalente a otro restando de diferente literal", () => {
    assertFalse(new Literal(200).equivale(new Literal(199)))
  })
  it("debe ser equivalente a la suma de 2 numeros", () => {
    assertTrue(
      Expresion.desde("200").equivale(Expresion.desde("100 + 100"))
    )
  })
  it("debe ser equivalente a la suma de 3 numeros", () => {
    assertTrue(
      Expresion.desde("200 + 1100").equivale(Expresion.desde("100 + 100 + 1100"))
    )
  })
  it("debe ser equivalente a la resta de 2 numeros", () => {
    assertTrue(
      Expresion.desde("200").equivale(Expresion.desde("300 - 100"))
    )
  })
  it("debe ser equivalente a la sumar y resta de numeros", () => {
    assertTrue(
      Expresion.desde("3000").equivale(Expresion.desde("2000 - 1000 + 1000 + 1000"))
    )
  })
  it("debe ser equivalente a la sumar y resta de numeros con uno negativo", () => {
    assertTrue(
      Expresion.desde("-3000").equivale(Expresion.desde("- 2000 - 1000"))
    )
  })
})
describe("Expresion", () => {
  it("debe equivaler a restando", () => {
    const expresion1 = Expresion.desde("100");
    const expresion2 = new Literal(100);
    assertTrue(expresion1.equivale(expresion2))
  })  
})
function assertTrue(actual) {
  expect(actual).toEqual(true)
}
function assertFalse(actual) {
  expect(actual).toEqual(false)
}