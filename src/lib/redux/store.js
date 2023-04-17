import {legacy_createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { concoursReducer } from './reducers/concours'
import { questionsReducer } from './reducers/questions';
import { reglagesReducer } from './reducers/reglages';
import { usersReducer } from './reducers/users';
import { visibleReducer } from './reducers/visible';
import { userReducer } from './reducers/user';
///--------------------------------------
const rootReducer = combineReducers({
    concoursRed : concoursReducer,
    questionsRed : questionsReducer,
    reglagesRed : reglagesReducer,
    usersRed : usersReducer,
    userRed : userReducer,
    visibleRed : visibleReducer
})
///--------------------------------------
export const store =  legacy_createStore(rootReducer, applyMiddleware(thunk));