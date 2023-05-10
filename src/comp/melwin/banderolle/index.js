import React, { useState } from 'react';
import './index.css';
import gauche from './images/gauche.png';
import droite from './images/droite.png';

const Banderolle = () => {

  const titres = ['eurockéennes', 'framboises frivoles', 'bibi and co'];
  const cadeaux = ['gagnez des pass 3 jours', 'concert offert', 'cadeautjes'];

  const urlImage = 
  'https://firebasestorage.googleapis.com/v0/b/igra-835e2.appspot.com/o/affiches%2Fgrand%2F643843c01a6de2dbea0632dd?alt=media'

  const [indice, setIndice] = useState(0);

  const suivant = (n) => {

    setIndice(indice + n);

  }



  return (
    <div className='container-banderolle' style={{backgroundImage:`url(${urlImage})`}}>
      <div className='fleche'>
       {indice>0 &&<img alt='précédent' src={gauche} onClick={() => suivant(-1)} />} 
      </div>
      <div className='titre'>
        <div className='grand'>{titres[indice]}</div>
        <div className='petit'>-----2023-----</div>
        <div className='moyen'>{cadeaux[indice]}</div>
      </div>
      <div className='fleche'>
        {indice < titres.length-1 && <img alt='suivant' src={droite} onClick={() => suivant(1)} />}
       
      </div>

    </div>
  )
}

export default Banderolle