import React from 'react'
import { useSelector } from 'react-redux'

const Timer = () => {

    const stateTimer = useSelector(state=>({...state.timerRed}));

  return (
    <div>
       {stateTimer.timer} secondes 
    </div>
  )
}

export default Timer