import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addConcours, visibleAddEv } from '../../lib/redux/actions';

const AddEv = () => {

    const initialEv = {
        intitulé: "",
        lieu: '',
        prix: undefined,
        taille: undefined,
        nbSessMax: undefined,
        nbMinParSess: undefined,
        nbQtot: undefined,
        nbQperso: undefined,
        nbQgen: undefined,
        nbQspe: undefined
    }
    const [newEv, setNewEv]= useState(initialEv);
////////////////////////////////////////////////
const dispatch= useDispatch();
//---------------
const close = ()=>{
    dispatch(visibleAddEv(false))
}
//---------------
const ajouterEvent=()=>{
    dispatch(addConcours(newEv)); 
}
////////////////////////////////////////////////
////////////////////////////////////////////////
    return (
        <div className='addEv'>
            <h2>AJOUTER UN EVENEMENT</h2>
            <form onSubmit={()=>ajouterEvent()}>
                Intitulé : 
                <input type='text'onChange={(e)=> setNewEv({...newEv, intitulé: e.target.value})}  value={newEv.intitulé}/>
                Catégorie : 
                
                Lieu : 
                <input type='text' value={newEv.lieu} onChange={(e)=> setNewEv({...newEv, lieu: e.target.value})} />
                Prix : 
                <input type='number' value={newEv.prix} onChange={(e)=> setNewEv({...newEv, prix: e.target.value})} />
                Taille : 
                <input type='number' value={newEv.taille} onChange={(e)=> setNewEv({...newEv, taille: e.target.value})} />
                Nombre de sessions maximales : 
                <input type='number' value={newEv.nbSessMax} onChange={(e)=> setNewEv({...newEv, nbSessMax: e.target.value})} />
                Nombre de minutes maximum par session : 
                <input type='number' value={newEv.nbMinParSess} onChange={(e)=> setNewEv({...newEv, nbMinParSess: e.target.value})} />
                Nombre total de question : 
                <input type='number' value={newEv.nbQtot} onChange={(e)=> setNewEv({...newEv,nbQtot: e.target.value})} />
                Nombre de Questions liées aux goûts personnels du joueur :
                <input type='number' value={newEv.nbQperso} onChange={(e)=> setNewEv({...newEv, nbQperso: e.target.value})} />
                Nombre de questions générales : 
                <input type='number' value={newEv.nbQgen} onChange={(e)=> setNewEv({...newEv,nbQgen: e.target.value})} />
                Nombre de questions spécifiques : 
                <input type='number' value={newEv.nbQspe} onChange={(e)=> setNewEv({...newEv, nbQspe: e.target.value})} />

                <input type='submit' value='ajouter'/>
            </form>
            <button onClick={()=>close()}>Retour à la liste des évènements</button>
        </div>
    )
}

export default AddEv