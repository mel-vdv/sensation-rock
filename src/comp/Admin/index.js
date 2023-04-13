import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addConcours, addQuestion, deleteQuestion, fetchAllUsers, fetchConcours, fetchQuestions } from '../../lib/redux/actions';

const Admin = () => {

  const dispatch = useDispatch();
  const stateUsers = useSelector(state => ({ ...state.usersRed }));
  const stateQuest = useSelector(state => ({ ...state.questionsRed }));
  const stateEvents = useSelector(state => ({ ...state.concoursRed }));

  //--------------------------------------------
  //------------------USERS--------------------------
  const voirListeUsers = () => {
    dispatch(fetchAllUsers()); // IMPORTANT LES PARENthESES !!
  }
  //--------------------------------------------
  //-------------------QUESTIONS-------------------------
  const voirListeQuestions = () => {
    dispatch(fetchQuestions());
  }
  const newQuest={
    Question : "bibi ?",'Proposition A': "On va manger", 'Proposition B' : "On va s’aimer",'Proposition C': "On va marcher",'Réponse':2,'Catégorie':"Variété",'Valeur':1
  }
  const ajouterQuestion = ()=>{
    dispatch(addQuestion(newQuest));
  }
  const supprQuest = (idQ)=>{
   dispatch(deleteQuestion(idQ));
  }
  //--------------------------------------------
  //-------------------EVENTS-------------------------
  const voirListeEvents = () => {
    dispatch(fetchConcours());
  }
  const newEvent = {
    intitulé: "eurockéennes", lieu: 'belfort', prix: 80, catégorie: ['rock', 'pop'], taille: 2,
    participants: [],
    nbSessMax: 0, nbMinParSess: 30, nbQtot: 150, nbQperso: 20, nbQgen: 60, nbQspe: 70
  }
  const ajouterEvent = () => {
    dispatch(addConcours(newEvent));
  }
  //--------------------------------------------

  return (
    <div>
      <h1>admin</h1>

      <h2>LES UTILISATEURS INSCRITS</h2>
      <button onClick={() => voirListeUsers()}>voir la liste des utilisateurs inscrits</button>
      {(!stateUsers.isLoading && !!stateUsers.items) &&
        <>
          <table>
            <thead>
              <tr>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Email</th>
                <th>Tel</th>
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
                  <td>{x.email}</td>
                  <td>{x.tel}</td>
                  <td>{x.sexe}</td>
                  <td>{x.age}</td>
                  <td>{x.réponse1}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      }

      <h2>LES QUESTIONS</h2>
      <button onClick={() => voirListeQuestions()}>voir la liste des questions</button>
      <button onClick={() => ajouterQuestion()}>Ajouter une nouvelle question</button>
      {!stateQuest.isLoading && !!stateQuest.items && <>
        <table>
          <thead>
            <tr>
              <th>Question</th>
              <th>Propositions</th>
              <th>Réponse</th>
              <th>Catégorie</th>
              <th>Valeur</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {stateQuest.items.map((x, i) => (
              <tr key={i}>
                <td>{x.Question}</td>
                <td>
                  1 :{x['Proposition A']} <br/>
                  2 :{x['Proposition B']} <br/>
                  3 :{x['Proposition C']} <br/>
                </td>
                <td>{x['Réponse']}</td>
                <td>{x.Catégorie}</td>
                <td>{x.Valeur}</td>
                <td>
                <button onClick={()=>supprQuest(x['_id'])}>Supprimer la question</button>
                <button>Modifier la question</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>}

      <h2>LES EVENEMENTS</h2>

      <button onClick={() => voirListeEvents()}>Voir la liste des concours</button>
      <button onClick={() => ajouterEvent()}>Ajouter un nouveau concours</button>
      {!stateEvents.isLoading && !!stateEvents.items && <>
        <table>
          <thead>
            <tr>
              <th>Intitulé</th>
              <th>Date</th>
              <th>Lieu</th>
              <th>Prix</th>
              <th>Catégorie</th>
              <th>Taille</th>
              <th>Début-Clôture</th>
            </tr>
          </thead>
          <tbody>
            {stateEvents.items.map((x, i) => (
              <tr key={i}>
                <td>{x.intitulé}</td>
                <td>{x.date}</td>
                <td>{x.lieu}</td>
                <td>{x.prix}</td>
                <td>{x.catégorie}</td>
                <td>{x.age}</td>
                <td>{x.réponse1}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>}


    </div>
  )
}

export default Admin;
