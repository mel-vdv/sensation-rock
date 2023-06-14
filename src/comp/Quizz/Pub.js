import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { modifTimer, stopTimer } from '../../lib/redux/actions';
import { visiblePub } from '../../lib/redux/actions';

const Pub = () => {

    const dispatch = useDispatch();
    const stateTimer = useSelector(state => ({ ...state.timerRed }));
    const stateEvent = useSelector(state => ({ ...state.eventRed }));
    //--------------------------------
    const intervalRef = useRef();
    //------------------------
    const lancerTimer = () => {console.log('on  lancer pub');
        intervalRef.current = setInterval(() => {console.log('bip pub');
            dispatch(modifTimer());
        }, 1000);
    }
    useEffect(() => {
        dispatch(stopTimer());
        lancerTimer();

        return () => {
            dispatch(stopTimer());
            console.log('clean');
            clearInterval(intervalRef.current);
        }

    }, []);
    //---------------------------
    useEffect(() => {
        if (stateTimer.timer > stateEvent.item.nbSecPub) {
            dispatch(visiblePub(false));
        }
    }, [stateTimer.timer]);
    //-----------------------------------------------
    return (
        <>
        
        <img
             onError = {e => e.target.style.display = 'none'}
             id='pub' 
            autoPlay 
            src={`https://firebasestorage.googleapis.com/v0/b/igra-835e2.appspot.com/o/publicites%2F${stateEvent.item['_id']}?alt=media`} 
            alt='publicite'/>
            
            <video
             onError = {e => e.target.style.display = 'none'}
             id='pub' 
            autoPlay 
            src={`https://firebasestorage.googleapis.com/v0/b/igra-835e2.appspot.com/o/publicites%2F${stateEvent.item['_id']}?alt=media`} 
            alt='publicite'/>

            <div className='time'>{stateEvent.item.nbSecPub - stateTimer.timer}</div>
        </>
    )
}

export default Pub