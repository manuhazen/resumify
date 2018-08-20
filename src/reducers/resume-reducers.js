import {
    NEW_RESUME,
    UPDATE_RESUME
} from '../actions/actionsType';

import Resume from '../data';
import {notify} from 'react-notify-toast';

const initialState = {
    ...Resume,
}


export default (state=initialState, action = {}) => {
    switch(action.type) {
        case NEW_RESUME: {
            return {
                ...initialState
            }
        }

        case UPDATE_RESUME: {
            const newState = { ...action.resume }
            notify.show('Updated resume saved to localStorage...', 'success', 4000)
            return {
                ...state,
                newState
            }
        }
        
        default: {
            return state;
        } 
    }
}
