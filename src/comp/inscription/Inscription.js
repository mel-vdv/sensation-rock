import React, { useEffect, useId, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchUserExiste } from '../../lib/redux/actions';
import './index.css';

const Inscription = () => {
    const nav = useNavigate();
    const initialstate = {
        nom: '', prénom: '', pseudo: '', email: '', sexe: '', cp: undefined, tel: '', age: undefined, réponse1: [], concours: [], mdp: ""
    }
    const dispatch = useDispatch();
    const [newUser, setNewUser] = useState(initialstate);
    const stateVerifInscr = useSelector(state => ({ ...state.verifInscrRed }));
    const stateUser = useSelector(state => ({ ...state.userRed }));
    //------------------------------
    const nomId = useId();
    //----------------------------
    const inscrire = (e) => {
        e.preventDefault();
        dispatch(fetchUserExiste(newUser));
    }
    //-------------------
    useEffect(() => {
        if (!!stateUser.item) {
            nav('/');
        }
    }, [stateUser])

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
        <div className='inscription-container'>
            <div className='titre'>MELWIN </div>
            {stateVerifInscr.items.length > 0 && (stateVerifInscr.items[0].pseudo === newUser.pseudo || stateVerifInscr.items[1].pseudo === newUser.pseudo)
                && <p className='alerte'>{stateVerifInscr.items[0].pseudo} est déjà utilisé par un autre utilisateur</p>}
            {stateVerifInscr.items.length > 0 && (stateVerifInscr.items[0].email === newUser.email || stateVerifInscr.items[1].email === newUser.email)
                && <p className='alerte'>Le compte {stateVerifInscr.items[0].email} existe déjà</p>}

            <form onSubmit={inscrire}>
                <label htmlFor={nomId}> Nom :</label>
                <input id={nomId} placeholder='Nom' type='text' value={newUser.nom} onChange={(e) => setNewUser({ ...newUser, nom: e.target.value })} required />

                <label htmlFor='prénom'>Prénom : </label>
                <input id='prénom' placeholder='Prénom' type='text' value={newUser.prénom} onChange={(e) => setNewUser({ ...newUser, prénom: e.target.value })} required />

                <label htmlFor='pseudo'>Pseudo : </label>
                <input id='pseudo' placeholder='Pseudo' type='text' value={newUser.pseudo} onChange={(e) => setNewUser({ ...newUser, pseudo: e.target.value })} required />

                <label htmlFor='mdp'>Mot de passe : </label>
                <input type="password" placeholder='Mot de passe' value={newUser.mdp} onChange={(e) => setNewUser({ ...newUser, mdp: e.target.value })} required />

                <label htmlFor='email'>Email : </label>
                <input id='email' placeholder='Email' type='email' value={newUser.email} onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} required />

                <div id='sexe'>
                    <div><input type='radio' name='sexe' value='homme' checked={newUser.sexe === 'homme'} onChange={() => setNewUser({ ...newUser, sexe: 'homme' })} />Homme
                    </div>
                    <div><input type='radio' name='sexe' value='femme' checked={newUser.sexe === 'femme'} onChange={() => setNewUser({ ...newUser, sexe: 'femme' })} />Femme
                    </div>
                    <div><input type='radio' name='sexe' value='autre' checked={newUser.sexe === 'autre'} onChange={() => setNewUser({ ...newUser, sexe: 'autre' })} />Autre
                    </div>
                </div>

                <label htmlFor='tel'>Téléphone : </label>
                <input id='tel' placeholder='Tél' type='text' value={newUser.tel} onChange={(e) => setNewUser({ ...newUser, tel: e.target.value })} />

                <label htmlFor='age'>Age : </label>
                <input id='age' min={7} max={99} placeholder='Age' type='number' value={newUser.age} onChange={(e) => setNewUser({ ...newUser, age: e.target.value })} required />

                <label htmlFor='cp'>Code postal : </label>
                <input id='cp' min={1000} max={99999} placeholder='Code postal' type='text' value={newUser.cp} onChange={(e) => setNewUser({ ...newUser, cp: e.target.value })} required />

                <div>Mon top 3 de catégories musicales : </div>

                <div>
                    <button type='button' className={newUser.réponse1.includes('Rock') ? 'select' : 'no-select'} onClick={() => select('Rock')}>ROCK</button>
                    <button type='button' className={newUser.réponse1.includes('Pop Rock') ? 'select' : 'no-select'} onClick={() => select('Pop Rock')}>POP ROCK</button>
                    <button type='button' className={newUser.réponse1.includes('Pop') ? 'select' : 'no-select'} onClick={() => select('Pop')}>POP</button>
                    <button type='button' className={newUser.réponse1.includes('Rap') ? 'select' : 'no-select'} onClick={() => select('Rap')}>RAP</button>
                    <button type='button' className={newUser.réponse1.includes('Folk') ? 'select' : 'no-select'} onClick={() => select('Folk')}>FOLK</button>
                    <button type='button' className={newUser.réponse1.includes('Reggae') ? 'select' : 'no-select'} onClick={() => select('Reggae')}>REGGAE</button>
                    <button type='button' className={newUser.réponse1.includes('Electro') ? 'select' : 'no-select'} onClick={() => select('Electro')}>ELECTRO</button>
                    <button type='button' className={newUser.réponse1.includes('Jazz') ? 'select' : 'no-select'} onClick={() => select('Jazz')}>JAZZ</button>
                    <button type='button' className={newUser.réponse1.includes('Variété') ? 'select' : 'no-select'} onClick={() => select('Variété')}>VARIETE</button>
                    <button type='button' className={newUser.réponse1.includes('RNB') ? 'select' : 'no-select'} onClick={() => select('RNB')}>RnB</button>
                    <button type='button' className={newUser.réponse1.includes('Musique Classique') ? 'select' : 'no-select'} onClick={() => select('Musique Classique')}>MUSIQUE CLASSIQUE</button>
                </div>

                <button type='submit'>ENREGISTRER</button>
            </form>
        </div>
    )
}

export default Inscription