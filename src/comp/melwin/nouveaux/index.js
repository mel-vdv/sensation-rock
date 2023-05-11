import React from 'react'

import gauche from './../categories/images/gauche2.png';
import droite from './../categories/images/droite2.png';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchEventId } from '../../../lib/redux/actions';

const Nouveaux = () => {

  const listEv=[
    {taille:1, intitulé:'framboises frivoles','_id': '64415bd02a3cbc2cd5f6901f'},
    {taille:2, intitulé:'eurockéennes','_id': '643843c01a6de2dbea0632dd'},
    {taille:1, intitulé:'bibi and cie','_id': ''}
  ]
    //-----------------------------------
    const dispatch = useDispatch();
    const nav= useNavigate();
    const jouer = idEv=>{
      dispatch(fetchEventId(idEv));
      nav('/event');
    }
    //-----------------------------------
  return (
    <div className='container-deadline'>
        <div className='dessus'>
          <div className='titre'>
            Nouveaux
          </div>
          <div className='navig'>
            <div className='fleche'><img alt='précédent' src={gauche}/></div>
            <div className='fleche'><img alt='suivant' src={droite}/></div>
          </div>
        </div>
        <div className='affiches'>
          {listEv.map(e=>(
            <>
            {e.taille ===1 && 
            <div className='ev-petit'>
              <div className='ht'></div>
              <div className='legende'>
                <div>{e.intitulé}</div> 
                <button  onClick={()=>jouer(e['_id'])}>Jouer</button>
              </div>

            </div>}
            
            {e.taille ===2 && <div className='ev-grand' style={{backgroundImage:'url(https://firebasestorage.googleapis.com/v0/b/igra-835e2.appspot.com/o/affiches%2Fmoyen%2F643843c01a6de2dbea0632dd?alt=media&token=5998bcbc-db7f-4f88-9e6b-e31c060a6cab)'}} >
              <div className='intitule'>{e.intitulé}</div>
              <button  onClick={()=>jouer(e['_id'])}>Jouer</button></div>}

            </>
          ))}
        </div>
    </div>
  )
}

export default Nouveaux