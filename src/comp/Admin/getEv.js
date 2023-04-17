import React, { useEffect, useState } from 'react'
import AddEv from './addEv';
import ModifEv from './modifEv';
import { fetchConcours, supprConcours, visibleAddEv, visibleGetEv, visibleModifEv } from '../../lib/redux/actions';
import { useDispatch, useSelector } from 'react-redux';

const GetEv = () => {
  const dispatch = useDispatch();
  const stateEvents = useSelector(state => ({ ...state.concoursRed }));
  const [eventModif, setEventModif] = useState(null);
  const stateVis = useSelector(state => ({ ...state.visibleRed }));
  //-------------------------------------------------------------------
  useEffect(()=>{
    dispatch(fetchConcours());
  },[]);

  const modifierEvent = (ev) => {
    setEventModif(ev);
    dispatch(visibleModifEv(true));
  }

  const supprimerEvent = (idEv) => {
    dispatch(supprConcours(idEv));
  }
  //-------------------------------------------------------------------
  return (
    <div className='getEv'>

      <h2>LES EVENEMENTS</h2>

      <button onClick={() =>dispatch(visibleGetEv(false))}>retour admin</button>
      <button onClick={() => dispatch(visibleAddEv(true))}>Ajouter un nouveau concours</button>

      {!stateEvents.isLoading && !!stateEvents.items && <>
        <table>
          <thead>
            <tr>
              <th>Intitulé</th>
              <th>Date</th>
              <th>Lieu</th>
              <th>Prix</th>
              <th>Taille</th>
              <th>Début du concours</th>
              <th>Fin du concours</th>

              <th>Nombre de sessions max</th>
              <th>Nombre de minutes max par session</th>
              <th>Nombre total de questions</th>
              <th>Nombre de questions personnelles</th>

              <th>Nombre de secondes d'affichage de la publicité</th>
              <th>Nombre de questions entre 2 affichages de la publicité</th>

              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {stateEvents.items.map((x, i) => (
              <tr key={i}>
                <td>{x.intitulé}</td>
                <td>{x.quand}</td>
                <td>{x.lieu}</td>
                <td>{x.prix}</td>
                <td>{x.taille}</td>
                <td>{x.début}</td>
                <td>{x.fin}</td>

                <td>{x.nbSessMax}</td>
                <td>{x.nbMinParSess}</td>
                <td>{x.nbQtot}</td>
                <td>{x.nbQperso}</td>

                <td>{x.nbSecPub}</td>
                <td>{x.nbQPub}</td>
                <td>
                  <button onClick={() => supprimerEvent(x['_id'])}>Supprimer cet évènement</button>
                  <button onClick={() => modifierEvent(x)}>Modifier cet évènement</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>}



      {(stateVis.modifEv && !!eventModif) && <ModifEv concours={eventModif} />}
      {stateVis.addEv && <AddEv />}
    </div>
  )
}

export default GetEv