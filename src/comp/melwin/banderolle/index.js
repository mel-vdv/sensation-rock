import React, { useState } from 'react';
import './index.css';
import gauche from './images/gauche.png';
import droite from './images/droite.png';
import { useSelector } from 'react-redux';

const Banderolle = () => {

  const stateConcours = useSelector(state=>({...state.concoursRed}));
  //---------------------------
  const [indice, setIndice] = useState(0);

  const suivant = (n) => setIndice(indice + n);
  
//----------------------------
  return (
    <> {(stateConcours.items.length>0 && !stateConcours.isLoading) &&
    <div className='container-banderolle' id='accueil' style={{backgroundImage:`url(https://firebasestorage.googleapis.com/v0/b/igra-835e2.appspot.com/o/affiches%2Fgrand%2F${stateConcours.items[indice]['_id']}?alt=media)`}}>
      <div className='fleche'>
       {indice>0 &&<img alt='précédent' src={gauche} onClick={() => suivant(-1)} />} 
      </div>
      <div className='titre'>
        <div className='grand'>{stateConcours.items[indice].intitulé}</div>
        <div className='petit'>-----2023-----</div>
        <div className='moyen'>{stateConcours.items[indice].gain}</div>
      </div>
      <div className='fleche'>
        {indice < stateConcours.items.length-1 && <img alt='suivant' src={droite} onClick={() => suivant(1)} />}
      </div>
    </div>}
    </>
   
  )
}

export default Banderolle