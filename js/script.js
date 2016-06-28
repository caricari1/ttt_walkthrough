// models
var board = ['', '', '', '', '', '', '', '', '']
var turn = 'X'

// selectors
var squares = document.querySelectorAll('.square')

// set up click listeners for my squares
for (var i=0; i<9; i++){
  //loops through each square adding listener
  squares[i].addEventListener('click', function(e) {
    for (var j=0; j < 9; j ++) {
      //looops through each square checking for click
      if (squares[j] === e.target && board[j] === '' ){
        //updates model
        board[j] = turn
        //updates view
        drawBoard()
        switchTurn()
      }
    }
  })
}

// drawing model to the screen
function drawBoard(){
  for (var i=0; i<9; i++){
    squares[i].innerHTML = board[i]
  }
}

// switching turns
function switchTurn(){
  if (turn === "X")
    turn = "O"
  else {
    turn = "X"
  }
}
