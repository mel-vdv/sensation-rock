import React, { useRef, useState } from 'react'
import './index.css';
import gauche from './../categories/images/gauche2.png';
import droite from './../categories/images/droite2.png';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEventId } from '../../../lib/redux/actions';
import { useNavigate } from 'react-router-dom';

const Deadline = () => {

  const stateConcours = useSelector(state => ({ ...state.concoursRed }));

  const bientotFinis = stateConcours.items.filter(e=>((Date.parse(e.fin)< Date.now()+2592000000) && (Date.parse(e.fin)> Date.now())));
  //---------------------------
  const dispatch = useDispatch();
  const nav = useNavigate();
  const jouer = idEv => {
    dispatch(fetchEventId(idEv));
    nav('/event');
  }


  //-----------------------------------
  const ref = useRef();
  const [posX, setPosX] = useState(0);
  //-----------------------------------
  return (
    <div className='container-deadline' id='deadline'>
      <div className='dessus'>
        <div className='titre'>
          Bientôt terminés
        </div>
        <div className='navig'>
          <div className='fleche'>
            {posX < 0 && <img alt='précédent' src={gauche} onClick={() => setPosX(posX + ref.current.offsetWidth*.4)} />}
          </div>
          <div className='fleche'>
            {<img alt='suivant' src={droite} onClick={() => setPosX(posX - ref.current.offsetWidth*.4)} />}
          </div>
        </div>
      </div>
      <div className='cadre-affiches' ref={ref}>
        <div className='affiches' style={{ left: posX + 'px' }}>
          {bientotFinis.map((e,i) => (
            <div key={i} className={e.taille < 2 ? 'ev-petit' : 'ev-grand'}
              style={e.taille < 2 ? {} :
                { backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/igra-835e2.appspot.com/o/affiches%2Fmoyen%2F${e['_id']}?alt=media)` }}>
              {e.taille < 2 && <img
                alt='petite'
                src={`https://firebasestorage.googleapis.com/v0/b/igra-835e2.appspot.com/o/affiches%2Fpetit%2F${e['_id']}?alt=media`} />}
              <div className='intitule'>{e.intitulé}</div>
              Reste {Math.floor((Date.parse(e.fin)-Date.now())/(24*3600*1000))} jours
              <button onClick={() => jouer(e['_id'])}>Jouer</button>
            </div>
          ))
          }
        </div>
      </div>
    </div>
  )
}

export default Deadline