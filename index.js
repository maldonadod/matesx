const Expresion = require("./Domain/Expresion");

module.exports = Expresion;

// const turno = {
//   fallo(expresionEnJuego, expresionJugada) {
//     console.log(`Error ! ${expresionEnJuego} no equivale a ${expresionJugada}`)
//   },
//   acierto(expresionEnJuego, expresionJugada) {
//     console.log(`Bien ! ${expresionEnJuego} equivale a ${expresionJugada}`)
//   }
// }

// const pedido = new Pedido("3000", turno)

// const ui = {
//   empezar(vm) {
//     console.log(vm.title)
//     process.stdin.on("data", (input) => {
//       input = input.toString().replace("\n", "")
//       pedido.jugar(input);
//     })
//   }
// }

// pedido.mostrar(ui);