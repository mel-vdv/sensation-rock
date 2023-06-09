import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { fetchUserId } from '../../lib/redux/actions';
import Header from '../melwin/header';
import Nav from '../melwin/nav';
import Footer from '../melwin/footer';
import './index.css';

const Connexion = () => {

  const [email, setEmail] = useState('melvdv@yahoo.fr');
  const dispatch = useDispatch();
  const nav = useNavigate();
  //----------------------------------
  const connectUser = () => {

    dispatch(fetchUserId(email));
    localStorage.setItem('userEmail', email);
    nav('/');
  }
  //----------------------------------

  //----------------------------------
  return (
    <>
      <Header />
      <Nav />
      <div className='connexion-container'>

        <form onSubmit={connectUser}>
          <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} required placeholder='Email'/>
          <button type='submit'>Je me connecte</button>
        </form>
        <br/>
        <br/>
        <hr/>
        <br/>
        <br/>
        <button onClick={() => nav('/inscr')}>NOUVEAU ? Je m'inscris</button>
      </div>
      <Footer/>
    </>

  )
}

export default Connexion