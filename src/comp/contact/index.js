import React, { useState } from 'react';
import Header from '../melwin/header';
import Nav from '../melwin/nav';
import { useDispatch } from 'react-redux';
import { addFormContact } from '../../lib/redux/actions';
import './index.css';
import Footer from '../melwin/footer';

const Contact = () => {

    const [etatEnvoi, setEtatEnvoi] = useState(false);


    const dispatch = useDispatch();
    //--------------------
    /*    
    const [alerteNom, setAlerteNom] = useState(false);
    const [alertePrenom, setAlertePrenom] = useState(false);
    const [alerteEntr, setAlerteEntr] = useState(false);
    const [alerteEmail, setAlerteEmail] = useState(false);
    const [alerteTel, setAlerteTel] = useState(false);
    const [alerteMsg, setAlerteMsg] = useState(false);
    const verifier = (ev)=>{
     if(!ev.target[0].value){setAlerteNom(true);}   
     if(!ev.target[1].value){setAlertePrenom(true);}   
     if(!ev.target[2].value){setAlerteEntr(true);}   
     if(!ev.target[3].value){setAlerteEmail(true);}   
     if(!ev.target[4].value){setAlerteTel(true);}   
     if(!ev.target[5].value){setAlerteMsg(true);}   
     setTimeout(() => {
        setAlerteNom(false);
        setAlertePrenom(false);
        setAlerteEntr(false);
        setAlerteEmail(false);
        setAlerteTel(false);
        setAlerteMsg(false);
     }, 4000);
    }
    */
    //--------------------
    const envoiEmail = (ev) => {
        ev.preventDefault();
        let formulaire =
        {
            nom: ev.target[0].value,
            prenom: ev.target[1].value,
            entreprise: ev.target[2].value,
            email: ev.target[3].value,
            tel: ev.target[4].value,
            msg: ev.target[5].value
        }
        //verifier(ev);
        dispatch(addFormContact(formulaire));
        setEtatEnvoi(true);
    }
    //--------------------------
    return (
        <>
            <Header />
            <Nav />

            <div className='contact'>
                {!etatEnvoi &&
                    <form onSubmit={envoiEmail}>
                        <input id='nom' type='text' role='button' required placeholder='Nom' />
                        
                        <input id='prenom' type='text' role='button' required placeholder='Prénom' />
                        
                        <input id='entreprise' type='text' role='button' placeholder='Entreprise' />
                        
                        <input id='email' type='email' role='button' required placeholder='Email' />
                        
                        <input id='tel' type='tel' role='button' required placeholder='Tél' />
                        
                        <textarea id='msg' role='button' required placeholder='Votre message...' />

                        <button type='submit'>Envoyer</button>

                    </form>}
                {etatEnvoi && <div className='message'>
                    Votre message a été envoyé avec succès.
                </div>}
            </div>
            <Footer/>

        </>
    )
}

export default Contact