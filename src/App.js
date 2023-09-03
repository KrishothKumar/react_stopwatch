import './App.css';
import { useState } from 'react';

function App() {
  
  const [mileSecond, setMileSecond] = useState(0)
  const [second, setSecond] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [hours, setHours] = useState(0)

  const handleStart = () => {
    setMileSecond()
  }
  
  const calculateMileSecond = () =>{

  }
  
  const calculateSecond = () =>{
    
  }
  
  const calculateMinutes = () =>{
    
  }
  
  const calculateHours = () =>{
    
  }

  const handleStop = () => {
    console.log('Stop')
  }
  
  const handleReset = () => {
    setMileSecond(0)
    setSecond(0)
    setMinutes(0)
    setHours(0)
  }
  return (
    <div className="App">
      <p>{(hours > 0) ? `${hours} h`: null} {(hours > 0 || minutes > 0) ? `${minutes} m` : null } {second} s {mileSecond}</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
