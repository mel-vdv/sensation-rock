import React, { useState } from 'react';
import Header from '../melwin/header';
import Nav from '../melwin/nav';
import { useDispatch, useSelector } from 'react-redux';
import './index.css';
import { modifUser } from '../../lib/redux/actions';
import Footer from '../melwin/footer';

const Compte = () => {
  //----------------------
  const stateUser = useSelector(state => ({ ...state.userRed }));
  const [editer, setEditer] = useState(false);
  const [stat, setStat] = useState(false);
  const [infos, setInfos] = useState(stateUser.item);
  //----------------------
  const dispatch = useDispatch();
  const valider = (ev) => {
    ev.preventDefault();
    console.log('etape 1, ',stateUser.item['_id'],infos);
    let nouvelUser= {
      nom: ev.target[1].value,
      prénom: ev.target[3].value,
      pseudo: ev.target[5].value,
      email: ev.target[7].value,
      tel: ev.target[9].value,
      sexe: ev.target[11].value,
      age: ev.target[13].value,
      cp: ev.target[15].value,
    }
 dispatch(modifUser(stateUser.item['_id'],nouvelUser));
  }
  //---------------------
  return (
    <>
  

    
        <Header/>
        <Nav/>
          <div className='container-compte'>
        {stat && <>
          <button onClick={() => setStat(false)}>MES INFORMATIONS</button>
          <h2>Mes statistiques</h2>
          {stateUser.item.concours.map(e =>
            (<div>{e.idEv} {e.nbPt} pts, {e.nbSec} sec, {e.nbQ} questions, état : fini / en cours, <button>Poursuivre</button> </div>))}
        </>}

        {!stat && <>
          <button onClick={() => {setStat(true); setEditer(false);}}>MES STATISTIQUES</button>
          <h2>Mes informations </h2>
          {!editer && <button onClick={() => setEditer(true)}>Editer mon profil</button>}
         <form onSubmit={valider}>
          <label htmlFor='nom'>Nom</label>
          <input 
          id='nom' 
          role='button' 
          type='text' 
          readOnly={editer ? false : true} 
          value={infos.nom} onChange={(e)=>setInfos({...infos, nom:e.target.value})}
          placeholder='Nom'
          required/>
          <label htmlFor='prenom'>Prénom</label>
          <input 
          id='prenom' 
          role='button' 
          type='text'
          readOnly={editer ? false : true} 
          value={infos.prénom} onChange={(e)=>setInfos({...infos,prénom:e.target.value})}
          placeholder='Prénom'
          required/>
          <label htmlFor='pseudo'>Pseudo</label>
          <input 
          id='pseudo' 
          role='button' 
          type='text' 
          readOnly={editer ? false : true}
          value={infos.pseudo} onChange={(e)=>setInfos({...infos, pseudo:e.target.value})}
          placeholder='Pseudo'
          required/>
          <label htmlFor='email'>Email</label>
          <input 
          id='email' 
          role='button' 
          type='email' 
          readOnly={editer ? false : true}
          value={infos.email} onChange={(e)=>setInfos({...infos, email:e.target.value})}
          placeholder='Email'
          required />
          <label htmlFor='tel'>Téléphone</label>
          <input 
          id='tel' 
          role='button' 
          type='text'
          placeholder='Tél'
          value={infos.tel} onChange={(e)=>setInfos({...infos, tel:e.target.value})}
          readOnly={editer ? false : true}
           />
          <label htmlFor='sexe'>Sexe</label>
          <input 
          id='sexe' 
          role='button' 
          type='text' 
          placeholder='Sexe'
          readOnly={editer ? false : true} />
          <label htmlFor='age'>Age</label>
          <input 
          id='age' 
          role='button' 
          type='number'
           readOnly={editer ? false : true} 
           value={infos.age} onChange={(e)=>setInfos({...infos, age:Number(e.target.value)})}
           placeholder='Age'
           required/>
          <label htmlFor='cp'>Code postal</label>
          <input 
          id='cp' 
          role='button' 
          type='number' 
          readOnly={editer ? false : true} 
          value={infos.cp} onChange={(e)=>setInfos({...infos, cp:e.target.value})}
          placeholder='Code Postal'
          min={10000} max={99999} required/>
          
          <label htmlFor='pref'>Mes préférences</label>
          </form>
          {editer && <>
            <button type="submit" >Valider</button>
            <button onClick={() => setEditer(false)}>Annuler</button>
          </>
          }
        <Footer/>
        </>}


      </div>
    </>
  )
}

export default Compte