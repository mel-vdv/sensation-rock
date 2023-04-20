import React, { useEffect, useRef, useState } from 'react'
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
        <div className='pub'>

            PUBLICITE va s'afficher pendant {stateEvent.item.nbSecPub} sec

            <p>timer : {stateTimer.timer} secondes....</p>
        </div>
    )
}

export default Pub