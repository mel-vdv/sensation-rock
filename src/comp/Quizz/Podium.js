import React from 'react'
import { useSelector } from 'react-redux';

const Podium = () => {

  const statePodium = useSelector(state=>({...state.podiumRed}));
    //-------------------------------

  return (
    <div className='podium'>
        { statePodium.items[0].pseudo} : {statePodium.items[0].nbPt} points 
        { statePodium.items[1].pseudo} : {statePodium.items[1].nbPt} points 
      </div>
  )
}

export default Podium