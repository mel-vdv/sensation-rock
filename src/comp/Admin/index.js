import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchReglages } from '../../lib/redux/actions';

const Admin = () => {

  const dispatch = useDispatch();
  const state = useSelector(state=>({...state.reglagesRed}));
  const{isLoading, items}=state;
  //--------------------------------------------
  useEffect(()=>{
    dispatch(fetchReglages());
  },[]);

  return (
    <div>
        <h1>admin</h1>
        <h2> Les réglages : </h2>
        {isLoading && <div>CHARGEMENT EN COURS...</div>}

        {(!isLoading && !!items)&&<div>
          <p> durée d'affichage par questions : {items.duree_questions} secondes</p>
          <p> nombre de questions par concours : {items.nb_quest_concours}</p>
          <p> nombre de sessions par joueur par jour: {items.nb_sessions_jour}</p>
          <p> durée de un sessions : {items.duree_session} minutes</p>
          </div>}
    </div>
  )
}

export default Admin;
