import './App.css';
import { useState, useCallback, useRef } from 'react';

function App() {
  
  const [isStart, setIsStart] = useState(false)
  // const [start, setStart] = useState()
  const [mileSecond, setMileSecond] = useState(60000)
  const [lap, setLap] = useState([])
  const interval = useRef(null)
  // var interval

  // Initial Code
  function startWatch() {
    setIsStart(true)
    interval.current = setInterval(function(){ 
      setMileSecond((mileSecond) => mileSecond + 10)
    }, 10)
  } 

  function stopWatch() {
    setIsStart(false)
    clearInterval(interval.current)
    interval.current = null
    // clearInterval(interval)
  }

  const startInterval = useCallback(() => {
    setIsStart(true)
    interval.current = setInterval(function(){ 
    setMileSecond((mileSecond) => mileSecond + 10)
  }, 10)})

  const stopInterval = useCallback(() => {
    setIsStart(false)
    clearInterval(interval.current)
    interval.current = null
  })

  const addLap = () => {  
    console.log(lap.length,lap)
    const previousLap = (lap.length > 0) ? lap[0].mileSecond : 0
    const add = [{lap:lap.length+1, previousLap:previousLap, mileSecond:mileSecond}, ...lap]
    setLap(add)
  }
  
  const handleReset = () => {
    stopWatch()
    setIsStart(false)
    setMileSecond(0)
    setLap([])
  }
  return (
    <div className="App">
        <p className='stop-watch'>{ (Math.floor((mileSecond/1000)/(60*60))%60 > 0) ? `${Math.floor((mileSecond/1000)/(60*60))%60} h `: null }</p>
        <p className='stop-watch'>{ (Math.floor((mileSecond/1000)/60) > 0) ? `${Math.floor((mileSecond/1000)/60)%60} m ` : null } </p>
        <p className='stop-watch'>{ `${Math.floor(mileSecond/1000)%60} s ` }</p> 
        <p className=''>{ mileSecond%100 }</p>
      <button style={ (isStart === true) ? {display: 'none'} : null} onClick={startWatch}>Start</button>
      <button style={ (isStart == false) ? {display: 'none'} :  null} onClick={stopWatch}>Stop</button>
      <button style={ (mileSecond == 0) ? {display: 'none'} :  null} onClick={handleReset}>Reset</button>
      <button style={ (mileSecond == 0) ? {display: 'none'} :  null} onClick={addLap}>Lap</button>
      
      {lap.map((lap) => (
          <p>
            {`#${lap.lap} `}
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
