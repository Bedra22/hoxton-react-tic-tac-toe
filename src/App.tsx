
import { useState } from 'react'
import './App.css'
import { Border } from './components/Border'


//I am still working 
function App() {

  const [border, setBorder] = useState(Array(9).fill(null))
  const [firstPlayer, setFisrtPlayer] = useState(true)
  const winnigLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  const whosPlaying = (boxID) => {
    const borderPlaying = border.map((box, index) => {

      if (index === boxID) {
        return firstPlayer === true ? "X" : "O"
      } else {
        return box
      }
    })
    setFisrtPlayer(!firstPlayer);

    setBorder(borderPlaying)

    andTheWinnerIs(borderPlaying)

  }

  const andTheWinnerIs = (box) => {
    for (let i = 0; i < winnigLines.length; i++) {
      const [box1, box2, box3] = winnigLines[i];
      if (box[box1] && box[box1] === box[box2] && box[box1] === box[box3]) {
        console.log(box[box1])
        return box[box1];
      }
    }
    return null;
  }

  return (
    <div className="App">
      <Border border={border} onClick={whosPlaying} />

    </div>
  )
}

export default App
