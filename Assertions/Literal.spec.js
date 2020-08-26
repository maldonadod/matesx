const Literal = require("../Domain/Literal");

describe("Literal", () => {
  it("sabe restar", () => {
  
    const actual = new Literal(100).subtract(new Literal(50));

    expect(new Literal(50)).toEqual(actual)
  })  
})