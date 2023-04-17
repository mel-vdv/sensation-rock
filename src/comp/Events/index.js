import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { fetchConcours } from '../../lib/redux/actions';



const Events= () => {

    const dispatch = useDispatch();
    const stateConcours = useSelector( state=> ({...state.concoursRed}));
    const stateUser = useSelector( state=> ({...state.userRed}));
    const {isLoading,items}= stateConcours;
    //-------------------------------------------
    useEffect(()=>{
        dispatch(fetchConcours());
    },[]);
    //-------------------------------------------
  return (
    <div>
        <h1>SENSATION ROCK</h1>
        {!!stateUser.item &&<p>Bienvenue {stateUser.item.nom}</p>}
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

export default Events