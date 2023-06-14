import React from 'react'
import './index.css';
import musique from'./images/musique.png';
import theatre from'./images/theatre.png';
import cinema from'./images/cinema.png';
import gastro from'./images/gastro.png';
import sport from'./images/sport.png';
import com from'./images/com.png';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { choisirTheme, fetchUserId } from '../../../lib/redux/actions';


const Categories = () => {
  const nav = useNavigate();
  const stateUser = useSelector(state=>({...state.userRed}));
  //-----------------------------------
  const verifAuth =()=>{
    if(!localStorage.getItem('userEmail') && !stateUser.item ){
        console.log("no LS no state, connection");
        nav('/co');
        return false;
    }
    else if(!!stateUser.item && !localStorage.getItem('userEmail')){
      localStorage.setItem('userEmail', stateUser.item.email);
      console.log('stateuser oui, localstorage no');
      return true;
    }
    else if(!stateUser.item && localStorage.getItem('userEmail')){
      console.log('localstorage oui, stateuser no');
      dispatch(fetchUserId(localStorage.getItem('userEmail')));
      return true;
    }
    else{
      console.log('déjà co');
      return true;
    }
  }
  //-----------------------------------
  const dispatch = useDispatch();
  const choisir = (t)=>{
    if( verifAuth()){
        dispatch(choisirTheme(t));
    nav('/theme');
    }
    
  
  }
  //-----------------------------------
  return (
    <div className='container-categ' id='categ'>
      <div className='liste'>
        <div>Musique</div>
        <div>Théâtre</div>
        <div>Cinéma</div>
        <div>Restaurants</div>
        <div>Sport</div>
        <div>Commerces locaux</div>
      </div>
      <div className='cases'>
        
      <div style={{backgroundImage:`url(${musique})`}}>
          <div>Musique</div>
          <button onClick={()=>choisir('musique')}>Participer</button>
        </div>
        <div style={{backgroundImage:`url(${theatre})`}}>
          <div>Théâtre</div>
          <button onClick={()=>choisir('théâtre')}>Participer</button>
        </div>
        <div style={{backgroundImage:`url(${cinema})`}}>
          <div>Cinéma</div>
          <button onClick={()=>choisir('cinéma')}>Participer</button>
        </div>
        <div style={{backgroundImage:`url(${gastro})`}}>
          <div>Gastronomie</div>
          <button onClick={()=>choisir('gastronomie')}>Participer</button>
        </div>
        <div style={{backgroundImage:`url(${sport})`}}>
          <div>Sport</div>
          <button onClick={()=>choisir('sport')}>Participer</button>
        </div>
        <div style={{backgroundImage:`url(${com})`}}>
          <div>Commerces locaux</div>
          <button onClick={()=>choisir('commerces locaux')}>Participer</button>
        </div>
      </div>
    </div>
  )
}

export default Categories