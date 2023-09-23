const StopWatch = ({mileSecond, isStart, startWatch, stopWatch, handleReset, addLap, lap}) => {
    return (
        <>
        <p className='stop-watch'>{ (Math.floor((mileSecond/1000)/(60*60))%60 > 0) ? `${Math.floor((mileSecond/1000)/(60*60))%60} h `: null }</p>
        <p className='stop-watch'>{ (Math.floor((mileSecond/1000)/60) > 0) ? `${Math.floor((mileSecond/1000)/60)%60} m ` : null } </p>
        <p className='stop-watch'>{ `${Math.floor(mileSecond/1000)%60} s ` }</p> 
        <p className=''>{ mileSecond%99 }</p>
        <button style={ (isStart === true) ? {display: 'none'} : null} onClick={startWatch}>Start</button>
        <button style={ (isStart === false) ? {display: 'none'} :  null} onClick={stopWatch}>Stop</button>
        <button style={ (mileSecond === 0) ? {display: 'none'} :  null} onClick={handleReset}>Reset</button>
        <button style={ (mileSecond === 0) ? {display: 'none'} :  null} onClick={addLap}>Lap</button>
      
        {lap.map((lap) => (
            <p>
              {`#${lap.lap} `}
              {` ${Math.floor((lap.mileSecond/1000)/(60*60))%60} h `} 
              {`${Math.floor((lap.mileSecond/1000)/60)%60} m `} 
              { `${Math.floor(lap.mileSecond/1000)%60} s ` } 
              { lap.mileSecond%100 } 
            </p>
        ))}    
        </>
    )
}

export default StopWatch;
