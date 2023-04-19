import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { modifConcours, visibleModifEv } from '../../lib/redux/actions';

const ModifEv = ({concours}) => {

    //---------------------------------
    const [evMod, setEvMod]= useState(concours);
    //---------------------------------
    const dispatch = useDispatch();

    const close = ()=>{dispatch(visibleModifEv(false))}
    //---------------------------------
    const modifierConcours = ()=>{
      console.log('1');
        dispatch(modifConcours(evMod));
    }
    //---------------------------------
  return (
    <div className='modifEv'>
   <h2>MODIFIER UN EVENEMENT CONCOURS</h2>
   <form onSubmit={()=>modifierConcours()}>
    Les informations de l'évènement <br/>
    Intitulé : 
    <input type='text' value={evMod.intitulé} onChange={(e)=>setEvMod({...evMod, intitulé : e.target.value})}/>
    Description : 
    <textarea value={evMod.description} onChange={(e)=>setEvMod({...ModifEv, description:e.target.value})}></textarea>
    Quand :  (sous la forme dd-mm-yyyy)
    <input type='date' value={evMod.quand}  onChange={(e)=>setEvMod({...evMod, quand : e.target.value})}/>
    Lieu : 
    <input type='text' value={evMod.lieu} onChange={(e)=>setEvMod({...evMod, lieu : e.target.value})}/>
    Prix (en euro) : 
    <input type='number' value={evMod.prix} onChange={(e)=>setEvMod({...evMod, prix :e.target.value})}/>
    Taille (1 si petit affichage, 2 si moyen affichage ou 3 si grand affichage) :
    <input type='number' value={evMod.taille} onChange={(e)=>setEvMod({...evMod, taille :e.target.value})}/>
    {/******************************************************************************************************* */}
    Les Questions <br/>
    Nombre de sessions maximum (mettre 0 si illimité) :  
    <input type='number' value={evMod.nbSessMax} onChange={(e)=>setEvMod({...evMod, nbSessMax :e.target.value})}/>
    Nombre de minutes max autorisées par session (mettre 0 si illimité): 
    <input type='number' value={evMod.nbMinParSess} onChange={(e)=>setEvMod({...evMod, nbMinParSess:e.target.value})}/>
    Nombre de questions totales
    <input type='number' value={evMod.nbQtot} onChange={(e)=>setEvMod({...evMod, nbQtot:e.target.value})}/>
    Nombre de questions personnelles : 
    <input type='number' value={evMod.nbQperso} onChange={(e)=>setEvMod({...evMod, nbQperso:e.target.value})}/>
    Date de début du concours : (sous la forme dd-mm-yyyy)
    <input type='date' value={evMod.début}  onChange={(e)=>setEvMod({...evMod, début : e.target.value})}/>
    Date de clôture du concours :  (sous la forme dd-mm-yyyy)
    <input type='date' value={evMod.fin}  onChange={(e)=>setEvMod({...evMod, fin : e.target.value})}/>
   {/******************************************************************************************************* */}
    La publicité : <br/>
    Modifier le média publicité : 
    <input type='file'/>
    Temps d'affichage de la publicité : 
    <input type='number' value={evMod.nbSecPub} onChange={(e)=>setEvMod({...evMod, nbSecPub : e.target.value})}/>
    Fréquence d'affichage de la publicité : (= nombre de questions entre 2 publicités)
    <input type='number' value={evMod.nbQPub} onChange={(e)=>setEvMod({...evMod, nbQPub : e.target.value})}/>

    <input type='submit' value='valider les modifications de ce concours'/>
   </form>
   <button onClick={()=>close()}>retour à la liste d'évènements</button>

    </div>
  )
}

export default ModifEv