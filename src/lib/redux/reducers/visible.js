import { VIS_ADDEV, VIS_ADDQ, VIS_GETEV, VIS_GETQ, VIS_GETUSERS, VIS_IMAGE_PUB, VIS_MODIFEV, VIS_MODIFQ, VIS_PODIUM, VIS_PUB } from "../actions/types"

const initialState = {
    addQ: false,
    modifQ: false,
    addEv: false,
    modifEv: false,
    getUsers:false,
    getQ:false,
    getEv:false,
    pub: false,
    podium: false,
    imagePub:false
}
//---------------------
export const visibleReducer = (state = initialState, action) => {
    switch (action.type) {
        case VIS_ADDQ: return {
            ...state, addQ: action.payload.ouinon
        }
        case VIS_MODIFQ : return{
            ...state , modifQ : action.payload.ouinon
        }
        case VIS_ADDEV: return {
            ...state, addEv: action.payload.ouinon
        }
        case VIS_MODIFEV : return{
            ...state , modifEv : action.payload.ouinon
        }
        case VIS_GETEV : return{
            ...state , getEv: action.payload.ouinon
        }
        case VIS_GETQ : return{
            ...state , getQ : action.payload.ouinon
        }
        case VIS_GETUSERS : return{
            ...state , getUsers : action.payload.ouinon
        }
        case VIS_PUB: return {
            ...state, pub: action.payload.ouinon
        }
        case VIS_PODIUM: return {
            ...state, podium : action.payload.ouinon
        }
        case VIS_IMAGE_PUB: return {
            ...state, imagePub : action.payload.ouinon
        }
        
        default: return state;
    }
}