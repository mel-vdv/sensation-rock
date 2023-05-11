import React from 'react';
import './index.css';
import profil from './images/profil.png';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Nav = () => {
  const stateUser = useSelector(state => ({ ...state.userRed }));
  //-------------------------
  const goTo = (n) => {
    nav('/');
    let bibi = n * document.body.scrollHeight;
    window.scroll(0, bibi);
  };
  //-------------------------
  const nav = useNavigate();
  //-------------------------
  const clikCompte = () => {
    if (!!stateUser.item) {
      nav('/mon-compte');
    }
    else {
      nav('/co');
    }
  }
  //-------------------------
  return (
    <div className='cadre-nav'>
      <div className='container-nav'>
        <button type='button' onClick={() => goTo(0)}>Accueil</button>
        <button type='button' onClick={() => goTo(0.18)}>Catégories</button>
        <button type='button' onClick={() => goTo(0.4)}>Nouveautés</button>
        <button type='button' onClick={() => goTo(1)}>Bientôt terminés</button>
        <button onClick={() => nav('/annonceur')}>Devenir annonceur</button>
        <button onClick={() => nav('/contact')}>Contact</button>
        <button onClick={() => clikCompte()} className='rouge'>
          <img alt='profil' src={profil} />
          {!!stateUser.item? stateUser.item.prénom : "Mon compte "}</button>
      </div>
    </div>


  )
}

export default Nav
