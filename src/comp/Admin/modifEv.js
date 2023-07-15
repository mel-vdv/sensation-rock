import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { majConcours, modifConcours, visibleModifEv } from '../../lib/redux/actions';
import './admin.css';

const ModifEv = ({ concours }) => {

  //---------------------------------
  const [evMod, setEvMod] = useState(concours);
  //---------------------------------
  const dispatch = useDispatch();

  const close = () => { dispatch(visibleModifEv(false)) }
  //---------------------------------
  const modifierConcours = () => {
    dispatch(modifConcours(evMod));
    dispatch(majConcours(evMod));
    alert(`évènement ${evMod.intitulé} modifié avec succès.`);
    close();
  }
  //---------------------------------
  useEffect(()=>{
    setEvMod({...evMod, nbQtot: +evMod.nbQgen+evMod.nbQperso+evMod.nbQspe})
    }
    ,[evMod.nbQgen, evMod.nbQperso, evMod.nbQspe])
  //---------------------------------
  return (
    <div className='modifEv'>
      <header><h3>MODIFIER UN EVENEMENT CONCOURS</h3></header>

      <form onSubmit={() => modifierConcours()}>

        <div className='rubrique'>L'évènement</div>
        <div>
          <label htmlFor='intitule'>Intitulé </label>
          <input id='intitule' type='text' value={evMod.intitulé} onChange={(e) => setEvMod({ ...evMod, intitulé: e.target.value })} />
        </div>
        <div>
          <label htmlFor="thème">Thème</label>
          <div id='thème' onChange={(e) => setEvMod({ ...evMod, thème: e.target.value })}>
            <input type='radio' value="musique" name='thème' checked={evMod.thème==="musique"}/> MUSIQUE <br/>
            <input type='radio' value="cinéma" name='thème' checked={evMod.thème==="cinéma"} /> CINEMA<br/>
            <input type='radio' value="théâtre" name='thème' checked={evMod.thème==="théâtre"} /> THEATRE<br/>
            <input type='radio' value="gastronomie" name='thème' checked={evMod.thème==="gastronomie"} /> GASTRONOMIE<br/>
            <input type='radio' value="jeux" name='thème' checked={evMod.thème==="jeux"}/> JEUX<br/>
            <input type='radio' value="sport" name='thème'checked={evMod.thème==="sport"} /> SPORT<br/>
            <input type='radio' value="com" name='thème' checked={evMod.thème==="com"} /> COMMERCES LOCAUX<br/>
            <input type='radio' value="divers" name='thème' checked={evMod.thème==="divers"} /> DIVERS
          </div></div>
        <div>
          <label htmlFor='descr'>Description</label>
          <textarea id='descr' value={evMod.description} onChange={(e) => setEvMod({ ...evMod, description: e.target.value })}></textarea>
        </div>
        <div> <label htmlFor='prix'>Prix</label>
          <input id='prix' type='number' value={+evMod.prix} onChange={(e) => setEvMod({ ...evMod, prix: +e.target.value })} />
        </div>
        <div>
          <label htmlFor='lieu'>Lieu</label>
          <input id='lieu' type='text' value={evMod.lieu} onChange={(e) => setEvMod({ ...evMod, lieu: e.target.value })} />
        </div>
        <div>
          <label htmlFor='date'>Date</label>
          <input id='date' type='date' value={evMod.quand} onChange={(e) => setEvMod({ ...evMod, quand: e.target.value })} />
        </div>
        <div className='rubrique'>Le concours</div>
        <div>
          <label htmlFor='gain'>Accroche du gain</label>
          <input id='gain' type='text' value={evMod.gain} onChange={(e) => setEvMod({ ...evMod, gain: e.target.value })} />
        </div>
        <div>
          <label htmlFor='nbG'>Nombre de gagnants</label>
          <input id='nbG' type='number' value={+evMod.ngGagnants} onChange={(e) => setEvMod({ ...evMod, nbGagnants: +e.target.value })} />
        </div>
        <div>
          <label for="emailAnn">Email de l'annonceur</label>
          <input id='emailAnn' type='email' value={evMod.emailAnn} onChange={(e) => setEvMod({ ...evMod, emailAnn: e.target.value })} required />

        </div>
        <div>
          <label for="debut">Date du début du concours </label>
          <input id="debut" type='date' value={evMod.début} onChange={(e) => setEvMod({ ...evMod, début: e.target.value })} required /></div>
        <div>
          <label for="fin">Date de fin du concours</label>
          <input id="fin" type='date' value={evMod.fin} onChange={(e) => setEvMod({ ...evMod, fin: e.target.value })} required /></div>
        <div className='rubrique'>Les questions</div>
        <div>
          <label htmlFor='nbQspe'>Nombre de questions spécifiques à l'évènement</label>
          <input id='nbQspe' type='number' value={+evMod.nbQspe} onChange={(e) => setEvMod({ ...evMod, nbQspe: +e.target.value })} />
        </div>
        <div>
          <label htmlFor='nbQperso'>Nombre de questions personnelles</label>
          <input id='nbQperso' type='number' value={+evMod.nbQperso} onChange={(e) => setEvMod({ ...evMod, nbQperso: +e.target.value })} />
        </div>
        <div>
          <label htmlFor='nbQgen'>Nombre de questions générales</label>
          <input id='nbQgen' type='number' value={+evMod.nbQgen} onChange={(e) => setEvMod({ ...evMod, nbQgen: +e.target.value })} />
        </div>
        <div>
          <label htmlFor='nbQtot'>Nombre de questions totales</label>
          <input id='nbQtot' type='number' value={+evMod.nbQtot} readOnly />
        </div>
        <div>
          <label htmlFor='nbSecRep1'> Nombre de secondes pour répondre aux questions de valeur 1 </label>
          <input id='nbSecRep1' type='number' value={+evMod.nbSecRep1} onChange={(e) => setEvMod({ ...evMod, nbSecRep1: +e.target.value })} />
        </div>

        <div>
          <label htmlFor='nbSecRep2'> Nombre de secondes pour répondre aux questions de valeur 2 </label>
          <input id='nbSecRep2' type='number' value={+evMod.nbSecRep2} onChange={(e) => setEvMod({ ...evMod, nbSecRep2: +e.target.value })} />
        </div>
        <div>
          <label htmlFor='nbSecRep3'> Nombre de secondes pour répondre aux questions de valeur 3 </label>
          <input id='nbSecRep3' type='number' value={+evMod.nbSecRep3} onChange={(e) => setEvMod({ ...evMod, nbSecRep3: +e.target.value })} />
        </div>
        <div>
          <label htmlFor='nbSecRep4'> Nombre de secondes pour répondre aux questions de valeur 4 </label>
          <input id='nbSecRep4' type='number' value={+evMod.nbSecRep4} onChange={(e) => setEvMod({ ...evMod, nbSecRep4: +e.target.value })} />
        </div>
        <div>
          <label htmlFor='nbSecRep5'> Nombre de secondes pour répondre aux questions de valeur 5 </label>
          <input id='nbSecRep5' type='number' value={+evMod.nbSecRep5} onChange={(e) => setEvMod({ ...evMod, nbSecRep5: +e.target.value })} />
        </div>
        <div className='rubrique'>Les publicités</div>
        <div>
          <label htmlFor='nbSecPub'> Nombre de secondes d'affichage de la publicité </label>
          <input id='nbSecPub' type='number' value={+evMod.nbSecPub} onChange={(e) => setEvMod({ ...evMod, nbSecPub: +e.target.value })} />
        </div>
        <div>
          <label htmlFor='nbQPub' >Nombre de questions entre 2 publicités</label>
          <input id='nbQPub' type='number' value={+evMod.nbQPub} onChange={(e) => setEvMod({ ...evMod, nbQPub: +e.target.value })} />
        </div>
        <div>
          <label htmlFor='taille'>Taille de l'affichage :  </label>
          <div id='taille' onChange={(e) => setEvMod({ ...evMod, taille: +e.target.value })}>
            <input type='radio' name='taille' value={1} checked={evMod.taille===1} />Affichage basique <br/>
            <input type='radio' name='taille' value={2} checked={evMod.taille===2} />Affichage grand<br/>
            <input type='radio' name='taille' value={3} checked={evMod.taille===3} />Mise en avant premium
          </div>
        </div>

        <button  type='submit'>Valider les modifications de ce concours</button>
      </form>
      <button className='retour' onClick={() => close()}>Annuler les modifications et Retour à la liste d'évènements</button>

    </div>
  )
}

export default ModifEv