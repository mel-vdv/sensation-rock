import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { visibleAddEv, visibleAddQ, visibleAddQspe, visibleExcelQspe, visibleGetEv, visibleGetQ, visibleGetQspe, visibleGetUsers, visibleModifEv, visibleModifQ, visibleModifQspe } from '../../lib/redux/actions';
import GetUsers from './getUsers';
import GetQ from './getQ';
import GetEv from './getEv';
import './admin.css';



const Admin = () => {

  const dispatch = useDispatch();
  const stateVis = useSelector(state => ({ ...state.visibleRed }));

  const selectionner = (rubr) => {
    switch (rubr) {
      case 'users':
         dispatch(visibleGetUsers(true)); dispatch(visibleGetQ(false)); dispatch(visibleGetEv(false));
         break;
      case 'q': 
      dispatch(visibleGetUsers(false)); dispatch(visibleGetQ(true)); dispatch(visibleGetEv(false)); 
      dispatch(visibleGetQ(true));dispatch(visibleAddQ(false)); dispatch(visibleModifQ(false));
      break;
      case 'ev': dispatch(visibleGetUsers(false)); dispatch(visibleGetQ(false)); dispatch(visibleGetEv(true));
      dispatch(visibleGetEv(true));dispatch(visibleAddEv(false)); dispatch(visibleModifEv(false));
      dispatch(visibleGetQspe(false)); dispatch(visibleAddQspe(false)); dispatch(visibleModifQspe(false)); dispatch(visibleExcelQspe(false));
       break;
      default: console.log('oups');
    }
  }

  return (
    <div className='admin-home'>
      <header>
        <h1>INTERFACE D'ADMINISTRATION</h1>
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
