import React from 'react';
import { useSelector } from 'react-redux';

const Podium = () => {

  const statePodium = useSelector(state=>({...state.podiumRed}));
    //-------------------------------

  return (
    <>
    { !statePodium.isLoading &&  statePodium.items.length>0 &&<>
    <ul>
      { statePodium.items.map((e,i)=><li key={i}>
       {i+1}/ {e.pseudo} : {e.nbPt} points
      </li>)}
    </ul>
   
    
    </>
    }
    
      </>
  )
}

export default Podium