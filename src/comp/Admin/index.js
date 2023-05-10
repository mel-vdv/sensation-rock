import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { visibleGetEv, visibleGetQ, visibleGetUsers } from '../../lib/redux/actions';
import GetUsers from './getUsers';
import GetQ from './getQ';
import GetEv from './getEv';

import './../../css/Admin/index.css';



const Admin = () => {

  const dispatch = useDispatch();
  const stateVis = useSelector(state => ({ ...state.visibleRed }));

  const selectionner = (rubr) => {
    switch (rubr) {
      case 'users': dispatch(visibleGetUsers(true)); dispatch(visibleGetQ(false)); dispatch(visibleGetEv(false)); break;
      case 'q': dispatch(visibleGetUsers(false)); dispatch(visibleGetQ(true)); dispatch(visibleGetEv(false)); break;
      case 'ev': dispatch(visibleGetUsers(false)); dispatch(visibleGetQ(false)); dispatch(visibleGetEv(true)); break;
      default: console.log('oups');
    }
  }

  return (
    <div className='home'>
      <header>
        <h1>admin</h1>
      </header>
      <nav>
        <button tabIndex={1} onClick={() => selectionner('users')}>GESTION DES UTILISATEURS</button>
        <button tabIndex={2} onClick={() => selectionner('q')}>GESTION DES QUESTIONS</button>
        <button tabIndex={3} onClick={() => selectionner('ev')}>GESTION DES CONCOURS</button>
      </nav>
      <main>
        {stateVis.getUsers && <GetUsers />}
        {stateVis.getQ && <GetQ />}
        {stateVis.getEv && <GetEv />}
      </main>



    </div>

  )
}

export default Admin;
