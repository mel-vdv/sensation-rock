import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { majStateListeQSpe, supprQuestionSpe, visibleAddQspe, visibleGetQspe, visibleModifQspe } from '../../lib/redux/actions';
import AddQspe from './AddQspe';
import ModifQspe from './ModifQspe';

const GetQspe = ({ idEv, nomEv }) => {
    const dispatch = useDispatch();
    const stateQuestSpe = useSelector(state => ({ ...state.listeQspeRed }));
    const stateVis = useSelector(state => ({ ...state.visibleRed }));
    const [questModif, setQuestModif] = useState(null);
    //----------------------------------------------------------

    //----------------------------------------------------------
    const visAddQuSpe = () => {
        dispatch(visibleAddQspe(true));
    }
    const visModifQu = (q) => {
        setQuestModif(q);
        dispatch(visibleModifQspe(true));
    }
    const supprQuest = (idQ, quest) => {
        dispatch(supprQuestionSpe(idQ, idEv)).then(() => dispatch(majStateListeQSpe(idQ)));
        alert(`question ${quest} supprimée avec succès.`);
    }
    //----------------------------------------------------------
    return (
        <div className='getQspe'>
            <h2>LES QUESTIONS SPECIFIQUES de l'évènement {nomEv}</h2>
            <button onClick={() => dispatch(visibleGetQspe(false))}>Retour à la liste des évènements</button>
            <button onClick={() => visAddQuSpe()} >Ajouter une nouvelle question spécifique</button>

            {stateQuestSpe.isLoading && <div>is loading...</div>}

            {!stateQuestSpe.isLoading && !stateQuestSpe.items &&
                !stateVis.addQspe && !stateVis.modifQspe &&
                <div>aucune question</div>
            }

            {!stateQuestSpe.isLoading && !!stateQuestSpe.items && !stateVis.addQspe && !stateVis.modifQspe &&

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
                        {stateQuestSpe.items.map((x, i) => (
                            <tr key={i}>
                                <td>{x.Question}</td>
                                <td>
                                    1 :{x['Proposition A']} <br />
                                    2 :{x['Proposition B']} <br />
                                    3 :{x['Proposition C']} <br />
                                </td>
                                <td>{x['Réponse']}</td>
                                <td>{x.Catégorie}</td>
                                <td>{x.Valeur}</td>
                                <td>
                                    <button onClick={() => supprQuest(x['_id'], x.Question)}>Supprimer la question {x.Question}</button>
                                    <button onClick={() => visModifQu(x)}>Modifier la question {x.Question} </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            }
            {stateVis.addQspe && <AddQspe nomEv={nomEv} idEv={idEv}/>}
            {stateVis.modifQspe && <ModifQspe question = {questModif} idEv={idEv} nomEv={nomEv}/>}

        </div>
    )
}

export default GetQspe