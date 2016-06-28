var clone = require('clone')
var C = require('../src/constants.js')

class Turn {
  constructor (board, bikes, inputs) {
    this.board = board
    this.bikes = bikes
    this.inputs = inputs
    this.nextBikes = clone(bikes)
    this.nextInputs = clone(inputs)
    this.movs = [false]
  }
  setInput (playerIndex, input) {
    var dir = Direction[input]
    var x = bikes[playerIndex].i + dir[0]
    if((x >= 0) && (x < 3)){
      var y = bikes[playerIndex].i + dir[1]
      if((y >= 0) && (y < 3)){
        nextBikes[playerIndex].i = x
        nextBikes[playerIndex].j = y
        movs[playerIndex] = true
        nextInputs[playerIndex] = input;
      }
    }
  }
  evolve () {
    var board = clone(this.board)
    for (var k = 0; k < inputs.length; k++) {
      if (bikes[k].alive) {
        /*var dir
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
        var d = Direction[inputs[k]]
        bikes[k].i += dir[0]
        bikes[k].j += dir[1]
        if (board[bikes[k].i][bikes[k].j] === 0) board[bikes[k].i][bikes[k].j] = k + 1
        else bikes[k].alive = false*/
        var pos = bikes[k]
        if(this.movs[k]){
          if(this.board[pos.i][pos.j] == 0) this.board[pos.i][pos.j] = k + 1;
          else
        }
      }
    }
    return new Turn(board, bikes, inputs)
  }
}
exports.Turn = Turn
