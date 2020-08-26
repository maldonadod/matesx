const Expresion = require("./Expresion");

class Pedido {
  constructor(expresion, turno) {
    this.expresionPrincipal = expresion
    this.turno = turno
    this.title = `Seleccione expresiones equivalentes para ${expresion}`
  }
  jugar(expresionJugada) {
    const a = Expresion.desde(expresionJugada)
    const b = Expresion.desde(this.expresionPrincipal)
    if (a.equivale(b)) {
      this.turno.acierto(this.expresionPrincipal, expresionJugada)
    } else {
      this.turno.fallo(this.expresionPrincipal, expresionJugada)
    }
  }
  mostrar(ui) {
    ui.empezar({
      title: this.title,
      opciones: [{
        expresion: "9" 
       }, {
        expresion: "3+3+3" 
      }]
    })
  }
}

module.exports = Pedido;