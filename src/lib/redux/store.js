import {legacy_createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { concoursReducer } from './reducers/concours'
import { questionsReducer } from './reducers/questions';
import { usersReducer } from './reducers/users';
import { visibleReducer } from './reducers/visible';
import { userReducer } from './reducers/user';
import { eventReducer } from './reducers/event';
import { listeQReducer } from './reducers/listeQ';
import { listeQpersoReducer } from './reducers/listeQperso';
import { listeQspeReducer } from './reducers/listeQspe';
import { scoreReducer } from './reducers/score';
///--------------------------------------
const rootReducer = combineReducers({
    concoursRed : concoursReducer,
    eventRed : eventReducer,
    questionsRed : questionsReducer,
    listeQRed : listeQReducer,
    listeQpersoRed : listeQpersoReducer,
    listeQspeRed: listeQspeReducer,
    usersRed : usersReducer,
    userRed : userReducer,
    visibleRed : visibleReducer,
    scoreRed : scoreReducer
})
///--------------------------------------
export const store =  legacy_createStore(rootReducer, applyMiddleware(thunk));