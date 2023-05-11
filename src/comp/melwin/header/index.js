import React, { useState } from 'react';
import './index.css';
import fb from './images/fb.png';
import twitter from './images/twitter.png';
import insta from './images/insta.png';
import loupe from './images/loupe.png';
import select from './images/loupe.png';
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const [choixCategVis, setChoixCategVis] = useState(false);
  const [choixCateg, setChoixCateg] = useState('tous');
  const nav = useNavigate();

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
          <div>Rechercher</div>
          <div className='defilement'>
            <button className='invis' onClick={()=>setChoixCateg('tous')}>Toutes les catégories{!choixCategVis && <img onClick={()=>setChoixCategVis(true)} alt='bouton choix catégories' src={select} />}  </button>
            {choixCategVis &&
              <>
                <button className='invis'onClick={()=>setChoixCateg('cinema')} >Cinéma</button>
                <button className='invis' onClick={()=>setChoixCateg('theatre')}>Théâtre</button>
                <button className='invis' onClick={()=>setChoixCateg('musique')}> Musique</button>
                <button className='invis' onClick={()=>setChoixCateg('gastro')}>Gastronomie</button>
                <button className='invis' onClick={()=>setChoixCateg('sport')}>Sport</button>
                <button className='invis' onClick={()=>setChoixCateg('com')}>Commerce local</button>
              </>}

          </div>



          <div><img alt='bouton rechercher catégories' src={loupe} /></div>
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