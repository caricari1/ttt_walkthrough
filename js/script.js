// models
var board = ['', '', '', '', '', '', '', '', '']
var turn = 'X'

// selectors
var squares = document.querySelectorAll('.square')

// set up click listeners for my squares
for (var i=0; i<9; i++){
  //loops through each square adding listener
  squares[i].addEventListener('click', function(e) {
    var squareIndex = getSquareIndex(e.target)
    if (board[squareIndex]=== ""){
        board[squareIndex] = turn
        drawBoard()
        switchTurn()
      }
    })
  }

// given an HTML element, it will determine the index of the square on the board
function getSquareIndex(target) {
  for (var j=0; j < 9; j ++) {
    if (squares[j] === target) {
      return j; //return the index, not the DOM node
    }
}
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
