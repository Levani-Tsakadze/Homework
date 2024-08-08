import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  function countadd () {
      setCount(count + 1)
  }

  function countminus () {
    setCount(count - 1)
  }

  function resetcount() {
    setCount(0)
  }

  return (
    <>
      <h1>Count: {count} </h1>
      <button onClick={countadd}>+</button>
      <button onClick={countminus}>-</button>
      <button onClick={resetcount}>reset</button>
    </>
  )
}

export default App
