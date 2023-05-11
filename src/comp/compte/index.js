import React, { useState } from 'react';
import Header from '../melwin/header';
import Nav from '../melwin/nav';
import { useDispatch, useSelector } from 'react-redux';
import './index.css';
import { modifUser } from '../../lib/redux/actions';

const Compte = () => {
  //----------------------
  const stateUser = useSelector(state => ({ ...state.userRed }));
  const [editer, setEditer] = useState(false);
  const [stat, setStat] = useState(false);
  const [infos, setInfos] = useState(stateUser.item);
  //----------------------
  const dispatch = useDispatch();
  const valider = () => {
    console.log('etape 1, ',stateUser.item['_id'],infos);
 dispatch(modifUser(stateUser.item['_id'],infos));
  }
  //---------------------
  return (
    <>
  

      <div className='container-compte'>
        <Header/>
        <Nav/>
        
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
          <label htmlFor='nom'>Nom</label>
          <input id='nom' role='button' type='text' value={infos.nom} onChange={(e) => setInfos({ ...infos, nom: e.target.value })} readOnly={editer ? false : true} />
          <label htmlFor='prenom'>Prénom</label>
          <input id='prenom' role='button' type='text' value={infos.prénom} onChange={(e) => setInfos({ ...infos, prénom: e.target.value })} readOnly={editer ? false : true} />
          <label htmlFor='pseudo'>Pseudo</label>
          <input id='pseudo' role='button' type='text' value={infos.pseudo} onChange={(e) => setInfos({ ...infos, pseudo: e.target.value })} readOnly={editer ? false : true} />
          <label htmlFor='email'>Email</label>
          <input id='email' role='button' type='email' value={infos.email} onChange={(e) => setInfos({ ...infos, email: e.target.value })} readOnly={editer ? false : true} />
          <label htmlFor='tel'>Téléphone</label>
          <input id='tel' role='button' type='text' value={infos.tel} onChange={(e) => setInfos({ ...infos, tel: e.target.value })} readOnly={editer ? false : true} />
          <label htmlFor='sexe'>Sexe</label>
          <input id='sexe' role='button' type='text' value={infos.sexe} onChange={(e) => setInfos({ ...infos, sexe: e.target.value })} readOnly={editer ? false : true} />
          <label htmlFor='age'>Age</label>
          <input id='age' role='button' type='number' value={infos.age} onChange={(e) => setInfos({ ...infos, age: e.target.value })} readOnly={editer ? false : true} />
          <label htmlFor='cp'>Code postal</label>
          <input id='cp' role='button' type='number' value={infos.cp} onChange={(e) => setInfos({ ...infos, cp: e.target.value })} readOnly={editer ? false : true} />
          <label htmlFor='pref'>Mes préférences</label>
          {editer && <>
            <button onClick={() => valider()}>Valider</button>
            <button onClick={() => setInfos(stateUser.item)}>Annuler</button>
          </>
          }

        </>}


      </div>
    </>
  )
}

export default Compte