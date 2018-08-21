import {
    TOGGLE_TOOLS,
    CHANGE_FONT,
    TOGGLE_SHOW_ITEM,
    CHANGE_RESUME_ORDER,
    OPEN_RESUME_EDITOR,
    UPDATE_EDITOR_STATUS
} from '../actions/actionsType';
import fullResume from '../utils/resumeOrder';

import getItemToToggle from '../utils/getItemToggler';

const initialState = {
    showTools : true,
    font: 'Source Code Pro, monospace',
    showAddress: true,
    showEmail: true,
    showPhone: true,
    showGithub: true,
    fullResume: fullResume,
    showSkillset: true,
    showProjects: true,
    showEducation: true,
    showExperience: true,
    showResumeEditor: false,
    showLinkedIn: true,
    showWebsite: true,
}

const savedState = JSON.parse(localStorage.getItem('state.panel'));

export default (state = savedState || initialState, action) => {
    switch (action.type) {
        case OPEN_RESUME_EDITOR: {
            return {
                ...state,
                showResumeEditor: !state.showResumeEditor
            }
        }

        case CHANGE_FONT: {
            return {
                ...state,
                font: action.font
            }
        }

        case TOGGLE_SHOW_ITEM: {
            const newState = {
                ...state,
                ...getItemToToggle(state, action)
            };
            
            return newState;
        }

        default: {
            return state;
        }
    }
}