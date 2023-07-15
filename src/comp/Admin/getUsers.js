import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUsers,  supprUser,  supprUserEtat } from '../../lib/redux/actions';
import './admin.css';

const GetUsers = () => {
    const dispatch = useDispatch();
    const stateUsers = useSelector(state => ({ ...state.usersRed }));
    //------------------------------------
    useEffect(()=>{
        dispatch(fetchAllUsers());
    },[])
    //------------------------------------
    const supprimerUser= idu =>{
      dispatch(supprUser(idu));
      dispatch(supprUserEtat(idu));
    }

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
                <th>Supprimer</th>
              </tr>
            </thead>
            <tbody>
              {stateUsers.items.map((x, i) => (
                <tr key={i}>
                  <td>{x.nom.toUpperCase()}</td>
                  <td>{x.prénom}</td>
                  <td><span>{x.pseudo}</span></td>
                  <td>{x.email}</td>
                  <td>{x.tel}</td>
                  <td>{x.cp}</td>
                  <td>{x.sexe}</td>
                  <td>{x.age}</td>
                  <td>{(x.réponse1).join(', ')}</td>
                  <td>
                    <button onClick={()=>supprimerUser(x['_id'])}> supprimer l'utilisateur {x.pseudo} </button>
                  </td>
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