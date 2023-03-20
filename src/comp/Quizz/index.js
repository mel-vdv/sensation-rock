import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchQuestions } from '../../lib/redux/actions';

const Quizz = () => {

  const dispatch = useDispatch();
  const state = useSelector(state => ({ ...state.questionsRed }));
  const { isLoading, items } = state;
  //---------------------------------------------
  useEffect(() => {
    dispatch(fetchQuestions());
  }, [])

  //---------------------------------------------
  return (
    <div>
      <h1>liste des questions : </h1>
      {isLoading && <div>EN COURS DE CHARGEMENT...</div>}
      {(!isLoading && !!items) && <div>
        <ul>
          {items.map((e, i) => (
            <li key={i}>{e.question}</li>
          ))}
        </ul>
      </div>}


    </div>
  )
}

export default Quizz