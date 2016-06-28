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
        checkWin()
        switchTurn()
      }
    })
  }

  //set up click listener for reset button
  document.getElementById('reset').addEventListener('click', function(e){
    for (var i = 0; i < 9;i++){
      board[i] = ''//resets board to blank values
    }
  })

// given an HTML element, it will determine the index of the square on the board
function getSquareIndex(target) {
  for (var j=0; j < 9; j ++) {
    if (squares[j] === target) {
      return j; //return the index, not the DOM node
    }
}
}

function checkWin(){
  var winCombos = [
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
  ]
  for(var i=0; i < winCombos.length; i++)
    var winCombo = winCombos[i];
    //if board at 0 equals board at 1, etc..
    if (board[winCombo[0]] === board[winCombo[1]] &&
      board[winCombo[1]] === board[winCombo[2]] &&
      board[winCombo[0] !== ""] {
        alert(turn + "wins!")
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
