import './App.css';
import { useState, useEffect } from 'react';

function App() {
  
  const [isStart, setIsStart] = useState(false)
  const [mileSecond, setMileSecond] = useState(7195000) //
  const [lap, setLap] = useState([])


  // setInterval(function(isStart){ isStart ? console.log("ddd"): ''}, 10)

  function startWatch() {
    setIsStart(setInterval(function(){ 
      setMileSecond((mileSecond) => mileSecond + 10)
    }, 10))
  } 


  function stopWatch() {
    clearInterval(isStart)
  }

  const addLap = () =>{  
      
  }
  
  const handleReset = () => {
    stopWatch()
    setMileSecond(0)
    setLap([])
  }
  return (
    <div className="App">
      <p>
        { (Math.floor((mileSecond/1000)/(60*60))%60 > 0) ? `${Math.floor((mileSecond/1000)/(60*60))%60} h `: null } 
        { (Math.floor((mileSecond/1000)/60) > 0) ? `${Math.floor((mileSecond/1000)/60)%60} m ` : null } 
        { `${Math.floor(mileSecond/1000)%60} s ` } 
        { mileSecond%100 }
      </p>
      <button onClick={() => { startWatch() } }>Start</button>
      <button onClick={() => { stopWatch() }}>Stop</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={addLap}>Lap</button>
      <p>{isStart}</p>
      <p>{mileSecond}</p>
    </div>
  );
}

export default App;
