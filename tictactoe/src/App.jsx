import { useState } from 'react'

export function Square({value, onSquareClick}) {

  return (
    <button className="square" onClick={onSquareClick}> {value} </button>
  )
  
}

// This is a board component similar to the board you draw for tic tac toe.
export default function Board() {

  const [xIsNext, setXIsNext] = useState(true);
  // Create states of 0 squares and set initial to null
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {

    // Check if the square has already been clicked. 
    // If clicked, return and do nothing 
    if (squares[i] != null) {
      return
    }

    // Create a copy of set squares and then change the state of the first square to 'X'
    const nextSquares = squares.slice();



    if (xIsNext == true) {
      nextSquares[i] = "X";
      setXIsNext(false);
    } 
    else {
      nextSquares[i] = "O";
      setXIsNext(true);
    } 

    // You call the state's setSquare function here. 
    // Passing the nextSquares means that the state of the squares has changed.
    // So, re-render it. 
    // It re-renders the board component (the compomnent that contains the function)
    // and all its child components as well (squares).
    setSquares(nextSquares);
    }

  return (
  
    // This is a Fragment used to warp multiple elements.
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
        <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>

      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>

      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>

      
    </>
  )
}