import React, { useEffect, useId, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addNewUser,  getNewUser} from '../../lib/redux/actions';

const Inscription = () => {
    const nav = useNavigate();
    useEffect(() => {
        console.log('useeffect');
    }, [])
    const initialstate = {
        nom: '', prénom: '', pseudo: '', email: '', sexe: 'homme', cp: '', tel: '', age: 0, réponse1: ['rock']
    }
    const dispatch = useDispatch();
    const [newUser, setNewUser] = useState(initialstate);
    //------------------------------
    const nomId = useId();
    //----------------------------
    const inscrire = () => {
        dispatch(addNewUser(newUser));
        dispatch(getNewUser(newUser));
        nav('/events');
    }
    //----------------------------
    const select = (genre) => {
        if (newUser.réponse1.includes(genre)) {
            let bibi = newUser.réponse1.filter(e => e !== genre);
            setNewUser({ ...newUser, réponse1: bibi });
        }
        else {/////////////////////// important : pas de push :
            setNewUser({ ...newUser, réponse1: [...newUser.réponse1, genre] });
        }
    }
    //---------------------------- !!! pièce button type button sinon il fait submit par défault

    return (
        <div className='inscription'>
            <h2>inscription</h2>
            <form onSubmit={() => inscrire()}>
                <label htmlFor={nomId}> Nom :</label>
                <input id={nomId} placeholder='Nom' type='text' value={newUser.nom} onChange={(e) => setNewUser({ ...newUser, nom: e.target.value })} />
                <label htmlFor='prénom'>Prénom : </label>
                <input id='prénom' placeholder='Prénom' type='text' value={newUser.prénom} onChange={(e) => setNewUser({ ...newUser, prénom: e.target.value })} />
                <label htmlFor='pseudo'>Pseudo : </label>
                <input id='pseudo' placeholder='Pseudo' type='text' value={newUser.pseudo} onChange={(e) => setNewUser({ ...newUser, pseudo: e.target.value })} />
                <label htmlFor='email'>Email : </label>
                <input id='email' placeholder='Email' type='email' value={newUser.email} onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} />
                <button type='button' onClick={() => setNewUser({ ...newUser, sexe: 'homme' })}>Homme</button>
                <button type='button' onClick={() => setNewUser({ ...newUser, sexe: 'femme' })}>Femme</button>
                <button type='button' onClick={() => setNewUser({ ...newUser, sexe: 'autre' })}>Autre</button>
                <input id='tel' placeholder='Tél' type='text' value={newUser.tel} onChange={(e) => setNewUser({ ...newUser, tel: e.target.value })} />
                <input id='age' placeholder='age' type='number' value={newUser.age} onChange={(e) => setNewUser({ ...newUser, age: e.target.value })} />
                <input id='cp' placeholder='Code postal' type='text' value={newUser.cp} onChange={(e) => setNewUser({ ...newUser, cp: e.target.value })} />
                Mon top 3 de catégories musicales :
                <button type='button' className={newUser.réponse1.includes('rock') ? 'select' : 'no-select'} onClick={() => select('rock')}>ROCK</button>
                <button type='button' className={newUser.réponse1.includes('rap') ? 'select' : 'no-select'} onClick={() => select('rap')}>RAP</button>
                <button type='button' className={newUser.réponse1.includes('electro') ? 'select' : 'no-select'} onClick={() => select('electro')}>ELECTRO</button>
                <button type='button' className={newUser.réponse1.includes('jazz') ? 'select' : 'no-select'} onClick={() => select('jazz')}>JAZZ</button>
                <button type='button' className={newUser.réponse1.includes('varietes') ? 'select' : 'no-select'} onClick={() => select('varietes')}>VARIETE</button>
                <button type='button' className={newUser.réponse1.includes('randb') ? 'select' : 'no-select'} onClick={() => select('randb')}>R and B</button>
                <button type='button' className={newUser.réponse1.includes('classique') ? 'select' : 'no-select'} onClick={() => select('classique')}>MUSIQUE CLASSIQUE</button>

                <button type='submit'>ENREGISTRER</button>
            </form>
        </div>
    )
}

export default Inscription