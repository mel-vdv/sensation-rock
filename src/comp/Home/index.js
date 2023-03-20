import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { fetchConcours } from '../../lib/redux/actions';



const Home= () => {

    const dispatch = useDispatch();
    const state = useSelector( state=> ({...state.concoursRed}));
    const {isLoading,items}= state;
    //-------------------------------------------
    useEffect(()=>{
        dispatch(fetchConcours());
    },[]);
    //-------------------------------------------
  return (
    <div>
        <h1>SENSATION ROCK</h1>
        <h2> liste des évenements : </h2>
        {isLoading && <div>CHARGEMENT EN COURS...</div>}
        {(!isLoading && !!items) && <>
        {items.map((e,i)=>(
            <p key={i}>
               {e.nom} ({e.categorie}) à {e.lieu}
            </p>
        ))}
        </>}

    </div>
  )
}

export default Home