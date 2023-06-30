import React, { useState } from 'react'
import Nav from '../melwin/nav'
import Header from '../melwin/header'
import { useDispatch } from 'react-redux';
import { addDemande } from '../../lib/redux/actions';
import "./index.css";
import Footer from '../melwin/footer';

const Annonceur = () => {

  const [etatEnvoi, setEtatEnvoi] = useState(false);
  const[accepte, setAccepte] = useState(false);

  const dispatch = useDispatch();
  //---------------------------
  const envoiAnnonce = (ev) => {
    ev.preventDefault();
    let mail =ev.target[1].value;
    console.log(mail);
    dispatch(addDemande(mail));
    setEtatEnvoi(true);
  }
  //---------------------------
  return (
    <>
      <Header />
      <Nav />
      <div className='annonceur'>

        {!etatEnvoi &&
          <form className='demande' onSubmit={envoiAnnonce}>
            <label htmlFor='email' id='invis'>Email</label>
            <input placeholder='Email' id='email' type='email' required/>
            <div className='cocher'>
            <input type="checkbox"  value={accepte} onChange={e=>setAccepte(e.target.checked)}/>
            <label>Je souhaite recevoir des informations pour devenir annonceur.</label>
            </div>
            <button disabled={!accepte} type='submit'>Envoyer ma demande</button>
          </form>

        }

        {etatEnvoi && <div className='message'>
          Votre demande a été envoyée avec succès.
        </div>
        }

      </div>
      <Footer/>
    </>
  )
}

export default Annonceur