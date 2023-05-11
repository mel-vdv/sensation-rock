import React from 'react';
import './index.css';
import localisation from './images/localisation.png';
import msg from './images/msg.png';
import tel from './images/tel.png';

const Prefooter = () => {
  return (
    <div className='prefooter' id='bibi'>
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
                    <input type='text' value='nlfsxdlk'/>
                    <button>Submit</button>
                </div>
            </div>
            <div className='b'>
                <div className='x'>Nous contacter</div>
                <div className='infos'>
                    <div>
                        <img src={localisation} alt='logo localisation'/> 43 avenue de dineur <br/> 75015 PARIS
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