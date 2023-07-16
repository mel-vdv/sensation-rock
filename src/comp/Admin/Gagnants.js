import React from 'react'
import { useDispatch } from 'react-redux'
import { visibleGagnants } from '../../lib/redux/actions';

const Gagnants = () => {
  const dispatch= useDispatch();

  return (
    <div className='gagnants'>
        <div>Les Gagnants</div>
        <button className='retour' onClick={()=>dispatch(visibleGagnants(false))}>retour à la liste</button>
    </div>
  
  )
}

export default Gagnants