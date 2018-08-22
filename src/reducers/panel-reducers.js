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

import {WAITING} from '../components/tools/EditorStatus';

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
    showEditor: false,
    showLinkedIn: true,
    showWebsite: true,
    editorStatus: WAITING
}

const savedState = JSON.parse(localStorage.getItem('state.panel'));

export default (state = savedState || initialState, action) => {
    switch (action.type) {
        case OPEN_RESUME_EDITOR: {
            return {
                ...state,
                showEditor: !state.showEditor
            }
        }

        case CHANGE_FONT: {
            return {
                ...state,
                font: action.font
            }
        }

        case UPDATE_EDITOR_STATUS: {
            return {
                ...state,
                editorStatus: action.status
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