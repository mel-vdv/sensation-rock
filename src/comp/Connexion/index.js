import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import { useDispatch} from 'react-redux';
import { fetchUserId } from '../../lib/redux/actions';

const Connexion = () => {

    const [email, setEmail]= useState('melvdv@yahoo.fr');
    const dispatch= useDispatch();
    const nav = useNavigate();
    //----------------------------------
    const connectUser = ()=>{
      dispatch(fetchUserId(email));
      localStorage.setItem('userEmail', email);
      nav('/');
    }
    //----------------------------------

    //----------------------------------
  return (
    <div>
       <p>Bienvenue sur IGRA</p> 
      

        DEJA UN COMPTE ?
        <form onSubmit={connectUser}>
            <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
            <button type='submit'>Je me connecte</button>
        </form>
        NOUVEAU ?
        <button onClick={()=>nav('/inscr')}>Je m'inscris</button>
    </div>
  )
}

export default Connexion