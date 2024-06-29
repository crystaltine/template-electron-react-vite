import { useState } from 'react'
import Homescreen from './screens/homescreen/homecreen'

function App() {
  const [count, setCount] = useState(0)
  return (
    <Homescreen />
  )
}

export default App