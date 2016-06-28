var board = ['X', '', 'O', '', '', '', 'X', '', '']
var turn = 'X'

function drawBoard(){
  var squares = document.querySelectorAll('.square')
  for (var i=0; i<9; i++){
    squares[i].innerHTML = board[i]
  }
}
