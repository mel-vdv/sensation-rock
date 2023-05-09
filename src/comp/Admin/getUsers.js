import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUsers, visibleGetUsers } from '../../lib/redux/actions';

const GetUsers = () => {
    const dispatch = useDispatch();
    const stateUsers = useSelector(state => ({ ...state.usersRed }));
    //------------------------------------
    useEffect(()=>{
        dispatch(fetchAllUsers());
    },[])
    //------------------------------------
    //------------------------------------
  return (
    <div className='getUsers'>
           <h2>LES UTILISATEURS INSCRITS</h2>

      
      {(!stateUsers.isLoading && !!stateUsers.items) &&
        <>
          <table>
            <thead>
              <tr>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Pseudo</th>
                <th>Email</th>
                <th>Tel</th>
                <th>Code postal</th>
                <th>Sexe</th>
                <th>Age</th>
                <th>Réponse</th>
              </tr>
            </thead>
            <tbody>
              {stateUsers.items.map((x, i) => (
                <tr key={i}>
                  <td>{x.nom}</td>
                  <td>{x.prénom}</td>
                  <td>{x.pseudo}</td>
                  <td>{x.email}</td>
                  <td>{x.tel}</td>
                  <td>{x.cp}</td>
                  <td>{x.sexe}</td>
                  <td>{x.age}</td>
                  <td>{x.réponse1}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      }

    </div>
  )
}

export default GetUsers