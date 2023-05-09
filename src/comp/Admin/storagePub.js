import React, { useContext } from 'react';
import FbContext from '../../firebase/contexte';
import { useDispatch} from 'react-redux';
import { visibleImgPub } from '../../lib/redux/actions';

const StoragePub = ({idEv, intitule,typeImg}) => {

    const dispatch= useDispatch();

    const firebase = useContext(FbContext);

    const goStorage = (ev) => {
        ev.preventDefault();
        const file = ev.target[0].files[0];
        const chemin = `/${typeImg}/${idEv}`;
        firebase.onEnregistre(chemin,file);
        dispatch(visibleImgPub(false));    
        alert(`Nouvelle ${typeImg} enregistrée avec succès pour l'évènement ${intitule}`);     
       }
    return (
        <div>storagePub
            <form onSubmit={goStorage}>
                <input type='file' />
                <button type='submit'>enregistrer cette photo</button>
            </form>
        </div>
    )
}

export default StoragePub