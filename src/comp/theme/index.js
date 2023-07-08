import React from 'react'
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEventId } from '../../lib/redux/actions';
import { useNavigate } from 'react-router-dom';

const Theme = () => {
    const stateConcours = useSelector(state => ({ ...state.concoursRed }));
    const stateTheme = useSelector(state => ({ ...state.themeRed }));
    
    //---------------------------
    const dispatch = useDispatch();
    const nav = useNavigate();
    const jouer = idEv => {
        dispatch(fetchEventId(idEv));
        nav('/event');
    }
    //----------------------
  const tri = stateTheme.theme==="tous"?  stateConcours.items :stateConcours.items.filter(e=>e.thème === stateTheme.theme);
    //----------------------
    return (
        <>

            <div className='theme'>
                {!!stateTheme.theme &&
                    <div className='titre'>{stateTheme.theme}</div>
                }

                {!stateConcours.isLoading && stateConcours.items.length > 0 &&
                    <div className='liste'>
                        {tri.map((e, i) => (
                            <div key={i} className={e.taille > 1 ? 'event grand' : 'event petit'}>
                                <div className="descr">
                                    <div>{e.intitulé}</div>
                                <button onClick={() => jouer(e['_id'])}>Voir détail</button>
                                </div>

                                <div className='illus'>
                                {e.taille > 1 ?
                                        (<img src={`https://firebasestorage.googleapis.com/v0/b/igra-835e2.appspot.com/o/affiches%2Fmoyen%2F${e['_id']}?alt=media`} alt="illus de l'évènement" />)
                                        : (<img src={`https://firebasestorage.googleapis.com/v0/b/igra-835e2.appspot.com/o/affiches%2Fpetit%2F${e['_id']}?alt=media`} alt="illus de l'évènement" />)
                                    }
                                </div>
                            </div>
                        ))}
                    </div>
                }
                <button className='retour' onClick={() => nav('/')}>Retour melwin</button>
            </div>
        </>
    )
}

export default Theme