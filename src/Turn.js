var clone = require('clone')
var C = require('../src/constants.js')

class Turn {
  constructor (board, bikes, inputs) {
    this.board = board
    this.bikes = bikes
    this.inputs = inputs
  }
  evolve () {
    var board = clone(this.board)
    var bikes = clone(this.bikes)
    var inputs = clone(this.inputs)
    for (var k = 0; k < inputs.length; k++) {
      if (bikes[k].alive) {
        var dir
        switch (inputs[k]) {
          case C.UP: dir = C.Up
            break
          case C.DOWN: dir = C.Down
            break
          case C.RIGHT: dir = C.Right
            break
          case C.LEFT: dir = C.Left
            break
        }
        bikes[k].i += dir[0]
        bikes[k].j += dir[1]
        if (board[bikes[k].i][bikes[k].j] === 0) board[bikes[k].i][bikes[k].j] = k + 1
        else bikes[k].alive = false
        inputs[k] = null
      }
    }
    return new Turn(board, bikes, inputs)
  }
}
exports.Turn = Turn
