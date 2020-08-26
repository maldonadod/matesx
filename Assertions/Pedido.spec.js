const Pedido = require("../Domain/Pedido");

describe("Pedido", () => {
  let ui, pedido, turno;

  beforeEach(() => {
    ui = {
      empezar: jest.fn()
    }
    turno = {
      fallo: jest.fn(),
      acierto: jest.fn(),
    }
    pedido = new Pedido("100", turno);
  })
  it("debe mostrar el titulo y opciones", () => {
    pedido.mostrar(ui)

    expect(ui.empezar).toBeCalledWith({
      title: "Seleccione expresiones equivalentes para 100",
      opciones: [{
        expresion: "9" 
      }, {
        expresion: "3+3+3" 
      }]
    });
  })
  it("debe indicar fallo", () => {
    pedido.jugar("10 - 10 + 100 - 20")

    expect(turno.fallo).toBeCalledWith("100", "10 - 10 + 100 - 20");
  })
  it("debe indicar acierto", () => {
    pedido.jugar("100 - 100 + 200 - 100")

    expect(turno.acierto).toBeCalledWith("100", "100 - 100 + 200 - 100");
  })
})