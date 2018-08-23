import {
    NEW_RESUME,
    UPDATE_RESUME
} from '../actions/actionsType';

import Resume from '../data';
import {notify} from 'react-notify-toast';

const initialState = {
    ...Resume,
}

function updateResume(state, action) {
    const newState = {
      ...state,
      ...action.resume
    };
    notify.show( "Updated Resume saved to localStorage!", 'success', 4000)
    return newState;
  }


export default (state=initialState, action = {}) => {
    switch(action.type) {
        case NEW_RESUME: {
            return {
                ...initialState
            }
        }
        case UPDATE_RESUME: {
            return updateResume(state, action);
        }
        
        default: {
            return state;
        } 
    }
}
