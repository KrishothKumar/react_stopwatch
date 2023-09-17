import './App.css';
import { useState, useCallback, useRef } from 'react';

function App() {
  
  const [isStart, setIsStart] = useState(false)
  // const [start, setStart] = useState()
  const [mileSecond, setMileSecond] = useState(0)
  const [lap, setLap] = useState([])
  const interval = useRef(null)
  
  // Initial Code
  // function startWatch() {
  //   setStart(setInterval(function(){ 
  //     setMileSecond((mileSecond) => mileSecond + 10)
  //   }, 10))
  // } 
  // function stopWatch() {
  //   clearInterval(start)
  // }

  const startInterval = useCallback(() => {
    setIsStart(true)
    interval.current = setInterval(function(){ 
    setMileSecond((mileSecond) => mileSecond + 10)
  }, 10)}, [])

  const stopInterval = useCallback(() => {
    setIsStart(false)
    clearInterval(interval.current)
    interval.current = null
  }, [])

  const addLap = () => {  
    const previousLap = lap.length === 0 ? lap[lap.length-1] : 0
    const add = [{lap:lap.length, previousLap:previousLap, mileSecond:mileSecond}, ...lap]
    setLap(add)
  }
  
  const handleReset = () => {
    // stopWatch()
    stopInterval()
    setIsStart(false)
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
      <button style={ (isStart === true) ? {display: 'none'} : null} onClick={startInterval}>Start</button>
      <button style={ (isStart === false) ? {display: 'none'} :  null} onClick={stopInterval}>Stop</button>
      <button style={ (mileSecond === 0) ? {display: 'none'} :  null} onClick={handleReset}>Reset</button>
      <button style={ (mileSecond === 0) ? {display: 'none'} :  null} onClick={addLap}>Lap</button>
      
      {lap.map((lap) => (
          <p>
            {`#${lap.lap + 1}  `}
            {` ${Math.floor((lap.mileSecond/1000)/(60*60))%60} h `} 
            {`${Math.floor((lap.mileSecond/1000)/60)%60} m `} 
            { `${Math.floor(lap.mileSecond/1000)%60} s ` } 
            { lap.mileSecond%100 } 
          </p>
      ))}      
    </div>
  );
}

export default App;
