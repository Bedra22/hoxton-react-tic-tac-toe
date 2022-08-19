
import { useState } from 'react'
import './App.css'
import { Border } from './components/Border'


//I am still working 
function App() {

  const [border, setBorder] = useState(Array(9).fill(null))
  const [firstPlayer, setFisrtPlayer] = useState(true);

  const whosPlaying = (boxID) => {
    const borderPlaying = border.map((box, index) => {

      if (index === boxID) {
        return firstPlayer === true ? "X" : "O"
      } else {
        return box
      }
    })
    setFisrtPlayer(firstPlayer);

    setBorder(borderPlaying)

  }

  return (
    <div className="App">
      <Border border={border} onClick={whosPlaying} />

    </div>
  )
}

export default App
