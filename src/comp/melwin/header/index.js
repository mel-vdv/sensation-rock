import React, { useState } from 'react';
import './index.css';
import fb from './images/fb.png';
import twitter from './images/twitter.png';
import insta from './images/insta.png';
import loupe from './images/loupe.png';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { choisirTheme } from '../../../lib/redux/actions';

const Header = () => {

  const [choixCateg, setChoixCateg] = useState('tous');
  const nav = useNavigate();
  const dispatch = useDispatch();
 const choisir =(t)=>{
setChoixCateg(t);
dispatch(choisirTheme(t));
nav('/theme');
 }
  //-----------------------------------------------

  return (
    <div className='container-header'>
      <div className='haut'>
        <div onClick={()=>nav('/annonceur')}>Devenir annonceur</div>
        <div>100% gratuit</div>
        <div onClick={()=>nav('/contact')}>Nous contacter</div>
      </div>

      <div className='bas'>
        <div className='melwin'>MELWIN</div>
        <div className='rech'>
          <div className='defilement'>
            <button className='invis' onClick={()=>choisir('tous')}>Toutes les catégories</button>
                <button className='invis'onClick={()=>choisir('cinema')} >Cinéma</button>
                <button className='invis' onClick={()=>choisir('theatre')}>Théâtre</button>
                <button className='invis' onClick={()=>choisir('musique')}> Musique</button>
                <button className='invis' onClick={()=>choisir('gastro')}>Gastronomie</button>
                <button className='invis' onClick={()=>choisir('sport')}>Sport</button>
                <button className='invis' onClick={()=>choisir('com')}>Commerce local</button>
           

          </div>



          <div className='loupe'><img alt='bouton rechercher catégories' src={loupe} /></div>
        </div>
        <div className='reseaux'>
          <div> <img alt='facebook' src={fb} /></div>
          <div><img alt='twitter' src={twitter} /></div>
          <div><img alt='instagram' src={insta} /></div>
        </div>
      </div>


    </div>
  )
}

export default Header