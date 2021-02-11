import React, {useState, useRef, useEffect} from 'react'
import './styles.css';

const StopWatch = () => {

  const [lapse, setLapse] = useState(0) //USE STATE
  const [running, setRunning] = useState(true)
  const intervalRef = useRef(null); //USE REF


  useEffect(() => {
    return () => {
      return clearInterval(intervalRef); //USE EFFECT
    };
  })

  const handleRunClick = () => {

    if(running){
      clearInterval(intervalRef.current)

    }
    else{

      const startTime = Date.now() - lapse;

      
      intervalRef.current = setInterval(()=>{
        setLapse(Date.now() - startTime)
      }, 0)

    }


    setRunning(!running) 
  }


  const handleClearClick = () => {
    clearInterval(intervalRef.current)
    setLapse(0);
    setRunning(false);
  }

  return (
    <>
      <div>
        <label>{lapse} ms</label>
        <button onClick={handleRunClick}>{running ? 'Stop' : 'Start'}</button>
        <button onClick={handleClearClick}>Clear</button>
      </div>
    </>
  )
}

export default StopWatch
