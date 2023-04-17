import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchQuestions } from '../../lib/redux/actions';
import Question from './Question';

const Quizz = () => {

  const dispatch = useDispatch();
  const stateQuest = useSelector(state => ({ ...state.questionsRed }));
  const { isLoading, items } = stateQuest;
  const [num, setNum]= useState(0);
  //---------------------------------------------
  useEffect(() => {
    dispatch(fetchQuestions());
  }, []);
  //---------------------------------------------
const suivant = ()=> {
 setNum(num+1);
}
  //---------------------------------------------
  return (
    <div>
      <h1>Liste de questions : </h1>
      
      {isLoading && <div>EN COURS DE CHARGEMENT...</div>}
      {(!isLoading && !!items) &&
        <div>
          {
            items.map((e, i) => (
              <>
              {i===num && (
                <Question key={i}
                indice={i}
                question={e.question}
                reponse={e.reponse}
                propositions={e.propositions}
                suivant={suivant}
              />
              )}
              </>
            ))
          }
        </div>
      }

    </div>
  )
}

export default Quizz