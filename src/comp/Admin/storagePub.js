import React, { useContext } from 'react';
import FbContext from '../../firebase/contexte';
import { useDispatch } from 'react-redux';
import { majConcours, modifConcours, visibleImgPub, visiblePub } from '../../lib/redux/actions';
import './admin.css';
const StoragePub = ({ idEv, intitule, typeImg }) => {

    const dispatch = useDispatch();

    const firebase = useContext(FbContext);

    const goStorage = (ev) => {
        ev.preventDefault();
        const file = ev.target[0].files[0];
        const chemin = `/${typeImg}/${idEv}`;
        firebase.onEnregistre(chemin, file);
        dispatch(visibleImgPub(false));
        let action = typeImg === "publicites" ? { pub: true, '_id': idEv } : { affiche: true, '_id': idEv  };
        dispatch(modifConcours(action));
       // dispatch(majConcours(action));
        alert(`Nouvelle ${typeImg} enregistrée avec succès pour l'évènement ${intitule}`);
    }
    return (
        <div>
            <header>
                <h2>Gestion des affiches</h2>
            </header>
            <button className='retour' onClick={()=>dispatch(visibleImgPub(false))}>Annuler et retour à la listes des concours</button>
            <form onSubmit={goStorage}>
                {typeImg ==="publicites" && <p>Le format de votre publicités peut être mp4 (video) ou png/jpeg (image)</p>}
                {typeImg==="affiches/petit" && <p>La taille de votre affiche doit respecter les proportions suivantes : largeur = hauteur</p>}
                {typeImg==="affiches/moyen" && <p>La taille de votre affiche doit respecter les proportions suivantes : largeur = 2x hauteur</p>}
                {typeImg==="affiches/grand" && <p>La taille de votre affiche doit respecter les proportions suivantes : largeur = 2.5x hauteur</p>}

                <input type='file' />
                {typeImg==="publicites" && <button type='submit'>Enregistrer cette photo ou vidéo</button>}
                {typeImg !=="publicites" && <button type='submit'>Enregistrer cette photo</button>}
                
            </form>
        </div>
    )
}

export default StoragePub