import { CHOISIR_THEME } from "../actions/types";

const initialState = {
    theme: 'test'
}

export const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHOISIR_THEME: return {
            ...state, theme: action.payload.them
        };
        default: return state;
    }

}