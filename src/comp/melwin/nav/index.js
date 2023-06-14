import React, { useEffect } from 'react';
import './index.css';
import profil from './images/profil.png';
import hamburger from './images/hamburger.png';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deconnex, fetchUserId } from '../../../lib/redux/actions';

const Nav = () => {
  const stateUser = useSelector(state => ({ ...state.userRed }));
  const dispatch = useDispatch();
  //-------------------------
  useEffect(()=>{
    if(!!stateUser.item){console.log('stateuser connu');}
    else if ( !stateUser.item &&!!localStorage.getItem('userEmail') ){
      console.log('stateuser inconnu, ls connu');
      dispatch(fetchUserId(localStorage.getItem('userEmail')));
    }
    else{
      console.log('ls inconnu');
    }
 },[dispatch,stateUser]);
  //-------------------------
  const goTo = (n) => {
    nav('/');
    let bibi = n * document.body.scrollHeight;
    window.scroll(0, bibi);
  };
  //-------------------------
  const nav = useNavigate();
  //-------------------------
const deco = ()=>{
  localStorage.clear();
  dispatch(deconnex());
}

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
<div className='boite-nav'>
      
      <div className='container-nav'>
        <div className='hamburger'>
          <img alt='hamburger' src={hamburger} />
        </div>
        <button type='button' onClick={() => goTo(0)}>Accueil</button>
        <button type='button' onClick={() => goTo(0.18)}>Catégories</button>
        <button type='button' onClick={() => goTo(0.4)}>Nouveautés</button>
        <button type='button' onClick={() => goTo(1)}>Bientôt terminés</button>
        <button onClick={() => nav('/annonceur')}>Devenir annonceur</button>
        <button onClick={() => nav('/contact')}>Contact</button>
      </div>
      <div className='compte-profil'>
      <button onClick={() => clikCompte()} >
        <img alt='profil' src={profil} />
        {!!stateUser.item && !stateUser.isLoading ? "Bienvenue "+stateUser.item.prénom : "Mon compte "}
      
        </button>  
        <button onClick={()=>deco()} >deco</button>
      </div>
      </div>
    </div>


  )
}

export default Nav
