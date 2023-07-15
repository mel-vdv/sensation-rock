import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserEmailMdp} from '../../lib/redux/actions';
import Header from '../melwin/header';
import Nav from '../melwin/nav';
import Footer from '../melwin/footer';
import './index.css';

const Connexion = () => {

  const [email, setEmail] = useState('melvdv@yahoo.fr');
  const [mdp, setMdp] = useState("");
  const [submitted, setSubmitted]= useState(false)
;  const dispatch = useDispatch();
  const nav = useNavigate();

  const stateUser = useSelector(state => ({ ...state.userRed }));

  //-----------------------------------

  const connectUser = (e) => {
    e.preventDefault();
    console.log('1', email, mdp);
    dispatch(fetchUserEmailMdp(email, mdp));
    setSubmitted(true);

  }
  //----------------------------------
  useEffect(() => {
    if (!!stateUser.item) {
      localStorage.setItem('userEmail', email);
      nav('/');
    }
  }, [stateUser]);
  //----------------------------------
  return (
    <>
      <Header />
      <Nav />
      <div className='connexion-container'>

        {submitted && 
          <p className='alerte'>
            Erreur de email et/ou mot de passe
          </p>}

        <form onSubmit={connectUser}>
          <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} required placeholder='Email' />
          <input type='mdp' value={mdp} onChange={(e) => setMdp(e.target.value)} required placeholder='Mot de passe' />
          <button type='submit'>Je me connecte</button>
        </form>
        <br />
        <br />
        <hr />
        <br />
        <br />
        <button onClick={() => nav('/inscr')}>NOUVEAU ? Je m'inscris</button>
      </div>
      <Footer />
    </>

  )
}

export default Connexion