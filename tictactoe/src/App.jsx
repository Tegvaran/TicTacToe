import { useState } from 'react'

export function Square() {

  const [value, setValue] = useState(null)
  function handleClick() {
    setValue("X")
  }


  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  )
  
}

// This is a board component similar to the board you draw for tic tac toe.
export default function Board() {
  return (
  
    // This is a Fragment used to warp multiple elements.
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>

      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>

      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>

      
    </>
  )
}