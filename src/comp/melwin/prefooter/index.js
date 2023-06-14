import React, { useState } from 'react';
import './index.css';
import localisation from './images/localisation.png';
import msg from './images/msg.png';
import tel from './images/tel.png';
import { useDispatch } from 'react-redux';
import { modifListingNL } from '../../../lib/redux/actions';

const Prefooter = () => {

    const [adresse, setAdresse]= useState('');

    //--------------------------------------------
    const dispatch = useDispatch();
    const enregAdress = ()=>{
        alert('Vous vous êtes abonné avec succès');
        dispatch(modifListingNL(adresse));  
        setAdresse('');
    }
    //--------------------------------------------
  return (
    <div className='prefooter'>
        <div className='g'>
            <div className='melw'>MELWIN</div>
            <div>
                Melwin est un site proposant de nombreux quizz musicaux afin de gagner des lots offerts par nos partenaires.
            </div>
        </div>
        <div className='d'>
            <div className='h'>
                <div className='x'>S'inscrire à la newsletter</div>
                <div className='submit'>
                    <input type='text' value={adresse} onChange={(e)=>setAdresse(e.target.value)}/>
                    <button onClick={enregAdress}>Submit</button>
                </div>
            </div>
            <div className='b'>
                <div className='x'>Nous contacter</div>
                <div className='infos'>
                    <div>
                        <img src={localisation} alt='logo localisation'/> 43 avenue de dineur 75015 PARIS
                    </div>
                    <div>
                        <img src={msg} alt='logo email'/> igra-sensationrock@gmail.com
                    </div>
                    <div>
                        <img src={tel} alt='logo tel'/>0033.6.52.62.51.52
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Prefooter