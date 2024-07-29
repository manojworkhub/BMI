import { useState } from 'react'

import Bmi from './component/BMI/bmicalculation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Bmi/>
    </>
  )
}

export default App
