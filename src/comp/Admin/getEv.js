import React, { useEffect, useState } from 'react'
import AddEv from './addEv';
import ModifEv from './modifEv';
import { fetchConcours, supprConcours, visibleAddEv, visibleImgPub, visibleModifEv } from '../../lib/redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import StoragePub from './storagePub';

const GetEv = () => {
  const dispatch = useDispatch();
  const stateEvents = useSelector(state => ({ ...state.concoursRed }));
  const [eventModif, setEventModif] = useState(null);
  const stateVis = useSelector(state => ({ ...state.visibleRed }));
  const [idEv, setIdEv]= useState('');
  const [intitule, setIntitule ]= useState('');
  const [typeImg, setTypeImg]= useState('');
  //-------------------------------------------------------------------
  useEffect(()=>{
    dispatch(fetchConcours());
  },[]);

  const modifierEvent = (ev) => {
    setEventModif(ev);
    dispatch(visibleModifEv(true));
  }

  const supprimerEvent = (idEv, intitule) => {
    dispatch(supprConcours(idEv));
    alert(`évènement ${intitule} supprimé avec succès.`);
  }

  const openImagePub = (idEv,intitule,typeImg)=>{
    setIdEv(idEv);setIntitule(intitule);setTypeImg(typeImg);
    dispatch(visibleImgPub(true));
  }
  //-------------------------------------------------------------------
  return (
    <div className='getEv'>

      <h2>LES EVENEMENTS</h2>

      <button onClick={() => dispatch(visibleAddEv(true))}>Ajouter un nouveau concours</button>

      {(!stateEvents.isLoading && !!stateEvents.items && !stateVis.modifEv && !stateVis.addEv &&!stateVis.imagePub )&& <>
        <table>
          <thead>
            <tr>
              <th>Intitulé</th>
              <th>Description</th>
              <th>Date</th>
              <th>Lieu</th>
              <th>Prix</th>
              <th>Taille</th>
              <th>Début du concours</th>
              <th>Fin du concours</th>

              <th>Nombre de sessions max</th>
              <th>Nombre de minutes max par session</th>
              <th>Nombre total de questions au total</th>
              <th>Nombre total de questions spécifiques à l'évènement</th>
              <th>Nombre de questions liées aux goûts personnels</th>
              <th>Nombre de questions générales</th>

              <th>Nombre de secondes pour répondre</th>

              <th>Nombre de secondes d'affichage de la publicité</th>
              <th>Nombre de questions entre 2 affichages de la publicité</th>

              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {stateEvents.items.map((x, i) => (
              <tr key={i}>
                <td>{x.intitulé}</td>
                <td>{x.description}</td>
                <td>{x.quand}</td>
                <td>{x.lieu}</td>
                <td>{x.prix}</td>
                <td>{x.taille}</td>
                <td>{x.début}</td>
                <td>{x.fin}</td>

                <td>{x.nbSessMax}</td>
                <td>{x.nbMinParSess}</td>
                <td>{x.nbQtot}</td>
                <td>{x.nbQspe}</td>
                <td>{x.nbQperso}</td>
                <td>{x.nbQgen}</td>

                <td>
                 à une question de valeur 1 : {x.nbSecRep1} 
                 à une question de valeur 2 : {x.nbSecRep2} 
                 à une question de valeur 3 : {x.nbSecRep3} 
                 à une question de valeur 4 : {x.nbSecRep4} 
                 à une question de valeur 5 : {x.nbSecRep5} 
                 </td>

                <td>{x.nbSecPub}</td>
                <td>{x.nbQPub}</td>
                <td>
                  <button onClick={() => supprimerEvent(x['_id'],x.intitulé)}>Supprimer l'évènement {x.intitulé}</button>
                  <button onClick={() => modifierEvent(x)}>Modifier l'évènement {x.intitulé}</button>
                  <button onClick={()=> openImagePub(x['_id'],x.intitulé,'affiches/grand')}>Modifier l'image de l'affiche grand format de l'évènement {x.intitulé} largeur 1300 hauteur 540</button>
                  <button onClick={()=> openImagePub(x['_id'],x.intitulé,'affiches/moyen')}>Modifier l'image de l'affiche moyen format de l'évènement {x.intitulé} largeur 500 hauteur 380</button>
                  <button onClick={()=> openImagePub(x['_id'],x.intitulé,'affiches/petit')}>Modifier l'image de l'affiche petit format de l'évènement {x.intitulé} largeur 260 hauteur 300</button>
                  <button onClick={()=> openImagePub(x['_id'],x.intitulé,'publicites')}>Modifier l'image de la publicité du quizz {x.intitulé}</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>}



      {(stateVis.modifEv && !!eventModif) && <ModifEv concours={eventModif} />}
      {stateVis.addEv && <AddEv />}
      {(stateVis.imagePub && !!idEv && !!intitule && !!typeImg)&& <StoragePub idEv={idEv} intitule= {intitule} typeImg={typeImg} />}
    </div>
  )
}

export default GetEv