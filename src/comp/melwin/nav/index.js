import React from 'react';
import './index.css';
import profil from './images/profil.png';

const Nav
 = () => {
  return (
    <div className='container-nav'>
        <div>Accueil</div>
        <div>Catégories</div>
        <div>Bientôt terminés</div>
        <div>Devenir annonceur</div>
        <div>Contact</div>
        <div className='rouge'> 
        <img alt='profil' src={profil}/>
        Mon compte</div>
    </div>
  )
}

export default Nav
