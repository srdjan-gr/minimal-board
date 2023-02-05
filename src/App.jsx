import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Test neki</h1>


      <button className='btn'>Test btn</button>
      <button className='btn-second'>Test btn</button>

      <div className="box">
        <h2>neki naslov</h2>
        <p>Neki tekst</p>
        <button className='btn'>Test btn</button>
      </div>

      <div className="box-border">

      </div>

    </div>
  )
}

export default App
