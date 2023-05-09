import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { majConcours, modifConcours, visibleModifEv } from '../../lib/redux/actions';

const ModifEv = ({ concours }) => {

  //---------------------------------
  const [evMod, setEvMod] = useState(concours);
  //---------------------------------
  const dispatch = useDispatch();

  const close = () => { dispatch(visibleModifEv(false)) }
  //---------------------------------
  const modifierConcours = () => {
    dispatch(modifConcours(evMod));
    dispatch(majConcours(evMod));
    alert(`évènement ${evMod.intitulé} modifié avec succès.`);
    close();
  }
  //---------------------------------
  return (
    <div className='modifEv'>
      <h2>MODIFIER UN EVENEMENT CONCOURS</h2>
      <form onSubmit={() => modifierConcours()}>
        <label htmlFor='intitule'>Intitulé </label>
        <input id='intitule' type='text' value={evMod.intitulé} onChange={(e) => setEvMod({ ...evMod, intitulé: e.target.value })} />

        <label htmlFor='descr'>Description</label>
        <textarea id='descr' value={evMod.description} onChange={(e) => setEvMod({ ...evMod, description: e.target.value })}></textarea>

        <label htmlFor='date'>Date</label>
        <input id='date' type='date' value={evMod.quand} onChange={(e) => setEvMod({ ...evMod, quand: e.target.value })} />

        <label htmlFor='lieu'>Lieu</label>
        <input id='lieu' type='text' value={evMod.lieu} onChange={(e) => setEvMod({ ...evMod, lieu: e.target.value })} />

        <label htmlFor='prix'>Prix</label>
        <input id='prix' type='number' value={evMod.prix} onChange={(e) => setEvMod({ ...evMod, prix: e.target.value })} />

        <label htmlFor='taille'>Taille de l'affichage (1 si petit, 2 si moyen ou 3 si grand)</label>
        <input id='taille' type='number' value={evMod.taille} onChange={(e) => setEvMod({ ...evMod, taille: e.target.value })} />

        <label htmlFor='nbSessMax'>Nombre de sessions maximum (mettre 0 si illimité)</label>
        <input id='nbSessMax' type='number' value={evMod.nbSessMax} onChange={(e) => setEvMod({ ...evMod, nbSessMax: e.target.value })} />

        <label htmlFor='nbMinParSess' >Nombre de minutes max autorisées par session (mettre 0 si illimité)</label>
        <input id='nbMinParSess' type='number' value={evMod.nbMinParSess} onChange={(e) => setEvMod({ ...evMod, nbMinParSess: e.target.value })} />

        <label htmlFor='nbQtot'>Nombre de questions totales</label>
        <input id='nbQtot' type='number' value={evMod.nbQtot} onChange={(e) => setEvMod({ ...evMod, nbQtot: e.target.value })} />

        <label htmlFor='nbQperso'>Nombre de questions personnelles</label>
        <input id='nbQperso' type='number' value={evMod.nbQperso} onChange={(e) => setEvMod({ ...evMod, nbQperso: e.target.value })} />

        <label htmlFor='debut'>Date de début du concours</label>
        <input id='debut' type='date' value={evMod.début} onChange={(e) => setEvMod({ ...evMod, début: e.target.value })} />

        <label htmlFor='fin'>Date de clôture du concours </label>
        <input id='fin' type='date' value={evMod.fin} onChange={(e) => setEvMod({ ...evMod, fin: e.target.value })} />

        <label htmlFor='nbSecPub'> Nombre de secondes d'affichage de la publicité </label>
        <input id='nbSecPub' type='number' value={evMod.nbSecPub} onChange={(e) => setEvMod({ ...evMod, nbSecPub: e.target.value })} />

        <label htmlFor='nbQPub' >Nombre de questions entre 2 publicités</label>
        <input id='nbQPub' type='number' value={evMod.nbQPub} onChange={(e) => setEvMod({ ...evMod, nbQPub: e.target.value })} />

        <button type='submit'>Valider les modifications de ce concours</button> 
      </form>
      <button onClick={() => close()}>Annuler les modifications et Retour à la liste d'évènements</button>

    </div>
  )
}

export default ModifEv