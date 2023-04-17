import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  visibleGetEv, visibleGetQ, visibleGetUsers} from '../../lib/redux/actions';
import GetUsers from './getUsers';
import GetQ from './getQ';
import GetEv from './getEv';



const Admin = () => {

  const dispatch = useDispatch();
  const stateVis = useSelector(state => ({ ...state.visibleRed }));



  return (
    <div>
      <h1>admin</h1>
      <button onClick={() => dispatch(visibleGetUsers(true))}>GESTION DES UTILISATEURS</button>
      <button onClick={() => dispatch(visibleGetQ(true))}>GESTION DES QUESTIONS</button>
      <button onClick={() => dispatch(visibleGetEv(true))}>GESTION DES QUESTIONS</button>

     {stateVis.getUsers && <GetUsers/>}
     {stateVis.getQ && <GetQ/>}
     {stateVis.getEv && <GetEv/>}

    </div>

  )
}

export default Admin;
