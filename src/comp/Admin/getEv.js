import React, { useEffect, useState } from 'react'
import AddEv from './addEv';
import ModifEv from './modifEv';
import { fetchConcours, fetchListeQSpe, supprConcours, visibleAddEv, visibleAddQspe, visibleGetQspe, visibleImgPub, visibleModifEv } from '../../lib/redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import StoragePub from './storagePub';
import './admin.css';
import GetQspe from './GetQspe';

const GetEv = () => {
  const dispatch = useDispatch();
  const stateEvents = useSelector(state => ({ ...state.concoursRed }));
  const [eventModif, setEventModif] = useState(null);
  const stateVis = useSelector(state => ({ ...state.visibleRed }));
  const [idEv, setIdEv] = useState('');
  const [nomEv, setNomEv] = useState('');
  const [intitule, setIntitule] = useState('');
  const [typeImg, setTypeImg] = useState('');
  //-------------------------------------------------------------------
  useEffect(() => {
    dispatch(fetchConcours());
  }, []);

  const modifierEvent = (ev) => {
    setEventModif(ev);
    dispatch(visibleModifEv(true));
  }

  const supprimerEvent = (idEv, intitule) => {
    dispatch(supprConcours(idEv));
    alert(`évènement ${intitule} supprimé avec succès.`);
  }

  const openImagePub = (idEv, intitule, typeImg) => {
    setIdEv(idEv); setIntitule(intitule); setTypeImg(typeImg);
    dispatch(visibleImgPub(true));
  }

  const gererQspe = (idEv,nomEv) => {
    setIdEv(idEv);setNomEv(nomEv);
    dispatch(fetchListeQSpe(idEv));
    dispatch(visibleGetQspe(true));
  }
  //-------------------------------------------------------------------
  return (
    <div className='getEv'>

      <h2>LES EVENEMENTS</h2>

      <button onClick={() => dispatch(visibleAddEv(true))}>Ajouter un nouveau concours</button>

      {(!stateEvents.isLoading && !!stateEvents.items 
        && !stateVis.modifEv && !stateVis.addEv 
        && !stateVis.imagePub  
        && !stateVis.getQspe
        ) && <>
      
        <table>
          <thead>
            <tr>
              <th>Intitulé</th>
              <th>Informations Evènement</th>
              <th>Informations Concours</th>
              <th>Informations Publicité</th>
              <th>Actions</th>

            </tr>
          </thead>
          <tbody>
            {stateEvents.items.map((x, i) => (
              <tr key={i}>

                <td> <span>{x.intitulé}</span> </td>

                <td>
                  <ul>
                    <li>Thème : <span>{x.thème}</span> </li>
                    <li>Description : {x.description}</li>
                    <li>Prix : <span>{x.prix}€</span> </li>
                    <li>Lieu : <span>{x.lieu}</span> </li>
                    <li>Quand : <span>{x.quand}</span> </li>
                  </ul>

                </td>

                <td>
                  <ul>
                    <li>Gain : <span>{x.gain}</span> </li>
                    <li>Dates : <table>
                      <tr>
                        <td>Début : </td>
                        <td><span>{x.début}</span> </td>
                      </tr>
                      <tr>
                        <td>Fin : </td>
                        <td><span>{x.fin}</span> </td>
                      </tr>
                    </table></li>
                    <li>Nombre de questions :

                      <table>
                        <tr>
                          <td>Totales :</td>
                          <td><span>{x.nbQtot}</span> </td>
                        </tr>
                        <tr>
                          <td>Spécifiques :</td>
                          <td><span>{x.nbQspe}</span> </td>
                        </tr>
                        <tr>
                          <td>Liées aux goûts personnels :</td>
                          <td><span>{x.nbQperso}</span> </td>
                        </tr>
                        <tr>
                          <td>Générales :</td>
                          <td><span>{x.nbQgen}</span> </td>
                        </tr>
                      </table>
                    </li>
                    <li>
                      <table>
                        Temps(secondes) pour répondre à une question  :
                        <tr>
                          <td>de valeur 1 :</td>
                          <td><span>{x.nbSecRep1}</span> </td>
                        </tr>
                        <tr>
                          <td>de valeur 2 :</td>
                          <td><span>{x.nbSecRep2}</span> </td>
                        </tr>
                        <tr>
                          <td>de valeur 3 :</td>
                          <td><span>{x.nbSecRep3}</span> </td>
                        </tr>
                        <tr>
                          <td>de valeur 4 :</td>
                          <td><span>{x.nbSecRep4}</span> </td>
                        </tr>
                        <tr>
                          <td>de valeur 5 :</td>
                          <td><span>{x.nbSecRep5}</span> </td>
                        </tr>
                      </table>
                    </li>
                  </ul>
                </td>


                <td>
                  <ul>
                    <li>Nombre de questions entre 2 pub : <span>{x.nbSecPub}</span> </li>
                    <li>Nombre de secondes d'affichage de la pub : <span>{x.nbQPub}</span> </li>
                    <li>Taille de l'affiche : <span>{x.taille}</span>  </li>
                  </ul>
                </td>

                <td>
                  <button onClick={() => supprimerEvent(x['_id'], x.intitulé)}>Supprimer l'évènement {x.intitulé}</button> <br />
                  <button onClick={() => modifierEvent(x)}>Modifier l'évènement {x.intitulé}</button><br />

                  {x.nbQspe > 0 && <button onClick={() => visibleAddQspe(true)}>Ajouter des questions spécifiques</button>}

                  {x['affiche-g'] && x.taille === 3 && <>
                    <button onClick={() => openImagePub(x['_id'], x.intitulé, 'affiches/grand')}>
                      Modifier l'image de l'affiche grand format de l'évènement {x.intitulé}</button><br />

                  </>}

                  {x['affiche-m'] && x.taille === 3 &&
                    <><button onClick={() => openImagePub(x['_id'], x.intitulé, 'affiches/moyen')}>
                      Modifier l'image de l'affiche moyen format de l'évènement {x.intitulé}</button><br /></>
                  }

                  {x['affiche-m'] && x.taille === 2 &&
                    <button onClick={() => openImagePub(x['_id'], x.intitulé, 'affiches/moyen')}>
                      Modifier l'image de l'affiche moyen format de l'évènement {x.intitulé}</button>}

                  {x['affiche-p'] && x.taille === 1 &&
                    <button onClick={() => openImagePub(x['_id'], x.intitulé, 'affiches/petit')}>
                      Modifier l'image de l'affiche petit format de l'évènement {x.intitulé}</button>}

                  {!x['affiche-p'] && x.taille === 1 &&
                    <button className='jaune' onClick={() => openImagePub(x['_id'], x.intitulé, 'affiches/petit')}>
                      Ajouter l'image de l'affiche petit format de l'évènement {x.intitulé}</button>}

                  {!x['affiche-m'] && x.taille === 2 &&
                    <button className='jaune' onClick={() => openImagePub(x['_id'], x.intitulé, 'affiches/moyen')}>
                      Ajouter l'image de l'affiche moyen format de l'évènement {x.intitulé}</button>}

                  {!x['affiche-m'] && x.taille === 3 && <>
                    <button className='jaune' onClick={() => openImagePub(x['_id'], x.intitulé, 'affiches/moyen')}>
                      Ajouter l'image de l'affiche moyen format de l'évènement {x.intitulé}</button> <br />
                  </>}
                  {!x['affiche-g'] && x.taille === 3 && <>
                    <button className='jaune' onClick={() => openImagePub(x['_id'], x.intitulé, 'affiches/grand')}>
                      Ajouter l'image de l'affiche grand format de l'évènement {x.intitulé}</button><br /></>}

                  {x.pub && <button onClick={() => openImagePub(x['_id'], x.intitulé, 'publicites')}>Modifier l'image de la publicité du quizz {x.intitulé}</button>}
                  {!x.pub && <button onClick={() => openImagePub(x['_id'], x.intitulé, 'publicites')}>Ajouter l'image de la publicité du quizz {x.intitulé}</button>}

                  <button onClick={() => gererQspe(x['_id'], x.intitulé)}>Gérer les questions spécifiques </button>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>}



      {(stateVis.modifEv && !!eventModif) && <ModifEv concours={eventModif} />}
      {stateVis.addEv && <AddEv />}
      {stateVis.getQspe && <GetQspe idEv={idEv} nomEv={nomEv} />}
      {(stateVis.imagePub && !!idEv && !!intitule && !!typeImg) && <StoragePub idEv={idEv} intitule={intitule} typeImg={typeImg} />}
    </div>
  )
}

export default GetEv