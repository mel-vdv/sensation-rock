import {legacy_createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { concoursReducer } from './reducers/concours'
import { usersReducer } from './reducers/users';
import { visibleReducer } from './reducers/visible';
import { userReducer } from './reducers/user';
import { eventReducer } from './reducers/event';
import { listeQReducer } from './reducers/listeQ';
import { listeQpersoReducer } from './reducers/listeQperso';
import { listeQspeReducer } from './reducers/listeQspe';
import { scoreReducer } from './reducers/score';
import { timerReducer } from './reducers/timer';
import { podiumReducer } from './reducers/podium';
///--------------------------------------
const rootReducer = combineReducers({
    concoursRed : concoursReducer,
    eventRed : eventReducer,
    listeQRed : listeQReducer,
    listeQpersoRed : listeQpersoReducer,
    listeQspeRed: listeQspeReducer,
    usersRed : usersReducer,
    userRed : userReducer,
    visibleRed : visibleReducer,
    scoreRed : scoreReducer,
    timerRed: timerReducer,
    podiumRed : podiumReducer
})
///--------------------------------------
export const store =  legacy_createStore(rootReducer, applyMiddleware(thunk));