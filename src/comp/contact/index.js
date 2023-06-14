import React, { useState } from 'react';
import Header from '../melwin/header';
import Nav from '../melwin/nav';
import { useDispatch} from 'react-redux';
import { addEmail } from '../../lib/redux/actions';
import { useNavigate } from 'react-router-dom';

const Contact = () => {

    const [etatEnvoi, setEtatEnvoi] = useState(false);
        const dispatch = useDispatch();
    //--------------------
    const nav = useNavigate();
    //--------------------
    const envoiEmail = (ev)=>{
        ev.preventDefault();
        let mail =
        {
            nom:ev.target[0].value,
            prenom:ev.target[1].value,
            entreprise:ev.target[2].entreprise,
            email:ev.target[3].value,
            tel:ev.target[4].value,
            msg:ev.target[5].value
        } 
        dispatch(addEmail(mail)).then(()=>setEtatEnvoi(true));
        
    }
    //--------------------------
    return (
        <>
            <Header/>
            <Nav/>
            <button onClick={()=>nav('/')}>Retour MElwin</button>
            {!etatEnvoi && 
            <div className='contact'>
                <form onSubmit={envoiEmail}>
                    <label htmlFor='nom'>Nom</label>
                    <input id='nom' type='text' role='button' required/>
                    <label htmlFor='prenom'>Prénom</label>
                    <input id='prenom' type='text' role='button' required/>
                    <label htmlFor='entreprise'>Entreprise</label>
                    <input id='entreprise' type='text' role='button' required/>
                    <label htmlFor='email'>Email</label>
                    <input id='email' type='email' role='button' required/>
                    <label htmlFor='tel'>Tél</label>
                    <input id='tel' type='tel' role='button' required/>
                    <label htmlFor='msg'>Message </label>
                    <textarea id='msg' role='button' required/>
                    <button type='submit'>Envoyer</button>
                </form>
            </div>}
            {etatEnvoi && <div>
                Votre message a été envoyé avec succès.
                </div>}
        </>
    )
}

export default Contact