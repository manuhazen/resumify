import {
    TOGGLE_TOOLS,
    CHANGE_FONT,
    TOGGLE_SHOW_ITEM,
    CHANGE_RESUME_ORDER,
    OPEN_RESUME_EDITOR,
    UPDATE_EDITOR_STATUS
} from '../actions/actionsType';

const initialState = {
    showTools : true,
    font: 'Source Code Pro, monospace',
    showAddress: true,
    showEmail: true,
    showPhone: true,
    showGithub: true,
    // resumeOrder: resumeOrder,
    showSkillset: true,
    showProjects: true,
    showEducation: true,
    showExperience: true,
    showResumeEditor: true,
    showLinkedIn: true,
    showWebsite: true,
}

const savedState = JSON.parse(localStorage.getItem('state.panel'));

export default (state = savedState || initialState, action = {}) => {
    switch (action.type) {
        default: {
            return state;
        }
    }
}