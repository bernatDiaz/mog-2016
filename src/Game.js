const { Turn } = require('./Turn')
class Game {

  constructor () {
    this.turn = new Turn()
  }

  onPlayerJoin (socket) {
    var i = 0
    while (this.sockets[i] != null) ++i
    this.players[socket.id] = i
    this.sockets[i] = socket
  }

  onChangeDir (socket, dir) {
    var i = this.players[socket.id]
    this.turn.inputs[i] = dir
  }

  onPlayerLeave (socket) {
    var i = this.players[socket.id]
    delete this.players[socket.id]
    this.sockets[i] = null
  }
}
exports.Game = Game
