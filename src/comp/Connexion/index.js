import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserId } from '../../lib/redux/actions';

const Connexion = () => {

    const [email, setEmail]= useState('');
    const dispatch= useDispatch();
    const stateUser = useSelector(state=>({...state.userRed }));
    const nav = useNavigate();
    //----------------------------------
    const connectUser = ()=>{
      dispatch(fetchUserId(email));
      nav('/events');
    }
    //----------------------------------

    //----------------------------------
  return (
    <div>
       <p>Bienvenue sur IGRA</p> 
      
       <p>{(!!stateUser.item && !stateUser.isLoading) && <p>bienvenue {stateUser.item.nom}</p>} </p>

        DEJA UN COMPTE ?
        <form onSubmit={()=>connectUser()}>
            <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
            <button type='submit'>Je me connecte</button>
        </form>
        NOUVEAU ?
        <button onClick={()=>nav('/inscr')}>Je m'inscris</button>
    </div>
  )
}

export default Connexion