import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchConcours, fetchEventId } from '../../lib/redux/actions';
import { useNavigate } from 'react-router-dom';



const Events = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const stateConcours = useSelector(state => ({ ...state.concoursRed }));
  const stateUser = useSelector(state => ({ ...state.userRed }));
  const { isLoading, items } = stateConcours;
  //-------------------------------------------
  const voirDetail = (idEv)=>{
    dispatch(fetchEventId(idEv));
    nav('/event');
  }
  //-------------------------------------------
  useEffect(() => {
    dispatch(fetchConcours());
  }, []);
  //-------------------------------------------
  return (
    <div>
      <h1>SENSATION ROCK</h1>
      {!!stateUser.item && <p>Bienvenue {stateUser.item.nom}</p>}
      <h2> liste des évenements : </h2>
      {isLoading && <div>CHARGEMENT EN COURS...</div>}
      {(!isLoading && !!items) && <>
        {items.map((e, i) => (
          <p key={i}>
            
            {e.intitulé} (taille = {e.taille}) :
            affiche, <button onClick={() => voirDetail(e['_id'])}>voir les détails de l'évènement</button>
          </p>
        ))}
      </>}

    </div>
  )
}

export default Events