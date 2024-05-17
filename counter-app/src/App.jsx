import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
 
useEffect(() => {
  const storedCounts = localStorage.getItem('count')
  if(storedCounts) {
    setCount(parseInt(storedCounts, 10))
    
  }
}, [])

useEffect(() => {
  localStorage.setItem('count', count.toString())
 
},[count])


  const handleIncrease =() => {
   setCount(count + 1)
  }

  const handleDecrease =() => {
    setCount(count - 1)
  }

 

  const handleReset = () => {
    setCount(0)
  }

  return (
   <div className="App">
    <h1>Counter</h1>
      <div className="ring">
        <div className="eye">
          <div className="eyeLeft">

            <button type='button' onClick={handleDecrease} >-</button>

          </div>
          <div className="eyeRight">

            <button type='button' onClick={handleIncrease} >+</button>

          </div>
        </div>
        <div className="burun">
          <div className="burunusti"></div>

          <div className="burunosti">{count}</div>
        </div>
      
          <button className='ogiz' type='button' onClick={handleReset} >Reset</button>
       
      </div>
  
   </div>
  )
}

export default App
