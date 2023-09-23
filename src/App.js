import './App.css';
import { useState, useRef } from 'react'; //useCallback,
import StopWatch from './StopWatch';

function App() {
  
  const [isStart, setIsStart] = useState(false)
  // const [start, setStart] = useState()
  const [mileSecond, setMileSecond] = useState(0)
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
  }

  // const startInterval = useCallback(() => {
  //   setIsStart(true)
  //   interval.current = setInterval(function(){ 
  //   setMileSecond((mileSecond) => mileSecond + 10)
  // }, 10)}, [])

  // const stopInterval = useCallback(() => {
  //   setIsStart(false)
  //   clearInterval(interval.current)
  //   interval.current = null
  // }, [])

  const addLap = () => {  
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
        <StopWatch mileSecond={mileSecond} isStart={isStart} startWatch={startWatch} 
          stopWatch={stopWatch} handleReset={handleReset} addLap={addLap} lap={lap}
        />
    </div>
  );
}

export default App;
