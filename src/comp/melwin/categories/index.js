import React from 'react'
import './index.css';
import musique from'./images/musique.png';
import theatre from'./images/theatre.png';
import cinema from'./images/cinema.png';
import gastro from'./images/gastro.png';
import sport from'./images/sport.png';
import com from'./images/com.png';

const Categories = () => {
  return (
    <div className='container-categ' id='categ'>
      <div className='liste'>
        <div>Musique</div>
        <div>Théâtre</div>
        <div>Cinéma</div>
        <div>Restaurants</div>
        <div>Sport</div>
        <div>Commerces locaux</div>
      </div>
      <div className='cases'>
        
      <div style={{backgroundImage:`url(${musique})`}}>
          <div>Musique</div>
          <button>Participer</button>
        </div>
        <div style={{backgroundImage:`url(${theatre})`}}>
          <div>Théâtre</div>
          <button>Participer</button>
        </div>
        <div style={{backgroundImage:`url(${cinema})`}}>
          <div>Cinéma</div>
          <button>Participer</button>
        </div>
        <div style={{backgroundImage:`url(${gastro})`}}>
          <div>Gastronomie</div>
          <button>Participer</button>
        </div>
        <div style={{backgroundImage:`url(${sport})`}}>
          <div>Sport</div>
          <button>Participer</button>
        </div>
        <div style={{backgroundImage:`url(${com})`}}>
          <div>Commerces locaux</div>
          <button>Participer</button>
        </div>
      </div>
    </div>
  )
}

export default Categories